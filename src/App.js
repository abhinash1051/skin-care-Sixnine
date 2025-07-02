import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGrid from './components/productGrid';
import Testimonial from './components/Testimonial';
import FAQ from './components/Faq';
import Footer from './components/Footer';
import Para from './components/para';

const App = () => (
  <div className="font-sans text-gray-900">
    <Header />
    <Hero />
    <Para />
    <Features />
    <ProductGrid />
    <Testimonial />
    <ProductGrid />
    <FAQ />
    <Footer />
  </div>
);

export default App;
