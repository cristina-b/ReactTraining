import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Home from './modules/Home';
import User from './components/User';
import Nav from './components/Nav';
import Messages from './components/Messages';
import Dropdown from './components/Dropdown';
import Courses from './components/Courses';

function App() {
  const section = 'Inbox';
  return (
    <div className="App">
      <header>
        { /*<img src={logo} className="App-logo" alt="logo" />
        <Home/>*/ }
      </header>
      {/*<div className="home">
        <Nav/>
        <Messages type={section}/>
      </div>
      <Dropdown/>*/}
      <Courses/>        
      <User theColor={'red'} firstname = {'developer'} image={logo} alt="logo"/>
    </div>
  );
}

export default App;
