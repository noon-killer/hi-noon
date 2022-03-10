// component for a text based post on the forum page
/* this component includes the following:
  - title of the post
  - post author's user id (OP)
  - body of the post
  - age of the post
  - relevant topic hashtag
  - view count
  - comment count
  - comment button
*/
import getPostById from "./getPostById";
import { StyleSheet, View, Button } from "react-native";
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

const PostItem = ({
  id,
  title,
  author,
  body,
  hashtags,
  viewCount,
  commentCount,
  likeCount,
  navigation,
}) => {
  const commentStr = `Comments: ${commentCount}`;
  console.log(hashtags);
  const tagsArr = hashtags.map((item) => <Badge key={item}>{item}</Badge>);

  return (
    <Pressable
      onPress={() => {
        console.log(`Pressed ${author}'s post, ${id}`);
        navigation.navigate("FullPostScreen", { postId: id });
        // navigation.navigate('PlayGround')
      }}
    >
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Container
            py="3"
            borderWidth="1"
            borderColor="coolGray.300"
            shadow="3"
            bg={
              isPressed
                ? "coolGray.200"
                : isHovered
                ? "coolGray.200"
                : "coolGray.100"
            }
            p="5"
            rounded="8"
          >
            <Flex direction="row">{tagsArr}</Flex>

            <View>
              <Text fontFamily="body" fontWeight={600} fontSize={24}>
                {title}
              </Text>
              <Text>
                Posted By {author} {"\u2B24"} 2h ago
              </Text>
            </View>

            <Box>
              <Flex direction="row" h="58" p="4">
                <Text>views: {viewCount}</Text>
                <Divider
                  bg="emerald.500"
                  thickness="2"
                  mx="2"
                  orientation="vertical"
                />
                <Text>{commentStr}</Text>
                <Divider
                  bg="emerald.500"
                  thickness="2"
                  mx="2"
                  orientation="vertical"
                />
                <Text>likes: {likeCount}</Text>
              </Flex>
            </Box>
          </Container>
        );
      }}
    </Pressable>
  );
};

export const styles = StyleSheet.create({
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

export default PostItem;
