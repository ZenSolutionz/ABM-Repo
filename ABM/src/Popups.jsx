import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Shared animation configurations
const springConfig = {
  type: "spring",
  stiffness: 300,
  damping: 15,
  mass: 0.5
};

const hoverTransition = { duration: 0.3 };

// UI/UX Component (Original)
export function AnimatedUIUX() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-8 rotateOut origin-left">
      <motion.button
        className="bg-[--primary-color] w-48 px-4 py-2 rounded-2xl shadow-xl text-black font-bold cursor-pointer overflow-hidden flex flex-col items-center justify-between"
        initial={{ rotate: -10 }}
        animate={{ rotate: 0 }}
        whileHover={{ height: "160px", backgroundColor: "var(--primary-color)" }}
        whileTap={{ scale: 0.95 }}
        transition={springConfig}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        aria-label="UI/UX Design Principles"
        type="button"
      >
        <motion.span
          className="text-lg "
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -10 : 0 }}
          transition={springConfig}
        >
          UI/UX
        </motion.span>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={hoverTransition}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-black hover:scale-125 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.828 21H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v7.828a2 2 0 01-.586 1.414l-5.172 5.172a2 2 0 01-1.414.586zM11 11h2m-1-1v2m-4 4h4"
                />
              </svg>
              <motion.span
                className="text-sm text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Design Principles
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

// Web Development Component
export function AnimatedWebDev() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-8 rotateIn  origin-right">
      <motion.button
        className="bg-[--primary-color] w-48 px-4 py-2 rounded-2xl shadow-xl text-black font-bold cursor-pointer overflow-hidden flex flex-col items-center justify-between"
        initial={{ rotate: -10 }}
        animate={{ rotate: 0 }}
        whileHover={{ height: "160px", backgroundColor: "var(--primary-color)" }}
        whileTap={{ scale: 0.95 }}
        transition={springConfig}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        aria-label="Web Development Services"
        type="button"
      >
        <motion.span
          className="text-lg "
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -10 : 0 }}
          transition={springConfig}
        >
          Web Dev
        </motion.span>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={hoverTransition}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-black hover:scale-125 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <motion.span
                className="text-sm text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Design and Development
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

// Logo Design Component
export function AnimatedLogoDesign() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-8 rotateOut origin-left ">
      <motion.button
        className="bg-[--primary-color] w-48 px-4 py-2 rounded-2xl shadow-xl text-black font-bold cursor-pointer overflow-hidden flex flex-col items-center justify-between"
        initial={{ rotate: -10 }}
        animate={{ rotate: 0 }}
        whileHover={{ height: "160px", backgroundColor: "var(--primary-color)" }}
        whileTap={{ scale: 0.95 }}
        transition={springConfig}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        aria-label="Logo Design Services"
        type="button"
      >
        <motion.span
          className="text-lg "
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -10 : 0 }}
          transition={springConfig}
        >
          Logo Design
        </motion.span>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={hoverTransition}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-black hover:scale-125 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              <motion.span
                className="text-sm text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Brand Identity
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}










// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "./App.css";

// export default function AnimatedUIUX() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="p-8 rotateIn">
//       <motion.button
//         className="bg-[--primary-color] w-48 px-4 py-2 rounded-2xl shadow-xl text-black font-bold cursor-pointer overflow-hidden flex flex-col items-center justify-between"
//         initial={{ rotate: -10 }}
//         animate={{ rotate: 0 }}
//         whileHover={{ height: "160px", backgroundColor: "var(--primary-color)" }}
//         whileTap={{ scale: 0.95 }}
//         transition={{
//           type: "spring",
//           stiffness: 300,
//           damping: 15,
//           mass: 0.5
//         }}
//         onHoverStart={() => setIsHovered(true)}
//         onHoverEnd={() => setIsHovered(false)}
//         aria-label="UI/UX Design Principles"
//         type="button"
//       >
//         <motion.span
//           className="text-lg mb-2"
//           initial={{ y: 0 }}
//           animate={{ y: isHovered ? -10 : 0 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           UI/UX
//         </motion.span>

//         <AnimatePresence>
//           {isHovered && (
//             <motion.div
//               className="flex flex-col items-center gap-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.3 }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-12 h-12 text-black hover:text-black hover:scale-125 transition-all "
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M14.828 21H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v7.828a2 2 0 01-.586 1.414l-5.172 5.172a2 2 0 01-1.414.586zM11 11h2m-1-1v2m-4 4h4"
//                 />
//               </svg>
//               <motion.span
//                 className="text-sm text-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 Design Principles
//               </motion.span>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.button>
//     </div>
//   );
// }

