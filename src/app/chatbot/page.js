'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Container, Stack, Group, Text, Button, ActionIcon, Avatar, Paper, SimpleGrid } from '@mantine/core';
import { IconArrowLeft, IconRobot, IconUser } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export default function ChatbotPage() {
  const router = useRouter();
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Merhaba! Size nasıl yardımcı olabilirim? 😊',
      timestamp: new Date()
    }
  ]);
  const [currentStep, setCurrentStep] = useState('main');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chatSteps = {
    main: {
      buttons: [
        { id: 'menu', text: '🍔 Menü Hakkında', next: 'menu' },
        { id: 'contact', text: '📞 İletişim & Bilgi', next: 'contact' },
        { id: 'order', text: '🚚 Sipariş & Teslimat', next: 'order' },
        { id: 'faq', text: '❓ Sık Sorulan Sorular', next: 'faq' }
      ]
    },
    menu: {
      buttons: [
        { id: 'popular', text: 'En popüler ürünler', response: 'En popüler ürünlerimiz: Double Beef Burger, Cheese Pizza ve Tiramisu! Bu ürünler müşterilerimizin favorileri. 🌟' },
        { id: 'vegetarian', text: 'Vejetaryen seçenekler', response: 'Vejetaryen seçeneklerimiz: Cheese Pizza, Pappardelle, tüm tatlılarımız ve içeceklerimiz vejetaryen dostu! 🌱' },
        { id: 'desserts', text: 'Tatlı önerileri', response: 'Tatlı önerilerimiz: Çikolatalı Sufle (sıcak), Tiramisu (klasik) ve Cheesecake (frambuazlı). Hepsi ev yapımı! 🍰' },
        { id: 'drinks', text: 'İçecek çeşitleri', response: 'İçecek menümüz: Taze Limonata, Buzlu Kahve, Çilek Smoothie ve daha fazlası. Tümü taze malzemelerle! 🥤' }
      ]
    },
    contact: {
      buttons: [
        { id: 'address', text: 'Adres bilgisi', response: 'Adresimiz: Merkez Mahallesi, Lezzet Sokak No:15, İstanbul. Google Maps\'ten "Restaurant" aratarak bizi bulabilirsiniz. 📍' },
        { id: 'phone', text: 'Telefon numarası', response: 'Telefon numaramız: 0212 555 0123. Rezervasyon ve sipariş için bizi arayabilirsiniz. ☎️' },
        { id: 'hours', text: 'Çalışma saatleri', response: 'Çalışma saatlerimiz: Pazartesi-Pazar 10:00-23:00. Hafta sonları daha yoğun olduğumuz için rezervasyon öneriyoruz. 🕐' },
        { id: 'social', text: 'Sosyal medya', response: 'Bizi takip edin! Instagram: @restaurant_official, Facebook: Restaurant Official. Güncel kampanyalarımızı kaçırmayın! 📱' }
      ]
    },
    order: {
      buttons: [
        { id: 'delivery', text: 'Teslimat alanları', response: 'Teslimat alanımız: 5km çapında tüm bölgeler. Minimum sipariş tutarı 100₺. Teslimat ücreti 15₺. 🚚' },
        { id: 'payment', text: 'Ödeme yöntemleri', response: 'Ödeme seçenekleri: Nakit, kredi kartı, mobil ödeme (Apple Pay, Google Pay) ve online ödeme kabul ediyoruz. 💳' },
        { id: 'time', text: 'Teslimat süresi', response: 'Ortalama teslimat süremiz: 25-35 dakika. Yoğun saatlerde 45 dakikaya kadar çıkabilir. Size SMS ile bilgi vereceğiz. ⏰' },
        { id: 'track', text: 'Sipariş takibi', response: 'Sipariş takibi için SMS\'le gelen linki kullanabilir veya bizi arayabilirsiniz. Gerçek zamanlı takip imkanı! 📦' }
      ]
    },
    faq: {
      buttons: [
        { id: 'allergens', text: 'Alerjen bilgileri', response: 'Tüm ürünlerimizde alerjen bilgileri detaylı şekilde belirtilmiştir. Gluten, laktoz ve kuruyemiş alerjisi olanlar için özel seçeneklerimiz var. ⚠️' },
        { id: 'halal', text: 'Helal sertifikası', response: 'Tüm et ürünlerimiz helal sertifikalıdır. Helal kesim belgelerimizi restoranımızda görebilirsiniz. ✅' },
        { id: 'reservation', text: 'Rezervasyon', response: 'Rezervasyon için telefon veya sosyal medya hesaplarımızdan ulaşabilirsiniz. Özellikle hafta sonları rezervasyon öneriyoruz. 🪑' },
        { id: 'group', text: 'Grup siparişleri', response: 'Grup siparişleri (10+ kişi) için özel menülerimiz var. En az 2 saat önceden haber vermeniz yeterli. Özel indirimlerimiz mevcut! 👥' }
      ]
    }
  };

  const handleButtonClick = (button) => {
    // Kullanıcı mesajını ekle
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: button.text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Bot cevabını biraz gecikmeyle ekle (daha gerçekçi)
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        text: button.response || 'Seçiminizi aldım, size yardımcı olmaya devam ediyorum. 😊',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 800);

    // Eğer next step varsa güncelle
    if (button.next) {
      setCurrentStep(button.next);
    }
  };

  const handleBackToMain = () => {
    const backMessage = {
      id: Date.now(),
      type: 'bot',
      text: 'Ana menüye döndük. Size başka nasıl yardımcı olabilirim? 🏠',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, backMessage]);
    setCurrentStep('main');
  };

  const currentButtons = chatSteps[currentStep]?.buttons || [];

  return (
    <Box style={{ backgroundColor: '#f8f9fa', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Fixed Header */}
      <Box bg="red.8" p="md" style={{ flexShrink: 0, zIndex: 10 }}>
        <Group justify="space-between">
          <Group>
            <ActionIcon 
              variant="transparent" 
              c="white" 
              onClick={() => router.back()}
              aria-label="Geri"
            >
              <IconArrowLeft size={20} />
            </ActionIcon>
            <Text c="white" fw={700} size="lg">
              Chatbot Asistan
            </Text>
          </Group>
          <IconRobot size={24} color="white" />
        </Group>
      </Box>

      {/* Main Chat Area */}
      <Box style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#f8f9fa' }}>
        <Container size="sm" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '12px', gap: '8px' }}>
          
          {/* Messages Container - Fixed Height with Scroll */}
          <Box 
            style={{ 
              flex: 1,
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 0
            }}
          >
            {/* Messages Area - Scrollable */}
            <Box 
              style={{ 
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                padding: '16px'
              }}
            >
              <Stack gap="sm">
                {messages.map((message) => (
                  <Group 
                    key={message.id} 
                    justify={message.type === 'user' ? 'flex-end' : 'flex-start'}
                    align="flex-end"
                    wrap="nowrap"
                    gap="xs"
                  >
                    {message.type === 'bot' && (
                      <Avatar 
                        color="red.6" 
                        radius="xl" 
                        size="sm"
                        style={{ marginBottom: '2px', flexShrink: 0 }}
                      >
                        <IconRobot size={14} />
                      </Avatar>
                    )}
                    
                    <Box
                      style={{
                        backgroundColor: message.type === 'user' ? '#cc2e2e' : '#f8f9fa',
                        color: message.type === 'user' ? 'white' : '#212529',
                        padding: '8px 12px',
                        borderRadius: '14px',
                        maxWidth: '80%',
                        border: message.type === 'bot' ? '1px solid #e9ecef' : 'none',
                        boxShadow: message.type === 'user' ? '0 2px 8px rgba(204, 46, 46, 0.2)' : '0 1px 4px rgba(0,0,0,0.05)',
                        wordBreak: 'break-word'
                      }}
                    >
                      <Text size="sm" style={{ lineHeight: 1.4 }}>
                        {message.text}
                      </Text>
                    </Box>

                    {message.type === 'user' && (
                      <Avatar 
                        color="gray.6" 
                        radius="xl" 
                        size="sm"
                        style={{ marginBottom: '2px', flexShrink: 0 }}
                      >
                        <IconUser size={14} />
                      </Avatar>
                    )}
                  </Group>
                ))}
                <div ref={messagesEndRef} />
              </Stack>
            </Box>
          </Box>

          {/* Compact Button Area */}
          <Box
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              padding: '12px',
              flexShrink: 0
            }}
          >
            <SimpleGrid cols={{ base: 2, sm: 2 }} spacing="xs">
              {currentButtons.map((button) => (
                <Button
                  key={button.id}
                  variant="light"
                  color="red"
                  radius="lg"
                  onClick={() => handleButtonClick(button)}
                  style={{ 
                    height: '36px',
                    fontSize: '11px',
                    fontWeight: 500,
                    backgroundColor: '#fff5f5',
                    border: '1px solid #ffe0e0',
                    color: '#cc2e2e',
                    padding: '0 8px'
                  }}
                >
                  <Text size="xs" ta="center" style={{ lineHeight: 1.2 }}>
                    {button.text}
                  </Text>
                </Button>
              ))}
            </SimpleGrid>

            {/* Ana menüye dön butonu */}
            {currentStep !== 'main' && (
              <Button
                variant="subtle"
                color="gray"
                radius="lg"
                onClick={handleBackToMain}
                mt="xs"
                fullWidth
                size="xs"
                style={{ 
                  height: '28px',
                  backgroundColor: 'transparent',
                  color: '#6c757d',
                  fontSize: '10px'
                }}
              >
                🏠 Ana Menüye Dön
              </Button>
            )}
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 