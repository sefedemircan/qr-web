'use client';

import { useState } from 'react';
import { SimpleGrid } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FoodCard from './FoodCard';
import FoodDetailModal from './FoodDetailModal';

export default function FoodGrid({ foods }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const handleFoodClick = (food) => {
    setSelectedFood(food);
    open();
  };

  return (
    <>
      <SimpleGrid
        cols={{ base: 2, sm: 3, md: 4 }}
        spacing={{ base: 'sm', sm: 'md' }}
        verticalSpacing={{ base: 'sm', sm: 'md' }}
      >
        {foods.map((food) => (
          <FoodCard 
            key={food.id} 
            food={food} 
            onClick={() => handleFoodClick(food)}
          />
        ))}
      </SimpleGrid>

      {selectedFood && (
        <FoodDetailModal
          food={selectedFood}
          opened={opened}
          close={close}
        />
      )}
    </>
  );
} 