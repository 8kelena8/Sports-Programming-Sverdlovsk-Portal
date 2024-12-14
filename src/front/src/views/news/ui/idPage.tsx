import { MiniNewsCard } from "@/entities/news";
import { serverNewsController } from "@/shared/api/server";
import { News } from "@/shared/types/news";
import Image from "next/image";
import React from "react";

export interface NewsIdPageProps {
  id: News["id"];
}

const NewsIdPage: React.FC<NewsIdPageProps> = async ({ id }) => {
  const news = await serverNewsController.getNewsById(id);
  const lastNews = await serverNewsController.getLastNews();

  return (
    <div className="container mx-auto flex max-xl:flex-col gap-10 my-12 px-5">
      <main className="space-y-10">
        <div className="w-full">
          <Image
            alt={news.title}
            src={"/img/placeholder.jpg"}
            width={984}
            height={700}
            className="aspect-square object-contain"
          />
        </div>
        <h1 className="font-bold text-4xl max-xl:text-2xl">{news.title}</h1>
        <div className="xl:text-xl break-words">{news.fullContent}</div>
      </main>
      <section className="bg-base-900 p-10 space-y-10 xl:min-w-[500px] h-fit max-xl:p-5">
        <h2 className="font-bold text-2xl max-xl:text-xl">Последние новости</h2>
        {lastNews.map((n) => (
          <MiniNewsCard news={n} key={n.title} />
        ))}
      </section>
    </div>
  );
};

export default React.memo(NewsIdPage);
