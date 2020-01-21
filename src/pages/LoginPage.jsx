import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
  input[type=text], input[type=password] {
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

.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 55px 85px;
  color: #212529;
  width: 560px;
  margin: auto;
  border-radius: 5px;
}

.form-content h2 {
  text-align: center;
  margin-bottom: 32px;
}

.login-content {
  display: flex;
  flex-direction: column;
}

.bottom {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #ccc;
  margin-bottom: 50px;
}

.bottom label {
  color: #9B9B9B;
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
  .login-container {
    width: 90%;
    margin: auto;
  }

  .login-container {
    padding: 25px 45px;
  }
}

`;

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const handleSubmit = () => {
    const myHeaders = new Headers({
      'Authorization': '123hyhf864'
    });

    fetch('https://tp-react-test.herokuapp.com/login', {
      method: 'POST',
      body: { username, password },
      headers: myHeaders
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setErrors(data.message);
      });
  }

  useEffect(() => {
    handleSubmit();
  });

  return (
    <Styles>
      <div className="login-container">
        <div className="form-content">
          <h2>Account Login</h2>
          <form>
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>

            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <div className="bottom">
              <span><Link to="/">Forget password</Link></span>
            </div>
          </form>
        </div>
        <button onClick={() => handleSubmit()}>Login</button>
        <div className="errors" style={{ color: 'red', marginTop: '30px' }}>
          <p>{errors}</p>
        </div>
      </div>
    </Styles>
  );
}
