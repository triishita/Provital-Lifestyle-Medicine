import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HowItWorks />
    </div>
  );
}

export default App;
