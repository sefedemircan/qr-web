'use client';

import { Modal, Image, Text, Group, Stack, Badge, Box, Button, Divider } from '@mantine/core';
import { IconArrowBack, IconHeart, IconShare, IconMilk, IconWheat, IconNut } from '@tabler/icons-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function FoodDetailModal({ food, opened, close }) {
  const { t, currentLanguage } = useLanguage();
  
  // Alerjen bilgilerini tanımla
  const allergens = {
    // Burger kategorisi
    'double-beef-burger': ['gluten', 'lactose'],
    'chicken-burger': ['gluten', 'lactose'],
    'beef-burger': ['gluten', 'lactose'],
    'veggie-burger': ['gluten'],
    'fish-burger': ['gluten'],
    'bacon-burger': ['gluten', 'lactose'],
    'mushroom-burger': ['gluten', 'lactose'],
    'spicy-burger': ['gluten', 'lactose'],
    'classic-burger': ['gluten', 'lactose'],
    
    // Pizza kategorisi
    'cheese-pizza': ['gluten', 'lactose'],
    'pepperoni-pizza': ['gluten', 'lactose'],
    'margherita-pizza': ['gluten', 'lactose'],
    'mushroom-pizza': ['gluten', 'lactose'],
    'meat-lovers-pizza': ['gluten', 'lactose'],
    'veggie-pizza': ['gluten', 'lactose'],
    'bbq-chicken-pizza': ['gluten', 'lactose'],
    'hawaiian-pizza': ['gluten', 'lactose'],
    
    // Sandwich kategorisi
    'club-sandwich': ['gluten', 'lactose'],
    'tuna-sandwich': ['gluten'],
    'grilled-chicken-sandwich': ['gluten'],
    'veggie-sandwich': ['gluten'],
    'blt-sandwich': ['gluten'],
    'turkey-sandwich': ['gluten', 'lactose'],
    'steak-sandwich': ['gluten', 'lactose'],
    'caprese-sandwich': ['gluten', 'lactose'],
    
    // Salatalar kategorisi (genelde alerjen az)
    'caesar-salad': ['lactose'],
    'turkish-salad': ['lactose'],
    'chicken-salad': [],
    'tuna-salad': [],
    'avocado-salad': [],
    'quinoa-salad': [],
    'mediterranean-salad': ['lactose'],
    'arugula-salad': ['lactose', 'nuts'],
    
    // İçecekler kategorisi
    'fresh-lemonade': [],
    'iced-coffee': ['lactose'],
    'strawberry-smoothie': ['lactose'],
    'mango-juice': [],
    'cola': [],
    'orange-juice': [],
    'green-tea': [],
    'milkshake': ['lactose'],
    
    // Tatlılar kategorisi
    'chocolate-souffle': ['gluten', 'lactose'],
    'tiramisu': ['gluten', 'lactose'],
    'cheesecake': ['gluten', 'lactose'],
    'chocolate-cake': ['gluten', 'lactose'],
    'ice-cream-sundae': ['lactose', 'nuts'],
    'fruit-tart': ['gluten', 'lactose'],
    'baklava': ['gluten', 'nuts'],
    'creme-brulee': ['lactose']
  };

  // İçindekiler
  const ingredients = {
    // Burger kategorisi
    'double-beef-burger': ['Dana eti', 'Cheddar peyniri', 'Özel sos', 'Marul', 'Domates', 'Soğan'],
    'chicken-burger': ['Tavuk göğsü', 'Özel sos', 'Marul', 'Domates', 'Turşu', 'Cheddar peyniri'],
    
    // Pizza kategorisi
    'cheese-pizza': ['Pizza hamuru', 'Domates sosu', 'Mozzarella peyniri', 'Fesleğen', 'Zeytinyağı'],
    'pepperoni-pizza': ['Pizza hamuru', 'Domates sosu', 'Mozzarella peyniri', 'Pepperoni', 'Oregano'],
    
    // Sandwich kategorisi
    'club-sandwich': ['Tost ekmeği', 'Izgara tavuk', 'Pastırma', 'Marul', 'Domates', 'Mayonez'],
    
    // Katsu kategorisi
    'spicy-chicken': ['Tavuk parçaları', 'Acı baharat', 'Galeta unu', 'Yumurta', 'Un'],
    'garlic-chicken': ['Tavuk parçaları', 'Sarımsak', 'Galeta unu', 'Özel dip sos', 'Maydanoz'],
    'beef-katsu': ['Sığır eti', 'Galeta unu', 'Katsu sosu', 'Lahana salatası', 'Susam'],
    
    // Pasta kategorisi
    'pappardelle': ['El yapımı makarna', 'Dana ragu', 'Parmesan peyniri', 'Domates', 'Soğan'],
    
    // İçecekler kategorisi
    'fresh-lemonade': ['Taze limon', 'Şeker', 'Nane', 'Soda', 'Buz'],
    'iced-coffee': ['Soğuk kahve', 'Süt', 'Karamel şurubu', 'Buz', 'Krema'],
    'strawberry-smoothie': ['Taze çilek', 'Yoğurt', 'Bal', 'Süt', 'Buz'],
    
    // Tatlılar kategorisi
    'chocolate-souffle': ['Bitter çikolata', 'Tereyağı', 'Yumurta', 'Şeker', 'Un', 'Badem'],
    'tiramisu': ['Mascarpone peyniri', 'Espresso', 'Savoiardi bisküvi', 'Kakao', 'Şeker'],
    'cheesecake': ['Krem peynir', 'Bisküvi tabanı', 'Frambuaz sosu', 'Şeker', 'Yumurta']
  };

  // Alerjen ikonları
  const allergenIcons = {
    'gluten': <IconWheat size={14} color="#cc2e2e" />,
    'lactose': <IconMilk size={14} color="#cc2e2e" />,
    'nuts': <IconNut size={14} color="#cc2e2e" />
  };

  const getAllergenName = (allergen) => {
    const allergenNames = {
      tr: { gluten: 'Gluten', lactose: 'Laktoz', nuts: 'Kuruyemiş' },
      en: { gluten: 'Gluten', lactose: 'Lactose', nuts: 'Nuts' },
      ar: { gluten: 'جلوتين', lactose: 'لاكتوز', nuts: 'مكسرات' }
    };
    return allergenNames[currentLanguage]?.[allergen] || allergen;
  };

  const currentAllergens = food && allergens[food.id] ? allergens[food.id] : [];
  const currentIngredients = food && ingredients[food.id] ? ingredients[food.id] : [];

  if (!food) return null;

  return (
    <Modal 
      opened={opened} 
      onClose={close} 
      size="sm" 
      padding="0"
      radius="lg"
      centered
      withCloseButton={false}
      styles={{
        body: { padding: 0 },
        header: { margin: 0, padding: 0 }
      }}
    >
      <Box>
        {/* Header Image */}
        <Box style={{ position: 'relative' }}>
          <Image
            src={food.image}
            height={160}
            alt={t(food.id) || food.name}
            style={{ 
              objectFit: 'cover',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
            }}
          />

          <Button 
            variant="filled" 
            color="white" 
            radius="xl" 
            size="sm"
            onClick={close}
            style={{ 
              position: 'absolute', 
              top: 12, 
              left: 12, 
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(4px)',
              border: 'none',
              minWidth: 'auto',
              width: '36px',
              height: '36px',
              padding: 0
            }}
          >
            <IconArrowBack size={16} />
          </Button>

          {food.id === 'double-beef-burger' && (
            <Badge 
              color="red.7" 
              size="sm" 
              radius="sm"
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                fontWeight: 600
              }}
            >
              %25 {t('discount')}
            </Badge>
          )}
        </Box>

        {/* Content */}
        <Stack bg="white" p="lg" gap="sm">
          {/* Title and Price */}
          <Group justify="space-between" align="flex-start">
            <Box style={{ flex: 1 }}>
              <Text fw={700} size="lg" c="dark.9" mb={2}>
                {t(food.id) || food.name}
              </Text>
              <Text size="xs" c="gray.6" mb="xs">
                {t(`${food.id}-desc`) || food.description}
              </Text>
            </Box>
            <Text fw={700} size="xl" c="#cc2e2e" ml="md">
              {food.price}₺
            </Text>
          </Group>

          {/* Allergens */}
          {currentAllergens.length > 0 && (
            <Group gap="xs" mt="xs">
              {currentAllergens.map((allergen) => (
                <Badge 
                  key={allergen} 
                  color="red.1" 
                  leftSection={allergenIcons[allergen]}
                  size="sm"
                  radius="md"
                  style={{ color: '#cc2e2e', fontSize: '11px' }}
                >
                  {getAllergenName(allergen)}
                </Badge>
              ))}
            </Group>
          )}

          {/* Actions */}
          <Group justify="center" mt="md">
            <Button 
              variant="filled" 
              color="red.8" 
              radius="xl" 
              size="md"
              fw={600}
              fullWidth
            >
              {t('addToCart')} - {food.price}₺
            </Button>
          </Group>
        </Stack>
      </Box>
    </Modal>
  );
} 