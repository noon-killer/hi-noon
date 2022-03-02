import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../components/SignUp";
import { ChoiceScreen } from "../components/ChoiceScreen";
import { ForumScreen } from "../components/ForumScreen";
import { CardScreen } from "../components/CardScreen";
import { PlayGroundScreen } from "../components/PlayGroundScreen";

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Add the new stack navigator above this line

export const MainContainer = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Choice" component={ChoiceScreen} />
    <Tab.Screen name="Forum" component={ForumScreen} />
    <Tab.Screen name="Card" component={CardScreen} />
    <Tab.Screen name="PlayGround" component={PlayGroundScreen} />
  </Tab.Navigator>
);
