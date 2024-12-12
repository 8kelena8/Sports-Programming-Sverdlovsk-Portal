"use client";

import { Button } from "@/shared/ui/button";
import { ContentHero } from "@/shared/ui/layout";
import Link from "next/link";
import { useEffect } from "react";
import { JetBrains_Mono } from "next/font/google";
import { Footer, Header } from "@/shared/ui/layout";
import { ContactForm } from "@/features/contact";
import { HeaderNavigation } from "@/features/search";
import Image from "next/image";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const breadcrumbs = [
    { title: "Главная", link: "/" },
    { title: "Ошибка", link: "/" },
  ];
  console.log("ERROR PAGE!");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="ru" className="bg-background text-foreground">
      <body
        className={`${jetBrainsMono.variable} antialiased font-jetBrainsMono`}
      >
        <Header nav={<HeaderNavigation />} />
        <ContentHero title="События" breadcrumbs={breadcrumbs} />
        <div className="container mx-auto my-48 grid xl:grid-cols-2">
          <Image
            alt="Космонавт"
            src="/img/astronaut.svg"
            width={270}
            height={260}
            className="xl:order-last"
          />
          <div className="space-y-12 px-5">
            <h1 className="font-bold text-5xl">{error.name}</h1>
            <p className="font-bold text-xl">{error.message}</p>
            <p className="text-xl">
              Перейдите на главную страницу или напишите нам
            </p>
            <div className="grid lg:grid-cols-3 gap-12">
              <Button
                onClick={() => reset()}
                variant="primary"
                className="w-full"
              >
                Обновить
              </Button>
              <Link href="/">
                <Button variant="primary" className="w-full">
                  Главная
                </Button>
              </Link>
              <Link href="/contacts">
                <Button variant="primary" className="w-full">
                  Контакты
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer contactForm={<ContactForm />} />
      </body>
    </html>
  );
}
