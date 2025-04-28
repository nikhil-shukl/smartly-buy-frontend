import React from 'react';
import { Routes, Route } from 'react-router-dom';  // 🛑 Bas Routes aur Route import karo
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import AboutUs from './pages/AboutUs';
import Phones from './components/Phones';
import Computers from './components/Computers';
import Earbuds from './components/Earbuds';
import NewsDetail from './components/NewsDetail';
import CompareList from './blog/compare/CompareList';
import CompareDetails from './blog/compare/CompareDetails';
import ContactForm from './components/ContactForm';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Dashboard from "./components/admin/Dashboard";
import ProductsList from "./components/admin/ProductsList";
import BlogsList from "./components/admin/BlogsList";
import NewsList from "./components/admin/NewsList";
import MessagesList from "./components/admin/MessagesList";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/phone" element={<Phones />} />
        <Route path="/category/computer-laptop" element={<Computers />} />
        <Route path="/category/earbuds" element={<Earbuds />} />
        <Route path="/phones/:productId" element={<ProductDetail />} />
        <Route path="/compare" element={<CompareList />} />
        <Route path="/compare/:slug" element={<CompareDetails />} />
        <Route path="/news/:newsId" element={<NewsDetail />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />

        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<Dashboard />}>
          <Route path="products" element={<ProductsList />} />
          <Route path="blogs" element={<BlogsList />} />
          <Route path="news" element={<NewsList />} />
          <Route path="messages" element={<MessagesList />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
