import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/shared/ui/layout";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Федерация спортивного программирования Свердловской области",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="bg-background text-foreground">
      <body
        className={`${jetBrainsMono.variable} antialiased font-jetBrainsMono`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
