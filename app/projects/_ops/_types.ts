export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  content: string;
  featured: boolean;
  imageUrl: string | null;
  videoUrl: string | null;
  tags: { id: string; name: string; slug: string }[];
  category: { id: string; name: string; slug: string } | null;
  skills: { id: string; name: string; slug: string; level: number }[];
  client: string | null;
  projectUrl: string | null;
  sourceUrl: string | null;
  startDate: Date | null;
  endDate: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

export type ProjectsResponse = {
  projects: Project[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
};

export type ProjectsFilterParams = {
  search?: string;
  category?: string;
  tag?: string;
  featured?: boolean;
  page?: number;
  perPage?: number;
  sort?: 'newest' | 'oldest' | 'name-asc' | 'name-desc';
};