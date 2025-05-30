'use client';

import { Group, Burger, Title, ActionIcon, Box, Image, Text } from '@mantine/core';
import { IconShoppingCart, IconMessageChatbotFilled } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export default function Header({ opened, toggle }) {
  const router = useRouter();
  const { t } = useLanguage();

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
            {t('restaurant')}
          </Text>
        </Group>

        <Group>
          <LanguageSwitcher />
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