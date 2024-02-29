import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Home from './routes/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Flight from './routes/Flight';
import Booking from './routes/Booking';
import Payments from './routes/Payments';
import Help from './routes/Help';
import ContactUs from './routes/ContactUs';
import Marketing from './routes/Marketing';
import Consulting from './routes/Consulting';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/flight' component={Flight} />
        <Route path='/booking' component={Booking} />
        <Route path='/payments' component={Payments} />
        <Route path='/help' component={Help} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
      </Routes>
    </Router>
  );
}

export default App;