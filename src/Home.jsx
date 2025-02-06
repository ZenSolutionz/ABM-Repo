import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ahmad from "./assets/ahmad.png";
import heroBg from "./assets/hero-bg.jpg";
import herovd from './assets/hero-bg.mp4'
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.jpg";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.jpg";
import ExperienceSection from "./ExperienceSection";
import Countup from "./Countup";
import ServiceCarousel from "./ServiceCarousel";
import Slider from "./SliderComponent";
import Navbar from "./Navbar";
import "./App.css";
import AnimatedButton from "./AnimatedButton";
import { AnimatedUIUX, AnimatedWebDev, AnimatedLogoDesign } from "./Popups";
import AboutSection from "./AboutSection";
import PortfolioSection from "./PortfolioSection";
import { TestimonialCarousel, FAQSection } from './TestimonialFaq';
import HeroSection from "./HeroSection";
import TeamSection from "./TeamSection";

function Home() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Theme Selector */}

      {/* Hero Section */}
<HeroSection />
      {/* Slider */}
      <Slider />

      <ServiceCarousel />


      {/* Stats Section */}

      
                  <AboutSection />
                  <TeamSection />

                  <PortfolioSection />
                  <Countup />
                  <TestimonialCarousel />
                  <FAQSection />

      {/* Milestones Section */}
      {/* <motion.div
        className="bg-gradient-to-r from-[--primary-color] to-[--secondary-color] py-12 backdrop-blur-md"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.li
              className="backdrop-blur-md p-6 rounded-lg shadow-lg"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold text-[--text-color]">
                Founded in 2010
              </h3>
              <p className="mt-2 text-base text-[--text-color]">
                Our journey began with a small team passionate about solving
                problems.
              </p>
            </motion.li>
            <motion.li
              className="backdrop-blur-md p-6 rounded-lg shadow-lg"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold text-[--text-color]">
                First 100 Clients (2013)
              </h3>
              <p className="mt-2 text-base text-[--text-color]">
                Expanded globally, serving businesses across multiple
                industries.
              </p>
            </motion.li>
            <motion.li
              className="backdrop-blur-md p-6 rounded-lg shadow-lg"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold text-[--text-color]">
                Reached 500+ Clients (2023)
              </h3>
              <p className="mt-2 text-base text-[--text-color]">
                Continuously innovating and delivering exceptional results
                worldwide.
              </p>
            </motion.li>
          </ul>
        </div>
      </motion.div> */}

      {/* Brands Section */}
      {/* <motion.div
        className="bg-[--bg-color] text-[--text-color] py-12"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Trusted by Leading Brands
          </h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8"
            variants={staggerContainer}
          >
            <motion.img src={logo1} alt="Client 1" className="h-16 mx-auto" />
            <motion.img src={logo2} alt="Client 2" className="h-16 mx-auto" />
            <motion.img src={logo3} alt="Client 3" className="h-16 mx-auto" />
            <motion.img src={logo4} alt="Client 4" className="h-16 mx-auto" />
            <motion.img src={logo5} alt="Client 5" className="h-16 mx-auto" />
            <motion.img src={logo6} alt="Client 6" className="h-16 mx-auto" />
          </motion.div>
        </div>
      </motion.div> */}

      {/* Other Components */}
      {/* <ExperienceSection /> */}
    </>
  );
}

export default Home;
