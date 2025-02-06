import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import  star from "./assets/star.svg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCode } from '@fortawesome/free-solid-svg-icons';
// Installed the library by running the command "npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome" in the terminal.
import './App.css';

const SliderComponent = () => {
  const textItems = [
    "UI/UX!",
    "Logos.",
    "Web Sites",
    "Adds",
    "Digital presence.",
  ];

  return (
    <div className="w-full bg-[--primary-color] shadow-md shadow-[--secondary-color]  py-4 transform -rotate-1">
      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          focus: 'center',
          autoScroll: {
            speed: 1.5, // Speed of auto-scroll
          },
          arrows: false,
          pagination: false,
          perPage: 3, // Number of text items visible at once
          gap: '1rem', // Gap between text items
        }}
        extensions={{ AutoScroll }}
        className="text-carousel"
        style={{ transform: 'rotate(-0.5deg)' }}
      >
        {textItems.map((text, index) => (
          <SplideSlide key={index}>
              <div className=" text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-nowrap font-semibold">
              <span className="flex items-center space-x-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    className="inline-block"
  >
    <path
      d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2.4140625 3.28515625 2.4140625 3.28515625 2.625 6.0625 C2.69976563 6.98160156 2.77453125 7.90070312 2.8515625 8.84765625 C2.90054687 9.55792969 2.94953125 10.26820312 3 11 C4.65 10.34 6.3 9.68 8 9 C7.34 10.65 6.68 12.3 6 14 C11.445 14.495 11.445 14.495 17 15 C17 15.66 17 16.32 17 17 C13.37 17.33 9.74 17.66 6 18 C6.66 19.65 7.32 21.3 8 23 C6.35 22.34 4.7 21.68 3 21 C2.95101563 21.71027344 2.90203125 22.42054687 2.8515625 23.15234375 C2.77679687 24.07144531 2.70203125 24.99054687 2.625 25.9375 C2.55539063 26.85402344 2.48578125 27.77054688 2.4140625 28.71484375 C2.27742188 29.46894531 2.14078125 30.22304688 2 31 C1.34 31.33 0.68 31.66 0 32 C-0.33 28.37 -0.66 24.74 -1 21 C-2.65 21.66 -4.3 22.32 -6 23 C-5.34 21.35 -4.68 19.7 -4 18 C-7.3 17.67 -10.6 17.34 -14 17 C-14 16.34 -14 15.68 -14 15 C-10.7 14.67 -7.4 14.34 -4 14 C-4.66 12.35 -5.32 10.7 -6 9 C-3.525 9.99 -3.525 9.99 -1 11 C-0.67 7.37 -0.34 3.74 0 0 Z"
      fill="var(--text-color)"
      transform="translate(15,0)"
    />
  </svg>
  <span className="inline-block">  {text}</span>
</span>


               
              </div>
           
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SliderComponent;

