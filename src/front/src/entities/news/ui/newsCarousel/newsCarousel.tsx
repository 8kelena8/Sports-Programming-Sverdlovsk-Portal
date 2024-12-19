"use client";

import { News } from "@/shared/types/news";
import { Button } from "@/shared/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DotButton from "./dotButton";
import { Swiper, SwiperSlide } from "swiper/react";

export interface NewsCarouselProps {
  news: News[];
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ news }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const [index, setIndex] = useState(0);
  const currentNews = news[index];

  const next = () => {
    setIndex((prev) => prev + 1);
    swiperRef.slideNext();
  };

  const prev = () => {
    setIndex((prev) => prev - 1);
    swiperRef.slidePrev();
  };

  useEffect(() => {
    setIndex(0);
    if (swiperRef) swiperRef.slideTo(0);
  }, [news, swiperRef]);

  return (
    <div className="w-full h-full relative">
      <Swiper className="w-full h-full" onSwiper={setSwiperRef}>
        {news.map((n) => (
          <SwiperSlide key={n.id}>
            <Image
              alt={currentNews.title}
              src={"/img/placeholder.jpg"}
              fill
              sizes="(min-width: 960px) 50vw, 100vw"
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col items-center text-center absolute gap-12 bottom-0 left-0 right-0 p-12 z-10">
        <p className="font-bold text-4xl line-clamp-2 break-words max-xl:text-xl">
          {currentNews.summary}
        </p>
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            disabled={index < 1}
            onClick={prev}
            className="text-foreground border-foreground border-2"
          >
            <ChevronLeftIcon />
          </Button>
          {index > 0 && <DotButton onClick={prev} />}
          <DotButton disabled />
          {index < news.length - 1 && <DotButton onClick={next} />}
          <Button
            size="icon"
            disabled={index >= news.length - 1}
            onClick={next}
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
