import {StyleSheet} from 'react-native';

export const WildCardStyles = StyleSheet.create({
    match:{
        marginTop: 5+'%',
        width: 90+'%',
        marginLeft: 5+"%"
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