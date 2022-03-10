import React from "react";
import { styles } from "../stylesheets/styles";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import posts from "../data/posts.json";
import PostItem from "./PostItem";
import getAllPosts from "./getAllPosts";
import { VStack } from "native-base";

let postDetailses;
try {
  console.log('attempting HTTP request to server...')
  const {
    _embedded: { postDetailses },
  } = getAllPosts();
  // const allposts = getAllPosts();
  console.log('is this working', _embedded)
  console.log("Connection to server successful. Using getAllPosts API...");
} catch {
  const { data } = posts;
  postDetailses = data;

  console.log("Failed to connect to server. Using temp data...");
}
// const data = getAllPosts();
// console.log(data)
// const {
//       _embedded: {postDetailses},
//     } = getAllPosts();

// const { data } = posts;
//   const postDetailses = data;
// console.log("logging post details:", postDetailses);

export const ForumScreen = ({ navigation }) => {
  // make getPosts call here to get an array of post objects
  // map post objects to textPost components and render under view
  const postArray = [];

  postDetailses.forEach((post) => {
    // console.log("post:", post);
    postArray.push(
      <PostItem
        key={post.title}
        id={post.id}
        title={post.title}
        author={post.author}
        body={post.body}
        hashtags={post.tags}
        viewCount={post.viewCount}
        commentCount={post.commentCount}
        navigation={navigation}
      />
    );
  });

  return (
    <ScrollView>
      <VStack space={2} ml={1} alignItems={"center"}>
        {postArray}
      </VStack>
    </ScrollView>
  );
};

// export const styles = StyleSheet.create({
//   choice: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   flexDirection: 'row'
// }
// })

export default ForumScreen;
