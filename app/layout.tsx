import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bikore — Save Together, Grow Together",
  description:
    "Rwanda's trusted Ikimina savings app. Save together, contribute easily, receive your payout on time — every cycle.",
  keywords: [
    "Ikimina",
    "Rwanda",
    "savings",
    "mobile money",
    "MTN MoMo",
    "Bikore",
    "group savings",
    "Kigali",
  ],
  authors: [{ name: "Bikore" }],
  creator: "Bikore",
  publisher: "Bikore",

  openGraph: {
    title: "Bikore — Save Together, Grow Together",
    description: "Rwanda's trusted Ikimina savings app.",
    url: "https://bikore.rw",
    siteName: "Bikore",
    locale: "en_RW",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bikore — Save Together, Grow Together",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bikore — Save Together, Grow Together",
    description: "Rwanda's trusted Ikimina savings app.",
    images: ["/og-image.png"],
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
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%8C%B1%3C/text%3E%3C/svg%3E"
          type="image/svg+xml"
        />
        <meta name="theme-color" content="#1A4D2E" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`
          ${inter.className}
          min-h-full
          flex
          flex-col
          antialiased
          bg-[#0D2B1A]
          text-white
        `}
      >
        {children}
      </body>
    </html>
  );
}