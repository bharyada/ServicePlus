import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './App';
import { InfoProvider } from './component/context';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <InfoProvider>
    <Router>
      <App />
    </Router>
  </InfoProvider>,
  document.getElementById('root')
);
serviceWorker.unregister();
