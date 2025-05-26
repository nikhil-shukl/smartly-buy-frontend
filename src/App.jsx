import React from 'react';
import { Routes, Route } from 'react-router-dom';  // 🛑 Bas Routes aur Route import karo
import Header from './components/Header';
import Phones from "./pages/Phones";
import Laptops from "./pages/Laptops";
import Earbuds from "./pages/Earbuds";
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './pages/AboutUs';
import ContactForm from './components/ContactForm';
import ComparePage from './pages/ComparePage';
import AffiliateDisclosure from "./pages/AffiliateDisclosure";



const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/compare/:slug" element={<ComparePage />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/earbuds" element={<Earbuds />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
