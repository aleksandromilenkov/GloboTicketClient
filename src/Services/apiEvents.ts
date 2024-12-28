import { EventCreateModel, EventEditModel } from "../Models/Event";

const api = "https://localhost:7052/api/Event/";
export const getEventsAPI = async () =>{
    try{
        const events = await fetch(api);
        return await events?.json();
    }catch(error:any){
        throw new Error(error.response?.data.message || error.message);
    }
}
export const getEventByIdAPI = async (eventId: string) =>{
    try{
        const event = await fetch(api + eventId);
        return event.json();
    }catch(error:any){
        throw new Error(error.response?.data.message || error.message);
    }
}
export const createEventAPI = async(eventToCreate: EventCreateModel) => {
    try{
        const token = localStorage.getItem("GloboTicketToken");
        const resp = await fetch(api,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`, 
            },
            body: JSON.stringify(eventToCreate)
        });
    }catch(error:any){
        throw new Error(error.response?.data.message || error.message);
    }
}

export const editEventAPI = async(eventToUpdate: EventEditModel) => {
    try{
        const token = localStorage.getItem("GloboTicketToken");
        const resp = await fetch(api,{
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`, 
            },
            body: JSON.stringify(eventToUpdate)
        });
    }catch(error:any){
        throw new Error(error.response?.data.message || error.message);
    }
}

export const deleteEventAPI = async(eventId: number) => {
    try{
        const token = localStorage.getItem("GloboTicketToken");
        const resp = await fetch(api+ eventId,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`, 
            },
        });
    }catch(error:any){
        throw new Error(error.response?.data.message || error.message);
    }
}

export const exportEventsAPI = async () =>{
    try{
        const fileCsv = await fetch(api + "export");
        return fileCsv;
    }catch(error:any){
        throw new Error(error.response?.data.message || error.message);
    }
}