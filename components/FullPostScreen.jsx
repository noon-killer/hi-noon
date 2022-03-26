import React from "react";
import { TouchableOpacity, View, ScrollView, StyleSheet } from "react-native";
import getPostById from "./getPostById";
import {
  Container,
  Box,
  Button,
  Flex,
  Divider,
  VStack,
  Stack,
  Badge,
  Spacer,
  Text,
  Pressable,
} from "native-base";

export const FullPostScreen = ({ navigation, route }) => {
  // destruture data to individual components
  const {
    data: {
      comment_count,
      view_count,
      title,
      id,
      body,
      like_count,
      profile_id,
      tags,
      updated_at,
    },
  } = route.params;

  /* TODO: 
  1. add exit/back button for single post
  2. destructure received data
  3. determine metadata locations - tags on top, comments on bottom?
  4. create textable area component or integrate directly here
   */
  const tagsArr = tags.map((item) => <Badge key={item}>{item}</Badge>);

  return (
    <ScrollView>
      <VStack space={2} ml={1} alignItems={"center"}>
        <Text>postId: {id} </Text>
        <Container name="content">
          <Flex direction="row">{tagsArr}</Flex>
          <Text fontFamily="Roboto" fontWeight={600} fontSize={24}>
            {title}
          </Text>
          <Box>
            <Text>{body}</Text>
          </Box>
          <Box>
            <Text>comments: {comment_count}</Text>
            <Text>views: {view_count}</Text>
            <Text>likes: {like_count}</Text>
          </Box>
          <Box>
            <Text>Updated at: {updated_at}</Text>
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
