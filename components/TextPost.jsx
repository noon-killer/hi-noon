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
import { StyleSheet, View, Text, Button } from "react-native";
import { Container, Box, Flex, Divider, Badge, Spacer } from "native-base";

const TextPost = ({
  title,
  author,
  body,
  hashtags,
  viewCount,
  commentCount,
  likeCount,
}) => {
  const commentStr = `Comments: ${commentCount}`;
  console.log(hashtags);
  const tagsArr = hashtags.map((item) => <Badge>{item}</Badge>);

  return (
    <Container>
      <Flex direction="row">{tagsArr}</Flex>

      <View>
        <Text>{title}</Text>
        
        <Text>{author}</Text>
        <Text>{body}</Text>
      </View>

      <Box alignItems="center">
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

export default TextPost;
