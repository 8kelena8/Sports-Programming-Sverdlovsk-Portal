"use client";

import React, { useState } from "react";
import { Button } from "@/shared/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Partner } from "@/shared/types/partner";

export interface PartnersCarouselProps {
  partners: Partner[];
}

const PartnersCarousel: React.FC<PartnersCarouselProps> = ({ partners }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <div className="space-y-5 min-w-0 max-w-full">
      <Swiper
        spaceBetween={25}
        slidesPerView={1}
        breakpoints={{
          991: { slidesPerView: partners.length >= 2 ? 2 : partners.length },
          1281: { slidesPerView: partners.length >= 3 ? 3 : partners.length },
        }}
        onSwiper={setSwiperRef}
      >
        {partners.map((p) => (
          <SwiperSlide className="" key={p.id}>
            <Image
              src={p.logo ?? "/img/placeholder.jpg"}
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
  );
};

export default React.memo(PartnersCarousel);
