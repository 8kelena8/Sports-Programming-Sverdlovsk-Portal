import React from "react";
import SectionHeading from "@/shared/ui/sectionHeading";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { PartnersCarousel } from "@/entities/partners";
import { serverPartnersController } from "@/shared/api/server";

const PartnersSection: React.FC = async ({}) => {
  const partners = await serverPartnersController.getAllPartners();

  return (
    <section className="space-y-12">
      <SectionHeading title="Партнёры и спонсоры" />
      <div className="flex gap-5 items-center max-xl:flex-col">
        <div className="xl:h-[650px] xl:max-w-[420px] max-xl:p-14 p-5 text-center text-2xl max-xl:text-lg font-bold bg-base-900 flex items-center">
          Познакомьтесь с нашими пациентами и спонсорами
        </div>
        <PartnersCarousel partners={partners} />
      </div>
    </section>
  );
};

export default PartnersSection;
