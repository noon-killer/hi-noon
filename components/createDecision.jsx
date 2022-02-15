const createDecision = (body) => {

  fetch('dawsontest.com/dating_app/create_decision', {
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
    .catch(err => console.log('CreateDecision fetch /api/create_decision: ERROR: ', err));
    
};

export default createDecision