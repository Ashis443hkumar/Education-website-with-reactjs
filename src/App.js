import React from 'react';
import './style.css';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Home from './components/home/Home';
import About from "./components/about/About"
import CourseHome from "./components/allcourse/CourseHome"
import Pricing from "./components/pricing/Pricing"
import Blog from './components/blog/Blog'
import Team from "./components/team/Team"
import Contact from './components/contact/Contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/allcourses" element={<CourseHome/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/journal" element={<Blog/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/contact" element={<Contact/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
