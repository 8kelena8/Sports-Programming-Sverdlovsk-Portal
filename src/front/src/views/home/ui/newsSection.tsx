"use client";

import React, { useState } from "react";
import SectionHeading from "./sectionHeading";
import { Button } from "@/shared/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { News } from "@/shared/types/news";
import { NewsCard } from "@/entities/news";
import { Swiper, SwiperSlide } from "swiper/react";

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
  {
    id: 3,
    title: "Новость 1",
    publicationDate: "2022-04-12T17:09:34.000Z",
    summary:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
    fullContent:
      "«Код мира»: в Севастополе завершились международные соревнования по спортивному программированию",
  },
];

const NewsSection: React.FC<NewsSectionProps> = ({}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <section className="space-y-12">
      <div className="flex gap-5">
        <SectionHeading title="Новости" />
        <div className="flex gap-5">
          <Button
            size="icon"
            variant="primary"
            onClick={() => swiperRef.slidePrev()}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            size="icon"
            variant="primary"
            onClick={() => swiperRef.slideNext()}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
      <Swiper spaceBetween={25} slidesPerView={3} onSwiper={setSwiperRef}>
        {news.map((n) => (
          <SwiperSlide key={n.id}>
            <NewsCard news={n} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default React.memo(NewsSection);
