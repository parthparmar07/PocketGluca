import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Science from './pages/Science';
import Community from './pages/Community';

// Loading component
const PageLoader = () => (
  <div className="fixed inset-0 bg-cream-100 z-50 flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-cream-300 border-t-brand-500 rounded-full animate-spin" />
      <p className="text-gray-500 font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-cream-100">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/pages/about-us" element={<About />} />
              <Route path="/pages/the-science" element={<Science />} />
              <Route path="/pages/community" element={<Community />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
