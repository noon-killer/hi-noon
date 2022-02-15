const getRandomPersons = (endpoint) => {

  fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'Application/JSON'
    },
    body: JSON.stringify({count: 2})
  })
    .then(res => res.json())
    .then((data) => {
      console.log('returned data: ', data);
    })
    .catch(err => console.log('getRandomPersons fetch /api/getRandomperson: ERROR: ', err));
    
};

export default getRandomPersons