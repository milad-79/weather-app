import React, { createContext, useEffect, useState } from "react";
import axios from "axios"


type ApiValue = any

type ContextProviderProps = {

    children: React.ReactNode

}

type UserContextType = {
    data: ApiValue | null,
    search: ApiValue,
    setData: React.Dispatch<React.SetStateAction<ApiValue>>,
    setSearch: React.Dispatch<React.SetStateAction<string | null>>
}



export const MyProvider = createContext<UserContextType | null>(null);

export const MyContext = ({children}:ContextProviderProps)=>{
    const[data ,setData] = useState<ApiValue>(null)
    const[search ,setSearch] = useState<string | null>(null)

    useEffect(()=>{
        if(search){
            axios.get(`http://api.weatherapi.com/v1/current.json?key=5eab841d4340483a9b685139220603 &q=${search}&aqi=no`)
            .then((res)=>{
            
                setData(res.data)
            
            }).catch(()=>{
            
                alert('Please Search Agein or Search Other Countery')
            
            })
        }
    },[search])

    return(

        <MyProvider.Provider value={{
            data,
            search,
            setData,
            setSearch
        }}>
        
            {children}
        
        </MyProvider.Provider>

)
}
