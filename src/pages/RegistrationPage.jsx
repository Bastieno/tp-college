import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  input[type=text], input[type=password], input[type=number] {
  display: inline-block;
  font-size: 16px;
  width: 100%;
  padding: 0px 25px;
  height: 55px;
  margin: 16px 0;
  border: 1px solid #ccc;
  outline: none;
}

input[type=text]:focus, input[type=password]:focus {
  border: 1px solid #4caf50;
}

.registration-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 55px 85px;
  color: #212529;
  /* width: 560px; */
  margin: 400px auto 100px;
  border-radius: 5px;
}

.form-content h2 {
  text-align: center;
  margin-bottom: 32px;
}

.registration-content {
  display: flex;
  flex-direction: column;
}

button {
  width: 100%;
  padding: 20px;
  font-size: 1rem;
  border-radius: 5px;
  background-color: #333333;
  color: #fff;
  transition: 0.5s ease;
  cursor: pointer;
}

button:hover {
  background-color: #4caf50;
}

a {
  text-decoration: none;
  color: #666666;
}

a:hover {
  color: #4caf50;
}

@media (max-width: 567px) {
  .registration-container {
    width: 90%;
    margin: auto;
  }

  .registration-container {
    padding: 25px 45px;
  }
}

`;

export default function RegistrationPage() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState(10);
  const [gender, setGender] = useState('male');
  const [mathScore, setMathScore] = useState(0);
  const [englishScore, setEnglishScore] = useState(0);
  const [physicsScore, setPhysicsScore] = useState(0);
  const [chemistryScore, setChemistryScore] = useState(0);
  const [biologyScore, setBiologyScore] = useState(0);
  const [errors, setErrors] = useState('');

  const handleSubmit = () => {
    const myHeaders = new Headers({
      'Authorization': '123hyhf864'
    });

    const formData = {
      first_name: firstname,
      last_name: lastname,
      age,
      gender,
      mathematics_score: mathScore,
      english_score: englishScore,
      physics_score: physicsScore,
      chemistry_score: chemistryScore,
      biology_score: biologyScore
    }

    fetch('https://tp-react-test.herokuapp.com/student/register', {
      method: 'POST',
      body: formData,
      headers: myHeaders
    })
      .then(response => response.json())
      .then((data) => {
        setErrors(data.message);
      });
  }

  useEffect(() => {
    handleSubmit();
  });

  return (
    <Styles>
      <div className="registration-container">
        <div className="form-content">
          <h2>Registration Form</h2>
          <form>
            <label>First Name</label>
            <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />

            <label>Last Name</label>
            <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />

            <label>Age</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />

            <label>Gender</label>
            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />

            <label>Mathematics Score</label>
            <input type="number" value={mathScore} onChange={(e) => setMathScore(e.target.value)} />

            <label>English Score</label>
            <input type="number" value={englishScore} onChange={(e) => setEnglishScore(e.target.value)} />

            <label>Physics Score</label>
            <input type="number" value={physicsScore} onChange={(e) => setPhysicsScore(e.target.value)} />

            <label>Chemistry Score</label>
            <input type="number" value={chemistryScore} onChange={(e) => setChemistryScore(e.target.value)} />

            <label>Biology Score</label>
            <input type="number" value={biologyScore} onChange={(e) => setBiologyScore(e.target.value)} />

          </form>
        </div>
        <button onClick={() => handleSubmit()}>Register</button>
        <div className="errors" style={{ color: 'red', marginTop: '30px' }}>
          <p>{errors}</p>
        </div>
      </div>
    </Styles>
  );
}
