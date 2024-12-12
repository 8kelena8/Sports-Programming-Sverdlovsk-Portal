"use client";

import { DocumentCard } from "@/entities/document";
import { LastNews } from "@/entities/news";
import { cn } from "@/shared/lib/utils";
import { Document } from "@/shared/types/document";
import { Button } from "@/shared/ui/button";
import { ContentHero } from "@/shared/ui/layout";
import SectionHeading from "@/shared/ui/sectionHeading";
import React, { useState } from "react";

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
  const [category, setCategory] = useState("Все");

  const breadcrumbs = [
    { title: "Главная", link: "/" },
    { title: "Документы", link: "/documents" },
  ];

  const categories = ["Все", ...new Set(documentItems.map((d) => d.category))];

  return (
    <>
      <ContentHero title="Документы" breadcrumbs={breadcrumbs} />
      <div className="container mx-auto my-12 space-y-12 px-5">
        <section className="space-y-12">
          <div className="flex gap-5 overflow-x-auto">
            {categories.map((c) => (
              <Button
                variant="primary"
                onClick={() => setCategory(c)}
                className={cn({ "bg-white text-primary": c === category })}
                key={c}
              >
                {c}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
            {documentItems
              .filter((d) => category === "Все" || d.category === category)
              .map((d) => (
                <DocumentCard document={d} key={d.id} />
              ))}
          </div>
          <Button variant="primary" className="block mx-auto">
            Показать ещё
          </Button>
        </section>

        <section className="space-y-12">
          <SectionHeading title="Последние новости" />
          <LastNews />
        </section>
      </div>
    </>
  );
};

export default React.memo(DocumentsListPage);
