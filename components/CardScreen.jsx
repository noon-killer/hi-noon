import React from 'react'
import { styles } from '../stylesheets/styles'
import { Text, TouchableOpacity, View } from 'react-native';

export const CardScreen = () => (
  <View style={styles.layout}>
    <TouchableOpacity>
      <Text style={styles.title}>My Cards</Text>
    </TouchableOpacity>
  </View>
); 