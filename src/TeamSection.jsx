import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaPaintBrush, FaRocket } from 'react-icons/fa';
import team from './assets/team.jpg';
const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[--primary-color] to-[--secondary-color] text-[--text-color]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-8 text-center flex items-center justify-center gap-4"
        >
          <FaRocket className="text-yellow-400" />
          Our Creative Team
          <FaRocket className="text-yellow-400" />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={itemVariants}
            className="relative group"
          >
            <img 
              src={team}
              alt="Innovative team"
              className="rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent hover:scale-105 transition-transform duration-500 rounded-lg" />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500 rounded-full">
                <FaCode className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold">Expert Developers</h3>
            </div>
            <p className="text-lg text-gray-200 leading-relaxed">
              Our coding maestros craft robust solutions using cutting-edge technologies. 
              From blockchain to AI, we turn complex challenges into elegant digital solutions.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <div className="p-3 bg-purple-500 rounded-full">
                <FaPaintBrush className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold">Creative Designers</h3>
            </div>
            <p className="text-lg text-gray-200 leading-relaxed">
              Our design visionaries blend aesthetics with functionality, creating 
              user experiences that captivate and convert. Every pixel tells a story.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[--secondary-color] text-[--bg-color] hover:text-[--text-color] duration-300 px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
            >
              Meet the Team
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default TeamSection;