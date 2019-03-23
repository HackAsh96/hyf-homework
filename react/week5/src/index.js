import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import CompsWrapper from './Components/CompsWrapper';

import './styles.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router history={browserHistory}>
    <CompsWrapper />
  </Router>,
  rootElement
);
