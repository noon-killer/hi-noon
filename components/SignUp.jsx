import React, { useState } from "react";
import { styles } from "../stylesheets/styles";
import { View, TextInput } from "react-native";
import {
  Text,
  Button,
  FormControl,
  Input,
  Stack,
  Container,
  Spacer,
  Center,
  Box,
  Flex,
} from "native-base";
import createPerson from "./createPerson";

export const HomeScreen = ({ navigation }) => {
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

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const profile_id = Math.floor(Math.random() * 1000);

  const postBody = {
    name,
    age,
    location,
    profile_id,
  };

  return (
    <Container>
      <Flex direction="row" alignItems={{ base: "center" }}>
        <Center>
          <Box
            _text={{
              fontWeight: "bold",
              fontSize: "2xl",
              color: "black",
            }}
          >
            Create an Account
          </Box>
        </Center>
      </Flex>

      <Container>
        <FormControl isRequired>
          <Stack px={4} safeArea mt={6}>
            <FormControl.Label>Username</FormControl.Label>
            <Input p={2} placeholder="username" />
            <FormControl.HelperText>
              We'll keep this between us
            </FormControl.HelperText>

            <Spacer />

            <FormControl.Label>Password</FormControl.Label>
            <Input p={2} placeholder="password" type={"password"} />
            <FormControl.HelperText>
              Password must be minimum of 8 characters.
            </FormControl.HelperText>
          </Stack>
        </FormControl>
      </Container>

      <Button onPress={() => console.log("Create Account Pressed")}>
        Create Account
      </Button>
    </Container>
  );
};
