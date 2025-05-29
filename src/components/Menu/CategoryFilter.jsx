'use client';

import { ScrollArea, Group, Button } from '@mantine/core';
import { useRef } from 'react';

export default function CategoryFilter({ categories, activeCategory, setActiveCategory }) {
  const viewport = useRef(null);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <ScrollArea viewportRef={viewport} scrollbarSize={0} type="never" offsetScrollbars={false}>
      <Group wrap="nowrap" gap="sm" mb="lg" px="xs">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'filled' : 'light'}
            color={activeCategory === category.id ? 'dark' : 'gray'}
            onClick={() => handleCategoryClick(category.id)}
            radius="xl"
            size="md"
            fw={500}
            style={{
              minWidth: 'max-content',
              backgroundColor: activeCategory === category.id ? '#e8590c' : '#f8f9fa',
              color: activeCategory === category.id ? 'white' : '#6c757d',
              border: 'none',
              boxShadow: activeCategory === category.id ? 'none' : '0 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            {category.label}
          </Button>
        ))}
      </Group>
    </ScrollArea>
  );
} 