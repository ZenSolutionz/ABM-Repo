import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import logo1 from './assets/project1.jpg'; // Import images
import logo2 from './assets/project2.jpg';
import logo3 from './assets/project3.jpg';
import logo4 from './assets/project4.jpg';
import logo5 from './assets/project5.jpg';
import logo6  from './assets/project6.jpg';


const PortfolioSection = () => {
  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      },
    }),
  };

  const projects = [logo1, logo2, logo3, logo4, logo5, logo6]; // Array of imported images

  return (
    <motion.div 
      className="bg-[--bg-color] py-12 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[--primary-color] font-semibold text-lg"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 px-4">
              <h2 className="text-4xl font-bold text-[--text-color] mb-4 md:mb-0">
                Our <span className="text-[--primary-color]">Services</span>
              </h2>
              <a
                href="/services"
                className="flex items-center gap-2 px-6 py-3 text-[--primary-color] hover:text-[--secondary-color] hover:bg-[--primary-color] transition-colors duration-300 rounded-full border-2 border-[--primary-color] text-lg font-semibold"
                aria-label="View all services"
              >
                View All
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="mt-1 transition-transform hover:translate-x-1"
                />
              </a>
            </div>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-[--text-color] mt-4"
          >
            Featured <span className="text-[--primary-color]">Projects</span>
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {projects.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              className="group relative overflow-hidden rounded-3xl shadow-[--shadow-color] shadow-lg hover:shadow-xl hover:shadow-[--shadow-color] transition-all duration-500"
            >
              <div className="h-80 relative overflow-hidden">
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[--bg-color] via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-20 group-hover:translate-y-0 transition-all duration-500 bg-[--bg-color/90] backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-[--text-color] mb-2">
                    Project {index + 1}
                  </h3>
                  <p className="text-[--text-color] line-clamp-2">
                    A stunning digital solution that transformed client's business operations through innovative technology.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Photoshop', 'Illustrator', 'Figma', 'AI'].map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-[--primary-color/10] text-[--primary-color]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[--primary-color/80]">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-8 py-3 bg-white text-[--primary-color] rounded-full font-semibold flex items-center gap-2"
                >
                            <Link to="/projects">
                  View Project
                    </Link>
                  <FontAwesomeIcon icon={faArrowRightLong} className="mt-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[--primary-color] text-white rounded-xl font-semibold hover:bg-[--secondary-color] transition-colors duration-300"
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioSection;
