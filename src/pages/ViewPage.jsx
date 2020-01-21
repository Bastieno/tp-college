import React, { useEffect, useState } from 'react';

export default function HomePage({history}) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const myHeaders = new Headers({
      'Authorization': '123hyhf864'
    });

    fetch('https://tp-react-test.herokuapp.com/students', {
      method: 'GET',
      headers: myHeaders
    })
      .then(response => response.json())
      .then((data) => {
        setStudents(data.data);
      });
  }, []);

  return (
    <div className="student-table container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col">Mathematics</th>
            <th scope="col">English</th>
            <th scope="col">Physics</th>
            <th scope="col">Chemistry</th>
            <th scope="col">Biology</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student) => {
              const { id, firstName, lastName, age, mathematics, english, physics, chemistry, biology } = student;
              return (
                <tr key= {id} onClick={() => history.push(`/students/${id}`)} style={{cursor: 'pointer'}}>
                  <th scope="row">{id}</th>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{age}</td>
                  <td>{mathematics}</td>
                  <td>{english}</td>
                  <td>{physics}</td>
                  <td>{chemistry}</td>
                  <td>{biology}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

