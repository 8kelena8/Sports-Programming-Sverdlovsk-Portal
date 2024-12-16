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
    <div
      className={cn(
        "flex flex-col gap-7 bg-base-900 p-7 max-w-[500px] h-full",
        className
      )}
    >
      <p className="font-bold text-lg break-words">
        {news.publicationDate?.toLocaleDateString(undefined, {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <Image
        src={"/img/placeholder.jpg"}
        alt={news.title}
        width={445}
        height={380}
        className="object-contain"
      />
      <p className="font-bold text-lg break-words line-clamp-5 overflow-auto">
        {news.summary}
      </p>
      <Button variant="primary" className="mt-auto w-fit" asChild>
        <Link href={`/news/${news.id}`}>Посмотреть</Link>
      </Button>
    </div>
  );
};

export default React.memo(NewsCard);
