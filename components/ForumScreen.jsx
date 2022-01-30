import React from 'react'
import { styles } from '../stylesheets/styles'
import { Text, TouchableOpacity, View } from 'react-native';

export const ForumScreen = () => (
  <View style={styles.layout}>
    <TouchableOpacity>
      <Text style={styles.title}>Forum</Text>
    </TouchableOpacity>
  </View>
); 