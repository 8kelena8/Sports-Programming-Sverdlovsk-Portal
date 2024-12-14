import { LastNews } from "@/entities/news";
import { ContentHero } from "@/shared/ui/layout";
import SectionHeading from "@/shared/ui/sectionHeading";
import React from "react";
import DocumentsList from "./documentsList";
import { serverDocumentsController } from "@/shared/api/server";

export interface DocumentsListPageProps {}

const DocumentsListPage: React.FC<DocumentsListPageProps> = async ({}) => {
  const documents = await serverDocumentsController.getAllDocuments();
  const categories = await serverDocumentsController.getDocumentCategories();

  const breadcrumbs = [
    { title: "Главная", link: "/" },
    { title: "Документы", link: "/documents" },
  ];

  return (
    <>
      <ContentHero title="Документы" breadcrumbs={breadcrumbs} />
      <div className="container mx-auto my-12 space-y-12 px-5">
        <DocumentsList documents={documents} categories={categories} />

        <section className="space-y-12">
          <SectionHeading title="Последние новости" />
          <LastNews />
        </section>
      </div>
    </>
  );
};

export default DocumentsListPage;
