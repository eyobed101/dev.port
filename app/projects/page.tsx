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

export default function ProjectsPage() {
    const [projectsData, setProjectsData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const [searchParams, setSearchParams] = useState({
        search: '',
        category: '',
        tag: '',
        featured: '',
        sort: 'newest',
        page: 1,
    });

    const perPage = 9;

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const result = await getProjects({
                    search: searchParams.search,
                    category: searchParams.category,
                    tag: searchParams.tag,
                    featured: searchParams.featured === 'true',
                    sort: searchParams.sort,
                    page: searchParams.page,
                    perPage,
                });
                setProjectsData(result);
            } catch (error) {
                console.error('Failed to fetch projects', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [searchParams]);



    const handlePageChange = (page: number) => {
        setSearchParams(prev => ({ ...prev, page }));
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <ProjectsHero />

                {/* <section className="container py-12 md:py-16 lg:py-20">
                    <ProjectsFilter
                        categories={[]} // If you want to fetch categories too, use a separate server action
                        tags={[]}
                        searchParams={searchParams}
                        onSearchChange={(updatedParams) =>
                            setSearchParams(prev => ({ ...prev, ...updatedParams }))
                        }
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
                                        setSelectedProject={() => { }}
                                    />
                                ))}
                            </div>

                            <div className="mt-12">
                                <Pagination
                                    currentPage={searchParams.page}
                                    totalPages={projectsData.totalPages}
                                    baseUrl="/projects"
                                    searchParams={searchParams}
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
                </section> */}
            </div>
                 <StarsBackground />
                  <ShootingStars />
            <FancyFooter />

        </>
    );
}
