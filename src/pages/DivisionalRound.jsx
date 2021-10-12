import React, { useContext } from 'react';

import { View, Text } from 'react-native';

import {Context} from '../context/authContext';

const DivisionalRound = ({navigation})=>{
    const {wildCardAfc, wildCardNfc} = useContext(Context);
    return(
        <View>
            <Text>{wildCardNfc[0][0].team}</Text>
            <Text>{wildCardAfc[0][3].team}</Text>
        </View>
    )
}

export default DivisionalRound;