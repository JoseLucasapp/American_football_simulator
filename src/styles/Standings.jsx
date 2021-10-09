import { StyleSheet } from 'react-native';

export const StandingsStyle = StyleSheet.create({
    list:{
        height: 90+'%'
    },
    afc:{
        color: 'red',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 3,
        marginLeft: 5+'%'
    },
    nfc:{
        marginTop: 15,
        marginBottom: 3,
        color: 'blue',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 5+'%'
    },
    topWordText:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    main:{
        backgroundColor: 'grey',
        height: 100+'%'
    },
    finish:{
        width: 50+'%',
        height: 40,
        backgroundColor: 'red',
        position: 'absolute',
        marginTop: 530,
        borderRadius: 15,
        justifyContent: 'center',
        marginLeft: 25+'%',
        opacity: 0,
        zIndex: -10
    }
});