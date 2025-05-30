'use client';

import { Menu, ActionIcon, Text, Group, Box } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();

  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);

  return (
    <Menu shadow="md" width={140} position="bottom-end">
      <Menu.Target>
        <Box
          style={{
            cursor: 'pointer',
            padding: '6px 12px',
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          className="language-button"
        >
          <Text size="lg" style={{ lineHeight: 1 }}>
            {currentLang?.flag}
          </Text>
          <Text 
            c="white" 
            fw={600} 
            size="xs" 
            style={{ 
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              lineHeight: 1
            }}
          >
            {currentLang?.code}
          </Text>
          <IconChevronDown 
            style={{ width: 12, height: 12 }} 
            stroke={2} 
            color="white"
          />
        </Box>
      </Menu.Target>

      <Menu.Dropdown style={{ border: 'none', padding: '6px' }} bg="white">
        {availableLanguages.map((language) => (
          <Menu.Item
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            style={{
              backgroundColor: currentLanguage === language.code ? '#ffe0e0' : 'transparent',
              borderRadius: '8px',
              margin: '2px 0',
              padding: '10px 12px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              transition: 'all 0.2s ease'
            }}
          >
            <Group gap={10}>
              <Text size="xl">{language.flag}</Text>
              <Text 
                c={currentLanguage === language.code ? "red.7" : "dark.6"} 
                fw={currentLanguage === language.code ? 600 : 400}
                size="sm"
              >
                {language.name}
              </Text>
            </Group>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
} 