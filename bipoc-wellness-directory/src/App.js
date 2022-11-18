import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import Contact from './pages/Contact/Contact';
import Header from './components/Header';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={ <Homepage /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/signup" element={ <SignUp /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
