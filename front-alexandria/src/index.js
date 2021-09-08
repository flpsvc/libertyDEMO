import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/global.scss';
import App from './modules/index.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>
, document.getElementById('root'))

serviceWorker.unregister();
