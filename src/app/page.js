'use client';

import { useState, useEffect } from 'react';
import { Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import MainLayout from '@/components/Layout/MainLayout';
import CategoryFilter from '@/components/Menu/CategoryFilter';
import SpecialOfferCard from '@/components/Menu/SpecialOfferCard';
import FoodGrid from '@/components/FoodCard/FoodGrid';
import FoodDetailModal from '@/components/FoodCard/FoodDetailModal';

import menuData from '@/data/foodData';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('burger');
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [selectedSpecialOffer, setSelectedSpecialOffer] = useState(null);
  const [specialOfferModalOpened, { open: openSpecialOfferModal, close: closeSpecialOfferModal }] = useDisclosure(false);

  useEffect(() => {
    setFilteredFoods(
      menuData.foodItems.filter(food => food.category === activeCategory)
    );
  }, [activeCategory]);

  const handleSpecialOfferClick = (offer) => {
    setSelectedSpecialOffer(offer);
    openSpecialOfferModal();
  };

  return (
    <MainLayout activeCategory={activeCategory} setActiveCategory={setActiveCategory}>
      {menuData.specialOffers.map(offer => (
        <SpecialOfferCard 
          key={offer.id} 
          offer={offer} 
          onClick={() => handleSpecialOfferClick(offer)}
        />
      ))}

      <Box hiddenFrom="sm">
        <CategoryFilter 
          categories={menuData.categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
      </Box>

      <FoodGrid foods={filteredFoods} />

      {selectedSpecialOffer && (
        <FoodDetailModal
          food={selectedSpecialOffer}
          opened={specialOfferModalOpened}
          close={closeSpecialOfferModal}
        />
      )}
    </MainLayout>
  );
}
