import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const FirstPage = ({navigation})=>{
    return(
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Standings")}>
                <Text>Standings</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FirstPage;