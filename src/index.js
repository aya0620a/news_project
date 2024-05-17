import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Articles from './components/Articles/Articles';
import Sidebar from './components/Sidebar/Sidebar';
import "./tailwind.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    
    <div style={{ display: 'flex' }}>
      <div style={{backgroundColor: 'black'}}>
        <Sidebar />
      </div>
      <div style={{padding: 0}}>
        <Articles />  
      </div> 
      
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
