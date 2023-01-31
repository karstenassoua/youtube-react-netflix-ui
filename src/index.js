import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <audio autoPlay src={"opening.mp3"}></audio>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);