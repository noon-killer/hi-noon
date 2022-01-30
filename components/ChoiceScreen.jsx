import React from 'react'
import { styles } from '../stylesheets/styles'
import { Text, TouchableOpacity, View } from 'react-native';

export const ChoiceScreen = () => (
  <View style={styles.layout}>
    <TouchableOpacity>
      <Text style={styles.title}>Choice</Text>
    </TouchableOpacity>
  </View>
); 