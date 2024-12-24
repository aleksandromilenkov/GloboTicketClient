import React from 'react'
import useEvents from '../Components/Events/useEvents'
import EventActions from '../Components/Events/EventActions';
import EventList from '../Components/Events/EventList';

type Props = {}

const EventsPage = (props: Props) => {
    const [isLoading, events, error] = useEvents();
    console.log(events);
  return (
    <div style={{padding:"1rem"}}>
        <h1>Event Overview</h1>
        <EventActions/>
        <EventList/>
    </div>
  )
}

export default EventsPage