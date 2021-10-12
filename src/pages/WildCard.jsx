import React, {useContext, useEffect, useState} from 'react';
import { View, Text, SectionList } from 'react-native';
import {Context} from '../context/authContext';

import { WildCardAway, WildCardHome, WildCardStyles } from '../styles/WildCard';
import { GeneralStyles } from '../styles/GeneralStyle';

import Score from '../templates/Score';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WildCard = ({navigation})=>{
    const {selectedAfc, selectedNfc, setWildCardAfc, setWildCardNfc } = useContext(Context);

    const selectedAfcRound = [];
    const selectedNfcRound = [];

    const [team1AfcPoints, setTeam1AfcPoints] = useState(0);
    const [team2AfcPoints, setTeam2AfcPoints] = useState(0);
    const [team3AfcPoints, setTeam3AfcPoints] = useState(0);
    const [team4AfcPoints, setTeam4AfcPoints] = useState(0);
    const [team5AfcPoints, setTeam5AfcPoints] = useState(0);
    const [team6AfcPoints, setTeam6AfcPoints] = useState(0);

    const [team1NfcPoints, setTeam1NfcPoints] = useState(0);
    const [team2NfcPoints, setTeam2NfcPoints] = useState(0);
    const [team3NfcPoints, setTeam3NfcPoints] = useState(0);
    const [team4NfcPoints, setTeam4NfcPoints] = useState(0);
    const [team5NfcPoints, setTeam5NfcPoints] = useState(0);
    const [team6NfcPoints, setTeam6NfcPoints] = useState(0);

    const Divisional = ()=>{
        setWildCardNfc((old)=> [...old, selectedNfcRound]);
        setWildCardAfc((old)=> [...old, selectedAfcRound]);
        return navigation.navigate('Divisional');
    }

    const DivisionalRound = ()=>{
        selectedAfcRound.push(selectedAfc[0][0]);
        selectedNfcRound.push(selectedNfc[0][0]);
        
        if(team1AfcPoints > team2AfcPoints){
            selectedAfcRound.push(selectedAfc[0][6]);
        }else{
            selectedAfcRound.push(selectedAfc[0][1]);
        }
        if(team3AfcPoints > team4AfcPoints){
            selectedAfcRound.push(selectedAfc[0][5]);
        }else{
            selectedAfcRound.push(selectedAfc[0][2]);
        }
        if(team5AfcPoints > team6AfcPoints){
            selectedAfcRound.push(selectedAfc[0][4]);
        }else{
            selectedAfcRound.push(selectedAfc[0][3]);
        }

        if(team1NfcPoints > team2NfcPoints){
            selectedNfcRound.push(selectedNfc[0][6]);
        }else{
            selectedNfcRound.push(selectedNfc[0][1]);
        }
        if(team3NfcPoints > team4NfcPoints){
            selectedNfcRound.push(selectedNfc[0][5]);
        }else{
            selectedNfcRound.push(selectedNfc[0][2]);
        }
        if(team5NfcPoints > team6NfcPoints){
            selectedNfcRound.push(selectedNfc[0][4]);
        }else{
            selectedNfcRound.push(selectedNfc[0][3]);
        }

        return Divisional();
    }

    return(
        <View style={GeneralStyles.generalMain}>
            <View style={WildCardStyles.topWordView}><Text style={WildCardStyles.topWordText}>Wild Card</Text></View>
            <View style={WildCardStyles.list}>
                <SectionList
                sections={[
                    {title: 'NFC #01', data: [
                        {home: selectedNfc[0][6], homePoint: team2NfcPoints, homeSetPoint: setTeam2NfcPoints, away: selectedNfc[0][1], awayPoint: team1NfcPoints, awaySetPoint: setTeam1NfcPoints}
                    ]},
                    {title: 'NFC #02', data: [
                        {home: selectedNfc[0][5], homePoint: team4NfcPoints, homeSetPoint: setTeam4NfcPoints, away: selectedNfc[0][2], awayPoint: team3NfcPoints, awaySetPoint: setTeam3NfcPoints}
                    ]},
                    {title: 'NFC #03', data: [
                        {home: selectedNfc[0][4], homePoint: team6NfcPoints, homeSetPoint: setTeam6NfcPoints, away: selectedNfc[0][3], awayPoint: team5NfcPoints, awaySetPoint: setTeam5NfcPoints}
                    ]},

                    {title: 'AFC #01', data: [
                        {home: selectedAfc[0][6], homePoint: team2AfcPoints, homeSetPoint: setTeam2AfcPoints, away: selectedAfc[0][1], awayPoint: team1AfcPoints, awaySetPoint: setTeam1AfcPoints}
                    ]},
                    {title: 'AFC #02', data: [
                        {home: selectedAfc[0][5], homePoint: team4AfcPoints, homeSetPoint: setTeam4AfcPoints, away: selectedAfc[0][2], awayPoint: team3AfcPoints, awaySetPoint: setTeam3AfcPoints}
                    ]},
                    {title: 'AFC #03', data: [
                        {home: selectedAfc[0][4], homePoint: team6AfcPoints, homeSetPoint: setTeam6AfcPoints, away: selectedAfc[0][3], awayPoint: team5AfcPoints, awaySetPoint: setTeam5AfcPoints}
                    ]}
                ]}
                renderItem={({item}) => <View style={WildCardStyles.match}>
                <Text style={WildCardAway(item.away).away}>{item.away.team}</Text>
                <Score team1={item.homePoint} setTeam1={item.homeSetPoint} team2={item.awayPoint} setTeam2={item.awaySetPoint} conference={item.home.conference} />
                <Text style={WildCardHome(item.home).home}>{item.home.team}</Text>
            </View>}
                renderSectionHeader={({section}) => <Text style={section.title[0] === 'N'? WildCardStyles.nfc: WildCardStyles.afc}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
                />
            </View>
            <TouchableOpacity style={WildCardStyles.divisionalBtn} onPress={()=>DivisionalRound()}>
                <Text style={WildCardStyles.divisionalBtnText}>Divisional Round</Text></TouchableOpacity>
        </View>
    )
}

export default WildCard;