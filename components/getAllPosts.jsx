import { LogBox } from "react-native";
LogBox.ignoreLogs(["Overwriting fontFamily style attribute preprocessor"]);

const getAllPosts = () => {
  fetch("http://dawsontest.com/dating_app/post", {
    method: "GET",
    headers: {
      "Content-Type": "Application/JSON",
    },
  })
    .then((res) => res.json())
    .then(({_embedded}) => {
      // console.log("All Post Data: ", _embedded.postDetails);
      return _embedded.postDetails;
    })
    .catch((err) =>
      console.log("getAllPosts fetch /api/getAllPosts: ERROR: ", err)
    );
};

export default getAllPosts;
