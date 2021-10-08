import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import FirstPage from './pages/FirstPage';
import Standings from './pages/Standings';

const Stack = createStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator initialRouteName="FirstPage">
            
            <Stack.Screen name="FirstPage" component={FirstPage} 
            options={{
              headerShown: false
            }}/>

            <Stack.Screen name="Standings" component={Standings} 
            options={{
              headerShown: false
            }}/>
            
        </Stack.Navigator>
    );
  }