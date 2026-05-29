import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How long does a 3D animation project typically take?",
            answer: "Project timelines depend entirely on the complexity, style, and duration of the animation. A standard 30-second commercial or product showcase might take 3 to 5 weeks, while more complex multi-character projects or high-fidelity cinematic sequences can take 8 to 12 weeks. We structure every project into clear, agile milestones—concept, storyboarding, modeling, animatic, and final render—to ensure absolute transparency and timely delivery."
        },
        {
            question: "What is the cost range for 3D projects?",
            answer: "The cost of a 3D project varies based on style complexity, character counts, environmental detail, and rendering requirements. High-end product visualizer animations typically range from $3,000 to $8,000, while complete custom multi-scene cinematic commercial spots or interactive web 3D experiences range from $10,000 to $40,000+. We collaborate closely with your team during discovery to establish a scope that matches your budget and high visual standards."
        },
        {
            question: "What do you need from me to get started?",
            answer: "To kick off your project, we require a brief outlining your creative goals, key features of the product, targeted audience, and references of styles you love. If you have existing brand identity guidelines, script drafts, voiceover tracks, or product CAD files / 3D assets, sharing those helps us hit the ground running. Our team will guide you through our collaborative onboarding system to gather all necessary resources."
        },
        {
            question: "How many revisions are included in the project?",
            answer: "We build our creation process around active validation phases, providing review points at every key milestone (script, storyboard, animatic, modeling, lighting, and final render). Each milestone includes up to 3 rounds of comprehensive reviews and adjustments. This structured milestone-approval workflow ensures we lock in the direction at each stage, avoiding unexpected deviations and guaranteeing a final animation that exceeds expectations."
        },
        {
            question: "Which Product Ownership (PO) and collaboration tools do you frequently use?",
            answer: "We leverage industry-standard agile product ownership and collaboration tools to keep projects aligned and transparent. Frequently, we use Linear and Jira for sprint backlogs and task tracking, Figma and FigJam for design specifications and collaborative wireframing, Notion or Confluence for product requirement documents (PRDs) and roadmaps, and Slack and GitHub for day-to-day engineering syncs."
        }
    ];

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black text-white py-24 px-4 sm:px-6 md:px-8 font-urbanist relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20 text-center"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        Frequently Asked <span className="text-[#ff2a35] drop-shadow-[0_0_15px_rgba(255,42,53,0.3)]">Questions</span>
                    </h2>
                    <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-dmsans leading-relaxed">
                        Find answers to the most common questions about our 3D production services.
                        Can't find what you're looking for? Feel free to reach out.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="flex flex-col gap-6">
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative bg-[#0b0b0d] border border-red-500/15 hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(255,42,53,0.03)] transition-all duration-500 rounded-[4px] group overflow-hidden"
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-6 hover:bg-red-500/[0.01] transition-colors duration-300"
                                >
                                    <span 
                                        className={`text-base sm:text-lg md:text-2xl font-semibold leading-snug flex-1 transition-colors duration-300 ${
                                            isOpen ? 'text-[#ff2a35] drop-shadow-[0_0_10px_rgba(255,42,53,0.2)]' : 'text-white group-hover:text-[#ff2a35]'
                                        }`}
                                    >
                                        {item.question}
                                    </span>

                                    {/* Plus box exactly like the design */}
                                    <div 
                                        className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border transition-all duration-300 shrink-0 ${
                                            isOpen ? 'border-[#ff2a35] bg-[#ff2a35]/5' : 'border-red-500/40 group-hover:border-[#ff2a35]'
                                        }`}
                                    >
                                        <span 
                                            className={`text-[#ff2a35] text-lg sm:text-xl font-light transition-transform duration-300 block select-none ${
                                                isOpen ? 'rotate-45' : 'rotate-0'
                                            }`}
                                        >
                                            +
                                        </span>
                                    </div>
                                </button>

                                {/* Answer Panel */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-red-500/10 font-dmsans text-sm sm:text-base text-zinc-400 leading-relaxed">
                                                <div className="w-12 h-[2px] bg-gradient-to-r from-[#ff2a35] to-transparent my-4" />
                                                <p className="pl-1">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Pixel Perfect Corner Accents */}
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-[2px] border-r-[2px] border-[#ff2a35] pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-[2px] border-l-[2px] border-[#ff2a35] pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
