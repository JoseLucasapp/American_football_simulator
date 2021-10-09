import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import FirstPage from './pages/FirstPage';
import Standings from './pages/Standings';
import WildCard from './pages/WildCard';

const Stack = createStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator initialRouteName="Standings">
            
            <Stack.Screen name="FirstPage" component={FirstPage} 
            options={{
              headerShown: false
            }}/>

            <Stack.Screen name="Standings" component={Standings} 
            options={{
              headerShown: false
            }}/>

            <Stack.Screen name="WildCard" component={WildCard} 
            options={{
              headerShown: false
            }}/>
            
        </Stack.Navigator>
    );
  }