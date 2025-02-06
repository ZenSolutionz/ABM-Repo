import { motion } from "framer-motion";
import { useState } from "react";
import ThemeSelector from "./ThemeSelector";

const ThemeSelectorWrapper = () => {
  const [isVisible, setIsVisible] = useState(false);

  const panelVariants = {
    visible: {
        display: "block",
        opacity: 1,
        x: 0,
        transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hidden: {
        display: "none",
        opacity: 0,
        x: 300,
        transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Sticky Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-[--primary-color] text-white p-3 rounded-full shadow-md hover:bg-[--secondary-color] transition-all"
          aria-label="Toggle Theme Selector"
        >
          🎨
        </button>
      </div>

      {/* Theme Selector Panel */}
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={panelVariants}
        className="fixed bottom-16 right-4 z-40 bg-white rounded-lg shadow-lg "
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-[--text-color] hover:text-[--primary-color] text-xl"
          aria-label="Close"
        >
          ✖
        </button>
        <ThemeSelector />
      </motion.div>
    </>
  );
};

export default ThemeSelectorWrapper;
