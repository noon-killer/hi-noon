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

export const RequestProfileDetails = ({ navigation }) => {
  return (
    <Flex direction="row" justifyContent="center">
      <Container>
        <FormControl>
          <FormControl.Label>Age</FormControl.Label>
          <Input p={2} />

          <FormControl.Label>Gender</FormControl.Label>
          <Input p={2} />

          <FormControl.Label>Location</FormControl.Label>
          <Input p={2} placeholder="New York" />
        </FormControl>

        <Button
          onPress={() => {
            console.log("Personal Details Added");
            navigation.navigate("RequestProfileSummary");
          }}
        >
          Continue
        </Button>
      </Container>
    </Flex>
  );
};
