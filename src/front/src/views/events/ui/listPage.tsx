import { EventCard } from "@/entities/events";
import { serverEventsController } from "@/shared/api/server";
import { Button } from "@/shared/ui/button";
import { ContentHero } from "@/shared/ui/layout";
import React from "react";

export interface EventsListPageProps {}

const EventsListPage: React.FC<EventsListPageProps> = async ({}) => {
  const events = await serverEventsController.getAllEvents();

  const breadcrumbs = [
    { title: "Главная", link: "/" },
    { title: "События", link: "/events" },
  ];

  return (
    <>
      <ContentHero title="События" breadcrumbs={breadcrumbs} />
      <div className="container mx-auto my-12 space-y-12 px-5">
        <section className="space-y-12">
          <main className="space-y-12">
            {events.map((e) => (
              <EventCard event={e} key={e.title} />
            ))}
          </main>
          <div className="">
            <Button
              variant="primary"
              className="block mx-auto px-12 max-lg:w-full"
            >
              ПОКАЗАТЬ ЕЩЁ
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default EventsListPage;
