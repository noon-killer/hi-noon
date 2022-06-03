import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignUp } from "../Components/Screens/SignUpScreen";
import { ChoiceScreen } from "../Components/Screens/ChoiceScreen";
import { ForumScreen } from "../Components/Screens/ForumScreen";
import { CardScreen } from "../Components/Screens/CardScreen";
import { PlayGroundScreen } from "../Components/Screens/PlayGroundScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const isLoggedIn = false
// Add the new stack navigator above this line

export const MainContainer = () => {
  return (
  <Tab.Navigator initialRouteName="Forum">
    <Tab.Screen name="SignUp" component={SignUp} />
    <Tab.Screen name="Forum" component={ForumScreen} />
    <Tab.Screen name="PlayGround" component={PlayGroundScreen} />
  </Tab.Navigator>
  )
}

