import { getEvents } from "@/lib/utils";
import { EventoEvent } from "@prisma/client";
import Link from "next/link";
import Card from "./card";

type ListCardsProps = {
  city: string;
};

const ListCards = async ({ city }: ListCardsProps) => {
  const events: EventoEvent[] = await getEvents(city);

  if (!events) {
    events === null;
  }

  return (
    <main className="flex gap-2 flex-wrap flex-row justify-center items-center">
      {events.length === 0 ? (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-center mb-5">No events in this city</h1>

          <Link
            href="/events/all"
            className="text-accent border-2 p-2 m-5 mt-5"
          >
            See all events
          </Link>
        </div>
      ) : (
        events.map((event) => <Card key={event.id} event={event} />)
      )}
    </main>
  );
};

export default ListCards;
