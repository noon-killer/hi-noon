import React, { useState } from 'react'
import { styles } from '../stylesheets/styles'
import { Text, View, TextInput, Button } from 'react-native';

import doPost from './doPost';

export const HomeScreen = ({navigation}) => {
  
  // function doPost(endpoint) {
  //   fetch(endpoint, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'Application/JSON'
  //     },
  //     body: JSON.stringify({
  //       name,
  //       age,
  //       location,
  //       profile_id,
  //     })
  //   })
  //     .then(res => res.json())
  //     .then((data) => {
  //       console.log('returned data: ', data);
  //     })
  //     .catch(err => console.log('CreatePerson fetch /api/create_person: ERROR: ', err));
  // };
  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const profile_id = Math.floor(Math.random()*1000);

  const postBody = {
          name,
          age,
          location,
          profile_id,
        }

  return(
  <View style={styles.layout}>
    <Text style={styles.title}>Home</Text>
    <View style={styles.view}>

      <Text style={styles.text}>
        {name ? `Hi ${name}!` : 'What is your name?'}
      </Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={false}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.text}>
        {age ? `You are ${age} years old.` : 'What is your age?'}
      </Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={false}
        onChangeText={num => setAge(num)}
      />

      <Text style={styles.text}>
        {location ? `${location} is a lovely place!` : 'Where are you from?'}
      </Text>
      <TextInput
        style={styles.textInput}
        secureTextEntry={false}
        onChangeText={text => setLocation(text)}
      />

        <Button 
          onPress={() => {
            console.log('logging body:', postBody);
            return doPost('dawsontest.com/dating_app/create_person', postBody)
          }}
          title="Submit my info"
        />

    </View>
  </View>
  )
};
