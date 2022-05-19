import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignUp } from "../Components/SignUpScreen";
import { ChoiceScreen } from "../Components/ChoiceScreen";
import { ForumScreen } from "../Components/ForumScreen";
import { CardScreen } from "../Components/CardScreen";
import { PlayGroundScreen } from "../Components/PlayGroundScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// Add the new stack navigator above this line

export const MainContainer = () => (
  
  <Tab.Navigator initialRouteName="Forum">
    <Tab.Screen name="SignUp" component={SignUp} />
    <Tab.Screen name="Forum" component={ForumScreen} />
    <Tab.Screen name="PlayGround" component={PlayGroundScreen} />
  </Tab.Navigator>
);
