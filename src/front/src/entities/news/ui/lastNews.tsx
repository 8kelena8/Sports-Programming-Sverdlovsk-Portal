import React from "react";
import NewsCard from "./newsCard";
import { serverNewsController } from "@/shared/api/server";

export interface LastNewsProps {}

const LastNews: React.FC<LastNewsProps> = async ({}) => {
  const news = await serverNewsController.getLastNews();

  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-1 max-xl:grid-cols-2 gap-5">
      {news.map((n) => (
        <NewsCard news={n} key={n.id} className="mx-auto" />
      ))}
    </div>
  );
};

export default React.memo(LastNews);
