import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import video1 from '../../assets/video/bg2.mp4';

const SecondTitle = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div className="bg-black text-white font-urbanist relative overflow-hidden border-b border-red-500/10">
      {/* Main Section with Premium Background Video */}
      <div
        ref={ref}
        className="relative h-[85vh] sm:h-[80vh] flex flex-col justify-center items-start overflow-hidden py-24"
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          src={video1}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Ambient Overlay to ensure text readability */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-black/45 to-transparent" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black/75 to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-start gap-6">
          
          {/* Glowing welcome indicator */}
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#ff2a35] shadow-[0_0_10px_#ff2a35] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#ff2a35] font-KronaOne">
              WELCOME TO CRAFTI STUDIO
            </span>
          </div>

          {/* Section Header */}
          <motion.h2
            style={{ y, opacity }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase mb-2"
          >
            PRODUCT THINKING <span className="text-[#ff2a35] drop-shadow-[0_0_15px_rgba(255,42,53,0.3)]">FIRST</span>
          </motion.h2>

          {/* Primary Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-zinc-100 max-w-5xl"
          >
            We help businesses define clear product direction before development begins.
          </motion.div>

          {/* Strategic Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 font-dmsans text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl"
          >
            From user flows and roadmap planning to scalable system architecture, Crafti bridges strategy, UX, and engineering into one intelligent product ecosystem.
          </motion.p>

          {/* Accent Hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl font-bold tracking-wide text-[#ff2a35] uppercase mt-4 flex items-center gap-3 drop-shadow-[0_0_10px_rgba(255,42,53,0.2)]"
          >
            <span>—</span>
            <span>We don't just develop platforms. We engineer digital growth systems.</span>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default SecondTitle;
