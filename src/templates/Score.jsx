import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Score = ({team1, setTeam1, team2, setTeam2, conference})=>{
    let bgColor = 'red';
    if(conference === 'nfc') bgColor = 'blue';

    const score = (setTeam, team, less = 'no') => {
        if(less ==='less'){
            if((team - 7) >= 0){
                return setTeam(team - 7);
            }else{
                return setTeam(0);
            }
        }
        return setTeam(team + 7);
    }

    const fg = (setTeam, team, less = 'no') => {
        if(less ==='less'){
            if(team > 0){
                return setTeam(team - 3);
            }else{
                return setTeam(0);
            }
        }
        return setTeam(team + 3);
    }


    return(
        <View style={ScoreStyles.mainScore}>
            <TouchableOpacity onPress={()=>fg(setTeam1, team1)} onLongPress={()=>fg(setTeam1, team1, 'less')} 
            style={{
                backgroundColor: bgColor, borderRadius: 20, marginTop: 6,marginRight: 5, width: 30}}
                >
                    <Text style={ScoreStyles.fgText}>FG</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>score(setTeam1, team1)} onLongPress={()=>score(setTeam1, team1, 'less')} style={{
                    backgroundColor: bgColor,
                    borderBottomRightRadius: 100,
                    borderRadius: 20,
                    width: 98,
                    marginLeft: 1,
                    justifyContent: 'center'}}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center'
                }}>{team1}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>score(setTeam2, team2)} onLongPress={()=>score(setTeam2, team2, 'less')} style={{
                    backgroundColor: bgColor,
                    borderBottomLeftRadius: 100,
                    borderRadius: 20,
                    width: 98,
                    marginLeft: 1}}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'white',
                    width: 100
                }}>{team2}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>fg(setTeam2, team2)} onLongPress={()=>fg(setTeam2, team2, 'less')} 
            style={{
                backgroundColor: bgColor, borderRadius: 20, marginTop: 6,marginLeft: 5, width: 30}}
                >
                    <Text style={ScoreStyles.fgText}>FG</Text>
            </TouchableOpacity>
        </View>
    )
}

const ScoreStyles = StyleSheet.create({
    mainScore:{
        width: 60+'%',
        marginLeft: 10+'%',
        display: 'flex',
        flexDirection: 'row'
    },
    fgText:{
        color: 'white',
        textAlign: 'center'
    }
})

export default Score;