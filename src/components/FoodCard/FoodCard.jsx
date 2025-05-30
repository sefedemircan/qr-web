'use client';

import { Card, Image, Text, Group, Stack, Badge, UnstyledButton, Box } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function FoodCard({ food, onClick }) {
  const { t } = useLanguage();
  
  // Popüler veya önerilen ürünleri belirlemek için
  const isPopular = food.id === 'double-beef-burger' || food.id === 'cheese-pizza' || food.id === 'tiramisu';
  const isRecommended = food.id === 'chicken-burger' || food.id === 'chocolate-souffle' || food.id === 'fresh-lemonade';
  
  return (
    <UnstyledButton onClick={onClick} style={{ width: '100%' }}>
      <Card 
        shadow="sm" 
        padding="sm" 
        radius="xl" 
        withBorder={false}
        style={{ 
          backgroundColor: 'white',
          border: 'none',
          overflow: 'hidden',
          position: 'relative',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        styles={{
          root: {
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }
          }
        }}
      >
        <Card.Section style={{ position: 'relative' }}>
          <Image
            src={food.image}
            height={120}
            alt={t(food.id) || food.name}
            style={{ objectFit: 'cover' }}
          />
          
          {/* Şeffaf büyüteç ikonu */}
          <Box
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(4px)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.7,
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              pointerEvents: 'none'
            }}
            className="search-overlay"
          >
            <IconSearch size={20} color="white" stroke={2} />
          </Box>
          
          {isPopular && (
            <Badge 
              color="red.7" 
              size="sm" 
              radius="sm"
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                fontWeight: 600
              }}
            >
              En Çok Satan
            </Badge>
          )}
          
          {isRecommended && (
            <Badge 
              color="brand.6" 
              size="sm" 
              radius="sm"
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                fontWeight: 600
              }}
            >
              Önerilen
            </Badge>
          )}
        </Card.Section>

        <Stack gap="xs" mt="sm">
          <Text fw={600} size="sm" lineClamp={1} c="dark.8">
            {t(food.id) || food.name}
          </Text>
          
          <Text fw={700} size="lg" c="dark.9">
            {food.price}₺
          </Text>
        </Stack>
      </Card>
      
      <style jsx>{`
        .search-overlay {
          opacity: 0.7;
        }
        
        :hover .search-overlay {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.1);
        }
      `}</style>
    </UnstyledButton>
  );
} 