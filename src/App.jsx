import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProjectsShowcase from "./ProjectsShowcase";
import Navbar from "./Navbar";
import Footer from "./footer";
import ThemeSelectorWrapper from "./ThemeSelectorWrapper";
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Services from './Services';

// import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsShowcase />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    <ThemeSelectorWrapper />
    <Footer />
    </>
  );
}

export default App;
