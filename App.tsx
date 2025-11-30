import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { VibrationAnalysis } from './pages/Services/VibrationAnalysis';
import { Mining } from './pages/Industries/Mining';
import { TrustAndSafety } from './pages/TrustAndSafety';

export default function App() {
  return (
    <Router>
      <div className="bg-bg-page min-h-screen text-text-main selection:bg-brand-gold selection:text-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/vibration-analysis" element={<VibrationAnalysis />} />
          <Route path="/industries/mining" element={<Mining />} />
          <Route path="/trust-and-safety" element={<TrustAndSafety />} />
        </Routes>

        <div id="contact">
          <Footer />
        </div>
      </div>
    </Router>
  );
}
