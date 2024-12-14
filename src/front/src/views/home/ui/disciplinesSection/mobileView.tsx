"use client";

import { Button } from "@/shared/ui/button";
import SectionHeading from "@/shared/ui/sectionHeading";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import { DisciplineCard } from "@/entities/discipline";
import { Discipline } from "@/shared/types/discipline";

export interface MobileViewProps {
  disciplines: Discipline[];
}

const MobileView: React.FC<MobileViewProps> = ({ disciplines }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <>
      <div className="flex items-end gap-5">
        <SectionHeading title="Дисциплины спортивного программирования" />
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
      <div className="">
        <Swiper spaceBetween={25} slidesPerView={1} onSwiper={setSwiperRef}>
          {disciplines.map((d) => (
            <SwiperSlide key={d.id}>
              <DisciplineCard discipline={d} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default React.memo(MobileView);
