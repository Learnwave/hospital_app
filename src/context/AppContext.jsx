import { createContext,useState, useEffect } from "react";
import { doctors } from "../assets/assets_frontend/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {

   
  

    const currencySymbol = "$"
    const backendUrl = import.meta.env.VITE_BACKEND_URL

        const value = {
                doctors,
                currencySymbol,
                backendUrl
    
        }

    
        const getDoctorData = async () => {

        }

        return(
            <AppContext.Provider value={value}>
                {props.children}
            </AppContext.Provider>
        )
}

export default AppContextProvider