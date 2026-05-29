import React from 'react';
import { motion } from 'framer-motion';

const HomeProcess = () => {
    const processSteps = [
        {
            id: 1,
            phase: '01',
            title: 'Discover',
            subtitle: 'Strategy & Vision Mapping',
            description: 'Understanding target users, core business goals, and long-term product vision. We prioritize features and shape the product blueprint before a single line of code is written.'
        },
        {
            id: 2,
            phase: '02',
            title: 'Structure',
            subtitle: 'UX & System Architecture',
            description: 'Engineering comprehensive user flows, interactive wireframes, unified Figma design systems, and resilient database schemas to ensure absolute scalability.'
        },
        {
            id: 3,
            phase: '03',
            title: 'Build',
            subtitle: 'High-Performance Sprints',
            description: 'Converting structured roadmaps into blazing fast React or Next.js frontends, custom API middleware integrations, and clean, modular architectures.'
        },
        {
            id: 4,
            phase: '04',
            title: 'Optimize',
            subtitle: 'Audits & Refinement',
            description: 'Conducting thorough security testing, system performance audits, interface polish, and active user-flow optimization to guarantee perfect web vitals.'
        },
        {
            id: 5,
            phase: '05',
            title: 'Scale',
            subtitle: 'Growth Systems',
            description: 'Continuous deployment pipelines, cloud scaling optimization, AI workflow integrations, and long-term product evolution engineered for growth.'
        }
    ];

    return (
        <section className="bg-black text-white py-24 px-4 sm:px-6 md:px-8 font-urbanist relative overflow-hidden">
            {/* Background ambient red glow light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 sm:mb-20 md:mb-24 px-6">
                    {/* Glowing System Pulse Indicator */}
                    <div className="mb-4 inline-flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#ff2a35] shadow-[0_0_10px_#ff2a35] animate-pulse" />
                        <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#ff2a35] font-KronaOne">
                            OUR SPRINT WORKFLOW
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase mb-6">
                        PRODUCT <span className="text-[#ff2a35] drop-shadow-[0_0_15px_rgba(255,42,53,0.3)]">WORKFLOW</span>
                    </h2>
                    <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-dmsans leading-relaxed">
                        A highly strategic, system-driven workflow designed to help startups and scaling enterprises transform raw ideas into scalable digital products.
                    </p>
                </div>

                {/* Grid of Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[#0b0b0d] border border-red-500/10 hover:border-red-500/35 hover:shadow-[0_0_30px_rgba(255,42,53,0.03)] transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between min-h-[360px] relative rounded-[4px] group"
                        >
                            {/* Inner Hover Glow */}
                            <div className="absolute inset-0 bg-red-500/[0.005] group-hover:bg-red-500/[0.015] transition-all duration-500 pointer-events-none rounded-[4px]" />

                            {/* Top Content */}
                            <div>
                                {/* Step Index / Phase */}
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-3xl sm:text-4xl font-extrabold text-zinc-700 font-urbanist leading-none group-hover:text-[#ff2a35] transition-colors duration-300">
                                        {step.phase}
                                    </span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a35] opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Step Title */}
                                <h3 className="text-2xl sm:text-3xl font-bold mb-1 text-white uppercase group-hover:text-red-500 transition-colors duration-300">
                                    {step.title}
                                </h3>

                                {/* Subtitle */}
                                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-4">
                                    {step.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-zinc-400 font-dmsans text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Pixel Perfect Corner Accents exactly matching FAQ style */}
                            <div className="absolute top-0 right-0 w-3 h-3 border-t-[2px] border-r-[2px] border-[#ff2a35] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[2px] border-l-[2px] border-[#ff2a35] pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeProcess;
