import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import http from './utils/http';

http.get('/posts')
http.get('/posts/1')
http.get('https://viacep.com.br/ws/29140160/json/')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
