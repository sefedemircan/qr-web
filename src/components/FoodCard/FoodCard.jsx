'use client';

import { Card, Image, Text, Group, Stack } from '@mantine/core';

export default function FoodCard({ food }) {
  return (
    <Card 
      shadow="sm" 
      padding="sm" 
      radius="xl" 
      withBorder={false}
      style={{ 
        backgroundColor: 'white',
        border: 'none',
        overflow: 'hidden'
      }}
    >
      <Card.Section>
        <Image
          src={food.image}
          height={120}
          alt={food.name}
          style={{ objectFit: 'cover' }}
        />
      </Card.Section>

      <Stack gap="xs" mt="sm">
        <Text fw={600} size="sm" lineClamp={1} c="dark.8">
          {food.name}
        </Text>
        
        <Text fw={700} size="lg" c="dark.9">
          {food.price}₺
        </Text>
      </Stack>
    </Card>
  );
} 