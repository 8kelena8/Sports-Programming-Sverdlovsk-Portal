import { NewsCarousel } from "@/entities/news";
import { News } from "@/shared/types/news";
import React from "react";

export interface HeroSectionProps {}

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
];

const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  return (
    <section className="grid grid-cols-2 xl:h-[700px] max-xl:grid-cols-1">
      <div className="bg-base-900 flex flex-col justify-center p-12 space-y-5">
        <h1 className="font-bold text-5xl leading-[72px] max-xl:text-xl text-balance">
          Федерация спортивного программирования Свердловской области
        </h1>
        <span className="text-xl max-xl:text-sm">
          Региональное отделение ФЕДЕРАЦИИ СПОРТИВНОГО ПРОГРАММИРОВАНИЯ
        </span>
      </div>
      <div className="max-lg:h-96 max-xl:h-[600px] max-xl:order-first">
        <NewsCarousel news={news} />
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
