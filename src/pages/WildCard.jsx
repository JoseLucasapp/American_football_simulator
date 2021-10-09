import React, {useContext} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Context} from '../context/authContext';

const WildCard = ({navigation})=>{
    const {selectedAfc, selectedNfc} = useContext(Context);

    return(
        <View>
            <Text>WildCard</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Standings")}>
                <Text>Standings</Text>
            </TouchableOpacity>
            <Text>{selectedAfc[0]}</Text>
            <Text>{selectedNfc[0]}</Text>
        </View>
    )
}

export default WildCard;