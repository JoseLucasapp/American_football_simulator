import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Context} from '../context/authContext';

import { WildCardAway, WildCardHome, WildCardStyles } from '../styles/WildCard';
import { GeneralStyles } from '../styles/GeneralStyle';

import Score from '../templates/Score';

const WildCard = ({navigation})=>{
    const {selectedAfc, selectedNfc} = useContext(Context);

    const selectedRound = [];

    const [team1AfcPoints, setTeam1AfcPoints] = useState(0);
    const [team2AfcPoints, setTeam2AfcPoints] = useState(0);
    const [team1NfcPoints, setTeam1NfcPoints] = useState(0);
    const [team2NfcPoints, setTeam2NfcPoints] = useState(0);

    const DivisionalRound = ()=>{
        if(team1AfcPoints > team2AfcPoints){
            selectedRound.push(selectedAfc[0][1]);
        }else{
            selectedRound.push(selectedAfc[0][0]);
        }
    }

    return(
        <View style={GeneralStyles.generalMain}>
            <View style={WildCardStyles.match}>
                <Text 
                style={WildCardAway(selectedAfc[0][1]).away}
                >{selectedAfc[0][1].team}</Text>
                <Score team1={team1AfcPoints} setTeam1={setTeam1AfcPoints} team2={team2AfcPoints} setTeam2={setTeam2AfcPoints} conference={selectedAfc[0][0].conference} />
                <Text 
                style={WildCardHome(selectedAfc[0][0]).home}>{selectedAfc[0][0].team}</Text>
            </View>
            <View style={WildCardStyles.match}>
                <Text style={WildCardAway(selectedNfc[0][1]).away}>{selectedNfc[0][1].team}</Text>
                <Score team1={team1NfcPoints} setTeam1={setTeam1NfcPoints} team2={team2NfcPoints} setTeam2={setTeam2NfcPoints} conference={selectedNfc[0][0].conference} />
                <Text style={WildCardHome(selectedNfc[0][0]).home}>{selectedNfc[0][0].team}</Text>
            </View>
        </View>
    )
}

export default WildCard;