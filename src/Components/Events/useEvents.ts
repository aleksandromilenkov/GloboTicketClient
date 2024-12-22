import { useQuery } from "@tanstack/react-query";
import { getEventsAPI } from "../../Services/apiEvents";

const useEvents = () => {
    const {
      isLoading,
      data: events,
      error,
    } = useQuery({
      queryKey: ["events"],
      queryFn: getEventsAPI,
    });
    return [isLoading, events, error];
  };
  
  export default useEvents;
  