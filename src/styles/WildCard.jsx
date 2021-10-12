import {StyleSheet} from 'react-native';

export const WildCardStyles = StyleSheet.create({
    match:{
        marginTop: 5+'%',
        width: 90+'%',
        marginLeft: 5+"%"
    },
    list:{
        height: 85+'%',
        marginTop: 2+'%',
        backgroundColor: 'grey'
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
    divisionalBtn:{
        marginTop: 5+'%',
        marginBottom: 1,
        marginLeft: 20+'%',
        width: 60+'%',
        backgroundColor: 'red',
        borderRadius: 20
    },
    divisionalBtnText:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export const WildCardAway = (awayColor)=> StyleSheet.create({
    away:{
        color: awayColor.colors.color1 || 'white',
        marginBottom: 2 + '%',
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: awayColor.colors.color2|| 'white'
    }
});

export const WildCardHome = (homeColor)=> StyleSheet.create({
    home:{
        color: homeColor.colors.color1,
        textAlign: 'right',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 2+'%',
        backgroundColor: homeColor.colors.color2
    }
});