import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HeroicDetail from './pages/HeroicDetail';
import ProductDetail from './pages/ProductDetail';
import Phones from './pages/Phones';
import Laptops from './pages/Laptops';
import Earbuds from './pages/Earbuds';
import Guides from './pages/Guides';
import GuideDetail from './pages/GuideDetail';
import AboutUs from './pages/AboutUs';
import ContactForm from './components/ContactForm';
import AffiliateDisclosure from './pages/AffiliateDisclosure';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heroic-detail" element={<HeroicDetail />} />
          <Route path="/product/:slug" element={<ProductDetail />} />

          <Route path="/phones" element={<Phones />} />
          <Route path="/earbuds" element={<Earbuds />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:slug" element={<GuideDetail />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
