import { useQuery } from "@tanstack/react-query";
import { getCategoriesAPI } from "../../Services/apiCategories";

const useCategories = () => {
    const {
        isLoading,
        data: categories,
        error,
      } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategoriesAPI,
      });
  
      return {
        isLoading,
        categories,
        error,
      };
    }
  export default useCategories;