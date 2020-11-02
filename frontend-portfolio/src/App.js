import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
function App() {
  return (
    <div className="App" >
      <Header />
      <Home />
      <About />
      <div className='spacer'></div>
      <Portfolio />  
      <Contact />
    </div>
  );
}

export default App;
