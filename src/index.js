import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BudgetProvider } from './contexts/BudgetContext';
import * as serviceWorker from './serviceWorker';

const root = createRoot(document.getElementById('root'));
root.render(
  <BudgetProvider>
    <App />
  </BudgetProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
