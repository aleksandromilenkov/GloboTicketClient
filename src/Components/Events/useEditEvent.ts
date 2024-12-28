import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editEventAPI } from "../../Services/apiEvents";

const useEditEvent = () => {
    const queryClient = useQueryClient();
    const { mutate: updateEvent, isPending:isLoading, error } = useMutation({
        mutationFn: editEventAPI,
        onSuccess: (data) => {
          toast.success("Event updated successfully.");
          queryClient.invalidateQueries({
            queryKey: ["events"]
            });
        },
        onError: (error) => {
          toast.error(`Update failed: ${error.message}`);
        },
      });
    
      return { updateEvent, isLoading, error };
    }
  
  export default useEditEvent;
  