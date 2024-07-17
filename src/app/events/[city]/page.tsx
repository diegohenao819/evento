import ListCards from "@/components/listCards";
import { EventoEvent } from "@/lib/types";
import { Suspense } from "react";
import loading from "@/app/loading";
import Loading from "@/app/loading";
import { Metadata } from "next";

type cityProps = {
  params: {
    city: string;
  };
};

export async function generateMetadata({params}: cityProps): Promise<Metadata> {
  const city = params.city;

  return {
    title: `${city === "all" ? "All events" : `Events in: ${city.toUpperCase().charAt(0) + city.slice(1)}`}`,  
    description: ` ${city === "all" ? "All events" : `Events in: ${city}`}` ,
  }

}


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
