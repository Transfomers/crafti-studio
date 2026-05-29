import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import saasMockup from "../../assets/saas_mockup.png";

const openWhatsApp = () => {
  window.open(
    "https://wa.me/8801764308876",
    "_blank",
    "noopener,noreferrer"
  );
};

const Banner = ({ onShowReelsClick }) => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div
      id="banner-page"
      className="relative min-h-screen bg-black overflow-hidden font-KronaOne flex items-center pt-24 md:pt-0"
    >
      {/* Background Tech Grid & Red Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Fine Radial Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
        
        {/* Soft Red Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-red-900/10 blur-[120px] animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-red-800/10 blur-[150px] animate-pulse duration-[12000ms]" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT SIDE - Premium Copy & Navigation Options */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left font-urbanist"
        >
          {/* Studio Slogan Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-red-950/20 border border-red-500/20 rounded-[2px]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a35] shadow-[0_0_8px_#ff2a35] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#ff2a35] font-urbanist">
              think . craft impact
            </span>
          </motion.div>

          {/* Heading Statement */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.8vw] font-bold text-white leading-[1.1] tracking-tight mb-6 font-urbanist"
          >
            We craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-white">scalable digital products</span>, intelligent systems, and modern web experiences.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 font-dmsans text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mb-8"
          >
            Crafti combines product strategy, UX thinking, and high-performance development into one seamless innovation process for startups and growth-focused businesses.
          </motion.p>

          {/* Dual Call to Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <button
              onClick={openWhatsApp}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] cursor-pointer font-urbanist"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onShowReelsClick}
              className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold text-sm tracking-wider uppercase rounded-full flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer font-urbanist"
            >
              Explore Services
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Sleek High-Fidelity SaaS Product Mockup */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[460px] aspect-square rounded-[4px] border border-red-500/15 overflow-hidden group shadow-[0_0_50px_rgba(255,42,53,0.05)] bg-[#0b0b0d]"
          >
            {/* Subtle internal hover glow */}
            <div className="absolute inset-0 bg-red-500/[0.005] group-hover:bg-red-500/[0.015] transition-all duration-500 pointer-events-none rounded-[4px] z-10" />
            
            {/* High-fidelity mockup image */}
            <img
              src={saasMockup}
              alt="SaaS Platform Mockup"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
            />

            {/* Pixel Perfect Crimson Corner Accents */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-[2px] border-r-[2px] border-[#ff2a35] pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-[2px] border-l-[2px] border-[#ff2a35] pointer-events-none z-20" />
          </motion.div>
        </div>

      </div>

      {/* Floating Direct Contact Button */}
      <div className="absolute bottom-6 right-6 z-50">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-60"></div>
          <button
            onClick={openWhatsApp}
            className="relative bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center cursor-pointer"
          >
            <FaWhatsapp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
