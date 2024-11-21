"use client";

import React, { useState } from "react";
import SectionHeading from "./sectionHeading";
import { Partner } from "@/shared/types/partner";
import { Button } from "@/shared/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const partners: Partner[] = [
  {
    id: 0,
    name: "0",
    logo: "",
    promotionalContent: "",
  },
  {
    id: 1,
    name: "1",
    logo: "",
    promotionalContent: "",
  },
  {
    id: 2,
    name: "2",
    logo: "",
    promotionalContent: "",
  },
  {
    id: 3,
    name: "3",
    logo: "",
    promotionalContent: "",
  },
  {
    id: 4,
    name: "4",
    logo: "",
    promotionalContent: "",
  },
];

const PartnersSection: React.FC = ({}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <section className="space-y-12">
      <SectionHeading title="Партнёры и спонсоры" />
      <div className="flex gap-5 items-center max-xl:flex-col">
        <div className="xl:h-[650px] xl:max-w-[420px] max-xl:p-14 p-5 text-center text-2xl max-xl:text-lg font-bold bg-base-900 flex items-center">
          Познакомьтесь с нашими пациентами и спонсорами
        </div>
        <div className="space-y-5 min-w-0 max-w-full">
          <Swiper
            spaceBetween={25}
            slidesPerView={1}
            breakpoints={{
              991: { slidesPerView: 2 },
              1281: { slidesPerView: 3 },
            }}
            onSwiper={setSwiperRef}
          >
            {partners.map((p) => (
              <SwiperSlide className="" key={p.id}>
                <Image
                  src="/img/partner.png"
                  alt={p.name}
                  width={385}
                  height={385}
                  className="object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex gap-5 justify-center">
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
      </div>
    </section>
  );
};

export default React.memo(PartnersSection);
