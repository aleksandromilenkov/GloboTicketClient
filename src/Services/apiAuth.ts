import { CreateAppUser, LoginAppUser } from "../Models/AppUser";

const api = "https://localhost:7052/api/Account/";

export const loginAPI = async (appUser: LoginAppUser) =>{
    try{
        const resp = await fetch(api + "authenticate",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(appUser)
        });
        if (!resp.ok) {
            const errorData = await resp.json(); // Parse error details (if any)
            throw new Error(errorData[0] || `Error ${resp.status}: ${resp.statusText}`);
        }
        return await resp?.json();
    }catch(error:any){
        throw new Error(error.response?.data.message || error.message);
    }
}

export const registerAPI = async (appUser: CreateAppUser) =>{
    console.log(appUser);
    try{
        const resp = await fetch(api + "register",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(appUser)
        });
        if (!resp.ok) {
            const errorData = await resp.json(); // Parse error details (if any)
            throw new Error(errorData[0] || `Error ${resp.status}: ${resp.statusText}`);
        }
        return await resp?.json();
    }catch(error:any){
        throw new Error(error.response?.data.message || error.message);
    }
}