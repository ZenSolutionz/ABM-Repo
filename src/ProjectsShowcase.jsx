import { motion } from 'framer-motion';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons';
const ProjectsShowcase = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time analytics",
      tech: ["React", "Node.js", "MongoDB", "GraphQL"],
      image: "/project1.jpg",
      github: "#",
      live: "#",
      stars: "1.2k",
      forks: "345"
    },
    {
      title: "AI Chat Interface",
      description: "Conversational AI platform with natural language processing",
      tech: ["Python", "TensorFlow", "React", "WebSocket"],
      image: "/project2.jpg",
      github: "#",
      live: "#",
      stars: "892",
      forks: "210"
    },
    {
      title: "AR Navigation App",
      description: "Augmented reality navigation system for indoor spaces",
      tech: ["Unity", "ARKit", "Swift", "Firebase"],
      image: "/project3.jpg",
      github: "#",
      live: "#",
      stars: "2.3k",
      forks: "678"
    },
    {
      title: "Health Tracker Dashboard",
      description: "Real-time health monitoring with wearable integration",
      tech: ["React", "TypeScript", "AWS", "IoT"],
      image: "/project4.jpg",
      github: "#",
      live: "#",
      stars: "1.5k",
      forks: "432"
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
    <div className="min-h-screen bg-gradient-to-b from-[--bg-color] to-[--secondary-color/10%]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[--text-color] mb-6">
            Code. Create. <span className="text-[--primary-color]">Innovate.</span>
          </h1>
          <p className="text-xl text-[--text-color/80%] max-w-3xl mx-auto">
            Exploring the intersection of technology and creativity through cutting-edge digital solutions
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500"
            >
              <div className="h-80 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[--bg-color] via-transparent to-transparent" />
                
                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-[--bg-color/90%] backdrop-blur-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[--text-color]">{project.title}</h3>
                      <p className="text-[--text-color/80%] mt-1">{project.description}</p>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="p-2 hover:bg-[--primary-color/10%] rounded-full transition-colors"
                        aria-label="GitHub repository"
                      >
                        <FontAwesomeIcon icon={faGithub} className="text-[--text-color] text-xl" />
                      </a>
                      <a
                        href={project.live}
                        className="p-2 hover:bg-[--primary-color/10%] rounded-full transition-colors"
                        aria-label="Live demo"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[--text-color] text-xl" />
                      </a>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-[--primary-color/10%] text-[--primary-color]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Stats */}
                  <div className="flex gap-4 text-[--text-color/80%] text-sm">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faStar} />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faCodeBranch} />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[--primary-color/90%]">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-8 py-3 bg-white text-[--primary-color] rounded-full font-semibold flex items-center gap-2"
                >
                  View Case Study
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="mt-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-[--text-color] mb-6">
            Ready to Collaborate on Your Next Big Idea?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[--primary-color] text-white rounded-xl font-semibold hover:bg-[--secondary-color] transition-colors duration-300"
          >
            Let's Build Something Amazing
          </motion.button>
        </motion.div>
      </section>

      {/* Technology Carousel */}
      <section className="py-16 bg-[--bg-color] border-t border-[--text-color/10%]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Splide
            options={{
              type: 'loop',
              perPage: 5,
              autoplay: true,
              interval: 3000,
              arrows: false,
              pagination: false,
              gap: '2rem',
              breakpoints: {
                1024: { perPage: 4 },
                768: { perPage: 3 },
                640: { perPage: 2 }
              }
            }}
            aria-label="Technology stack"
          >
            {['React', 'Node.js', 'Python', 'AWS', 'TensorFlow', 'GraphQL', 'Docker', 'Kubernetes'].map((tech, index) => (
              <SplideSlide key={index}>
                <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[--text-color/10%] hover:border-[--primary-color/30%] transition-colors">
                  <span className="text-2xl font-bold text-[--text-color]">{tech}</span>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    </div>
  );
};

export default ProjectsShowcase;