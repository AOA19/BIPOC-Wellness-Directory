import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
