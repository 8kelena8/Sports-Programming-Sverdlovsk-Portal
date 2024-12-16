import { NewsletterForm } from "@/features/contact";
import { serverNewsController } from "@/shared/api/server";
import { ContentHero } from "@/shared/ui/layout";
import Image from "next/image";
import React from "react";
import NewsSection from "./newsSection";

export interface ListNewsPageProps {}

const ListNewsPage: React.FC<ListNewsPageProps> = async ({}) => {
  const news = await serverNewsController.getAllNews();

  const breadcrumbs = [
    { title: "Главная", link: "/" },
    { title: "Новости", link: "/news" },
  ];

  return (
    <>
      <ContentHero title="Новости" breadcrumbs={breadcrumbs} />
      <div className="container mx-auto my-12 space-y-12 px-5">
        <div className="space-y-10 bg-base-900 p-10">
          <div className="flex justify-between items-center">
            <div className="space-y-5 max-w-[786px] w-full">
              <p className="font-bold text-xl max-lg:text-lg text-pretty">
                Подпишитесь на рассылку и будьте в курсе новостей
              </p>
              <div className="max-xl:hidden">
                <NewsletterForm />
              </div>
            </div>
            <Image
              src={"/img/newsletter.png"}
              alt="Подписка на рассылку"
              width={288}
              height={189}
              className="max-lg:w-36"
            />
          </div>
          <div className="xl:hidden">
            <NewsletterForm />
          </div>
        </div>
        <NewsSection allNews={news} />
      </div>
    </>
  );
};

export default ListNewsPage;
