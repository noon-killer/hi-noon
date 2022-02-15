const createPerson = (body) => {

    fetch('dawsontest.com/dating_app/create_person', {
      method: 'POST',
      headers: {
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

export default createPerson