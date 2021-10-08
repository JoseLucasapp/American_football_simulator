import React from 'react';

import { StyleSheet } from 'react-native';

export const StandingsStyle = StyleSheet.create({
    list:{
        height: 100+'%'
    },
    afc:{
        color: 'red',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 3,
    },
    nfc:{
        marginTop: 15,
        marginBottom: 3,
        color: 'blue',
        fontSize: 22,
        fontWeight: 'bold'
    },
    topWordText:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    teamBtn:{
        marginTop: 5
    },
    main:{
        backgroundColor: 'grey',
        height: 100+'%'
    }
});