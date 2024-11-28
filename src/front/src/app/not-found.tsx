import { Button } from "@/shared/ui/button";
import { ContentHero } from "@/shared/ui/layout";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  const breadcrumbs = [
    { title: "Главная", link: "/" },
    { title: "404", link: "/" },
  ];

  return (
    <>
      <ContentHero title="404" breadcrumbs={breadcrumbs} />
      <div className="container mx-auto max-xl:my-12 xl:my-48 grid xl:grid-cols-2">
        <Image
          alt="Космонавт"
          src="/img/astronaut.svg"
          width={270}
          height={260}
          className="xl:order-last mx-auto"
        />
        <div className="space-y-12 px-5">
          <h1 className="font-bold text-5xl max-lg:text-4xl">
            404: Страница не найдена
          </h1>
          <p className="font-bold text-xl max-xl:text-lg">
            Этой страницы не существует. Возможно, она была удалена
          </p>
          <p className="text-xl max-xl:text-lg">
            Перейдите на главную страницу или напишите нам
          </p>
          <div className="grid lg:grid-cols-2 max-lg:gap-5 lg:gap-12">
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
    </>
  );
}
