
import React, { createContext, useContext, useState } from 'react'

const TransDetailsContext = createContext();


export const TransDetailsProvider = ({ children }) => {

    const transDetails = {
        name: "React in 30 Days",
        author: "Ravi",
        price: 300
    };

    const [transData, setTransData] = useState({ transDetails });


    return (
        <TransDetailsContext.Provider value={{ transData, setTransData }}>
            {children}
        </TransDetailsContext.Provider>
    )

}

export const useTransDetailsContextData = () => useContext(TransDetailsContext);

