import { LogBox } from "react-native";
LogBox.ignoreLogs(["Overwriting fontFamily style attribute preprocessor"]);

const getPostById = (postId) => {
  console.log(`dawsontest.com/dating_app/post/${postId}`);
  return fetch(`http://dawsontest.com/dating_app/post/${postId}`, {
    method: "GET",
    headers: {
      "Authorization": "Basic ZGF3c29uOnBhc3N3b3Jk",
      "Content-Type": "Application/JSON",
    },
  })
    .then((res) => res.json())
    .then(
      ({
        comment_count,
        view_count,
        title,
        id,
        body,
        like_count,
        profile_id,
        tags,
        updated_at,
      }) => {
        // console.log("Post Data: ", data);
        return {comment_count,
        view_count,
        title,
        id,
        body,
        like_count,
        profile_id,
        tags,
        updated_at}
      }
    )
    .catch((err) =>
      console.log("getPostById fetch /api/getPost: ERROR: ", err)
    );
};

export default getPostById;
