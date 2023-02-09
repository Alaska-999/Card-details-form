import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FontStyles from "./styles/fontStyles";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <FontStyles/>
    <App />
  </React.StrictMode>
);

