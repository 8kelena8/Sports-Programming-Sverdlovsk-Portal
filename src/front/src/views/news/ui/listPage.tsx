import { ContentHero } from "@/shared/ui/layout";
import React from "react";

export interface ListNewsPageProps {}

const ListNewsPage: React.FC<ListNewsPageProps> = ({}) => {
  const breadcrumbs = [
    { title: "Главная", link: "/" },
    { title: "Новости", link: "/news" },
  ];

  return (
    <>
      <ContentHero title="Новости" breadcrumbs={breadcrumbs} />
      <div className=""></div>
      <main></main>
    </>
  );
};

export default React.memo(ListNewsPage);
