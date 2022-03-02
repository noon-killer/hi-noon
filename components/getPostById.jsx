import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "Overwriting fontFamily style attribute preprocessor"
]);

const getPostById = (postId) => {
  fetch(`dawsontest.com/dating_app/post/${postId}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/JSON",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Post Data: ", data);
    })
    .catch((err) =>
      console.log("getPostById\ fetch /api/getPost: ERROR: ", err)
    );
};

export default getPostById;