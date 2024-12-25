import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEventAPI } from "../../Services/apiEvents";
import { useState } from "react";

const useCreateEvent = () => {
    const [isEventCreationTriggered, setIsEventCreationTriggered] = useState<boolean>(false);
    const [isEventCreatedSuccessfully, setIsEventCreatedSuccessfully] = useState<boolean>(false);
    const [isEventCreatedFailed, setIsEventCreatedFailed] = useState<boolean>(false);
    const { mutate: createEvent, isPending:isLoading, error } = useMutation({
        mutationFn: createEventAPI,
        onSuccess: (data) => {
          toast.success("Event created successfully.");
          setIsEventCreationTriggered(true)
          setIsEventCreatedSuccessfully(true);
        },
        onError: (error) => {
          toast.error(`Create failed: ${error.message}`);
          setIsEventCreationTriggered(true)
          setIsEventCreatedFailed(true);
        },
      });
    
      return { createEvent, isLoading, error, isEventCreatedSuccessfully, isEventCreatedFailed, isEventCreationTriggered, setIsEventCreationTriggered};
    }
  
  export default useCreateEvent;
  