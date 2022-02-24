import React from 'react'
import { styles } from '../stylesheets/styles'
import { Text, TouchableOpacity, View } from 'react-native';
import posts from '../data/posts.json'
import TextPost from './TextPost';
import getAllPosts from './getAllPosts';

console.log('Test Console Log')
// const {_embedded: {postDetailses}} = getAllPosts();
const postDetailses = posts.data;
console.log(postDetailses)

const postArray = [];
  
postDetailses.forEach( (post) => {
   console.log('post:', post)
   postArray.push(<TextPost title={post.title} author={post.author} body={post.body} hashtags={post.tags} viewCount={post.viewCount} commentCount={post.commentCount}/>)
});

export const ForumScreen = () => {
  // make getPosts call here to get an array of post objects
  // map post objects to textPost components and render under view
  
  return (
    <View>
      {postArray}
    </View>
  )

};


// export const styles = StyleSheet.create({
//   choice: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   flexDirection: 'row'
// }
// })

export default ForumScreen