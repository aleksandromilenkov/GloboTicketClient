import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteEventAPI } from "../../Services/apiEvents";
import { useNavigate } from "react-router-dom";

const useDeleteEvent = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate: deleteEvent, isPending:isLoading, error } = useMutation({
        mutationFn: deleteEventAPI,
        onSuccess: (data) => {
          toast.success("Event deleted successfully.");
          queryClient.invalidateQueries({
            queryKey: ["events"]
            });
          navigate("/events");
        },
        onError: (error) => {
          toast.error(`Delete failed: ${error.message}`);
        },
      });
    
      return { deleteEvent, isLoading, error };
    }
  
  export default useDeleteEvent;
  