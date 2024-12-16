"use client";

import { EventCard } from "@/entities/events";
import { Event } from "@/shared/types/event";
import { Button } from "@/shared/ui/button";
import React, { useState } from "react";

export interface EventsSectionProps {
  allEvents: Event[];
}

const EventsSection: React.FC<EventsSectionProps> = ({ allEvents }) => {
  const [page, setPage] = useState(1);
  const perPageItems = 6;
  const totalPages = Math.ceil(allEvents.length / perPageItems);
  const pageEvents = allEvents.slice(0, page * perPageItems);

  const onMoreClick = () => {
    if (page >= totalPages) setPage(totalPages);
    else setPage((prev) => prev + 1);
  };

  return (
    <section className="space-y-12">
      <main className="space-y-12">
        {pageEvents.map((e) => (
          <EventCard event={e} key={e.title} />
        ))}
      </main>
      {page < totalPages && (
        <Button
          variant="primary"
          className="block mx-auto px-12 max-lg:w-full"
          onClick={onMoreClick}
        >
          Показать ещё
        </Button>
      )}
    </section>
  );
};

export default React.memo(EventsSection);
