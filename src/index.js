import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/reset.css'
import './assets/css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faEnvelope} />

ReactDOM.render(element, document.body)

ReactDOM.render(<App />, document.getElementById('root'));
