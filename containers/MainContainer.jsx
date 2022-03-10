import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignUp } from "../components/SignUpScreen";
import { ChoiceScreen } from "../components/ChoiceScreen";
import { ForumScreen } from "../components/ForumScreen";
import { CardScreen } from "../components/CardScreen";
import { PlayGroundScreen } from "../components/PlayGroundScreen";

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
