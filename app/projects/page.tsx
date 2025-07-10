'use client';

import { useEffect, useState } from 'react';
import { ProjectsHero } from './ProjectsHero';
import { ProjectsFilter } from './ProjectsFilter';
import { ProjectCard } from './ProjectCard';
import { Pagination } from '@/components/ui/pagination';
import { getProjects } from './_ops/_actions';
import Navbar from '@/components/navbar';
import { FancyFooter } from '@/components/footer';
import { StarsBackground } from '@/components/ui/stars-background';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ProjectsPage({
  categories = [],
  tags = []
}: {
  categories?: { id: string; name: string; slug: string }[];
  tags?: { id: string; name: string; slug: string }[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [projectsData, setProjectsData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const currentPage = Number(searchParams?.get('page')) || 1;
  const currentSearch = searchParams?.get('search') || '';
  const currentCategory = searchParams?.get('category') || '';
  const currentTag = searchParams?.get('tag') || '';
  const currentFeatured = searchParams?.get('featured') || '';
  const currentSort = searchParams?.get('sort') || 'newest';

  const perPage = 9;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const result = await getProjects({
          search: currentSearch,
          category: currentCategory,
          tag: currentTag,
          featured: currentFeatured === 'true',
          sort: currentSort,
          page: currentPage,
          perPage,
        });
        setProjectsData(result);
      } catch (error) {
        console.error('Failed to fetch projects', error);
      } finally {
        setLoading(false);
      }
    };

    if (isClient) {
      fetchProjects();
    }
  }, [currentSearch, currentCategory, currentTag, currentFeatured, currentSort, currentPage, isClient]);

  const handleFilterChange = (params: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams?.toString());
    
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    
    // Reset to page 1 when filters change
    if (!('page' in params)) {
      newParams.set('page', '1');
    }
    
    router.push(`/projects?${newParams.toString()}`);
  };

  const handlePageChange = (page: number) => {
    handleFilterChange({ page: page.toString() });
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <ProjectsHero />

        <section className="container py-12 md:py-16 lg:py-20">
          <ProjectsFilter
            categories={categories}
            tags={tags}
            onFilterChange={handleFilterChange}
            currentFilters={{
              search: currentSearch,
              category: currentCategory,
              tag: currentTag,
              featured: currentFeatured,
              sort: currentSort,
            }}
          />

          {loading ? (
            <div className="text-center py-16">Loading projects...</div>
          ) : projectsData?.projects?.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.projects.map((project: any, index: number) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>

              <div className="mt-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={projectsData.totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </section>
      </div>
      <StarsBackground />
      <ShootingStars />
      <FancyFooter />
    </>
  );
}