import React from 'react';
import ReactDOM from 'react-dom/client';
import { Collapse, Ripple, initTE } from 'tw-elements';

import App from './App';

import './styles.scss';

initTE({ Collapse, Ripple });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
