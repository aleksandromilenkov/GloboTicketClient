import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEventAPI } from "../../Services/apiEvents";

const useCreateEvent = () => {
    const { mutate: createEvent, isPending:isLoading, error } = useMutation({
        mutationFn: createEventAPI,
        onSuccess: (data) => {
          toast.success("Event created successfully.");
        },
        onError: (error) => {
          toast.error(`Create failed: ${error.message}`);
        },
      });
    
      return { createEvent, isLoading, error };
    }
  
  export default useCreateEvent;
  