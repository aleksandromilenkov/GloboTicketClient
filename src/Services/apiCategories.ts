import { CategoryModel, CreateCategoryModel } from "../Models/Category";

const api = "https://localhost:7052/api/Category/";

export const getCategoriesAPI = async () =>{
    try{
        const categories = await fetch(api+'all');
        if (!categories.ok) {
            const errorData = await categories.json(); // Parse error details (if any)
            throw new Error(errorData[0] || `Error ${categories.status}: ${categories.statusText}`);
        }
        return await categories?.json();
    }catch(error:any){
        throw new Error(error.response?.data.message || error.message);
    }
}
export const getCategoriesWithEventsAPI = async (includeHistory: boolean) =>{
    try{
        const categoriesWithEvents = await fetch(api + `allwithevents?includeHistory=${includeHistory}`);
        if (!categoriesWithEvents.ok) {
            const errorData = await categoriesWithEvents.json(); // Parse error details (if any)
            throw new Error(errorData[0] || `Error ${categoriesWithEvents.status}: ${categoriesWithEvents.statusText}`);
        }
        return await categoriesWithEvents?.json();
    }catch(error:any){
        throw new Error(error.response?.data.message || error.message);
    }
}
export const createCategoryAPI = async(categoryToCreate: CreateCategoryModel) => {
    try{
        const token = localStorage.getItem("GloboTicketToken");
        const resp = await fetch(api,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`, 
            },
            body: JSON.stringify(categoryToCreate)
        });
        if (!resp.ok) {
            const errorData = await resp.json(); // Parse error details (if any)
            throw new Error(errorData[0] || `Error ${resp.status}: ${resp.statusText}`);
        }
        return resp.json();
    }catch(error:any){
        throw new Error(error.response?.data.message || error.message);
    }
}

