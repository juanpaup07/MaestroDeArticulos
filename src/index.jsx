import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
