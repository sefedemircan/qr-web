'use client';

import { Card, Text, Group, Badge, Image, Title, Stack, Box } from '@mantine/core';

export default function SpecialOfferCard({ offer }) {
  const discountedPrice = offer.price * (1 - offer.discount / 100);
  
  return (
    <Card 
      shadow="sm" 
      padding="lg" 
      radius="xl" 
      mb="lg"
      h={140}
      style={{ 
        background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Group justify="space-between" wrap="nowrap" h="100%">
        <Stack gap="xs" justify="center" style={{ zIndex: 2, flex: 1 }}>
          <Badge 
            color="orange" 
            size="md" 
            radius="xl" 
            style={{ width: 'fit-content', fontWeight: 700 }}
          >
            {offer.discount}% OFF
          </Badge>
          
          <Title order={2} fw={700} size="xl" style={{ lineHeight: 1.2 }}>
            {offer.name}
          </Title>
          
          <Group gap="xs">
            <Text size="lg" fw={700} c="white">
              {discountedPrice.toFixed(2)}₺
            </Text>
            <Text size="sm" td="line-through" c="gray.3">
              {offer.price.toFixed(2)}₺
            </Text>
          </Group>
        </Stack>
        
        <Box style={{ position: 'relative', minWidth: 100 }}>
          <Image
            src={offer.image}
            alt={offer.name}
            w={100}
            h={100}
            style={{ 
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid rgba(255,255,255,0.3)'
            }}
          />
        </Box>
      </Group>
    </Card>
  );
} 