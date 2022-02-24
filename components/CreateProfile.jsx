import React, { useState, useEffect } from 'react';

// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
const useInput = init => {
  
  const [ value, setValue ] = useState(init);

  const onChange = e => {
    setValue(e.target.value);
  };

  // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
};

const CreateProfile = props => {

  const endpoint = '98.37.237.155/noon_clone/create_person';

  const [ name, nameOnChange ] = useInput('');
  const [ gender, genderOnChange ] = useInput('');
  const [ age, ageOnChange ] = useInput('');
  const [ location, locationOnChange ] = useInput('');
  const [ nameError, setNameError ] = useState(null);
  const [ ageError, setAgeError ] = useState(null);

  const saveProfile = () => {
    // check if name is empty
    if (name === '') {
      setNameError('name is required');
    } 
    // check if age is not a number
    if(isNaN(age)){
      setAgeError('must be a number');
    }

      const body = {
        name,
        age,
        location,
        profile_id,
      };

      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      })
        .then(res => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch(err => console.log('CreatePerson fetch /api/create_person: ERROR: ', err));

  // useEffect to clear nameError when `name` is changed
  useEffect(()=>{
    setNameError(null);
  }, [name]);

  // useEffect to clear ageError when `age` is changed
  useEffect(()=>{
    setAgeError(null);
  }, [age]);

  return (
    <section className="mainSection createCharContainer">

      <header className="pageHeader">
        <h2>Profile Creator</h2>
        <Link to="/" className="backLink">
          <button type="button" className="btnSecondary">
              Back to main
          </button>
        </Link>
      </header>

      <article className="card createChar">
        <h3>Enter your details</h3>
        <div className="createCharFields">
          <label htmlFor="name">Name: </label>
          <input name="name" placeholder="Hannah Chun" value={name} onChange={nameOnChange} />
          {nameError ? (<span className="errorMsg">{nameError}</span>) : null}
        </div>
        <div className="createCharFields">
          <label htmlFor="age">Age: </label>
          <input name="age" placeholder="28" value={age} onChange={ageOnChange} />
        </div>
        <div className="createCharFields">
          <label htmlFor="location">Location: </label>
          <input name="location" placeholder="Seoul, Korea" value={age} onChange={locationOnChange} />
        </div>
        <div className="createCharButtonContainer">
          <Link to="/" className="backLink">
            <button type="button" className="btnSecondary">
              Cancel
            </button>
          </Link>
          <button type="button" className="btnMain" onClick={saveProfile}>Save</button>
        </div>
      </article>
      
    </section>
  );
}};

export default withRouter(CreateProfile)