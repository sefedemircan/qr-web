'use client';

import { useState } from 'react';
import { AppShell, Container, NavLink, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Header from './Header';
import menuData from '@/data/foodData';

export default function MainLayout({ children, activeCategory, setActiveCategory }) {
  const [opened, { toggle, close }] = useDisclosure(false);

  const handleCategoryClick = (categoryId) => {
    if (setActiveCategory) {
      setActiveCategory(categoryId);
    }
    
    // Mobil görünümde seçim yapıldıktan sonra navigasyonu kapat
    if (opened) {
      close();
    }
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding={0}
      style={{
        backgroundColor: '#f8f9fa'
      }}
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar p="md" hiddenFrom="sm" bg="white">
        <AppShell.Section>
          <h3 style={{ color: '#212529', fontWeight: 600 }}>Kategoriler</h3>
        </AppShell.Section>
        <AppShell.Section grow component="nav">
          {menuData.categories.map((category) => (
            <NavLink
              key={category.id}
              label={category.label}
              active={activeCategory === category.id}
              onClick={() => handleCategoryClick(category.id)}
              color={activeCategory === category.id ? '#e8590c' : 'dark.8'}
              style={{ 
                fontWeight: 500,
                color: activeCategory === category.id ? '#e8590c' : '#212529'
              }}
              bg={activeCategory === category.id ? '#fff5eb' : 'transparent'}
            />
          ))}
        </AppShell.Section>
      </AppShell.Navbar>
      
      <AppShell.Main>
        <Box style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
          <Container size="lg" py="md" px="md">
            {children}
          </Container>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
} 