import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './containers/MenuContainer'
import { NativeBaseProvider, Box } from "native-base";

const App = () => {

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App

