import React from 'react'
import Card from './card'
import  {EventoEvent}  from '@prisma/client'


type ListCardsProps = {
  city: string;
};


const ListCards = async ({city}: ListCardsProps) => {

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex gap-2 flex-wrap flex-row justify-center items-center">
        {events.map((event) => (
       
        <Card  key={event.id} event={event} />
      ))}

     
    </main>
  )
}

export default ListCards