// ContactUs.jsx
import { motion } from 'framer-motion';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactUs = () => {
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
            Get in <span className="text-[--primary-color]">Touch</span>
          </h1>
          <p className="text-xl text-[--text-color/80%] max-w-3xl mx-auto">
            Let's start a conversation about your next project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="space-y-8"
          >
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-[--text-color] mb-6">Contact Info</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon 
                    icon={faMapMarkerAlt} 
                    className="text-2xl text-[--primary-color]" 
                  />
                  <p className="text-[--text-color/80%]">123 Tech Street, Digital City</p>
                </div>
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon 
                    icon={faPhone} 
                    className="text-2xl text-[--primary-color]" 
                  />
                  <p className="text-[--text-color/80%]">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className="text-2xl text-[--primary-color]" 
                  />
                  <p className="text-[--text-color/80%]">contact@yourcompany.com</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="relative rounded-2xl overflow-hidden h-96"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119163245!2d-0.38178250546392334!3d51.52873519604596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1629990000000!5m2!1sen!2suk" 
                className="w-full h-full" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label className="block text-[--text-color] mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[--primary-color]"
              />
            </div>
            <div>
              <label className="block text-[--text-color] mb-2">Email</label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[--primary-color]"
              />
            </div>
            <div>
              <label className="block text-[--text-color] mb-2">Message</label>
              <textarea 
                rows="5"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[--primary-color]"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-[--primary-color] text-white rounded-lg font-semibold"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;