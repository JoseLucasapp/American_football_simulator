import React, {useContext} from 'react';
import { View, Text, SectionList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {Context} from '../context/authContext';
import {StandingsStyle} from '../styles/Standings';

const Standings = ({navigation})=>{

    const {details} = useContext(Context);

    return(
        <View style={StandingsStyle.main}>
            <View style={StandingsStyle.topWordView}><Text style={StandingsStyle.topWordText}>Divisional Standings</Text></View>
            <View style={StandingsStyle.list}>
                <SectionList
                sections={[
                    {title: 'NFC West', data: [
                        {key: details.nfc.west.one.name, color1: details.nfc.west.one.color1, color2: details.nfc.west.one.color2},
                        {key: details.nfc.west.two.name, color1: details.nfc.west.two.color1, color2: details.nfc.west.two.color2},
                        {key: details.nfc.west.three.name, color1: details.nfc.west.three.color1, color2: details.nfc.west.three.color2},
                        {key: details.nfc.west.four.name, color1: details.nfc.west.four.color1, color2: details.nfc.west.four.color2}]},
                    {title: 'NFC South', data: [
                        {key: details.nfc.south.one.name, color1: details.nfc.south.one.color1, color2: details.nfc.south.one.color2},
                        {key: details.nfc.south.two.name, color1: details.nfc.south.two.color1, color2: details.nfc.south.two.color2},
                        {key: details.nfc.south.three.name, color1: details.nfc.south.three.color1, color2: details.nfc.south.three.color2},
                        {key: details.nfc.south.four.name, color1: details.nfc.south.four.color1, color2: details.nfc.south.four.color2}
                    ]},
                    {title: 'NFC North', data: [
                        {key: details.nfc.north.one.name, color1: details.nfc.north.one.color1, color2: details.nfc.north.one.color2},
                        {key: details.nfc.north.two.name, color1: details.nfc.north.two.color1, color2: details.nfc.north.two.color2},
                        {key: details.nfc.north.three.name, color1: details.nfc.north.three.color1, color2: details.nfc.north.three.color2},
                        {key: details.nfc.north.four.name ,color1: details.nfc.north.four.color1, color2: details.nfc.north.four.color2}
                    ]},
                    {title: 'NFC East', data: [
                        {key: details.nfc.east.one.name, color1: details.nfc.east.one.color1, color2: details.nfc.east.one.color2},
                        {key: details.nfc.east.two.name, color1: details.nfc.east.two.color1, color2: details.nfc.east.two.color2},
                        {key: details.nfc.east.three.name, color1: details.nfc.east.three.color1, color2: details.nfc.east.three.color2},
                        {key: details.nfc.east.four.name, color1: details.nfc.east.four.color1, color2: details.nfc.east.four.color2}
                    ]},

                    {title: 'AFC West', data: [
                        {key: details.afc.west.one.name, color1: details.afc.west.one.color1, color2: details.afc.west.one.color2},
                        {key: details.afc.west.two.name, color1: details.afc.west.two.color1, color2: details.afc.west.two.color2},
                        {key: details.afc.west.three.name, color1: details.afc.west.three.color1, color2: details.afc.west.three.color2},
                        {key: details.afc.west.four.name, color1: details.afc.west.four.color1, color2: details.afc.west.four.color2}
                    ]},
                    {title: 'AFC South', data: [
                        {key: details.afc.south.one.name, color1: details.afc.south.one.color1, color2: details.afc.south.one.color2},
                        {key: details.afc.south.two.name, color1: details.afc.south.two.color1, color2: details.afc.south.two.color2},
                        {key: details.afc.south.three.name, color1: details.afc.south.three.color1, color2: details.afc.south.three.color2},
                        {key: details.afc.south.four.name, color1: details.afc.south.four.color1, color2: details.afc.south.four.color2}
                    ]},
                    {title: 'AFC North', data: [
                        {key: details.afc.north.one.name, color1: details.afc.north.one.color1, color2: details.afc.north.one.color2},
                        {key: details.afc.north.two.name, color1: details.afc.north.two.color1, color2: details.afc.north.two.color2},
                        {key: details.afc.north.three.name, color1: details.afc.north.three.color1, color2: details.afc.north.three.color2},
                        {key: details.afc.north.four.name, color1: details.afc.north.four.color1, color2: details.afc.north.four.color2}
                    ]},
                    {title: 'AFC East', data: [
                        {key: details.afc.east.one.name, color1: details.afc.east.one.color1, color2: details.afc.east.one.color2},
                        {key: details.afc.east.two.name, color1: details.afc.east.two.color1, color2: details.afc.east.two.color2},
                        {key: details.afc.east.three.name, color1: details.afc.east.three.color1, color2: details.afc.east.three.color2},
                        {key: details.afc.east.four.name, color1: details.afc.east.four.color1, color2: details.afc.east.four.color2}
                    ]}
                ]}
                renderItem={({item}) => <TouchableOpacity style={{marginTop: 5, backgroundColor: item.color2}}><Text style={StandingsStyle.teamText, {fontSize: 18, fontWeight: 'bold', color: item.color1}}>{item.key}</Text></TouchableOpacity>}
                renderSectionHeader={({section}) => <Text style={section.title[0] === 'N'? StandingsStyle.nfc: StandingsStyle.afc}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
                />
            </View>
        </View>
    )
}

export default Standings;