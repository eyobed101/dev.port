'use server';

import { Prisma } from '@prisma/client';
import prisma from '@/lib/prisma';
import { Project, ProjectsFilterParams, ProjectsResponse } from './_types';

export async function getProjects(
  params: ProjectsFilterParams = {}
): Promise<ProjectsResponse> {
  const {
    search,
    category,
    tag,
    featured,
    page = 1,
    perPage = 9,
    sort = 'newest',
  } = params;

  const skip = (page - 1) * perPage;
  const where: Prisma.PortfolioWhereInput = {};

  if (search) {
    where.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
    ];
  }

  if (category) {
    where.category = { slug: category };
  }

  if (tag) {
    where.tags = { some: { slug: tag } };
  }

  if (featured) {
    where.featured = true;
  }

  const orderBy: Prisma.PortfolioOrderByWithRelationInput = {};
  switch (sort) {
    case 'newest':
      orderBy.createdAt = 'desc';
      break;
    case 'oldest':
      orderBy.createdAt = 'asc';
      break;
    case 'name-asc':
      orderBy.title = 'asc';
      break;
    case 'name-desc':
      orderBy.title = 'desc';
      break;
  }

  const [projects, total] = await Promise.all([
    prisma.portfolio.findMany({
      where,
      skip,
      take: perPage,
      orderBy,
      include: {
        tags: { select: { id: true, name: true, slug: true } },
        category: { select: { id: true, name: true, slug: true } },
        skills: { select: { id: true, name: true, slug: true, level: true } },
      },
    }),
    prisma.portfolio.count({ where }),
  ]);

  const totalPages = Math.ceil(total / perPage);

  return {
    projects: projects as unknown as Project[],
    total,
    page,
    perPage,
    totalPages,
  };
}

