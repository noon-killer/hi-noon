import React, { useEffect, useState } from "react";
import { styles } from "../stylesheets/styles";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import posts from "../data/posts.json";
import PostItem from "./PostItem";
import getAllPosts from "./getAllPosts";
import { VStack } from "native-base";

// let postDetailses;
// try {
//   console.log('attempting HTTP request to server...')
//   const {
//     _embedded: { postDetailses },
//   } = getAllPosts();
//   // const allposts = getAllPosts();
//   console.log('is this working', _embedded)
//   console.log("Connection to server successful. Using getAllPosts API...");
// } catch {
//   const { data } = posts;
//   postDetailses = data;

//   console.log("Failed to connect to server. Using temp data...");
// }

// const {_embedded: {postDetails}} = data
// console.log(postDetails)
// const {
//   _embedded: { postDetailses },
// } = getAllPosts();

// console.log(postDetailses)
// const { data } = posts;
// const postDetailses = data;
// console.log("logging post details:", postDetailses);

export const ForumScreen = ({ navigation }) => {
  // make getPosts call here to get an array of post objects
  // map post objects to textPost components and render under view
  const [postDetails, setState] = useState([]);
  // useEffect( () => {
  //   getAllPosts()
  //   .then(
  //     res => setState(res)
  //   )
  //    // console.log('hnnnnnh', data)
  //   console.log('DATA', postDetails)
  // }, [])

  useEffect(() => {
    fetch("http://dawsontest.com/dating_app/post", {
      method: "GET",
      headers: {
        "Content-Type": "Application/JSON",
      },
    })
      .then((res) => res.json())
      .then(({ _embedded }) => {
        // console.log("All Post Data: ", _embedded.postDetails); // returns obj array
        setState(_embedded.postDetails);
      })
      .catch((err) =>
        console.log("getAllPosts fetch /api/getAllPosts: ERROR: ", err)
      );
  }, []);

  const postArray = [];

  postDetails.forEach((post) => {
    // console.log("post:", post);
    postArray.push(
      <PostItem
        key={post.id}
        id={post.id}
        title={post.title}
        author={post.profile_id}
        body={post.body}
        hashtags={post.tags}
        viewCount={post.view_count}
        commentCount={post.comment_count}
        likeCount = {post.like_count}
        createdAt = {post.created_at}
        updatedAt = {post.updated_at}
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
