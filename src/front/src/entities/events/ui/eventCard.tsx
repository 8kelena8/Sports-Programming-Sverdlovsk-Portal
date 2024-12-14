import { getMonthString, getWeekDayString } from "@/shared/lib/date";
import { Event } from "@/shared/types/event";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white text-black grid grid-cols-[auto_1fr_auto] gap-5 max-lg:pb-5 max-lg:grid-cols-1 border border-primary">
      <div className="flex flex-col gap-1 xl:min-w-80 lg:p-5 px-5">
        {event.startDate && (
          <div className="flex gap-1 max-lg:items-center">
            <span className="flex gap-1 lg:text-5xl lg:font-bold">
              {event.startDate && event.endDate && (
                <span className="lg:hidden">с</span>
              )}
              {event.startDate.getDate()}
            </span>
            <div className="flex lg:flex-col max-lg:gap-1 leading-none">
              <span className="lg:font-bold lg:text-lg">
                {getMonthString(event.startDate)}
              </span>
              <span>{getWeekDayString(event.startDate)}</span>
            </div>
          </div>
        )}
        {event.startDate && event.endDate && (
          <span className="font-bold max-lg:hidden ml-4 text-xl">до</span>
        )}
        {event.endDate && (
          <div className="flex gap-1 max-lg:items-center">
            <span className="flex gap-1 lg:text-5xl lg:font-bold">
              {event.startDate && event.endDate && (
                <span className="lg:hidden">до</span>
              )}
              {event.endDate.getDate()}
            </span>
            <div className="flex lg:flex-col max-lg:gap-1 leading-none">
              <span className="lg:font-bold lg:text-lg">
                {getMonthString(event.endDate)}
              </span>
              <span>{getWeekDayString(event.endDate)}</span>
            </div>
          </div>
        )}
      </div>

      <div className="lg:py-5 space-y-5 max-lg:px-5">
        <h2 className="font-bold text-3xl max-lg:text-xl">{event.title}</h2>
        <p className="lg:text-xl line-clamp-4">{event.description}</p>
        <Link
          href={`/events/${event.id}`}
          className="block text-primary lg:text-xl"
        >
          Посмотреть
        </Link>
      </div>

      <Image
        alt={event.title}
        src="/img/news.png"
        width={445}
        height={380}
        className="object-cover max-lg:h-80 w-full max-lg:order-first"
      />
    </div>
  );
};

export default React.memo(EventCard);
