import React from 'react'
import useEvents from '../Components/Events/useEvents'

type Props = {}

const EventsPage = (props: Props) => {
    const [isLoading, events, error] = useEvents();
    console.log(events);
  return (
    <div>EventsPage</div>
  )
}

export default EventsPage