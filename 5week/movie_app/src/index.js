import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CoinTracker from "./CoinTracker"
import Movie from "./Movie"


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CoinTracker /> */}
    <Movie />
  </React.StrictMode>,
  document.getElementById('root')
);


