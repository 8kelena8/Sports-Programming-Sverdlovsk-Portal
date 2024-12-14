import { PartnerCard } from "@/entities/partners";
import { serverPartnersController } from "@/shared/api/server";
import { Button } from "@/shared/ui/button";
import { ContentHero } from "@/shared/ui/layout";
import { Separator } from "@/shared/ui/separator";
import Image from "next/image";
import React from "react";

export interface PartnersListPageProps {}

const PartnersListPage: React.FC<PartnersListPageProps> = async ({}) => {
  const partners = await serverPartnersController.getAllPartners();

  const breadcrumbs = [
    { title: "Главная", link: "/" },
    { title: "Наши Партнеры", link: "/partners" },
  ];

  return (
    <>
      <ContentHero title="Наши Партнеры" breadcrumbs={breadcrumbs} />
      <section className="container mx-auto my-12 space-y-8 px-5">
        <Separator />
        {partners
          .map((p) => <PartnerCard key={p.name} partner={p} />)
          .flatMap((v, i) => [v, <Separator key={`slash_${i}`} />])}
        <Button variant="primary" className="block mx-auto">
          Показать ещё
        </Button>
      </section>
      <section className="container mx-auto my-20 bg-base-900 lg:p-16 max-lg:py-10 px-2 flex items-center gap-16 max-lg:gap-2">
        <div className="space-y-2">
          <h3 className="text-primary text-2xl max-lg:text-lg">
            Наши партнеры
          </h3>
          <p className="text-white lg:text-2xl">
            это ключевые организации, которые сотрудничают с нами для достижения
            общих целей, предоставляя экспертизу, ресурсы и синергию.{" "}
          </p>
        </div>
        <Image
          src={"/img/news.png"}
          alt="Наши партнеры"
          width={450}
          height={245}
          className="object-contain max-lg:w-40"
        />
      </section>
    </>
  );
};

export default PartnersListPage;
