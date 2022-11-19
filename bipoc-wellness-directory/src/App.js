import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProviderDetail1 from './pages/ProviderDetail/ProviderDetail1';
import ProviderDetail2 from './pages/ProviderDetail/ProviderDetail2';
import ProviderDetail3 from './pages/ProviderDetail/ProviderDetail3';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Providers from './pages/Providers/Providers';
import Contact from './pages/Contact/Contact';
import SignUp from './pages/SignUp/SignUp';
import Footer from './components/Footer';
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
          <Route path="/provider1" element={<ProviderDetail1 />} />
          <Route path="/provider2" element={<ProviderDetail2 />} />
          <Route path="/provider3" element={<ProviderDetail3 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
