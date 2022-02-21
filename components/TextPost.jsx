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
import { StyleSheet, View, Text } from 'react-native';

const TextPost = ({title, author, body, hashtags, viewCount, commentCount}) => {

  return (
    <View 
      style={{backgroundColor: 'f7ffe0', flex:0.3}}
    >
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  choice: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row'
}
})


export default TextPost