import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Homepage} from './pages/homepage'
import {Routes, Route, Link} from 'react-router-dom'
import {LogInPage} from './pages/logInPage'
import {RegisterPage} from './pages/registerPage'

function App() {
  return (
    <div className="App">
      
      {/* <Routes>
        <Route path = '/' element = {<Homepage/>} />
        <Route path = '/log-in' element = {<LogInPage/>}/>
        <Route path ='/register' element = {<RegisterPage/>}/>
      </Routes> */}
      <Homepage/>
      
    </div>
  );
}

export default App;
