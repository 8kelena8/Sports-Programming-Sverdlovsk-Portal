import { serverEventsController } from "@/shared/api/server";
import { ContentHero } from "@/shared/ui/layout";
import React from "react";
import EventsSection from "./eventsSection";

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
        <EventsSection allEvents={events} />
      </div>
    </>
  );
};

export default EventsListPage;
