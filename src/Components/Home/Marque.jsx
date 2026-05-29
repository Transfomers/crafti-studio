import { useState } from "react";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from "framer-motion";

const Marque = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const services = [
        {
            title: "Strategic Product Ownership & Roadmaps",
            details:
                "Agile workflows, clear roadmaps, sprint planning, and sustainable product strategy built for long-term growth."
        },
        {
            title: "High-Performance Web & SaaS Development",
            details:
                "Next.js, React, engineered frontend architectures, scalable systems, and optimized API integrations."
        },
        {
            title: "Premium UX/UI & Custom Design Systems",
            details:
                "State-of-the-art interactive designs, fluid user experiences, modular component libraries, and clean user flows."
        },
        {
            title: "AI-Driven Automation & System Workflows",
            details:
                "Intelligent productivity tools, custom automation models, integrated AI workflows, and high-performance system pipelines."
        }
    ];

    return (
        <div className="bg-black py-8 text-center space-y-4">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="relative overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {/* Title - Always visible */}
                    <div className="h-[100px] flex items-center justify-center px-8">
                        <h2 className="text-4xl md:text-7xl tracking-tight transition-transform duration-300 text-gray-400">
                            {service.title}
                        </h2>
                    </div>

                    {/* Marquee */}
                    <AnimatePresence>
                        {hoveredIndex === index && (
                            <motion.div
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "100%", opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute top-0 left-0 w-full h-[100px] bg-white flex items-center"
                            >
                                <Marquee
                                    speed={160}
                                    direction={index%2==0?"left":"right"}
                                    gradient={false}
                                    className="h-full"
                                >
                                    <h2 className="text-5xl md:text-6xl font-black font-KronaOne tracking-tight text-red-600  px-8 whitespace-nowrap">
                                        {service.details}
                                    </h2>
                                </Marquee>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default Marque;