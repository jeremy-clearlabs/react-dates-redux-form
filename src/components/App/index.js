import React from 'react';
import { Route, Link } from 'react-router-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { About, Form } from '../index';
import { Home } from '../../containers';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/form" component={Form} />
    </main>
  </div>
);

export default App;
