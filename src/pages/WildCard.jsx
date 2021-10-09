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
            <Text>{selectedAfc[0][6].team}</Text>
            <Text>{selectedAfc[0][1].team}</Text>

            <Text>{selectedAfc[0][5].team}</Text>
            <Text>{selectedAfc[0][2].team}</Text>

            <Text>{selectedAfc[0][4].team}</Text>
            <Text>{selectedAfc[0][3].team}</Text>
            
            <Text>{selectedNfc[0][6].team}</Text>
            <Text>{selectedNfc[0][1].team}</Text>

            <Text>{selectedNfc[0][5].team}</Text>
            <Text>{selectedNfc[0][2].team}</Text>

            <Text>{selectedNfc[0][4].team}</Text>
            <Text>{selectedNfc[0][3].team}</Text>
        </View>
    )
}

export default WildCard;