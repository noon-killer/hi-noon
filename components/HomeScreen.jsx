import React, { useState } from 'react'
import { styles } from '../stylesheets/styles'
import { Text, View, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const HomeScreen = ({navigation}) => {
  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');

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

      <TouchableOpacity onPress={() => navigation.navigate('Choice')}>
        <Text> Go to my choices </Text>
      </TouchableOpacity>

      <Button 
        onPress={() => navigation.navigate('Forum')}
        title="Go to the forums"
      />
    </View>
  </View>
  )
};
