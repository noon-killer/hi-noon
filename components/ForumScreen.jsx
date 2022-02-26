import React from "react";
import { styles } from "../stylesheets/styles";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import posts from "../data/posts.json";
import TextPost from "./TextPost";
import getAllPosts from "./getAllPosts";
import { VStack } from "native-base";

console.log("Test Console Log");
// const {_embedded: {postDetailses}} = getAllPosts();
// const data = getAllPosts();
const { data } = posts;
const postDetailses = data;
console.log(posts);
// console.log(postDetailses)

const postArray = [];

postDetailses.forEach((post) => {
  console.log("post:", post);
  postArray.push(
    <TextPost
      key={post.title}
      title={post.title}
      author={post.author}
      body={post.body}
      hashtags={post.tags}
      viewCount={post.viewCount}
      commentCount={post.commentCount}
    />
  );
});

export const ForumScreen = () => {
  // make getPosts call here to get an array of post objects
  // map post objects to textPost components and render under view

  return (
    <ScrollView>
      <VStack space={2} alignItems={"center"}>
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
