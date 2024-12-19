"use client";

import React, { useState } from "react";
import SectionHeading from "@/shared/ui/sectionHeading";
import { Button } from "@/shared/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { NewsCard } from "@/entities/news";
import { Swiper, SwiperSlide } from "swiper/react";
import { News } from "@/shared/types/news";

export interface NewsSectionProps {
  news: News[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
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
      <Swiper
        spaceBetween={25}
        slidesPerView={1}
        breakpoints={{ 991: { slidesPerView: 2 }, 1281: { slidesPerView: 3 } }}
        onSwiper={setSwiperRef}
      >
        {news.slice(0, 9).map((n) => (
          <SwiperSlide className="!h-auto" key={n.id}>
            <NewsCard news={n} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default React.memo(NewsSection);
