import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Bikore — Save Together, Grow Together',
  description: "Rwanda's trusted Ikimina savings app. Save together, contribute easily, receive your payout on time — every cycle.",
  keywords: ['Ikimina', 'Rwanda', 'savings', 'mobile money', 'MTN MoMo', 'Bikore'],
  authors: [{ name: 'Bikore' }],
  
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
  },

  openGraph: {
    title: 'Bikore — Save Together, Grow Together',
    description: 'Rwanda\'s trusted Ikimina savings app.',
    url: 'https://bikore.rw',
    siteName: 'Bikore',
    locale: 'en_RW',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bikore — Save Together, Grow Together',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Bikore — Save Together, Grow Together',
    description: 'Rwanda\'s trusted Ikimina savings app.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1A4D2E" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
