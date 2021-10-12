import React, {createContext, useState} from "react";

import {details} from '../Data/config';

const Context = createContext();

function AuthProvider({children}){

    const [selectedAfc, setSelectedAfc] = useState([]);
    const [selectedNfc, setSelectedNfc] = useState([]);

    const [wildCardAfc, setWildCardAfc] = useState([]);
    const [wildCardNfc, setWildCardNfc] = useState([]);

    return(
        <Context.Provider 
        value={
            {
                details,
                selectedNfc,
                selectedAfc,
                setSelectedAfc,
                setSelectedNfc,
                wildCardAfc,
                wildCardNfc,
                setWildCardAfc,
                setWildCardNfc
            }}
        >
            {children}
        </Context.Provider>
    )
}

export {Context, AuthProvider}