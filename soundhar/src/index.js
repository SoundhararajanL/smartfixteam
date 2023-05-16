import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './dashboard';
import Machine from './machine';
import Historical from './historical';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Hisdash from './hisdash';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Routes>
    <Route path="/" element={ <App />}/>
     
      <Route path="dashboard" element={ <Dashboard />} />
      <Route path="machine" element={<Machine />} />

      <Route path="/historical" element={<Historical />} />
      <Route path="/hisdash" element={<Hisdash />} />
      <Route path='/home' element={<App />} />
    
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
