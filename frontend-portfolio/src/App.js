import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/Home'
import Header from './header/Header'
import Portfolio from './portfolio/Portfolio'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
