import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Messenger from './components/Messenger';
import reportWebVitals from './reportWebVitals';
import { ExternalHTTP } from './services/MessageService';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Messenger messageService={new ExternalHTTP()} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
