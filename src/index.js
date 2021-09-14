import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AboutUs from './pages/AboutUs';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/AboutUs">
        <AboutUs />
      </Route>
      <Route path="/*">
        <App />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
