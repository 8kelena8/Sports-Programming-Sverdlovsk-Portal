"use client";

import { NewsCard } from "@/entities/news";
import { News } from "@/shared/types/news";
import { Button } from "@/shared/ui/button";
import React, { useState } from "react";

export interface NewsSectionProps {
  allNews: News[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ allNews }) => {
  const [page, setPage] = useState(1);
  const perPageItems = 6;
  const totalPages = Math.ceil(allNews.length / perPageItems);
  const pageNews = allNews.slice(0, page * perPageItems);

  const onMoreClick = () => {
    if (page >= totalPages) setPage(totalPages);
    else setPage((prev) => prev + 1);
  };

  return (
    <section className="space-y-12">
      <main className="grid gap-12 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {pageNews.map((n) => (
          <NewsCard news={n} className="mx-auto" key={n.title} />
        ))}
      </main>
      {page < totalPages && (
        <Button
          variant="primary"
          className="block mx-auto px-12 max-lg:w-full"
          onClick={onMoreClick}
        >
          Показать ещё
        </Button>
      )}
    </section>
  );
};

export default React.memo(NewsSection);
