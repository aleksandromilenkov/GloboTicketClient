import React from 'react'
import EditEventForm from '../Components/Events/EditEventForm'
import { useParams } from 'react-router-dom';
import useEventById from '../Components/Events/useEventById';
import LoadingSpinner from '../UI/LoadingSpinner';
import { EventDetailsModel } from '../Models/EventDetails';

type Props = {}

const EventDetailsPage = (props: Props) => {
    const [isLoading, event, error] = useEventById();

    if(isLoading) return <LoadingSpinner/>
    
    const isEventDetailsModel = (event: unknown): event is EventDetailsModel => {
        return (event as EventDetailsModel)?.name !== undefined;
    };
  return (
    <div>EventDetailsPage
        {isEventDetailsModel(event) && <EditEventForm event={event}/>}
    </div>
  )
}

export default EventDetailsPage