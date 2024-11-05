"use client";

import React, { useState } from "react";
import SectionHeading from "./sectionHeading";
import { Button } from "@/shared/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { News } from "@/shared/types/news";
import { NewsCard } from "@/entities/news";

export interface NewsSectionProps {}

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

const NewsSection: React.FC<NewsSectionProps> = ({}) => {
  const [page, setPage] = useState(1);

  return (
    <section className="space-y-12">
      <div className="flex gap-5">
        <SectionHeading title="Новости" />
        <div className="flex gap-5">
          <Button
            size="icon"
            variant="primary"
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page < 2}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            size="icon"
            variant="primary"
            onClick={() => setPage((prev) => prev + 1)}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
      <div className="flex justify-between">
        {news.map((n) => (
          <NewsCard news={n} key={n.id} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(NewsSection);
