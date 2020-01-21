import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ViewPage from './pages/ViewPage';
import StudentPage from './pages/StudentPage';
import NavigationBar from './components/NavigationBar';
import NotFoundPage from './pages/NotFoundPage';
// import Footer from './components/Footer';

// Scripts
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/students" component={ViewPage} />
          <Route exact path="/students/:studentId" component={StudentPage} />
          <Route exact component={NotFoundPage} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
