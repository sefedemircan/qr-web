'use client';

import { Group, Burger, Title, ActionIcon, Box, Image, Text } from '@mantine/core';
import { IconShoppingCart, IconSearch, IconMessageChatbotFilled } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export default function Header({ opened, toggle }) {
  const router = useRouter();

  const handleChatbotClick = () => {
    router.push('/chatbot');
  };

  return (
    <Box bg="red.8" h="100%">
      <Group justify="space-between" h="100%" px="md">
        <Group>
          {/*<Burger 
            opened={opened} 
            onClick={toggle} 
            size="sm" 
            color="white"
          />*/}
          <Text c="white" fw={700}>
            Restaurant
          </Text>
        </Group>

        <Group>
          <ActionIcon variant="transparent" c="white" aria-label="Ara">
            <IconSearch style={{ width: 20, height: 20 }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon 
            variant="transparent" 
            c="white" 
            aria-label="Chat"
            onClick={handleChatbotClick}
            style={{ cursor: 'pointer' }}
          >
            <IconMessageChatbotFilled style={{ width: 30, height: 30 }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Group>
    </Box>
  );
} 