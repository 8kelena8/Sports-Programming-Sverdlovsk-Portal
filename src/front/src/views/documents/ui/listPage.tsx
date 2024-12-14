import { LastNews } from "@/entities/news";
import { Document } from "@/shared/types/document";
import { ContentHero } from "@/shared/ui/layout";
import SectionHeading from "@/shared/ui/sectionHeading";
import React from "react";
import DocumentsList from "./documentsList";

const documentItems: Document[] = [
  {
    id: 1,
    title: "Устав",
    category: "Нормативные документы",
    file_link: "https://google.com",
    upload_date: new Date(),
  },
  {
    id: 2,
    title: "Устав",
    category: "Категория 2",
    file_link: "https://google.com",
    upload_date: new Date(),
  },
  {
    id: 3,
    title: "Устав",
    category: "Категория 2",
    file_link: "https://google.com",
    upload_date: new Date(),
  },
  {
    id: 4,
    title: "Устав",
    category: "Категория 2",
    file_link: "https://google.com",
    upload_date: new Date(),
  },
  {
    id: 5,
    title: "Устав",
    category: "Категория 3",
    file_link: "https://google.com",
    upload_date: new Date(),
  },
  {
    id: 6,
    title: "Устав",
    category: "Категория 3",
    file_link: "https://google.com",
    upload_date: new Date(),
  },
];

export interface DocumentsListPageProps {}

const DocumentsListPage: React.FC<DocumentsListPageProps> = ({}) => {
  const breadcrumbs = [
    { title: "Главная", link: "/" },
    { title: "Документы", link: "/documents" },
  ];

  return (
    <>
      <ContentHero title="Документы" breadcrumbs={breadcrumbs} />
      <div className="container mx-auto my-12 space-y-12 px-5">
        <DocumentsList documents={documentItems} />

        <section className="space-y-12">
          <SectionHeading title="Последние новости" />
          <LastNews />
        </section>
      </div>
    </>
  );
};

export default React.memo(DocumentsListPage);
