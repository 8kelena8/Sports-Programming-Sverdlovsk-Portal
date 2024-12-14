import { apiMapper } from "@/shared/lib/mapping";
import { Event, EventAPI } from "@/shared/types/event";
import { ListAPI } from "@/shared/types/generic";

const getAllEvents = async () => {
  const response = await fetch(
    new URL("/event-list", process.env.SERVER_API_URL),
    {
      next: {
        revalidate: parseInt(process.env.SERVER_FETCH_REVALIDATION_SECONDS!),
      },
    }
  );
  const json: ListAPI<EventAPI> = await response.json();
  return json.map((d) => apiMapper.mapEvent(d));
};

const getLastEvents = async () => {
  const allEvents = await getAllEvents();

  return allEvents
    .sort((a, b) =>
      !a.startDate || !b.startDate
        ? !a.endDate || !b.endDate
          ? 0
          : a.endDate.getTime() - b.endDate.getTime()
        : a.startDate.getTime() - b.startDate.getTime()
    )
    .slice(0, 5);
};

const getEventById = async (eventId: Event["id"]) => {
  const response = await fetch(
    new URL(`/event-detail/${eventId}`, process.env.SERVER_API_URL),
    {
      next: {
        revalidate: parseInt(process.env.SERVER_FETCH_REVALIDATION_SECONDS!),
      },
    }
  );
  const json: EventAPI = await response.json();
  return apiMapper.mapEvent(json);
};

const eventsController = {
  getAllEvents,
  getLastEvents,
  getEventById,
};

export default eventsController;
