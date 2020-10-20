import React from 'react';
import './App.css';
import Home from './components/home/Home'
import Header from './components/header/Header'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

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
