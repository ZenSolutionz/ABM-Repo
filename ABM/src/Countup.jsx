import CountUp from 'react-countup';

function Countup() {
  return (
    <div className="bg-gradient-to-r from-[--primary-color]  to-[--secondary-color] py-16 px-8 shadow-lg text-[--text-color]">
      <div className="max-w-7xl mx-auto text-center backdrop-blur-md bg-white/30 p-4 rounded-xl ">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-[--bg-color]">
          Over <span className="text-4xl text-[--secondary-color] font-bold"><CountUp end={500} duration={3} />+</span> Companies Served Globally
        </h1>
        <p className="text-lg md:text-xl text-[--bg-color] opacity-90">
          Delivering exceptional solutions for over a decade, trusted by industry leaders.
        </p>
        <div className="mt-8">
          <button className="bg-[--secondary-color] text-[--bg-color] py-2 px-6 rounded-full font-semibold shadow-md hover:bg-opacity-80 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Countup;
