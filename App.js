// Import React and Component
import React, { useState, useEffect } from 'react';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';

// miscellaneous imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { MainContainer } from './Containers/MainContainer'
import { NativeBaseProvider, extendTheme } from "native-base";
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RequestProfileDetails } from "./Components/RequestProfileDetails";
import { RequestProfileSummary } from "./Components/RequestProfileSummary";
import { FullPostScreen } from "./Components/Screens/FullPostScreen";

const Stack = createNativeStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

// const App = () => {
//   useEffect(() => {
//     (async () => await Font.loadAsync({
//       Roboto: require('./assets/fonts/walkway/Walkway_Black.ttf'),
//       Roboto_medium: require('./assets/fonts/walkway/Walkway_Oblique.ttf'),
//     }))();
//    }, []);
   
//   return (
//     <NativeBaseProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="MainContainer" component={MainContainer} />
//           <Stack.Screen name="RequestProfileDetails" component={RequestProfileDetails} />
//           <Stack.Screen name="RequestProfileSummary" component={RequestProfileSummary} />
//           <Stack.Screen name="FullPostScreen" component={FullPostScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </NativeBaseProvider>
//   );
// };
// };

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: true}}
        />
        {/* Auth Navigator which includer Login Signup will come once */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer as we will use our custom header
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App

