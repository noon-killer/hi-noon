import React from 'react'
import { styles } from '../stylesheets/styles'
import { Text, TouchableOpacity, View } from 'react-native';
import posts from '../data/posts.json'
import TextPost from './TextPost';

export const ForumScreen = () => {
  // make getPosts call here to get an array of post objects
  // map post objects to textPost components and render under view
  const {{postDetailses}} = getAllPosts();
  const postArray = [];
  postDetailses.forEach( (post) => {
    console.log('post:', post)
    postArray.push(<TextPost title={post.title} author={post.author} body={post.body} hashtags={post.tags} viewCount={post.viewCount} commentCount={post.commentCount}/>)
  })
  return (
    <View>
      <TextPost title={'Test Title 1'} author={'Jintaco'} body={'I love cheeseburgers'} hashtags={['food', 'relationships']} viewCount={13} commentCount={3}/>
      {postArray}
    </View>
  )

}


// export const styles = StyleSheet.create({
//   choice: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   flexDirection: 'row'
// }
// })