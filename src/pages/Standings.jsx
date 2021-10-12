import React, {useContext, useEffect, useRef} from 'react';
import { View, Text, SectionList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {Context} from '../context/authContext';
import {StandingsStyle} from '../styles/Standings';

const Standings = ({navigation})=>{

    const {details, setSelectedAfc, setSelectedNfc} = useContext(Context);
    const wildCardBtn = useRef();
    const selectedAfc = [];
    const selectedNfc = [];
    let afc = 0;
    let nfc = 0;

    const deleteFromArray = (array, data)=>{
        for( let i = 0; i < array.length; i++){ 
                                   
            if ( array[i].team === data.team) { 
                array.splice(i, 1); 
                i--;
            }
        }
    }

    const wildCard = ()=>{
        setSelectedNfc((old)=> [...old, selectedNfc]);
        setSelectedAfc((old)=> [...old, selectedAfc]);
        return navigation.navigate('WildCard');
    }

    const arrayCountainsTeam = (array, data)=>{
        for( let i = 0; i < array.length; i++){ 
                                   
            if ( array[i].team === data.team) { 
                return true;
            }
        }

        return false;
    }

    const showWildCardBtn = (status)=>{
        if(status === 'unlock'){
            return wildCardBtn.current.setNativeProps({
                style:{
                    opacity: 1,
                    zIndex: 10
                }
            })
        }

        wildCardBtn.current.setNativeProps({
            style:{
                opacity: 0,
                zIndex: -10
            }
        })
    }

    const selectTeam = (data)=>{
        if(arrayCountainsTeam(selectedAfc, data)){
            afc-= 1;
            return deleteFromArray(selectedAfc, data);
        }
        if(arrayCountainsTeam(selectedNfc, data)){
            nfc -=1;
            return deleteFromArray(selectedNfc, data);
        }

        if(data.conference === 'afc'){
            if(selectedAfc.length === 7){
                return afc = 7;
            }
            selectedAfc.push(data);
            afc += 1;
        }else{
            if(selectedNfc.length === 7){
                return nfc = 7;
            }
            selectedNfc.push(data);
            nfc +=1;
        }

        showWildCardBtn(false);

        if(afc == 7 && nfc == 7){
            showWildCardBtn('unlock');
        }

    }

    return(
        <View style={StandingsStyle.main}>
            <View style={StandingsStyle.topWordView}><Text style={StandingsStyle.topWordText}>Divisional Standings</Text></View>
            <View style={StandingsStyle.list}>
                <SectionList
                sections={[
                    {title: 'NFC West', data: [
                        {key: details.nfc.west.one.name, color1: details.nfc.west.one.color1, color2: details.nfc.west.one.color2, conference: details.nfc.west.one.conference},
                        {key: details.nfc.west.two.name, color1: details.nfc.west.two.color1, color2: details.nfc.west.two.color2, conference: details.nfc.west.two.conference},
                        {key: details.nfc.west.three.name, color1: details.nfc.west.three.color1, color2: details.nfc.west.three.color2, conference: details.nfc.west.three.conference},
                        {key: details.nfc.west.four.name, color1: details.nfc.west.four.color1, color2: details.nfc.west.four.color2, conference: details.nfc.west.four.conference}]},
                    {title: 'NFC South', data: [
                        {key: details.nfc.south.one.name, color1: details.nfc.south.one.color1, color2: details.nfc.south.one.color2, conference: details.nfc.south.one.conference},
                        {key: details.nfc.south.two.name, color1: details.nfc.south.two.color1, color2: details.nfc.south.two.color2, conference: details.nfc.south.two.conference},
                        {key: details.nfc.south.three.name, color1: details.nfc.south.three.color1, color2: details.nfc.south.three.color2, conference: details.nfc.south.three.conference},
                        {key: details.nfc.south.four.name, color1: details.nfc.south.four.color1, color2: details.nfc.south.four.color2, conference: details.nfc.south.four.conference}
                    ]},
                    {title: 'NFC North', data: [
                        {key: details.nfc.north.one.name, color1: details.nfc.north.one.color1, color2: details.nfc.north.one.color2, conference: details.nfc.north.one.conference},
                        {key: details.nfc.north.two.name, color1: details.nfc.north.two.color1, color2: details.nfc.north.two.color2, conference: details.nfc.north.two.conference},
                        {key: details.nfc.north.three.name, color1: details.nfc.north.three.color1, color2: details.nfc.north.three.color2, conference: details.nfc.north.three.conference},
                        {key: details.nfc.north.four.name ,color1: details.nfc.north.four.color1, color2: details.nfc.north.four.color2, conference: details.nfc.north.four.conference}
                    ]},
                    {title: 'NFC East', data: [
                        {key: details.nfc.east.one.name, color1: details.nfc.east.one.color1, color2: details.nfc.east.one.color2, conference: details.nfc.east.one.conference},
                        {key: details.nfc.east.two.name, color1: details.nfc.east.two.color1, color2: details.nfc.east.two.color2, conference: details.nfc.east.two.conference},
                        {key: details.nfc.east.three.name, color1: details.nfc.east.three.color1, color2: details.nfc.east.three.color2, conference: details.nfc.east.three.conference},
                        {key: details.nfc.east.four.name, color1: details.nfc.east.four.color1, color2: details.nfc.east.four.color2, conference: details.nfc.east.four.conference}
                    ]},

                    {title: 'AFC West', data: [
                        {key: details.afc.west.one.name, color1: details.afc.west.one.color1, color2: details.afc.west.one.color2, conference: details.afc.west.one.conference},
                        {key: details.afc.west.two.name, color1: details.afc.west.two.color1, color2: details.afc.west.two.color2, conference: details.afc.west.two.conference},
                        {key: details.afc.west.three.name, color1: details.afc.west.three.color1, color2: details.afc.west.three.color2, conference: details.afc.west.one.conference},
                        {key: details.afc.west.four.name, color1: details.afc.west.four.color1, color2: details.afc.west.four.color2, conference: details.afc.west.four.conference}
                    ]},
                    {title: 'AFC South', data: [
                        {key: details.afc.south.one.name, color1: details.afc.south.one.color1, color2: details.afc.south.one.color2, conference: details.afc.south.one.conference},
                        {key: details.afc.south.two.name, color1: details.afc.south.two.color1, color2: details.afc.south.two.color2, conference: details.afc.south.two.conference},
                        {key: details.afc.south.three.name, color1: details.afc.south.three.color1, color2: details.afc.south.three.color2, conference: details.afc.south.three.conference},
                        {key: details.afc.south.four.name, color1: details.afc.south.four.color1, color2: details.afc.south.four.color2, conference: details.afc.south.four.conference}
                    ]},
                    {title: 'AFC North', data: [
                        {key: details.afc.north.one.name, color1: details.afc.north.one.color1, color2: details.afc.north.one.color2, conference: details.afc.north.one.conference},
                        {key: details.afc.north.two.name, color1: details.afc.north.two.color1, color2: details.afc.north.two.color2, conference: details.afc.north.two.conference},
                        {key: details.afc.north.three.name, color1: details.afc.north.three.color1, color2: details.afc.north.three.color2, conference: details.afc.north.three.conference},
                        {key: details.afc.north.four.name, color1: details.afc.north.four.color1, color2: details.afc.north.four.color2, conference: details.afc.north.four.conference}
                    ]},
                    {title: 'AFC East', data: [
                        {key: details.afc.east.one.name, color1: details.afc.east.one.color1, color2: details.afc.east.one.color2, conference: details.afc.east.one.conference},
                        {key: details.afc.east.two.name, color1: details.afc.east.two.color1, color2: details.afc.east.two.color2, conference: details.afc.east.two.conference},
                        {key: details.afc.east.three.name, color1: details.afc.east.three.color1, color2: details.afc.east.three.color2, conference: details.afc.east.three.conference},
                        {key: details.afc.east.four.name, color1: details.afc.east.four.color1, color2: details.afc.east.four.color2, conference: details.afc.east.four.conference}
                    ]}
                ]}
                renderItem={({item}) => <TouchableOpacity 
                    onPress={()=>selectTeam({conference:item.conference, team: item.key, colors: { color1: item.color1, color2: item.color2}})}
                    style={{marginTop: 5, backgroundColor: item.color2, width: 80+'%', marginLeft: 10+'%', height: 40, justifyContent: 'center'}}
                    >
                        <Text
                        style={StandingsStyle.teamText, {marginLeft: 2+'%',fontSize: 20, fontWeight: 'bold', color: item.color1}}
                        >{item.key}</Text></TouchableOpacity>}
                renderSectionHeader={({section}) => <Text style={section.title[0] === 'N'? StandingsStyle.nfc: StandingsStyle.afc}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
                />
            </View>
            <View ref={wildCardBtn} style={StandingsStyle.finish}>
                <TouchableOpacity onPress={()=> wildCard()} style={{width: 100+'%'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', textAlign:'center'}}>Wild Card</Text></TouchableOpacity></View>
        </View>
    )
}

export default Standings;