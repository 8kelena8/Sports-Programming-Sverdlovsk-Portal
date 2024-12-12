import { NewsCard } from "@/entities/news";
import { NewsletterForm } from "@/features/contact";
import { News } from "@/shared/types/news";
import { Button } from "@/shared/ui/button";
import { ContentHero } from "@/shared/ui/layout";
import Image from "next/image";
import React from "react";

const news: News[] = [
  {
    id: 0,
    title: "Новость 1",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "В Калуге завершились соревнования по продуктовому программированию",
    fullContent:
      "В Калуге завершились соревнования по продуктовому программированию",
  },
  {
    id: 1,
    title: "Новость 2",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
    fullContent:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
  },
  {
    id: 2,
    title: "Новость 3",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "В Калуге завершились соревнования по продуктовому программированию",
    fullContent:
      "В Калуге завершились соревнования по продуктовому программированию",
  },
  {
    id: 3,
    title: "Новость 4",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
    fullContent:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
  },
  {
    id: 4,
    title: "Новость 5",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "В Калуге завершились соревнования по продуктовому программированию",
    fullContent:
      "В Калуге завершились соревнования по продуктовому программированию",
  },
  {
    id: 5,
    title: "Новость 6",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "В Калуге завершились соревнования по продуктовому программированию",
    fullContent:
      "В Калуге завершились соревнования по продуктовому программированию",
  },
  {
    id: 6,
    title: "Новость 7",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
    fullContent:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
  },
  {
    id: 7,
    title: "Новость 8",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "В Калуге завершились соревнования по продуктовому программированию",
    fullContent:
      "В Калуге завершились соревнования по продуктовому программированию",
  },
  {
    id: 8,
    title: "Новость 9",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
    fullContent:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
  },
];

export interface ListNewsPageProps {}

const ListNewsPage: React.FC<ListNewsPageProps> = ({}) => {
  const breadcrumbs = [
    { title: "Главная", link: "/" },
    { title: "Новости", link: "/news" },
  ];

  return (
    <>
      <ContentHero title="Новости" breadcrumbs={breadcrumbs} />
      <div className="container mx-auto my-12 space-y-12 px-5">
        <div className="space-y-10 bg-base-900 p-10">
          <div className="flex justify-between items-center">
            <div className="space-y-5 max-w-[786px] w-full">
              <p className="font-bold text-xl max-lg:text-lg text-pretty">
                Подпишитесь на рассылку и будьте в курсе новостей
              </p>
              <div className="max-xl:hidden">
                <NewsletterForm />
              </div>
            </div>
            <Image
              src={"/img/newsletter.png"}
              alt="Подписка на рассылку"
              width={288}
              height={189}
              className="max-lg:w-36"
            />
          </div>
          <div className="xl:hidden">
            <NewsletterForm />
          </div>
        </div>
        <section className="space-y-12">
          <main className="grid gap-12 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {news.map((n) => (
              <NewsCard news={n} className="mx-auto" key={n.id} />
            ))}
          </main>
          <div className="">
            <Button
              variant="primary"
              className="block mx-auto px-12 max-lg:w-full"
            >
              ПОКАЗАТЬ ЕЩЁ
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default React.memo(ListNewsPage);
