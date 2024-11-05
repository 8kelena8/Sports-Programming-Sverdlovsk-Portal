"use client";

import { News } from "@/shared/types/news";
import { Button } from "@/shared/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DotButton from "./dotButton";

export interface NewsCarouselProps {
  news: News[];
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ news }) => {
  const [index, setIndex] = useState(0);
  const currentNews = news[index];

  useEffect(() => {
    setIndex(0);
  }, [news]);

  return (
    <div className="w-full h-full relative">
      <Image
        alt={currentNews.title}
        src={"/img/news2.png"}
        fill
        sizes="(min-width: 960px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="flex flex-col items-center text-center absolute gap-12 bottom-0 left-0 right-0 p-12">
        <p className="font-bold text-4xl line-clamp-2">{currentNews.summary}</p>
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            disabled={index < 1}
            onClick={() => setIndex((prev) => prev - 1)}
            className="text-foreground border-foreground border-2"
          >
            <ChevronLeftIcon />
          </Button>
          {index > 0 && (
            <DotButton onClick={() => setIndex((prev) => prev - 1)} />
          )}
          <DotButton disabled />
          {index < news.length - 1 && (
            <DotButton onClick={() => setIndex((prev) => prev + 1)} />
          )}
          <Button
            size="icon"
            disabled={index >= news.length - 1}
            onClick={() => setIndex((prev) => prev + 1)}
            className="text-foreground border-foreground border-2"
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NewsCarousel);
