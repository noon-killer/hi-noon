import React from 'react'
// import { styles } from '../stylesheets/styles'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import {getRandomPersons} from './getRadomPersons'


export const ChoiceScreen = () => {
  
  // const choices = getRandomPersons('dawsontest.com/dating_app/get_random_persons', body)


  const choices = [
    {
        "id": null,
        "created_at": "2022-02-03T21:08:59.40Z",
        "updated_at": "2022-02-03T21:08:59.40Z",
        "age": 25,
        "location": "Los Angeles, CA",
        "name": "Person A",
        "profileId": null
    },
    {
        "id": null,
        "created_at": "2022-02-03T21:10:37.49Z",
        "updated_at": "2022-02-03T21:10:37.49Z",
        "age": 26,
        "location": "San Francisco, CA",
        "name": "Person B",
        "profileId": null
    }
 ]
 
  return (

    <View>
    

      <Text style={styles.text}>Choose between the two!</Text>
      <Choice choice={choices[0]} />
      <Choice choice={choices[1]}/>

    </View>
  )

}; 

const Choice = ({choice}) => (
  
  <View style={styles.choice}>
    <TouchableOpacity 
      key={choice.id}
      onPress={() => addToLikeList(choice, tempArr)}
    >
      <Text style={styles.title}>{choice}</Text>
    </TouchableOpacity>
  </View>

)



export const styles = StyleSheet.create({
  choice: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row'
}
})