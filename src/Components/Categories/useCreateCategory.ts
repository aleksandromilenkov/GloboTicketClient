import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEventAPI } from "../../Services/apiEvents";
import { createCategoryAPI } from "../../Services/apiCategories";

const useCreateCategory = () => {
    const { mutate: createCategory, isPending:isLoading, error } = useMutation({
        mutationFn: createCategoryAPI,
        onSuccess: (data) => {
          toast.success("Category created successfully.");
        },
        onError: (error) => {
          toast.error(`Create failed: ${error.message}`);
        },
      });
    
      return { createCategory, isLoading, error };
    }
  
  export default useCreateCategory;
  