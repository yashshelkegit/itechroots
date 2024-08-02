import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import HeroSection from './components/HeroSection'
import TimeLine from './components/TimeLine'
import Footer from './components/Footer';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<><HeroSection /></>
      } />
        <Route path="/timeline" element={<TimeLine/>}/>
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;