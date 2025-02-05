// AboutUs.jsx
import { motion } from 'framer-motion';
import { faUsers, faRocket, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutUs = () => {
  const team = [
    { name: "Alex Smith", role: "CEO", photo: "/team1.jpg" },
    { name: "Maria Garcia", role: "CTO", photo: "/team2.jpg" },
    { name: "James Wilson", role: "Lead Designer", photo: "/team3.jpg" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.6 }
    })
  };

  return (
    <div className="min-h-screen bg-[--bg-color]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[--text-color] mb-6">
            Crafting Digital <span className="text-[--primary-color]">Excellence</span>
          </h1>
          <p className="text-xl text-[--text-color/80%] max-w-3xl mx-auto">
            We're a passionate team of innovators dedicated to transforming your digital vision into reality
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative rounded-3xl overflow-hidden h-96"
          >
            <img src="/about-hero.jpg" alt="Our team" className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-[--text-color]">Our Journey</h2>
            <p className="text-lg text-[--text-color/80%]">
              Founded in 2018, we've evolved from a small startup to a leading digital agency. 
              Our commitment to innovation and client success has driven over 500 projects 
              to completion across 20+ industries.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-[--primary-color/10%] rounded-xl text-center">
                <FontAwesomeIcon icon={faUsers} className="text-3xl text-[--primary-color] mb-2" />
                <h3 className="text-xl font-bold text-[--text-color]">50+ Experts</h3>
              </div>
              <div className="p-4 bg-[--primary-color/10%] rounded-xl text-center">
                <FontAwesomeIcon icon={faRocket} className="text-3xl text-[--primary-color] mb-2" />
                <h3 className="text-xl font-bold text-[--text-color]">500+ Projects</h3>
              </div>
              <div className="p-4 bg-[--primary-color/10%] rounded-xl text-center">
                <FontAwesomeIcon icon={faChartLine} className="text-3xl text-[--primary-color] mb-2" />
                <h3 className="text-xl font-bold text-[--text-color]">95% Success</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;