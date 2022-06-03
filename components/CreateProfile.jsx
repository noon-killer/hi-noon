const createProfile = (body) => {

    fetch('dawsontest.com/dating_app/profile/create', {
      method: 'POST',
      headers: {
        "Authorization": "Basic ZGF3c29uOnBhc3N3b3Jk",
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then((data) => {
        console.log('returned data: ', data);
      })
      .catch(err => console.log('CreatePerson fetch /api/create_person: ERROR: ', err));
      
};

export default createProfile