import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bikore — Save Together, Grow Together",
  description: "Rwanda's trusted Ikimina savings app. Save together, contribute easily, receive your payout on time — every cycle.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
