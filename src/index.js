import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log(`Error code:${error.response.status}`);
    return undefined;
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);