import React from 'react';
import Navbar from './components/Navbar';
import BookAppointment from './components/BookAppointment';
import HowItWorks from './components/HowItWorks';
import DivideLine from './components/DivideLine';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookAppointment />
      <DivideLine />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
