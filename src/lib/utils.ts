import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import prisma from "./db";



export const getEvents = unstable_cache(async(city: string, page = 1)=> {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city  : city === "all"? undefined : city.toUpperCase().charAt(0) + city.slice(1),
    },
    orderBy: {
      date: 'asc',
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount;

  if (city === "all") {
    totalCount = await prisma.eventoEvent.count();
  }else{
    totalCount = await prisma.eventoEvent.count({
      where: {
        city: city.toUpperCase().charAt(0) + city.slice(1),
      },
    });
  }

  if (!events) {
    return notFound()
}
  return {
    events,
    totalCount,
  }; 
}
)



export const getEvent =  unstable_cache(async(slug: string)=> {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
})