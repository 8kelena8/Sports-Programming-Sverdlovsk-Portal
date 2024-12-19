import { cn } from "@/shared/lib/utils";
import { News } from "@/shared/types/news";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface MiniNewsCardProps {
  news: News;
  className?: string;
}

const MiniNewsCard: React.FC<MiniNewsCardProps> = ({ news, className }) => {
  return (
    <Link
      href={`/news/${news.id}`}
      className={cn("bg-base-400 flex", className)}
    >
      <Image
        alt={news.title}
        src={news.mainImage ?? "/img/placeholder.jpg"}
        width={182}
        height={134}
        className="object-contain max-xl:w-36"
      />
      <p className="p-5 font-bold line-clamp-4 break-words max-xl:text-sm">
        {news.summary}
      </p>
    </Link>
  );
};

export default React.memo(MiniNewsCard);
