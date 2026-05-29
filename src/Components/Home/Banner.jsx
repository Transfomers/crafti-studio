import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Layers, Cpu, Code } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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
          className="lg:col-span-7 flex flex-col items-start text-left"
        >


          {/* Heading Statement */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.8vw] font-bold text-white leading-[1.1] tracking-tight mb-6"
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
            className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto"
          >
            <button
              onClick={openWhatsApp}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_40px_rgba(239,68,68,0.5)] cursor-pointer"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onShowReelsClick}
              className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold text-sm tracking-wider uppercase rounded-full flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
            >
              Explore Services
            </button>
          </motion.div>

          {/* Core Capabilites Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2.5 max-w-lg border-t border-white/10 pt-6"
          >
            <span className="text-[10px] md:text-xs font-dmsans bg-zinc-900 border border-zinc-800 text-gray-300 px-3 py-1.5 rounded-md hover:border-red-500/40 hover:text-white transition-colors duration-300">
              ⚡ Product Strategy
            </span>
            <span className="text-[10px] md:text-xs font-dmsans bg-zinc-900 border border-zinc-800 text-gray-300 px-3 py-1.5 rounded-md hover:border-red-500/40 hover:text-white transition-colors duration-300">
              💻 SaaS Development
            </span>
            <span className="text-[10px] md:text-xs font-dmsans bg-zinc-900 border border-zinc-800 text-gray-300 px-3 py-1.5 rounded-md hover:border-red-500/40 hover:text-white transition-colors duration-300">
              🎨 UX Systems
            </span>
            <span className="text-[10px] md:text-xs font-dmsans bg-zinc-900 border border-zinc-800 text-gray-300 px-3 py-1.5 rounded-md hover:border-red-500/40 hover:text-white transition-colors duration-300">
              🤖 AI Workflows
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Beautiful Product Innovation System Visuals */}
        <div className="lg:col-span-5 relative w-full h-[380px] md:h-[480px] flex items-center justify-center">
          
          {/* Glowing Red Architecture Lines & Connected Nodes */}
          <div className="absolute inset-0 z-0">
            <svg className="w-full h-full opacity-35" viewBox="0 0 400 400" fill="none">
              <motion.path
                d="M50,200 L150,120 L250,280 L350,200"
                stroke="url(#glowGradient)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              />
              <motion.path
                d="M100,100 L200,300 L300,100"
                stroke="rgba(239, 68, 68, 0.2)"
                strokeWidth="1"
              />
              <defs>
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#ef4444" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing System Nodes */}
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-[120px] left-[150px] w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]"
            />
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              className="absolute bottom-[120px] left-[250px] w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]"
            />
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 3, delay: 2 }}
              className="absolute top-[200px] right-[50px] w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#ffffff]"
            />
          </div>

          {/* Rotating "C" (Crafti) Logo Container */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border border-red-500/25 relative flex items-center justify-center bg-black/60 backdrop-blur-md shadow-[0_0_50px_rgba(239,68,68,0.08)] z-10"
          >
            {/* Logo details */}
            <div className="absolute inset-2 rounded-full border border-dashed border-red-500/10" />
            
            {/* The bold glowing C in the center (held stable) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="text-red-600 text-7xl font-extrabold select-none filter drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]"
            >
              C
            </motion.div>

            {/* Orbiting indicators */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white" />
          </motion.div>

          {/* Floating UI Elements & Dashboards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[5%] z-20 bg-zinc-900/90 border border-red-500/30 backdrop-blur-md p-4 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] max-w-[170px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 rounded bg-red-500/10 text-red-500">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              <span className="text-[8px] text-gray-400 font-semibold tracking-wider uppercase">Conversion</span>
            </div>
            <div className="text-lg font-bold text-white leading-none mb-1">+48.3%</div>
            <div className="text-[7px] text-gray-500 font-dmsans">SaaS growth optimization</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-[10%] left-[5%] z-20 bg-zinc-900/90 border border-zinc-800 backdrop-blur-md p-4 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] max-w-[170px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 rounded bg-zinc-800 text-white">
                <Cpu className="w-3.5 h-3.5 text-red-400" />
              </div>
              <span className="text-[8px] text-gray-400 font-semibold tracking-wider uppercase">System Health</span>
            </div>
            <div className="text-lg font-bold text-red-500 leading-none mb-1">99.98%</div>
            <div className="text-[7px] text-gray-500 font-dmsans">Scalable micro-architecture</div>
          </motion.div>

          <motion.div
            animate={{ scale: [0.95, 1.02, 0.95] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 right-[10%] z-20 bg-zinc-950/80 border border-red-500/20 backdrop-blur-md px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
          >
            <Code className="w-4 h-4 text-red-500" />
            <span className="text-[8px] text-gray-300 font-bold uppercase tracking-wider">Engineered Craftsmanship</span>
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
