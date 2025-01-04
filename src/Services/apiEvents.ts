import { EventCreateModel, EventEditModel } from "../Models/Event";

const api = "https://localhost:7052/api/Event/";
export const getEventsAPI = async () =>{
    try{
        const events = await fetch(api);
        if (!events.ok) {
            const errorData = await events.json(); // Parse error details (if any)
            throw new Error(errorData[0] || `Error ${events.status}: ${events.statusText}`);
        }
        return await events?.json();
    }catch(error:any){
        throw new Error(error.response?.data.message || error.message);
    }
}
export const getEventByIdAPI = async (eventId: string) =>{
    try{
        const event = await fetch(api + eventId);
        if (!event.ok) {
            const errorData = await event.json(); // Parse error details (if any)
            throw new Error(errorData[0] || `Error ${event.status}: ${event.statusText}`);
        }
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
        if (!resp.ok) {
            const errorData = await resp.json(); // Parse error details (if any)
            throw new Error(errorData[0] || `Error ${resp.status}: ${resp.statusText}`);
        }
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
        if (!resp.ok) {
            const errorData = await resp.json(); // Parse error details (if any)
            throw new Error(errorData.message || `Error ${resp.status}: ${resp.statusText}`);
        }
    }catch(error:any){
        throw new Error(error.response?.data.message || error.message);
    }
}

export const deleteEventAPI = async(eventId: string) => {
    try{
        // const token = localStorage.getItem("GloboTicketToken");
        const resp = await fetch(api+ eventId,{
            method: 'DELETE',
        });
        if (!resp.ok) {
            const errorData = await resp.json(); // Parse error details (if any)
            throw new Error(errorData.message || `Error ${resp.status}: ${resp.statusText}`);
        }
    }catch(error:any){
        throw new Error(error.response?.data.message || error.message);
    }
}

export const exportEventsAPI = async () =>{
    try{
        const response = await fetch(api + "export");
        if (!response.ok) {
            throw new Error('Failed to export events');
          }
        
          const blob = await response.blob(); // Convert response to blob
          return blob;
    }catch(error:any){
        throw new Error(error.response?.data.message || error.message);
    }
}