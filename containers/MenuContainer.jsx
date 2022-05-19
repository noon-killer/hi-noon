import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../Components/HomeScreen';
import { ChoiceScreen } from '../Components/ChoiceScreen';
import { ForumScreen } from '../Components/ForumScreen';
import { CardScreen } from '../Components/CardScreen';
import { PlayGroundScreen } from '../Components/PlayGroundScreen';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Add the new stack navigator above this line

export const AppNavigator = () => (
  <Tab.Navigator>
  
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Choice" component={ChoiceScreen} />
    <Tab.Screen name="Forum" component={ForumScreen} />
    <Tab.Screen name="Card" component={CardScreen} />
    <Tab.Screen name="PlayGround" component={PlayGroundScreen} />
    
  </Tab.Navigator>
);

