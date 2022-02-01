import React from 'react';
import ReactDOM from 'react-dom';
import BackImg from './BackImg';
import Clock from './Clock';
import Login from './Login';
import Quotes from './Quotes';

ReactDOM.render(
  <React.StrictMode>
    <Login />
    <Clock/>
    <Quotes/>
    <BackImg/>
  </React.StrictMode>,
  document.getElementById('root')
);

