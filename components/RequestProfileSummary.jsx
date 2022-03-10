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

export const RequestProfileSummary = ({ navigation }) => {
  return (
    <Flex direction="row" justifyContent="center">
      <Container>
        <FormControl>
          <FormControl.Label>Tell us a bit about yourself...</FormControl.Label>
          <Input p={2} placeholder={"I like to grow weed and make edibles"} />
        </FormControl>

        <Button
          alignSelf="center"
          onPress={() => {
            console.log("Profile Summary Added");
          }}
        >
          Finish My Profile!
        </Button>
      </Container>
    </Flex>
  );
};
