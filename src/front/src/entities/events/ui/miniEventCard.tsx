import { getMonthString, getWeekDayString } from "@/shared/lib/date";
import { Event } from "@/shared/types/event";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface MiniEventCardProps {
  event: Event;
}

const MiniEventCard: React.FC<MiniEventCardProps> = ({ event }) => {
  return (
    <div className="bg-white text-black flex flex-col gap-5 pb-5 border w-fit border-primary">
      <div className="flex flex-col gap-1 px-5">
        {event.startDate && (
          <div className="flex gap-1 items-center">
            {event.startDate && event.endDate && (
              <span className="lg:hidden">с</span>
            )}
            <span className="">{event.startDate.getDate()}</span>
            <div className="flex gap-1 leading-none">
              <span className="">{getMonthString(event.startDate)}</span>
              <span>{getWeekDayString(event.startDate)}</span>
            </div>
          </div>
        )}
        {event.endDate && (
          <div className="flex gap-1 items-center">
            {event.startDate && event.endDate && (
              <span className="lg:hidden">до</span>
            )}
            <span className="">{event.endDate.getDate()}</span>
            <div className="flex gap-1 leading-none">
              <span className="">{getMonthString(event.endDate)}</span>
              <span>{getWeekDayString(event.endDate)}</span>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-5 px-5">
        <h2 className="font-bold text-xl break-words">{event.title}</h2>
        <p className=" line-clamp-4 break-words">{event.description}</p>
        <Link href={`/events/${event.id}`} className="block text-primary">
          Посмотреть
        </Link>
      </div>

      <Image
        alt={event.title}
        src="/img/news.png"
        width={351}
        height={300}
        className="object-cover h-52 w-full order-first"
      />
    </div>
  );
};

export default React.memo(MiniEventCard);
