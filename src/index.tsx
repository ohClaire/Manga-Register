import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

const element = document.getElementById('root');
if (element) {
  const root = ReactDOM.createRoot(element);
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </Provider>
  );
}
