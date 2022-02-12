import React from 'react'
import { styles } from '../stylesheets/styles'
import { Text, TouchableOpacity, View } from 'react-native';

export const ChoiceScreen = () => {


  return (

    <View>

      <Text style={styles.text}>Choose between the two!</Text>
      <Choice choice={'person 1'} />
      <Choice choice={'person 2'}/>

    </View>
  )

}; 

const Choice = ({choice}) => (
  
  <View>
    <TouchableOpacity 
      key={choice}
      onPress={() => addToLikeList(choice)}
    >
      <Text style={styles.title}>{choice}</Text>
    </TouchableOpacity>
  </View>

)