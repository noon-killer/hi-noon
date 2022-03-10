import React from "react";
import { styles } from "../stylesheets/styles";
import { TouchableOpacity, View, ScrollView } from "react-native";
import getPostById from "./getPostById";
import {
  Container,
  Box,
  Flex,
  Divider,
  Badge,
  Spacer,
  Text,
  Pressable,
} from "native-base";

export const FullPostScreen = ({ navigation, route }) => {
  // destruture data to individual components
  const data = getPostById(route.params.postId);

  /* TODO: 
  1. add exit/back button for single post
  2. destructure received data
  3. determine metadata locations - tags on top, comments on bottom?
  4. create textable area component or integrate directly here
   */

  return (
    <ScrollView>
      <VStack space={2} ml={1} alignItems={"center"}>
        <Text>postId: {route.params.postId} </Text>
        <Container name="content">
          <Flex direction="row">{tagsArr}</Flex>
          <Text fontFamily="title" fontWeight={600} fontSize={24}>
            {title}
          </Text>
          <Box>
            <Text>{body}</Text>
          </Box>
        </Container>

        <Container>
          <Button>Post</Button>
        </Container>

        <Container name="comments">
          <Button>RandomButton</Button>
        </Container>
      </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  choice: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  post: {
    backgroundColor: "#f7ffe0",
    padding: 10,
  },
  postMeta: {
    flexDirection: "row",
  },
});

