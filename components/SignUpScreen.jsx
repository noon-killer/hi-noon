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
import createProfile from "./createProfile";

export const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const profile_id = Math.floor(Math.random() * 1000);

  return (
    <Flex direction="row" justifyContent="space-around">
      <Container>
        <Box
          alignSelf="center"
          _text={{
            fontWeight: "bold",
            fontSize: "2xl",
            color: "black",
          }}
        >
          Create an Account
        </Box>

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

            <FormControl.Label>First Name</FormControl.Label>
            <Input p={2} placeholder="Joe" />

            <FormControl.Label>Last Name</FormControl.Label>
            <Input p={2} placeholder="King" />
          </Stack>
        </FormControl>

        <Button
          alignSelf="center"
          onPress={() => {
            console.log("Create Account Pressed");
            navigation.navigate("RequestProfileDetails");
            createProfile(body)
          }}
        >
          Create Account
        </Button>
      </Container>
    </Flex>
  );
};
