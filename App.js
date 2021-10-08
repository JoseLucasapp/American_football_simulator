import React from 'react';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/Routes';
import { AuthProvider } from './src/context/authContext';

export default function App(){
  return (
      <AuthProvider>
        <NavigationContainer >
          <StatusBar hidden/>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
  );
}