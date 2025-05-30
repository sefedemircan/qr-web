import { Geist, Geist_Mono } from "next/font/google";
import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core';
import '@mantine/core/styles.css';
import "./globals.css";
import { LanguageProvider } from '../contexts/LanguageContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Restoran teması için özel renk paleti - turuncu tonlar ana renk olarak
const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand: [
      '#fff5eb',
      '#ffe8d2',
      '#ffd2a8',
      '#ffba7a',
      '#ffa54c',
      '#ff922e',
      '#ff8019',
      '#e8590c',
      '#cc5d00',
      '#a64b00'
    ],
    // Kırmızı tonları - vurgu, uyarı veya özel teklifler için
    red: [
      '#fff5f5', // çok açık pembe - arka plan veya hover efekti için
      '#ffe0e0', // daha az göz yoran soft kırmızı
      '#ffc2c2', // pastel kırmızı
      '#ffa3a3', // iştah açıcı ama yumuşak
      '#ff8585', // kullanıcı dostu sıcaklık
      '#ff6666', // dikkat çekici ama dengeli
      '#f74c4c', // lezzet hissini artırır
      '#e63939', // vurgu öğeleri için
      '#cc2e2e', // buton veya ana başlıklar
      '#b02525'  // güçlü çağrılar için (örneğin "Sipariş Ver" butonu)
    ],
    
    gray: [
      '#f8f9fa',
      '#f1f3f4',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#6c757d',
      '#495057',
      '#343a40',
      '#212529'
    ]
  },
  primaryColor: 'brand',
  fontFamily: 'var(--font-geist-sans), sans-serif',
  headings: {
    fontFamily: 'var(--font-geist-sans), sans-serif',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'xl',
      },
    },
    Badge: {
      defaultProps: {
        radius: 'xl',
      },
    },
    Card: {
      defaultProps: {
        radius: 'lg',
        shadow: 'sm',
      },
    },
  },
});

export const metadata = {
  title: "Restoran Menü",
  description: "Restoran menü uygulaması",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
