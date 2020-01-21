import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .student {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 55px 85px;
  color: #212529;
  width: 560px;
  height: 500px;
  margin: auto;
  border-radius: 5px;
}
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export default function StudentPage({ match }) {
  const [student, setStudent] = useState({});
  const { firstName, lastName, age, gender, mathematics, english, physics, chemistry, biology } = student;

  useEffect(() => {
    const myHeaders = new Headers({
      'Authorization': '123hyhf864'
    });

    fetch(`https://tp-react-test.herokuapp.com/student/${match.params.studentId}`, {
      method: 'GET',
      headers: myHeaders
    })
      .then(response => response.json())
      .then((data) => {
        setStudent(data.data);
      });
  }, [match.params.studentId]);

  return (
    <Styles>
      {
        Object.keys(student).length > 0 ? (
          <div className="student">
            <h4>Here are the details of {`${firstName} ${lastName}`}:</h4>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Mathematics: {mathematics}</p>
            <p>English: {english}</p>
            <p>Physics: {physics}</p>
            <p>Chemistry: {chemistry}</p>
            <p>Biology: {biology}</p>
          </div>
        ) : <div className="loader">Loading...</div>
      }
    </Styles>
  );
}


