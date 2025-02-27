import { getEvents } from "@/lib/utils";
import Link from "next/link";
import Card from "./card";
import PaginationControls from "./PaginationControls";

type ListCardsProps = {
  city: string;
  page: number;
};

const ListCards = async ({ city, page }: ListCardsProps) => {
  const { events, totalCount } = await getEvents(city, page);
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath = totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";

  if (!events) {
    events === null;
  }

  return (
    <main className="flex gap-5 flex-wrap flex-row justify-center items-center ">
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

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </main>
  );
};

export default ListCards;
