import { NewsCarousel } from "@/entities/news";
import { serverNewsController } from "@/shared/api/server";
import React from "react";

export interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = async ({}) => {
  const news = await serverNewsController.getLastNews();

  return (
    <section className="grid grid-cols-2 xl:h-[700px] max-xl:grid-cols-1">
      <div className="bg-base-900 flex flex-col justify-center p-12 space-y-5">
        <h1 className="font-bold text-5xl leading-[72px] max-xl:text-xl text-balance">
          Федерация спортивного программирования Свердловской области
        </h1>
        <span className="text-xl max-xl:text-sm">
          Региональное отделение ФЕДЕРАЦИИ СПОРТИВНОГО ПРОГРАММИРОВАНИЯ
        </span>
      </div>
      <div className="max-lg:h-96 max-xl:h-[600px] max-xl:order-first">
        <NewsCarousel news={news} />
      </div>
    </section>
  );
};

export default HeroSection;
