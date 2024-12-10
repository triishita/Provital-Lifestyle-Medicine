import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import DivideLine from './components/DivideLine';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <DivideLine />
      <HowItWorks />
    </div>
  );
}

export default App;
