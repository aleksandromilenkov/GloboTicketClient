import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteEventAPI } from "../../Services/apiEvents";

const useDeleteEvent = () => {
    const { mutate: deleteEvent, isPending:isLoading, error } = useMutation({
        mutationFn: deleteEventAPI,
        onSuccess: (data) => {
          toast.success("Event deleted successfully.");
        },
        onError: (error) => {
          toast.error(`Delete failed: ${error.message}`);
        },
      });
    
      return { deleteEvent, isLoading, error };
    }
  
  export default useDeleteEvent;
  