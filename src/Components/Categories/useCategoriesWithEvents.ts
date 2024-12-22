import { useQuery } from "@tanstack/react-query";
import { getCategoriesWithEventsAPI } from "../../Services/apiCategories";
import { useParams } from "react-router-dom";
import { useState } from "react";

const useCategoriesWithEvents = () => {
    const [includeHistory, setIncludeHistory] = useState(false);
    const {
        isLoading,
        data: categoriesWithEvents,
        error,
      } = useQuery({
        queryKey: ["categoriesWithEvents", includeHistory],
        queryFn: () => getCategoriesWithEventsAPI(includeHistory),
      });
  
      return {
        isLoading,
        categoriesWithEvents,
        error,
        includeHistory,
        setIncludeHistory,
      };
    }
  export default useCategoriesWithEvents;