'use client';

import { SimpleGrid } from '@mantine/core';
import FoodCard from './FoodCard';

export default function FoodGrid({ foods }) {
  return (
    <SimpleGrid
      cols={{ base: 2, sm: 3, md: 4 }}
      spacing={{ base: 'sm', sm: 'md' }}
      verticalSpacing={{ base: 'sm', sm: 'md' }}
    >
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </SimpleGrid>
  );
} 