import React from "react";
import { motion } from "framer-motion";
import video1 from '../../assets/video/montage footage CF.mp4'

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden font-KronaOne">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video1}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

      {/* Hero Text Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-full flex items-center justify-center px-4 sm:px-6 md:px-8"
      >
        <div className="max-w-6xl mx-auto text-center space-y-4 sm:space-y-6">

          {/* Big Title with Red Dot */}
          <div className="relative inline-block">
            {/* The Red Dot to the left */}
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="absolute -left-8 sm:-left-16 md:-left-20 top-[20%] w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-red-600 shadow-[0_0_20px_#ef4444]"
            />
            
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-8xl md:text-9xl lg:text-[9.5vw] font-black text-red-600 uppercase tracking-tighter leading-none"
            >
              WELCOME
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-3xl md:text-4xl lg:text-[3vw] font-black text-red-600 uppercase tracking-wide mb-8"
          >
            TO CRAFTI STUDIO
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="
              text-xs 
              sm:text-sm 
              md:text-base 
              lg:text-xl 
              text-white 
              leading-relaxed 
              md:leading-snug
              max-w-3xl 
              mx-auto
              px-4 sm:px-0
              font-dmsans
            "
          >
            A place where ideas are shaped with intention, clarity, and craft.
            Everything we create begins with a clear idea and a focused process.
          </motion.p>

          {/* Pulsing Red Dot at the bottom center */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            className="w-4 h-4 rounded-full bg-red-600 shadow-[0_0_20px_#ef4444] mx-auto mt-12 animate-pulse"
          />

        </div>
      </motion.div> 
    </div>
  );
};

export default HeroSection;
