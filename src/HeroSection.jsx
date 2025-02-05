import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';
import heroVideo from './assets/hero-bg.mp4'; 
import AnimatedButton from "./AnimatedButton";
import { AnimatedUIUX, AnimatedWebDev, AnimatedLogoDesign } from "./Popups";
import ahmad from "./assets/ahmad.png";


const HeroSection = () => {
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
    <StyledHeroSection
      id="home"
      className="flex items-center w-full justify-between min-h-[85vh] relative overflow-hidden"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 " /> {/* Overlay */}
      </div>

      <div className="container px-[6%] mt-24 lg:mt-0 mx-auto flex flex-col lg:flex-row lg:justify-between items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl text-[--text-color] font-bold mb-4"
            variants={fadeInUp}
          >
            We are{" "}
            <span className="text-[--primary-color] font-bold font-[Mask2]">
              ABM
            </span>
          </motion.h1>
          <motion.h1
            className="text-4xl text-white font-[Mask2] font-bold mb-4"
            variants={fadeInUp}
          >
            We specialize in{" "}
            <span className="text-[--primary-color] font-[Mask2] pb-2 border-b-4 border-[--primary-color] cursor-default">
              <TypeAnimation
                sequence={[
                  "UI/UX",
                  1800,
                  "Web Dev",
                  1800,
                  "Logos",
                  1800,
                  "Adds",
                  1800,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                speed={300}
              />
            </span>
          </motion.h1>
          <motion.p
            className="text-white font-[Mask2] text-wrap font-semibold text-xl mb-6 text-center lg:pr-4 lg:text-left lg:tracking-wide leading-relaxed lg:leading-8"
            variants={fadeInUp}
          >
            We are a team of passionate designers and developers with skills
            in UI/UX design, Web development, and Logo/Adds design. We can
            take your digital presence to the next level.
          </motion.p>
          <motion.span className="flex justify-evenly mb-4  lg:mb-0 gap-3" variants={fadeInUp}>
            <button
              className="custom-button font-[Mask2] inline"
              data-text="Contact"
            >
              <span className="actual-text">&nbsp;Contact&nbsp; </span>
              <span aria-hidden="true" className="hover-text">
                &nbsp;Contact&nbsp;
              </span>
            </button>
            <AnimatedButton className="inline" />
          </motion.span>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className=" h-[75vh] bg-transparent relative w-full lg:w-1/2"
          variants={fadeInUp}
        >
          {/* Image Layer */}
          <motion.div
            className="absolute pb-0 inset-0 z-0 flex content-end overflow-visible"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={ahmad}
              alt="Profile"
              className="w-full h-full bottom-0 relative object-cover object-top pointer-events-none"
              style={{ aspectRatio: "1/1" }}
            />
          </motion.div>

          {/* UI/UX Component */}
          <div className="absolute top-36 left-0 z-10 -translate-x-1/4 -translate-y-1/4">
            <AnimatedUIUX className="hover:scale-110 transition-transform" />
          </div>

          {/* WebDev Component */}
          <div className="absolute top-[45%] right-0 z-0 translate-x-1/4 -translate-y-1/4">
            <AnimatedWebDev className="hover:scale-110 transition-transform" />
          </div>

          {/* Logo Design Component */}
          <div className="absolute bottom-10 left-0 z-10 -translate-x-1/2 translate-y-1/3">
            <AnimatedLogoDesign className="opacity-90 hover:opacity-100 hover:translate-y-4 transition-all" />
          </div>
        </motion.div>
      </div>
    </StyledHeroSection>
  );
};

// Styled Components
const StyledHeroSection = styled(motion.section)`
  position: relative;
  overflow: hidden;
`;

export default HeroSection;