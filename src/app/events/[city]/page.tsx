import Loading from "@/app/loading";
import ListCards from "@/components/listCards";
import { Metadata } from "next";
import { Suspense } from "react";

type cityProps = {
  params: {
    city: string;
  };
};


type EventPageProps = cityProps & {
  searchParams: {[key: string]: string | string[] | undefined};
};


export async function generateMetadata({
  params,
}: cityProps): Promise<Metadata> {
  const city = params.city;

  return {
    title: `${
      city === "all"
        ? "All events"
        : `Events in: ${city.toUpperCase().charAt(0) + city.slice(1)}`
    }`,
    description: ` ${city === "all" ? "All events" : `Events in: ${city}`}`,
  };
}

const city = async ({ params, searchParams }: EventPageProps) => {
  const city = params.city;
  const page = searchParams.page || 1;

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
        <Suspense key={city + page} fallback={<Loading />}>
          <ListCards  city={city} page={+page} />
        </Suspense>
      </div>
    </main>
  );
};

export default city;
