import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { useState } from "react";
import { faQuoteLeft, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import client1 from "./assets/client1.jpeg";
import client2 from "./assets/client2.jpeg";
import client3 from "./assets/client3.jpeg"; 

// Testimonial Section
export const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "This team transformed our digital presence completely. Their attention to detail and creative approach exceeded all expectations.",
      name: "Sarah Johnson",
      role: "CEO at TechInnovate",
      photo: client1,
    },
    {
      quote: "The best decision we made was choosing this agency. Our website traffic tripled within the first month!",
      name: "Michael Chen",
      role: "Marketing Director",
      photo: client2,
    },
    {
      quote: "Exceptional service from start to finish. They truly understand the balance between aesthetics and functionality.",
      name: "Emma Wilson",
      role: "E-commerce Entrepreneur",
      photo: client3,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[--primary-color] to-[--secondary-color] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[--text-color]">
          What Our 
          <span className="text-[--primary-color] -2 bg-clip-text" style={{ WebkitTextStroke: '0px white', color: 'var(--secondary-color)', WebkitTextFillColor: 'var(--secondary-color)' }}> Clients Say</span>
        </h2>
        
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            breakpoints: {
              1024: { perPage: 2 },
              768: { perPage: 1 },
            },
          }}
          aria-label="Client Testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <SplideSlide key={index}>
              <div className="bg-[--bg-color] flex flex-col items-start justify-between p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <FontAwesomeIcon 
                  icon={faQuoteLeft} 
                  className="text-[--primary-color] text-4xl mb-6" 
                />
                <p className="text-lg text-[--text-color] mb-6">{testimonial.quote}</p>
                <div className="flex items-stretch gap-4">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="">
                    <h3 className="font-bold text-[--text-color]">{testimonial.name}</h3>
                    <p className="text-sm text-[--text-color]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

// FAQ Section
export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes your approach unique?",
      answer: "Our human-centered design philosophy combined with agile development ensures we deliver solutions that truly resonate with end-users while maintaining technical excellence."
    },
    {
      question: "How do you ensure project security?",
      answer: "We implement enterprise-grade security measures including end-to-end encryption, regular audits, and compliance with industry standards like GDPR and HIPAA."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Most projects range from 4-12 weeks depending on complexity. We provide detailed timelines after our initial discovery phase."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide comprehensive maintenance packages with 24/7 support, regular updates, and performance optimization."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[--bg-color] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[--text-color]">
          Frequently Asked <span className="text-[--primary-color]">Questions</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-[--text-color/10%] rounded-xl transition-all duration-300 hover:border-[--primary-color/30%]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
                aria-expanded={activeIndex === index}
              >
                <span className="text-lg font-medium text-[--text-color]">
                  {faq.question}
                </span>
                <FontAwesomeIcon 
                  icon={faChevronDown} 
                  className={`text-[--primary-color] transform transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-[--text-color]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
