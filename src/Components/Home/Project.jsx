import React from "react";
import { motion } from "framer-motion";
import cardImage from '../../assets/Image/image.png';

const projects = [
    {
        id: 1,
        title: "ITC Formation Website",
        category: "Education Platform",
        description: "Modern educational and professional training platform designed for students and institutions.",
        btnText: "View Website",
        link: "https://itcformation.net"
    },
    {
        id: 2,
        title: "ITC Santé Platform",
        category: "Healthcare Education",
        description: "Medical and healthcare training platform with modern UI/UX and educational resources.",
        btnText: "View Website",
        link: "https://itcsant.com"
    },
    {
        id: 3,
        title: "Trandjia LinkedIn Profile",
        category: "Professional Network",
        description: "Professional networking and business presence showcasing entrepreneurial and digital activities.",
        btnText: "View LinkedIn",
        link: "https://www.linkedin.com/in/moise-donald-ngueki-a73150254"
    },
    {
        id: 4,
        title: "Dodonpa LinkedIn Page",
        category: "Creative Brand",
        description: "Creative digital brand focused on innovation, design, and online identity.",
        btnText: "View LinkedIn",
        link: "https://www.linkedin.com/company/crafti-studio/?viewAsMember=true"
    }
];

const renderProjectLogo = (projectId) => {
  const ringStrokeDash = "202.9 35.8";
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Segmented Ring */}
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke="#F3F3F3"
        strokeWidth="4"
        strokeDasharray={ringStrokeDash}
        strokeLinecap="round"
        fill="none"
        transform="rotate(-40 50 50)"
      />
      {/* Floating Red Accent Block */}
      <rect
        x="77"
        y="20"
        width="8"
        height="8"
        rx="1.5"
        fill="#FF1D2D"
      />
      
      {/* Inner icons based on Project */}
      {projectId === 1 && (
        // ITC Formation: Minimalist open book
        <g stroke="#FF1D2D" strokeWidth="2" fill="none">
          <path d="M36 42 Q 50 48 64 42 V 58 Q 50 64 36 58 Z" />
          <line x1="50" y1="46" x2="50" y2="62" />
        </g>
      )}
      {projectId === 2 && (
        // ITC Santé: Medical cross representing healthcare
        <path d="M42 50 H58 M50 42 V58" stroke="#FF1D2D" strokeWidth="3.5" strokeLinecap="round" />
      )}
      {projectId === 3 && (
        // Trandjia: Connected network nodes
        <g>
          <circle cx="42" cy="42" r="3.5" fill="#FF1D2D" />
          <circle cx="58" cy="42" r="3.5" fill="#FF1D2D" />
          <circle cx="50" cy="58" r="3.5" fill="#FF1D2D" />
          <path d="M42 42 L58 42 L50 58 Z" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
        </g>
      )}
      {projectId === 4 && (
        // Dodonpa: Creative geometric star sparkle
        <path d="M50 34 L53 47 L66 50 L53 53 L50 66 L47 53 L34 50 L47 47 Z" fill="#FF1D2D" />
      )}
    </svg>
  );
};

const Project = () => {
    return (
        <div className="py-24 bg-black text-white font-urbanist">

            {/* Section Title */}
            <div className="text-center mb-16 sm:mb-20 md:mb-24 px-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-urbanist tracking-tight text-white uppercase">
                    Crafted <span className="text-[#FF1D2D] drop-shadow-[0_0_15px_rgba(255,29,45,0.3)]">Platforms</span>
                </h2>
            </div>

            {/* Project Grid Wrapper */}
            <div className="px-4 sm:px-10 md:px-20 lg:px-44 font-urbanist">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
                    {projects.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="relative overflow-hidden border border-white/10 hover:border-[#FF1D2D]/40 transition-all duration-500 bg-black group min-h-[380px] sm:min-h-[420px] flex flex-col justify-between"
                        >
                            {/* Background Image with opacity */}
                            <img
                                src={cardImage}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-all duration-700 group-hover:scale-105"
                            />

                            {/* White opacity overlay */}
                            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/[0.15] transition-colors duration-500" />

                            {/* Cyber micro-grid background on hover */}
                            <div className="bg-[linear-gradient(rgba(255,29,45,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,29,45,0.02)_1px,transparent_1px)] bg-[size:16px_16px] absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            {/* Card Content */}
                            <div className="relative z-10 p-8 h-full flex flex-col justify-between flex-1">

                                {/* Top section: Category Badge */}
                                <div className="text-left">
                                    <span className="inline-block mb-3 sm:mb-4 bg-[#FF1D2D] px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-white rounded-none">
                                        {item.category}
                                    </span>
                                </div>

                                {/* Bottom section: Title, Description, Link */}
                                <div className="pt-12 text-left">
                                    <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-wide text-white transition-colors duration-300 group-hover:text-[#FF1D2D]">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-gray-300 text-xs sm:text-sm mt-3 font-light leading-relaxed max-w-md line-clamp-2">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/20 group-hover:border-[#FF1D2D]/20 transition-colors duration-500">
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] font-bold text-gray-300 uppercase hover:text-[#FF1D2D] transition-colors duration-300 inline-flex items-center gap-1.5"
                                        >
                                            {item.btnText} ↗
                                        </a>

                                        {/* Dynamic Brand DNA circular logo */}
                                        <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
                                            {renderProjectLogo(item.id)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* L-shaped red cyber accents on hover */}
                            <div className="absolute top-0 right-0 w-8 sm:w-10 h-8 sm:h-10 border-t border-r border-[#FF1D2D]/0 group-hover:border-t-2 group-hover:border-r-2 group-hover:border-[#FF1D2D] transition-all duration-300 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-8 sm:w-10 h-8 sm:h-10 border-b border-l border-[#FF1D2D]/0 group-hover:border-b-2 group-hover:border-l-2 group-hover:border-[#FF1D2D] transition-all duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
