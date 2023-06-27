import React from 'react';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Body;
