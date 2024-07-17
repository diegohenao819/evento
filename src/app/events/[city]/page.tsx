import ListCards from "@/components/listCards";
import { EventoEvent } from "@/lib/types";
import { Suspense } from "react";
import loading from "@/app/loading";
import Loading from "@/app/loading";

type cityProps = {
  params: {
    city: string;
  };
};

const city = async ({ params }: cityProps) => {
  const city = params.city;

 
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
       <Suspense fallback={<Loading/> } >
         <ListCards city= {city} />
       </Suspense>
      </div>
    </main>
  );
};

export default city;
