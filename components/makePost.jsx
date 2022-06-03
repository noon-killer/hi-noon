
const makePost = () => {
  fetch("http://dawsontest.com/dating_app/post/create", {
    method: "POST",
    headers: {
      "Authorization": "Basic ZGF3c29uOnBhc3N3b3Jk",
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


curl --location --request POST 'dawsontest.com/dating_app/profile/create' \
--header 'Authorization: Basic ZGF3c29uOnBhc3N3b3Jk' \
--header 'Content-Type: application/json' \
--header 'Cookie: caf_ipaddr=98.37.237.155; city=""; country=US; system=PW; traffic_target=gd' \
--data-raw '{
   "username" : "CrazyCatLady23",
   "name" : "Debbie Downer",
   "age" : 31,
   "gender" : "female",
   "location" : "New York, New York",
   "summary" : "I like cats.",
   "image_url" : "dawsontest.com/cool_image"
}'