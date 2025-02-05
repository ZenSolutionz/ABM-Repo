import React from 'react'
import { motion } from "framer-motion";
import ahmad from "./assets/ahmad.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
      };

      const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      };

  return (


   <motion.div
  className="bg-[--bg-color] py-12 md:py-24 overflow-hidden"
  variants={fadeIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
    >
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Image Section */}
      <motion.div 
        className="relative rounded-[2rem] overflow-hidden group"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img 
          src={ahmad} 
          alt="Our team working together"
          className="w-full h-[600px] mt-8 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[--bg-color] via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-sm bg-[--bg-color/80] rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-[--text-color] mb-2">Innovation Driven Team</h3>
          <p className="text-[--text-color/80]">Committed to excellence since 2020</p>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
<div className="flex flex-col sm:flex-row justify-between items-center mb-8 px-4">
          <h2 className="text-4xl font-bold text-[--text-color] mb-4 md:mb-0">
            Our <span className="text-[--primary-color]">Services</span>
          </h2>
          <a
            href="/services" // Update with your actual services page URL
            className="flex items-center gap-2 px-6 py-3 text-[--primary-color] hover:text-white hover:bg-[--primary-color] transition-colors duration-300 rounded-full border-4 text-xl font-bold border-[--primary-color]"
            aria-label="View all services"
          >
            View All
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className="mt-1 transition-transform hover:translate-x-1"
            />
          </a>
        </div>
        <h2 className="text-4xl  md:text-5xl font-bold text-[--text-color] mt-4 mb-6">
            Transforming Ideas Into 
            <span className="text-[--primary-color]"> Digital Reality</span>
          </h2>
          <p className="text-lg text-[--text-color] leading-relaxed">
            We are a passionate team of digital creators dedicated to crafting exceptional experiences.
            With our unique blend of technical expertise and creative vision, we help businesses
            thrive in the digital landscape.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8  px-8 py-4 bg-[--primary-color] text-[--bg-color] rounded-xl font-bold hover:bg-[--secondary-color] transition-colors duration-300"
          >
            Explore Our Journey
          </motion.button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {[ 
            { number: "3+", label: "Years of Experience" },
            { number: "500+", label: "Clients Worldwide" },
            { number: "2,000+", label: "Projects Completed" },
            { number: "20+", label: "Industries Served" }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              variants={fadeInUp}
              custom={index}
              className="group p-6 bg-[--bg-color] backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[--text-color/10] hover:border-[--primary-color/30]"
              whileHover={{ y: -5 }}
            >
              <div className="space-y-3 ">
                <h3 className="text-4xl  font-bold bg-gradient-to-r from-[--primary-color] to-[--secondary-color] bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-lg text-[--text-color] font-medium transition-colors group-hover:text-[--primary-color]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
</motion.div>

)
}

export default AboutSection