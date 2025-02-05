// Services.jsx
import { motion } from 'framer-motion';
import { faCode, faPaintBrush, faMobile, faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
  const services = [
    { 
      title: "Web Development",
      icon: faCode,
      description: "Custom web solutions built with modern technologies"
    },
    { 
      title: "UI/UX Design",
      icon: faPaintBrush,
      description: "User-centered interfaces that drive engagement"
    },
    { 
      title: "Mobile Apps",
      icon: faMobile,
      description: "Native and cross-platform mobile applications"
    },
    { 
      title: "Cloud Solutions",
      icon: faCloud,
      description: "Scalable cloud infrastructure and services"
    },
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
    <div className="min-h-screen bg-[--bg-color] py-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[--text-color] mb-6">
            Our <span className="text-[--primary-color]">Services</span>
          </h1>
          <p className="text-xl text-[--text-color/80%] max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <FontAwesomeIcon 
                icon={service.icon} 
                className="text-4xl text-[--primary-color] mb-6" 
              />
              <h3 className="text-2xl font-bold text-[--text-color] mb-3">
                {service.title}
              </h3>
              <p className="text-[--text-color]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;