import React from "react";
import { motion } from "motion/react";
import banner1 from "../../assets/Team/devTeam.png";
import banner2 from "../../assets/Team/devloperCelebrate.png";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={banner1}
            className="max-w-sm border-s-8 border-b-8 h-[250px] border-blue-600 rounded-t-3xl rounded-br-2xl shadow-2xl"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={banner2}
            className="max-w-sm border-s-8  h-[250px] border-b-8 border-blue-600 rounded-t-3xl rounded-br-2xl shadow-2xl"
          />
        </div>
        <div className="flex-1">
          {/* <motion.h1
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold"
          > */}
          <h1>
            Find latest{" "}
            <motion.span
              animate={{
                transition: { duration: 2, repeat: Infinity },
                color: [
                  "#ff5733 ",
                  "#ffe333 ",
                  "#6bff33",
                  "#33beff",
                  "#ff33ac  ",
                ],
              }}
            >
              Jobs!
            </motion.span>
          </h1>
          {/* </motion.h1> */}
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
