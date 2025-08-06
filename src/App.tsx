import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CategoriesSection from './components/CategoriesSection';
import AppScreenshots from './components/AppScreenshots';
import AdditionalFeatures from './components/AdditionalFeatures';
import ReviewsSection from './components/ReviewsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-custom-teal/5 via-white to-custom-orange/5" dir="rtl">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <AppScreenshots />
      <AdditionalFeatures />
      <ReviewsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;