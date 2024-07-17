<<<<<<< HEAD
import ListCards from "@/components/listCards";
=======
import EventLists from "@/components/eventLists";
>>>>>>> 3809b7e3335b386372901583be0b2e25125a857d
import { EventoEvent } from "@/lib/types";

type cityProps = {
  params: {
    city: string;
  };
};

const city = async ({ params }: cityProps) => {
  const city = params.city;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await response.json();

  return (
    <main>
      {city === "all" ? (
        <h1 className="text-3xl lg:text-6xl font-bold tracking-tight text-center">
          All events
        </h1>
      ) : (
        <h1 className="text-3xl lg:text-6xl font-bold tracking-tight text-center">
          Events in: {city.toUpperCase().charAt(0) + city.slice(1)}
        </h1>
      )}

      <div className="flex   flex-wrap mt-8 w-[1200px]  p-6 justify-center">
        <ListCards events={events} />
      </div>
    </main>
  );
};

export default city;
