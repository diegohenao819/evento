import { notFound } from "next/navigation";
import prisma from "./db";



export async function getEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city  : city === "all"? undefined : city.toUpperCase().charAt(0) + city.slice(1),
    },
    orderBy: {
      date: 'asc',
    },
  });

  if (!events) {
    return notFound()
}

  return events;
}


export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
}