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
import { StyleSheet, View, Text, Button } from 'react-native';

const TextPost = ({title, author, body, tags, viewCount, commentCount, likeCount}) => {

  const commentStr = `Comments: ${commentCount}`

  return (
    <View style={styles.post}>
      <Text>{title}</Text>
      <Text>{author}</Text>
      <Text>{body}</Text>

      <View style={styles.postMeta}>
        <Text style={{flex: 0.3}}>views: {viewCount}</Text>
        <Button style={{flex: 0.2}} title={commentStr}></Button>
        <Text style={{flex: 0.2}}>likes: {likeCount}</Text>
      </View>
      <Text>tags: {tags}</Text>
      
    </View>
  )
}

export const styles = StyleSheet.create({
  choice: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row'
  },
  post: {
    backgroundColor: '#f7ffe0',
    padding: 10,
  },
  postMeta: {
    flexDirection: "row"
  }
})


export default TextPost