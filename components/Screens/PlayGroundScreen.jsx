import React from 'react'
import { styles } from '../../stylesheets/styles'
import { Text, TouchableOpacity, View } from 'react-native';

export const PlayGroundScreen = () => (
  <View style={styles.layout}>
    <TouchableOpacity>
      <Text style={styles.title}>PlayGround</Text>
    </TouchableOpacity>
  </View>
); 