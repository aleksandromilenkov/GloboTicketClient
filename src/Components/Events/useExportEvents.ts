import { useQuery } from "@tanstack/react-query";
import { exportEventsAPI } from "../../Services/apiEvents";

const useExportEvents = () => {
    const {
      isLoading,
      data: blob,
      error,
    } = useQuery({
      queryKey: ["exported"],
      queryFn: exportEventsAPI,
    });
    return [isLoading, blob, error];
  };
  
  export default useExportEvents;
  