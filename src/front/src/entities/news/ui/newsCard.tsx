import { cn } from "@/shared/lib/utils";
import { News } from "@/shared/types/news";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface NewsCardProps {
  news: News;
  className?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, className }) => {
  return (
    <div className={cn("bg-base-900 p-7 space-y-7 max-w-[500px]", className)}>
      <p className="font-bold text-lg">
        {new Date(news.publicationDate).toLocaleDateString(undefined, {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <Image
        src="/img/news.png"
        alt={news.title}
        width={445}
        height={380}
        className="object-contain"
      />
      <p className="font-bold text-lg">{news.summary}</p>
      <Button variant="primary" asChild>
        <Link href={`/news/${news.id}`}>Посмотреть</Link>
      </Button>
    </div>
  );
};

export default React.memo(NewsCard);
