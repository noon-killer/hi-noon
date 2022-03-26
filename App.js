import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainContainer } from './containers/MainContainer'
import { NativeBaseProvider, extendTheme } from "native-base";
import * as Font from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RequestProfileDetails } from "./components/RequestProfileDetails";
import { RequestProfileSummary } from "./components/RequestProfileSummary";
import { FullPostScreen } from "./components/FullPostScreen";

const Stack = createNativeStackNavigator();

const theme = extendTheme({
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      200: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      300: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'Roboto-Regular',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      600: {
        normal: 'Roboto-Medium',
        italic: 'Roboto-MediumItalic',
      },
      // Add more variants
      //   700: {
      //     normal: 'Roboto-Bold',
      //   },
      //   800: {
      //     normal: 'Roboto-Bold',
      //     italic: 'Roboto-BoldItalic',
      //   },
      //   900: {
      //     normal: 'Roboto-Bold',
      //     italic: 'Roboto-BoldItalic',
      //   },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Roboto',
    title: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
  },
});

const App = () => {
  useEffect(() => {
    (async () => await Font.loadAsync({
      Roboto: require('./assets/fonts/walkway/Walkway_Black.ttf'),
      Roboto_medium: require('./assets/fonts/walkway/Walkway_Oblique.ttf'),
    }))();
   }, []);
   
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainContainer" component={MainContainer} />
          <Stack.Screen name="RequestProfileDetails" component={RequestProfileDetails} />
          <Stack.Screen name="RequestProfileSummary" component={RequestProfileSummary} />
          <Stack.Screen name="FullPostScreen" component={FullPostScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App

