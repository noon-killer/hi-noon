import React from 'react'
// import { styles } from '../stylesheets/styles'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export const ChoiceScreen = () => {
  
  // const choices = getRandomPersons('dawsontest.com/dating_app/get_random_persons', body)

  const choices = [
    {
        "id": 3088,
        "created_at": "2022-02-03T21:08:59.40Z",
        "updated_at": "2022-02-03T21:08:59.40Z",
        "age": 25,
        "location": "Los Angeles, CA",
        "name": "Person A",
        "profileId": null
    },
    {
        "id": 1077,
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
      <View style={styles.choice}>
        <Choice choice={choices[0]} />
        <Choice choice={choices[1]}/>
      </View>
      
    </View>
  )

}; 

const Choice = ({choice}) => {

  const likeObj = {
    "from_person_id": "9b2578dc-8580-11ec-90aa-a3f330350be8",
    "to_person_id": choice.id,
    "decision" : "LIKE"
 }

 return (
  <View style={styles.circle}>
    <TouchableOpacity 
      key={choice.id}
      onPress={() => createDecision(likeObj)}
    >
      <Text style={styles.title}>{choice.name}</Text>
    </TouchableOpacity>
  </View>
 )

}



export const styles = StyleSheet.create({
  choice: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row'
},
circle: {
  height: 50,
  width: 50,
  borderRadius: 100,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
}
})