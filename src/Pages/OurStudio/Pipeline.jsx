import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Pipeline = () => {
    const cardRefs = useRef([]);
    const connectorRefs = useRef([]);

    const pipelineSteps = [
        {
            id: 1,
            phase: 'Discover',
            title: 'Strategy & Vision Mapping',
            description: 'Understanding target users, core business goals, and long-term product vision. We prioritize features and shape the product blueprint before a single line of code is written.',
            duration: '1-2 WEEKS'
        },
        {
            id: 2,
            phase: 'Structure',
            title: 'UX & System Architecture',
            description: 'Engineering comprehensive user flows, interactive wireframes, unified Figma design systems, and resilient database schemas to ensure absolute scalability.',
            duration: '2-3 WEEKS'
        },
        {
            id: 3,
            phase: 'Build',
            title: 'High-Performance Sprints',
            description: 'Converting structured roadmaps into blazing fast React or Next.js frontends, custom API middleware integrations, and clean, modular architectures.',
            duration: '3-5 WEEKS'
        },
        {
            id: 4,
            phase: 'Optimize',
            title: 'Audits & Refinement',
            description: 'Conducting thorough security testing, system performance audits, interface polish, and active user-flow optimization to guarantee perfect web vitals.',
            duration: '2-3 WEEKS'
        },
        {
            id: 5,
            phase: 'Scale',
            title: 'Growth Systems',
            description: 'Continuous deployment pipelines, cloud scaling optimization, AI workflow integrations, and long-term product evolution engineered for growth.',
            duration: 'CONTINUOUS'
        }
    ];

    useEffect(() => {
        // Animate the running arrows 
        connectorRefs.current.forEach((connector, index) => {
            if (connector) {
                const horizontalLine = connector.querySelector('.horizontal-line');
                const verticalLine = connector.querySelector('.vertical-line');
                const runningArrow = connector.querySelector('.running-arrow');
                
                if (horizontalLine && verticalLine && runningArrow) {
                    const isEven = index % 2 === 0;
                    const horizontalWidth = horizontalLine.offsetWidth;
                    const verticalHeight = verticalLine.offsetHeight;
                    
                    // Create timeline
                    const tl = gsap.timeline({ repeat: -1 });
                    
                    if (isEven) {
                        // For even index: move right on horizontal, then down on vertical
                        tl.set(runningArrow, { 
                            left: 0, 
                            top: 0,
                            rotate: 0
                        })
                        .to(runningArrow, {
                            left: horizontalWidth,
                            duration: 1.5,
                            ease: 'none'
                        })
                        .set(runningArrow, {
                            left: horizontalWidth,
                            top: 0,
                            rotate: 90
                        })
                        .to(runningArrow, {
                            top: verticalHeight,
                            duration: 1,
                            ease: 'none'
                        })
                        .set(runningArrow, {
                            opacity: 0
                        })
                        .set(runningArrow, {
                            left: 0,
                            top: 0,
                            opacity: 1,
                            rotate: 0
                        }, '+=0.5');
                    } else {
                        // For odd index: move left on horizontal, then down on vertical
                        tl.set(runningArrow, { 
                            right: 0, 
                            left: 'auto',
                            top: 0,
                            rotate: 180
                        })
                        .to(runningArrow, {
                            right: horizontalWidth,
                            duration: 1.5,
                            ease: 'none'
                        })
                        .set(runningArrow, {
                            right: horizontalWidth,
                            left: 'auto',
                            top: 0,
                            rotate: 90
                        })
                        .to(runningArrow, {
                            top: verticalHeight,
                            duration: 1,
                            ease: 'none'
                        })
                        .set(runningArrow, {
                            opacity: 0
                        })
                        .set(runningArrow, {
                            right: 0,
                            left: 'auto',
                            top: 0,
                            opacity: 1,
                            rotate: 180
                        }, '+=0.5');
                    }
                }
            }
        });
    }, []);

    return (
        <section className="bg-black text-white py-24 px-4 sm:px-6 md:px-8 font-urbanist relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[130px] pointer-events-none" />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto mb-20 text-center relative z-10"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                    Our <span className="text-[#ff2a35] drop-shadow-[0_0_15px_rgba(255,42,53,0.3)]">Pipeline</span>
                </h1>
                <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-dmsans leading-relaxed">
                    A streamlined 5-step journey through our product innovation process. 
                    From strategic discovery to long-term scaling systems, every phase brings your digital platform closer to reality.
                </p>
            </motion.div>

            {/* Snake Pipeline */}
            <div className="max-w-5xl mx-auto relative z-10">
                {pipelineSteps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    const isLast = index === pipelineSteps.length - 1;

                    return (
                        <div key={step.id}>
                            {/* Step Row */}
                            <div className={`flex items-center gap-6 md:gap-10 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                                {/* Step Card */}
                                <motion.div
                                    ref={el => cardRefs.current[index] = el}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex-1 bg-[#0b0b0d] border border-red-500/15 hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(255,42,53,0.03)] transition-all duration-500 rounded-[4px] relative overflow-hidden group"
                                >
                                    {/* Subtle inner hover glow */}
                                    <div className="absolute inset-0 bg-red-500/[0.005] group-hover:bg-red-500/[0.015] transition-all duration-500 pointer-events-none" />
                                    
                                    <div className="relative z-10 p-6 sm:p-8">
                                        {/* Step Number & Badge exactly matching the visual style in the image */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-11 h-11 rounded-full border-[3px] border-[#ff2a35] bg-transparent flex items-center justify-center">
                                                <span className="text-base font-bold text-white">{step.id}</span>
                                            </div>
                                            
                                            <span className="bg-[#ff2a35] px-4 py-1 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-white rounded-[2px]">
                                                {step.phase}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight text-white group-hover:text-[#ff2a35] transition-colors duration-300">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-zinc-300 font-dmsans text-sm sm:text-base leading-relaxed mb-5">
                                            {step.description}
                                        </p>

                                        {/* Horizontal Divider Line */}
                                        <div className="border-t border-zinc-800/60 my-4" />

                                        {/* Duration exactly like the screenshot */}
                                        <div className="flex items-center gap-2 text-xs sm:text-sm font-dmsans uppercase text-zinc-500">
                                            <span>DURATION:</span>
                                            <span className="text-white font-bold">{step.duration}</span>
                                        </div>
                                    </div>

                                    {/* Pixel Perfect Corner Accents */}
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-[2px] border-r-[2px] border-[#ff2a35] pointer-events-none" />
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-[2px] border-l-[2px] border-[#ff2a35] pointer-events-none" />
                                </motion.div>

                                {/* Horizontal Line Divider (Desktop Only) */}
                                {!isLast && (
                                    <div className="hidden md:block flex-shrink-0 w-16 lg:w-24 h-[1px] bg-red-500/20" />
                                )}
                            </div>

                            {/* Connecting Elements - Only if not last step */}
                            {!isLast && (
                                <div 
                                    ref={el => connectorRefs.current[index] = el}
                                    className={`flex ${isEven ? 'justify-end' : 'justify-start'} my-6 relative`}
                                >
                                    {/* Running Arrow - positioned absolutely to follow the path */}
                                    <div 
                                        className="running-arrow absolute w-8 h-8 bg-[#ff2a35] shadow-[0_0_15px_rgba(255,42,53,0.5)] rounded-full flex items-center justify-center z-20"
                                        style={{ 
                                            left: isEven ? 0 : 'auto',
                                            right: isEven ? 'auto' : 0,
                                            top: 0
                                        }}
                                    >
                                        <ArrowRight className="w-4 h-4 text-white animate-pulse" />
                                    </div>
                                    
                                    <div className="flex flex-col items-center gap-2">
                                        {/* Horizontal Line (invisible but used for measurement) */}
                                        <div className="horizontal-line w-16 md:w-[220px] lg:w-[350px] h-[1px] bg-transparent absolute top-0" 
                                             style={{ 
                                                 left: isEven ? 0 : 'auto',
                                                 right: isEven ? 'auto' : 0
                                             }} 
                                        />
                                        
                                        {/* Vertical Line */}
                                        <div className="vertical-line w-[1px] h-20 bg-red-500/20" />
                                        
                                        {/* Static Arrow at bottom exactly matching the visual style in the image */}
                                        <div className="w-8 h-8 rounded-full bg-[#ff2a35] shadow-[0_0_10px_rgba(255,42,53,0.3)] flex items-center justify-center">
                                            <ArrowDown className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Pipeline;