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
        <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
          All events
        </h1>
      ) : (
        <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
          Events in: {city.toUpperCase().charAt(0) + city.slice(1)}
        </h1>
      )}

      {events.map((event) => (
        <li key={event.id}>{event.name} </li>
      ))}
    </main>
  );
};

export default city;
