import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Styles = styled.div`

.hero-img {
  position: relative;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.image-container img {
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

/* .hero-text h1 {
  color: #000;
  font-size: 3rem;
} */

.btn {
  background-color: #4caf50;
  padding: 10px 25px;
  border: none;
  outline: none;
  cursor: pointer;
}

.btn:hover {
  background-color: #777;
  color: #fff;
}

.loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

`;

export default function HomePage({history}) {
  const [courses, setCourses] = useState([]);
  const [welcomeText, setWelcomeText] = useState('');
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    fetch('https://tp-react-test.herokuapp.com/')
    .then(response => response.json())
    .then((data) => {
      setCourses(data.courses);
      setWelcomeText(data.welcome_text);
      setStudentCount(data.student_count);
    })
  }, []);

  return (
    <Styles>
      {
        courses.length ? (
          <div>
            <div className="hero-img">
              <div className="image-overlay"></div>
              <div className="image-container">
                <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="hero-img" />
              </div>
              <div className="hero-text">
                <h1>Welcome to TP College</h1>
                <button onClick={() => history.push('/register')} className="btn">Register your Child</button>
              </div>
            </div>

            <section className="page-content container my-5">
              <div className="welcome-text">
                <h3>About Us</h3>
                <p>{welcomeText}</p>
              </div>
              <div className="student-count">
                <p>The number of student currently enrolled are: {studentCount}</p>
              </div>
              <div className="courses">
                <p>Here is a list of courses offered by the school</p>
                <ul>
                  {
                    courses.map((course, idx) => <li key={idx}>{course}</li>)
                  }
                </ul>
              </div>
            </section>
          </div>
        ) : <div className="loader">Loading...</div>
      }
    </Styles>
  );
}
