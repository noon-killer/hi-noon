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

const TextPost = ({
  title,
  author,
  body,
  tags,
  viewCount,
  commentCount,
  likeCount,
}) => {
  const commentStr = `Comments: ${commentCount}`;

  return (
    <View style={tw`flex items-start space-x-6 p-6`}>
      <View style={tw`min-w-0 relative flex-auto`}>
        <Text style={tw`font-semibold text-slate-900`}>{title}</Text>
        <Text>{author}</Text>
        <Text>{body}</Text>
      </View>

      <View style={styles.postMeta}>
        <Text style={{ flex: 0.3 }}>views: {viewCount}</Text>
        <Button style={tw.style('px-1.5', 'ring-1', 'ring-slate-200', 'rounded')} title={commentStr}></Button>
        <Text style={{ flex: 0.2 }}>likes: {likeCount}</Text>
      </View>

      <Text>tags: {tags}</Text>
    </View>
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
