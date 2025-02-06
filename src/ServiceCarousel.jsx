import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import web from "./assets/web.gif";
import ui from "./assets/uiux.gif";
import logo from "./assets/logo-design.gif";
import graphics from "./assets/graphic-design.gif";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and dynamic websites.",
    icon: web,
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive user experiences and interfaces.",
    icon: ui,
  },
  {
    title: "Logo Design",
    description: "Creating memorable brand identities.",
    icon: logo,
  },
  {
    title: "Graphics Design",
    description: "Designing eye-catching visual content.",
    icon: graphics,
  },
];

const ServiceCarousel = () => {
  return (
    <section className="bg-gradient-to-tr from-[--primary-color] via-[--bg-color] to-[--secondary-color] w-full mx-auto h-min pt-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
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

        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            autoplay: true,
            interval: 3000,
            gap: "2rem",
            pauseOnHover: true,
            pagination: false,
            arrows: true,
            breakpoints: {
              1280: { perPage: 3 },
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
          aria-label="Our Services"
        >
          {services.map((service, index) => (
            <SplideSlide className="pb-12" key={index}>
              <div className=" bg-white/30 backdrop-blur-lg border border-white/20 rounded-xl p-8 m-2 shadow-lg shadow-[--text-color] hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center">
                <div className="mb-6 w-32 h-32 flex items-center justify-center">
                  <img
                    src={service.icon}
                    alt={`${service.title} illustration`}
                    className="w-full h-full object-contain transition-transform group-hover:scale-110 duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default ServiceCarousel;