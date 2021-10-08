import React, {createContext, useState} from "react";

import {details} from '../Data/config';

const Context = createContext();

function AuthProvider({children}){

    const nfc = useState({
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven: ''
    });

    const afc = useState({
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven: ''
    });

    return(
        <Context.Provider value={{details, afc, nfc}}>
            {children}
        </Context.Provider>
    )
}

export {Context, AuthProvider}