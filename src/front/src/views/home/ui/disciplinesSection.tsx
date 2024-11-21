"use client";

import React, { useState } from "react";
import SectionHeading from "./sectionHeading";
import { Discipline } from "@/shared/types/discipline";
import { DisciplineCard } from "@/entities/discipline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/shared/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export interface DisciplinesSectionProps {}

const disciplines: Discipline[] = [
  {
    id: 0,
    name: "Продуктовое программирование (хакатон)",
    history:
      "Создание программных продуктов (приложений, сайтов, сервисов), отвечающих заданным требованиям и выполняющих определенные прикладные задачи",
    rules: "",
  },
  {
    id: 1,
    name: "Продуктовое программирование (хакатон)",
    history:
      "Создание программных продуктов (приложений, сайтов, сервисов), отвечающих заданным требованиям и выполняющих определенные прикладные задачи",
    rules: "",
  },
  {
    id: 2,
    name: "Продуктовое программирование (хакатон)",
    history:
      "Создание программных продуктов (приложений, сайтов, сервисов), отвечающих заданным требованиям и выполняющих определенные прикладные задачи",
    rules: "",
  },
  {
    id: 3,
    name: "Продуктовое программирование (хакатон)",
    history:
      "Создание программных продуктов (приложений, сайтов, сервисов), отвечающих заданным требованиям и выполняющих определенные прикладные задачи",
    rules: "",
  },
  {
    id: 4,
    name: "Продуктовое программирование (хакатон)",
    history:
      "Создание программных продуктов (приложений, сайтов, сервисов), отвечающих заданным требованиям и выполняющих определенные прикладные задачи",
    rules: "",
  },
  {
    id: 5,
    name: "Продуктовое программирование (хакатон)",
    history:
      "Создание программных продуктов (приложений, сайтов, сервисов), отвечающих заданным требованиям и выполняющих определенные прикладные задачи",
    rules: "",
  },
];

const DisciplinesSection: React.FC<DisciplinesSectionProps> = ({}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <section className="space-y-12">
      <div className="flex max-xl:flex-col items-end gap-5">
        <SectionHeading title="Дисциплины спортивного программирования" />
        <div className="flex gap-5 xl:hidden">
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
      <div className="xl:hidden">
        <Swiper spaceBetween={25} slidesPerView={1} onSwiper={setSwiperRef}>
          {disciplines.map((d) => (
            <SwiperSlide key={d.id}>
              <DisciplineCard discipline={d} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="grid grid-cols-3 gap-20 max-xl:hidden">
        {disciplines.map((d) => (
          <DisciplineCard discipline={d} key={d.id} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(DisciplinesSection);
