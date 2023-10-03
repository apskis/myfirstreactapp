import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


//Using React
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);

//using JS only
/* let div = document.getElementById('root');
div.append(App()); */