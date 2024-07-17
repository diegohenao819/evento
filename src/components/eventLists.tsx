import { EventoEvent } from "@prisma/client";
import { EventCard } from "./eventCard";

type EventListProps = {
  events: EventoEvent[];
};

const EventLists = ({ events }: EventListProps) => {
  return (
    <main className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
       <EventCard key={event.id} event={event} />
      ))}
    </main>
  );
};

export default EventLists;
