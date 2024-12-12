import { News } from "@/shared/types/news";
import React from "react";
import NewsCard from "./newsCard";

const news: News[] = [
  {
    id: 0,
    title: "Новость 1",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
    fullContent:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
  },
  {
    id: 1,
    title: "Новость 1",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
    fullContent:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
  },
  {
    id: 2,
    title: "Новость 1",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
    fullContent:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
  },
];

export interface LastNewsProps {}

const LastNews: React.FC<LastNewsProps> = ({}) => {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-1 max-xl:grid-cols-2 gap-5">
      {news.map((n) => (
        <NewsCard news={n} key={n.id} className="mx-auto" />
      ))}
    </div>
  );
};

export default React.memo(LastNews);
