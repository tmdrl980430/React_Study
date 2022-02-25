import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CoinTracker from "./CoinTracker"
import Home from './routes/Home';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CoinTracker /> */}
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);


