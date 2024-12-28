import React from 'react'
import EditEventForm from '../Components/Events/EditEventForm'
import { useNavigate, useParams } from 'react-router-dom';
import useEventById from '../Components/Events/useEventById';
import LoadingSpinner from '../UI/LoadingSpinner';
import { EventDetailsModel } from '../Models/EventDetails';

type Props = {}

const EventDetailsPage = (props: Props) => {
    const [isLoading, event, error] = useEventById();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/events'); // Navigate back to the events page
    };
    if(isLoading) return <LoadingSpinner/>
    console.log(event);
    const isEventDetailsModel = (event: unknown): event is EventDetailsModel => {
        return (event as EventDetailsModel)?.name !== undefined;
    };
    if (error) return <p>Error loading data.</p>;
  return (
    <div>
        <h2>Details for {isEventDetailsModel(event) && event.name} </h2>
        {isEventDetailsModel(event) && <EditEventForm event={event}/>}
        <button onClick={handleGoBack}>Back to Events</button>
    </div>
  )
}

export default EventDetailsPage