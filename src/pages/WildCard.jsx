import React, {useContext} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Context} from '../context/authContext';

import Score from '../templates/Score';

const WildCard = ({navigation})=>{
    const {selectedAfc, selectedNfc} = useContext(Context);

    return(
        <View>
            <Text>WildCard</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Standings")}>
                <Text>Standings</Text>
            </TouchableOpacity>
            <Text>{selectedAfc[0][0].team}</Text>
            <Score team1={0} team2={2} conference={selectedAfc[0][0].conference} />
            <Text>{selectedAfc[0][1].team}</Text>
            
            <Text>{selectedNfc[0][0].team}</Text>
            <Score team1={0} team2={2} conference={selectedNfc[0][0].conference} />
            <Text>{selectedNfc[0][1].team}</Text>
        </View>
    )
}

export default WildCard;