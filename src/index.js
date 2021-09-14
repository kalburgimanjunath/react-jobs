import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import AboutUs from './pages/AboutUs';
import { AboutUs, Login, Register } from './pages';
import { Navbar } from './components';
ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/AboutUs">
        <AboutUs />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/*">
        <App />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
