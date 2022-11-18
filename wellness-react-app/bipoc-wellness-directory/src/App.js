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

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
