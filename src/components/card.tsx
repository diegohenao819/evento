import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  event: EventoEvent;
};

const Card = ({ event }: CardProps) => {
  return (
  <Link href={`/event/${event.slug}`}>
      <section className="  h-[400px] w-[300px] bg-white/5 overflow-hidden rounded-lg relative flex flex-col">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={300}
          height={100}
          className="object-cover"
        />
    <div className="absolute mt-5 flex flex-col bg-slate-950 rounded"> 
            <p className="  font-bold  text-bold w-12 flex justify-center text-center"> 
              {new Date(event.date).toLocaleString("en-US", {
                day: "2-digit",
                
              })}
            </p>
            <p className="  text-bold text-yellow-400 -mt-1  w-12 flex justify-center text-center"> 
              {new Date(event.date).toLocaleString("en-US", {
                
                month: "short",
              })}
            </p>
    </div>
        <div className="flex flex-col items-center justify-center m-auto ">
          <h1 className="mt-5 font-bold text-lg ">{event.name}</h1>
          <p className="text-white/80"> By {event.organizerName} </p>
          <p className="text-white/80 mt-4 text-sm" >{event.location} </p>
        </div>
      </section>
  </Link >
  );
};

export default Card;
