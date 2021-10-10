import React, {createContext, useState} from "react";

import {details} from '../Data/config';

const Context = createContext();

function AuthProvider({children}){

    const [selectedAfc, setSelectedAfc] = useState(
        [[{
            conference: 'afc',
            team: 'Cincinnati Bengals',
            colors:{
                color1: '#FB4F14',
                color2: 'black',
            }
        },
        {
            conference: 'afc',
            team: 'Cleveland Browns',
            colors:{
                color1: '#311D00',
                color2: '#FF3C00',
            }
        }]]);
    const [selectedNfc, setSelectedNfc] = useState(
        [[{
            conference: 'nfc',
            team: 'Minnesota Vikings',
            colors:{
                color2: '#4F2683',
                color1: '#FFC62F',
            }
        },
        {
            conference: 'nfc',
            team: 'Detroit Lions',
            colors:{
                color1: '#0076B6',
                color2: '#B0B7BC',
            }
        }]]);

    return(
        <Context.Provider value={{details, selectedNfc, selectedAfc, setSelectedAfc, setSelectedNfc}}>
            {children}
        </Context.Provider>
    )
}

export {Context, AuthProvider}