import React from "react";
import NewsSection from "./newsSection";
import { serverNewsController } from "@/shared/api/server";

const NewsSectionWrapper: React.FC = async ({}) => {
  const news = await serverNewsController.getAllNews();

  return <NewsSection news={news} />;
};

export default NewsSectionWrapper;
