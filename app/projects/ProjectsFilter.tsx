'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ProjectsFilter({
  categories,
  tags,
}: {
  categories: { id: string; name: string; slug: string }[];
  tags: { id: string; name: string; slug: string }[];
}) {
  const router = useRouter();
  const params = useSearchParams();
  const [isClient, setIsClient] = useState(false);

  // Get search params with proper client-side handling
  const search = params?.get('search') || '';
  const category = params?.get('category') || '';
  const tag = params?.get('tag') || '';
  const featured = params?.get('featured') || '';
  const sort = params?.get('sort') || 'newest';

  useEffect(() => {
    setIsClient(true);
  }, []);

  const clearFilters = () => {
    router.push('/projects');
  };

  const setFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(params?.toString());
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    router.push(`/projects?${newParams.toString()}`);
  };

  // Don't render on server to avoid hydration mismatch
  if (!isClient) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-8 space-y-4"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setFilter('search', e.target.value)}
          />
        </div>

        <Select
          value={sort}
          onValueChange={(value) => setFilter('sort', value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="name-asc">Name (A-Z)</SelectItem>
            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Select
          value={category}
          onValueChange={(value) => setFilter('category', value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.slug}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={tag}
          onValueChange={(value) => setFilter('tag', value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Tags</SelectItem>
            {tags.map((tag) => (
              <SelectItem key={tag.id} value={tag.slug}>
                {tag.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant={featured ? 'default' : 'outline'}
          onClick={() => setFilter('featured', featured ? '' : 'true')}
        >
          Featured Only
        </Button>

        {(search || category || tag || featured) && (
          <Button variant="ghost" onClick={clearFilters} className="flex items-center gap-1">
            Clear filters
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </motion.div>
  );
}