import { cn } from "@/shared/lib/utils";
import { News } from "@/shared/types/news";
import Image from "next/image";
import React from "react";

export interface MiniNewsCardProps {
  news: News;
  className?: string;
}

const MiniNewsCard: React.FC<MiniNewsCardProps> = ({ news, className }) => {
  return (
    <div className={cn("bg-base-400 flex", className)}>
      <Image
        alt={news.title}
        src="/img/news.png"
        width={182}
        height={134}
        className="object-contain"
      />
      <p className="p-5 font-bold line-clamp-4">{news.summary}</p>
    </div>
  );
};

export default React.memo(MiniNewsCard);
