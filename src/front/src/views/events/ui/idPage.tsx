import { MiniEventCard } from "@/entities/events";
import { serverEventsController } from "@/shared/api/server";
import { Event } from "@/shared/types/event";
import Image from "next/image";
import React from "react";

export interface EventsIdPageProps {
  id: Event["id"];
}

const EventsIdPage: React.FC<EventsIdPageProps> = async ({ id }) => {
  const event = await serverEventsController.getEventById(id);
  const lastEvents = await serverEventsController.getLastEvents();

  return (
    <div className="container mx-auto flex max-xl:flex-col gap-10 my-12 px-5">
      <main className="space-y-10">
        <div className="w-full">
          <Image
            alt={event.title}
            src={"/img/placeholder.jpg"}
            width={984}
            height={700}
            className="aspect-square object-contain"
          />
        </div>
        <h1 className="font-bold text-4xl max-xl:text-2xl">{event.title}</h1>
        <div className="xl:text-xl break-words">{event.description}</div>
      </main>
      <section className="bg-base-900 p-10 space-y-10 xl:max-w-[500px] xl:min-w-[500px] h-fit max-xl:p-5">
        <h2 className="font-bold text-2xl max-xl:text-xl">Последние события</h2>
        {lastEvents.map((e) => (
          <MiniEventCard event={e} key={e.id} />
        ))}
      </section>
    </div>
  );
};

export default EventsIdPage;
