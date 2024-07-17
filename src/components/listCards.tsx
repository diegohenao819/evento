import React from 'react'
import Card from './card'
import  {EventoEvent}  from '../lib/types'


type ListCardsProps = {
  events: EventoEvent[]
}

const ListCards = ({events}: ListCardsProps) => {
  return (
    <main className="flex gap-2 flex-wrap flex-row justify-center items-center">
        {events.map((event) => (
       
        <Card  key={event.id} event={event} />
      ))}

     
    </main>
  )
}

export default ListCards