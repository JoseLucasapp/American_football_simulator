import React, {useContext} from 'react';
import { View, Text } from 'react-native';

import {Context} from '../context/authContext';

const Standings = ({navigation})=>{

    const {details} = useContext(Context);

    return(
        <View>
            <Text>{details.nfc.west.one}</Text>
            <Text>{details.nfc.west.two}</Text>
        </View>
    )
}

export default Standings;