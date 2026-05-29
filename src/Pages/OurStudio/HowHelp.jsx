import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HowHelp = () => {
  const [isBonhommeHovered, setIsBonhommeHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const concepts = [
    {
      id: 1,
      num: "01",
      title: "DIFFERENT CRAFTI STYLE",
      motion: "GLOWING",
      tagline: "Unmistakably creative.",
      mood: "Thinking outside the traditional frame.",
      emotion: "Innovation, curiosity, unique signature.",
      svgType: "different-style"
    },
    {
      id: 2,
      num: "02",
      title: "IDEA SPACE",
      motion: "EXPANDING",
      tagline: "Where ideas begin.",
      mood: "Creative thinkers in exploration mode.",
      emotion: "Infinite possibilities, brainstorming, innovation orbit.",
      svgType: "idea-space"
    },
    {
      id: 3,
      num: "03",
      title: "HAPPY TEAM",
      motion: "CONNECTED",
      tagline: "Built together.",
      mood: "Connected humans collaborating smoothly.",
      emotion: "Unity, positive energy, human connection.",
      svgType: "happy-team"
    },
    {
      id: 4,
      num: "04",
      title: "SMART THINKING",
      motion: "PROCESSING",
      tagline: "Designing intelligent systems.",
      mood: "Strategic problem solvers.",
      emotion: "Intelligence, systems thinking, precision.",
      svgType: "smart-thinking"
    },
    {
      id: 5,
      num: "05",
      title: "LAUNCH MODE",
      motion: "ACCELERATING",
      tagline: "From concept to momentum.",
      mood: "Execution under momentum.",
      emotion: "Speed, confidence, product release energy.",
      svgType: "launch-mode"
    },
    {
      id: 6,
      num: "06",
      title: "CLEAR COMMUNICATION",
      motion: "TRANSMITTING",
      tagline: "Every detail understood.",
      mood: "Transparent collaboration and client clarity.",
      emotion: "Trust, simplicity, direct communication.",
      svgType: "clear-comm"
    },
    {
      id: 7,
      num: "07",
      title: "RELAXED MIND",
      motion: "FLOATING",
      tagline: "Clarity creates better work.",
      mood: "Calm creative clarity.",
      emotion: "Focus, balance, stress-free workflow.",
      svgType: "relaxed-mind"
    }
  ];

  return (
    <section className="bg-black text-[#F3F3F3] py-24 px-6 md:px-12 relative overflow-hidden font-dmsans">
      {/* Background cyber grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(138,138,138,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(138,138,138,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Title block */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-[#FF1D2D]/30 bg-[#FF1D2D]/5 rounded-none mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1D2D] shadow-[0_0_8px_#FF1D2D] animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#FF1D2D] font-urbanist">
              CRAFTI VISUAL SYSTEM
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase font-urbanist mb-6 text-white"
          >
            HOW WE <span className="text-[#FF1D2D]">HELP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8A8A8A] text-base md:text-lg leading-relaxed font-light max-w-xl mx-auto"
          >
            A place where ideas are shaped with intention, clarity, and craft. Meet our interactive client guide below, and explore our brand icon system.
          </motion.p>
        </div>

        {/* 1. TOP SECTION: Restored Waving Stick Figure Guide ("hi bonhomme") */}
        <div className="mb-24 flex justify-center">
          <div className="relative inline-flex items-center justify-center p-8 border border-white/10 bg-[#050505] min-h-[340px] min-w-[280px] sm:min-w-[360px] md:min-w-[400px]">
            {/* Micro cyber grid overlay behind character */}
            <div className="bg-[linear-gradient(rgba(255,29,45,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,29,45,0.02)_1px,transparent_1px)] bg-[size:16px_16px] absolute inset-0 opacity-40 pointer-events-none" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative z-10 cursor-pointer"
              onMouseEnter={() => setIsBonhommeHovered(true)}
              onMouseLeave={() => setIsBonhommeHovered(false)}
            >
              <div className="relative">
                {/* Waving stick figure SVG */}
                <svg
                  width="180"
                  height="260"
                  viewBox="0 0 200 280"
                  className="relative"
                >
                  <defs>
                    <filter id="glow-bonhomme-new" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Head */}
                  <motion.circle
                    cx="100"
                    cy="50"
                    r="35"
                    fill="#FF1D2D"
                    animate={isBonhommeHovered ? { filter: "url(#glow-bonhomme-new)" } : { y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Eyes */}
                  <circle cx="90" cy="45" r="4" fill="white" />
                  <circle cx="110" cy="45" r="4" fill="white" />

                  {/* Smile */}
                  <motion.path
                    stroke="white"
                    strokeWidth="2.5"
                    fill="none"
                    d={isBonhommeHovered ? "M 85 55 Q 100 68 115 55" : "M 85 55 Q 100 62 115 55"}
                    animate={
                      isBonhommeHovered
                        ? {}
                        : {
                            d: [
                              "M 85 55 Q 100 62 115 55",
                              "M 85 55 Q 100 65 115 55",
                              "M 85 55 Q 100 62 115 55",
                            ],
                          }
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Body */}
                  <motion.rect
                    x="70"
                    y="90"
                    width="60"
                    height="80"
                    rx="10"
                    fill="#cc0000"
                    animate={{ scaleY: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Left Arm (Waving) */}
                  <motion.rect
                    x="130"
                    y="100"
                    width="50"
                    height="15"
                    rx="7"
                    fill="#FF1D2D"
                    animate={
                      isBonhommeHovered
                        ? { rotate: -45, y: -20, filter: "url(#glow-bonhomme-new)" }
                        : { rotate: [0, -5, 0] }
                    }
                    transition={{
                      duration: isBonhommeHovered ? 0.3 : 2,
                      repeat: isBonhommeHovered ? 0 : Infinity,
                    }}
                    style={{ transformOrigin: "130px 107px" }}
                  />

                  {/* Right Arm */}
                  <rect x="20" y="110" width="50" height="15" rx="7" fill="#FF1D2D" />

                  {/* Legs */}
                  <rect x="75" y="170" width="20" height="60" rx="10" fill="#990000" />
                  <rect x="105" y="170" width="20" height="60" rx="10" fill="#990000" />

                  {/* Feet */}
                  <ellipse cx="85" cy="240" rx="15" ry="8" fill="#660000" />
                  <ellipse cx="115" cy="240" rx="15" ry="8" fill="#660000" />
                </svg>

                {/* Speech bubble popover */}
                <AnimatePresence>
                  {isBonhommeHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0, x: 170, y: 30 }}
                      animate={{ opacity: 1, scale: 1, x: 170, y: 30 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, type: "spring", bounce: 0.5 }}
                      className="absolute text-white font-extrabold text-2xl font-urbanist bg-[#FF1D2D] px-4 py-2 shadow-[0_0_15px_#FF1D2D] select-none"
                      style={{ top: 0, left: 0 }}
                    >
                      Hi...
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Cyber L-shape accents */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#FF1D2D]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#FF1D2D]" />
          </div>
        </div>

        {/* Section Divider / Label */}
        <div className="relative flex items-center justify-center mb-16 max-w-5xl mx-auto">
          <div className="absolute left-0 right-0 h-[1px] bg-white/10" />
          <span className="relative z-10 px-6 bg-black text-[#8A8A8A] font-bold text-xs tracking-[0.4em] uppercase font-urbanist">
            THE 7 CORE BRAND ICON CONCEPTS
          </span>
        </div>

        {/* 2. BOTTOM SECTION: 7 Concept Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {concepts.map((concept, index) => {
            const isHovered = hoveredCard === concept.id;
            return (
              <motion.div
                key={concept.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredCard(concept.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-[#050505] border border-white/10 hover:border-[#FF1D2D]/40 transition-all duration-500 rounded-none relative overflow-hidden group p-6 min-h-[350px] flex flex-col justify-between"
                style={{
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)"
                }}
              >
                {/* Back cyber micro-grid overlay */}
                <div className="bg-[linear-gradient(rgba(255,29,45,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,29,45,0.03)_1px,transparent_1px)] bg-[size:16px_16px] absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Top accent: number & animation mode */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[#FF1D2D] font-mono text-sm tracking-wider font-bold">
                    {concept.num}
                  </span>
                  <span className={`text-[9px] font-bold tracking-[0.2em] px-2 py-0.5 border transition-colors duration-300 font-urbanist ${
                    isHovered 
                      ? "border-[#FF1D2D] bg-[#FF1D2D]/10 text-[#FF1D2D]" 
                      : "border-[#8A8A8A]/30 text-[#8A8A8A]"
                  }`}>
                    {concept.motion}
                  </span>
                </div>

                {/* Center visual: Unified geometry icon */}
                <div className="flex justify-center items-center py-4 relative z-10">
                  <ConceptIcon type={concept.svgType} isHovered={isHovered} />
                </div>

                {/* Bottom metadata */}
                <div className="relative z-10 text-left">
                  <h3 className="text-base font-bold tracking-wider text-white font-urbanist mb-1 uppercase transition-colors duration-300 group-hover:text-[#FF1D2D]">
                    {concept.title}
                  </h3>
                  
                  <p className="text-xs font-semibold italic text-[#FF1D2D] mb-3">
                    “{concept.tagline}”
                  </p>

                  <div className="space-y-1 pt-3 border-t border-white/10 group-hover:border-[#FF1D2D]/20 transition-colors duration-500">
                    <p className="text-[11px] text-[#8A8A8A]">
                      <span className="text-white font-bold uppercase tracking-wider mr-1 text-[9px] font-urbanist">MOOD:</span>
                      {concept.mood}
                    </p>
                    <p className="text-[11px] text-[#8A8A8A]">
                      <span className="text-white font-bold uppercase tracking-wider mr-1 text-[9px] font-urbanist">EMOTION:</span>
                      {concept.emotion}
                    </p>
                  </div>
                </div>

                {/* Cyber L-shape corner accents */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#FF1D2D]/0 group-hover:border-t-2 group-hover:border-r-2 group-hover:border-[#FF1D2D] transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#FF1D2D]/0 group-hover:border-b-2 group-hover:border-l-2 group-hover:border-[#FF1D2D] transition-all duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

// Reusable dynamic Concept Icon using Crafti Segmented Ring Brand DNA
const ConceptIcon = ({ type, isHovered }) => {
  const ringStrokeDash = "202.9 35.8";
  
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Glow Filter */}
        <defs>
          <filter id="glow-effect-brand" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer Segmented Circle: always 85% completion */}
        <motion.circle
          cx="50"
          cy="50"
          r="38"
          stroke="#F3F3F3"
          strokeWidth="3.5"
          strokeDasharray={ringStrokeDash}
          strokeLinecap="round"
          fill="none"
          transform="rotate(-40 50 50)"
          animate={isHovered ? { stroke: "#FF1D2D", filter: "url(#glow-effect-brand)" } : { stroke: "#F3F3F3" }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating Red Accent Block */}
        <motion.rect
          x="77"
          y="20"
          width="8"
          height="8"
          rx="1.5"
          fill="#FF1D2D"
          animate={isHovered ? { scale: 1.25, rotate: 45, filter: "url(#glow-effect-brand)" } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "81px 24px" }}
        />

        {/* Inner Graphic Geometry */}
        {type === 'different-style' && (
          <g>
            <path 
              d="M50 34 C43 34 40 41 43 47 C45 49 46 51 46 54 H54 C54 51 55 49 57 47 C60 41 57 34 50 34 Z" 
              stroke="#FFFFFF" 
              strokeWidth="2.25" 
              fill="none" 
              strokeLinejoin="round" 
            />
            <line x1="46" y1="58" x2="54" y2="58" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            <line x1="47.5" y1="61" x2="52.5" y2="61" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            
            <motion.path 
              d="M47 43 L50 39 L53 43" 
              stroke="#FF1D2D" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              animate={isHovered ? { strokeWidth: 2.5, filter: "url(#glow-effect-brand)" } : { strokeWidth: 2 }}
            />

            {isHovered && (
              <g stroke="#FF1D2D" strokeWidth="1.5" strokeLinecap="round">
                <line x1="50" y1="28" x2="50" y2="30" />
                <line x1="37" y1="36" x2="40" y2="39" />
                <line x1="63" y1="36" x2="60" y2="39" />
                <line x1="33" y1="46" x2="36" y2="46" />
                <line x1="67" y1="46" x2="64" y2="46" />
              </g>
            )}
          </g>
        )}

        {type === 'idea-space' && (
          <motion.g
            animate={isHovered ? { x: [0, 2, 0], y: [0, -2, 0] } : {}}
            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
          >
            <path 
              d="M40 60 C43 56 48 51 57 43 C53 52 48 57 40 60 Z" 
              stroke="#FFFFFF" 
              strokeWidth="2.25" 
              fill="none" 
            />
            <path d="M57 43 L54 46 M57 43 L51 43" stroke="#FFFFFF" strokeWidth="2" fill="none" />
            <path d="M40 56 L36 58 L40 60" stroke="#FFFFFF" strokeWidth="1.75" fill="none" />
            <path d="M44 60 L42 64 L40 60" stroke="#FFFFFF" strokeWidth="1.75" fill="none" />
            
            <motion.path 
              d="M38 62 L33 65 L35 60 Z" 
              fill="#FF1D2D"
              animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
              transition={{ repeat: Infinity, duration: 0.4 }}
              style={{ transformOrigin: "38px 62px" }}
            />
          </motion.g>
        )}

        {type === 'happy-team' && (
          <motion.g
            animate={isHovered ? { y: [0, -4, 0] } : {}}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <circle cx="50" cy="42" r="4.5" fill="#FFFFFF" />
            <path d="M44 58 C44 51 56 51 56 58 Z" fill="#FFFFFF" />
            
            <circle cx="41" cy="46" r="3.5" fill="#8A8A8A" />
            <path d="M36 60 C36 54 46 54 46 60 Z" fill="#8A8A8A" />
            
            <circle cx="59" cy="46" r="3.5" fill="#FF1D2D" />
            <path d="M54 60 C54 54 64 54 64 60 Z" fill="#FF1D2D" />
          </motion.g>
        )}

        {type === 'smart-thinking' && (
          <g>
            <path 
              d="M42 62 C40 56 40 48 45 42 C51 36 61 40 61 48 C61 55 57 58 57 62" 
              stroke="#FFFFFF" 
              strokeWidth="2.25" 
              fill="none" 
              strokeLinecap="round" 
            />
            <motion.path 
              d="M45 45 C43 45 42 47 44 49 C43 50 44 52 46 52 C47 53 50 52 51 50 C53 50 53 47 51 45 Z" 
              fill="#FF1D2D"
              animate={isHovered ? { scale: [1, 1.15, 1], filter: "url(#glow-effect-brand)" } : { scale: 1 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "47px 48px" }}
            />
          </g>
        )}

        {type === 'launch-mode' && (
          <motion.g
            animate={isHovered ? { y: [0, -3, 0] } : {}}
            transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
          >
            <path 
              d="M50 34 C52 38 54 44 54 52 H46 C46 44 48 38 50 34 Z" 
              stroke="#FFFFFF" 
              strokeWidth="2.25" 
              fill="none" 
              strokeLinejoin="round" 
            />
            <path d="M46 48 L41 52 H46" stroke="#FFFFFF" strokeWidth="1.75" fill="none" />
            <path d="M54 48 L59 52 H54" stroke="#FFFFFF" strokeWidth="1.75" fill="none" />
            
            <motion.path 
              d="M48 55 L50 64 L52 55 L50 57 Z" 
              fill="#FF1D2D"
              animate={isHovered ? { scaleY: [1, 1.3, 1], filter: "url(#glow-effect-brand)" } : { scaleY: 1 }}
              transition={{ repeat: Infinity, duration: 0.4 }}
              style={{ transformOrigin: "50px 55px" }}
            />
          </motion.g>
        )}

        {type === 'clear-comm' && (
          <g>
            <rect x="36" y="38" width="28" height="20" rx="4" stroke="#FFFFFF" strokeWidth="2.25" fill="none" />
            <path d="M42 58 L38 64 L46 58" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" fill="#050505" />
            
            <circle cx="44" cy="48" r="2" fill="#FF1D2D" />
            <motion.circle 
              cx="50" 
              cy="48" 
              r="2" 
              fill="#FF1D2D" 
              animate={isHovered ? { opacity: [0.2, 1, 0.2] } : {}}
              transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
            />
            <motion.circle 
              cx="56" 
              cy="48" 
              r="2" 
              fill="#FF1D2D"
              animate={isHovered ? { opacity: [0.2, 1, 0.2] } : {}}
              transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}
            />
          </g>
        )}

        {type === 'relaxed-mind' && (
          <g>
            <circle cx="50" cy="42" r="4.5" fill="#FFFFFF" />
            <path d="M42 53 C42 48 58 48 58 53 C58 56 54 58 50 58 C46 58 42 56 42 53 Z" fill="#FFFFFF" />
            <path d="M36 62 C36 57 44 57 50 60 C56 57 64 57 64 62 Z" fill="#FFFFFF" />
            
            <motion.circle 
              cx="50" 
              cy="31" 
              r="3" 
              fill="#FF1D2D"
              animate={isHovered ? { y: [0, -3, 0], scale: 1.25, filter: "url(#glow-effect-brand)" } : { y: 0 }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </g>
        )}
      </svg>
    </div>
  );
};

export default HowHelp;
