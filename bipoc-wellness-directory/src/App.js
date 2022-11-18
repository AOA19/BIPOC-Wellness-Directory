import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Providers from './pages/Providers/Providers';
import Contact from './pages/Contact/Contact';
import SignUp from './pages/SignUp/SignUp';
// import Footer from './components/Footer';
import Login from './pages/Login/Login'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/providers" element={<Providers />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
