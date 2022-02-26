import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "Overwriting fontFamily style attribute preprocessor"
]);

const getAllPosts = () => {
  fetch("dawsontest.com/dating_app/post", {
    method: "GET",
    headers: {
      "Content-Type": "Application/JSON",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("All Post Data: ", data);
    })
    .catch((err) =>
      console.log("getAllPosts fetch /api/getAllPosts: ERROR: ", err)
    );
};

export default getAllPosts;
