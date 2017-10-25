import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'

const todos = [
  "Apprendre Angular",
  "Apprendre React parce que c'est mieux",
  "Apprendre Vue.js parce que c'est hype"
]

ReactDOM.render(<App todos={todos} title="Ma todo liste" />
, document.getElementById('root'));
