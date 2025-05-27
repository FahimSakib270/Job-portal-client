import React from "react";
import { motion } from "framer-motion";
import banner1 from "../../assets/Team/devTeam.png";
import banner2 from "../../assets/Team/devloperCelebrate.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[85vh] px-4 text-base-content">
      <div className="hero-content flex-col lg:flex-row-reverse items-center justify-between w-full max-w-6xl mx-auto py-12">
        {/* Images Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center md:justify-end flex-1">
          <motion.img
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={banner1}
            alt="Development Team"
            className="w-[250px] h-auto border-s-8 border-b-8 border-primary rounded-t-3xl rounded-br-2xl shadow-xl"
          />
          <motion.img
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={banner2}
            alt="Celebrating Developers"
            className="w-[250px] h-auto border-s-8 border-b-8 border-primary rounded-t-3xl rounded-br-2xl shadow-xl mt-6 md:mt-0"
          />
        </div>

        {/* Text Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left space-y-6 "
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Find your dream{" "}
            <motion.span
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block text-primary"
            >
              job
            </motion.span>
          </h1>
          <p className="py-2 text-lg text-gray-500 max-w-lg mx-auto lg:mx-0">
            Your next career move is just one application away. Explore
            thousands of remote, hybrid, and full-time opportunities across top
            tech companies.
          </p>
          <ul className="space-y-2 text-gray-500 text-left max-w-md mx-auto lg:mx-0">
            <li className="flex items-center gap-2">
              🔹 <span>Apply to jobs in seconds</span>
            </li>
            <li className="flex items-center gap-2">
              🔹 <span>Get hired by top tech companies</span>
            </li>
            <li className="flex items-center gap-2">
              🔹 <span>Remote & flexible work options</span>
            </li>
          </ul>
          <div className="pt-4">
            <button className="btn btn-primary btn-wide hover:scale-105 transition-transform duration-300">
              Browse Jobs Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
