import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Score = ({team1 = 0, team2 = 0, conference})=>{
    let bgColor = 'red';
    if(conference === 'nfc') bgColor = 'blue';
    return(
        <View style={ScoreStyles.mainScore}>
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginLeft: 1+'%',
                backgroundColor: bgColor,
                width: 46+'%',
                textAlign: 'center',
                borderBottomRightRadius: 100,
                borderRadius: 20,
                color: 'white'
            }}>{team1}</Text>
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                backgroundColor: bgColor,
                width: 46+'%',
                textAlign: 'center',
                borderTopLeftRadius: 100,
                borderRadius: 20,
                color: 'white'
            }}>{team2}</Text>
        </View>
    )
}

const ScoreStyles = StyleSheet.create({
    mainScore:{
        width: 60+'%',
        marginLeft: 20+'%',
        display: 'flex',
        flexDirection: 'row'
    }
})

export default Score;