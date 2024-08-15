import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsDetails from './components/NewsDetails';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 

  
  
  return (
    <Router>
    <div >
        <Navbar />
        
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
       
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;

