import { useQuery } from "@tanstack/react-query";
import { getEventByIdAPI, getEventsAPI } from "../../Services/apiEvents";
import { useParams } from "react-router-dom";

const useEventById = () => {
    const {eventId} = useParams();
    const {
      isLoading,
      data: event,
      error,
    } = useQuery({
      queryKey:["event", eventId],
      queryFn: ()=>getEventByIdAPI(eventId!),
    });
    return [isLoading, event, error];
  };
  
  export default useEventById;
  