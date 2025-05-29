'use client';

import { useState, useEffect } from 'react';
import { Box } from '@mantine/core';

import MainLayout from '@/components/Layout/MainLayout';
import CategoryFilter from '@/components/Menu/CategoryFilter';
import SpecialOfferCard from '@/components/Menu/SpecialOfferCard';
import FoodGrid from '@/components/FoodCard/FoodGrid';

import menuData from '@/data/foodData';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredFoods, setFilteredFoods] = useState([]);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredFoods(menuData.foodItems);
    } else {
      setFilteredFoods(
        menuData.foodItems.filter(food => food.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <MainLayout activeCategory={activeCategory} setActiveCategory={setActiveCategory}>
      {menuData.specialOffers.map(offer => (
        <SpecialOfferCard key={offer.id} offer={offer} />
      ))}

      <Box hiddenFrom="sm">
        <CategoryFilter 
          categories={menuData.categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
      </Box>

      <FoodGrid foods={filteredFoods} />
    </MainLayout>
  );
}
