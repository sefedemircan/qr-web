'use client';

import { Card, Text, Group, Badge, Image, Title, Stack, Box, UnstyledButton } from '@mantine/core';
import { useLanguage } from '../../contexts/LanguageContext';

export default function SpecialOfferCard({ offer, onClick }) {
  const { t } = useLanguage();
  const discountedPrice = offer.price * (1 - offer.discount / 100);
  
  return (
    <UnstyledButton onClick={onClick} style={{ width: '100%', display: 'block' }}>
      <Card 
        shadow="sm"
        padding="lg" 
        radius="xl" 
        mb="lg"
        h={140}
        style={{ 
          background: 'linear-gradient(135deg, #ff6666 0%, #f74c4c 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        styles={{
          root: {
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
            }
          }
        }}
      >
        <Group justify="space-between" wrap="nowrap" h="100%">
          <Stack gap="xs" justify="center" style={{ zIndex: 2, flex: 1 }}>
            <Badge 
              color="red.7" 
              size="md" 
              radius="xl" 
              style={{ 
                width: 'fit-content', 
                fontWeight: 700,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              %{offer.discount} {t('discount').toUpperCase()}
            </Badge>
            
            <Title order={2} fw={700} size="xl" style={{ lineHeight: 1.2 }}>
              {t(offer.name)}
            </Title>
            
            <Group gap="xs">
              <Text size="lg" fw={700} c="white">
                {discountedPrice.toFixed(0)}₺
              </Text>
              <Text size="sm" td="line-through" c="gray.3">
                {offer.price.toFixed(0)}₺
              </Text>
            </Group>
          </Stack>
          
          <Box style={{ position: 'relative', minWidth: 100 }}>
            <Image
              src={offer.image}
              alt={t(offer.id) || offer.name}
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
    </UnstyledButton>
  );
} 