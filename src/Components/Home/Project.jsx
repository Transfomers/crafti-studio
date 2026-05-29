
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import video1 from '../../assets/video/CF1.mp4'
import video2 from '../../assets/video/CF2.mp4'
import video3 from '../../assets/video/CF3.mp4'
import video4 from '../../assets/video/CF4.mp4'

import loog1 from '../../assets/Image/Systema.png'
import loog2 from '../../assets/Image/jamuna-bank-logo.png'
import loog3 from '../../assets/Image/walton-logo.png'
import loog4 from '../../assets/Image/Sprint-logo.png'

const projects = [
    {
        id: 1,
        title: "Orbit SaaS Analytics",
        category: "SaaS Platform",
        video: video1,
        logo: loog1
    },
    {
        id: 2,
        title: "NovaPay Infrastructure",
        category: "Fintech Infrastructure",
        video: video2,
        logo: loog2
    },
    {
        id: 3,
        title: "Flux AI Workflow Platform",
        category: "AI Workflows",
        video: video3,
        logo: loog3
    },
    {
        id: 4,
        title: "CoreOS Management System",
        category: "UX Systems",
        video: video4,
        logo: loog4
    }
];

const Project = () => {
    return (
        <div className="min-h-screen bg-black text-white font-urbanist">

            {/* Section Title */}
            <div className="text-center mb-16 sm:mb-20 md:mb-24 px-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-urbanist tracking-tight text-white uppercase">
                    Crafted <span className="text-[#ff2a35] drop-shadow-[0_0_15px_rgba(255,42,53,0.3)]">Platforms</span>
                </h2>
            </div>

            {/* Project Grid Wrapper */}
            <div className="px-4 sm:px-10 md:px-20 lg:px-52 font-urbanist">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
                    {projects.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="relative overflow-hidden border border-red-500/15 hover:border-red-500/35 transition-all duration-300 bg-black rounded-xl sm:rounded-2xl"
                        >
                            {/* Background Video */}
                            <video
                                src={item.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/65" />

                            {/* Card Content */}
                            <div className="relative z-10 p-6 h-full flex flex-col justify-between">

                                {/* Top */}
                                <div>
                                    <span className="inline-block mb-3 sm:mb-4 bg-[#ff2a35] px-3 sm:px-4 py-1 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-white rounded-[2px]">
                                        {item.category}
                                    </span>
                                </div>

                                {/* Bottom */}
                                <div className="pt-6 sm:pt-8 md:pt-20">
                                    <h3 className="text-2xl   font-bold leading-tight tracking-wide">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center justify-between mt-2 border-t border-white/20">
                                        <NavLink
                                            to="/our_studio"
                                            className="text-xs sm:text-sm md:text-sm tracking-[0.35em] sm:tracking-[0.4em] text-gray-300 uppercase hover:text-red-500 transition-colors duration-300"
                                        >
                                            View Project
                                        </NavLink>

                                        <div className="relative w-12 h-12 mt-2 rounded-full overflow-hidden border border-white/30">
                                            <img
                                                src={item.logo}
                                                alt="logo"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-r-2 border-red-500/40" />
                            <div className="absolute bottom-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-l-2 border-red-500/40" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
