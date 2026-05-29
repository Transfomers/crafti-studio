import React from 'react';
import { motion } from 'framer-motion';

const columnVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Description = () => {
  return (
    <section className="w-full bg-black text-white font-kronaOne pt-16 sm:pt-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 lg:gap-16">

        {/* COLUMN 1 */}
        <motion.div
          variants={columnVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="space-y-4 sm:space-y-5 p-6 sm:p-8 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] transition-all duration-500 border border-zinc-800 rounded-2xl bg-zinc-950/20 backdrop-blur-md"
        >
          {/* Slogan Idea Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-red-950/20 border border-red-500/20 rounded-[2px] mb-2 font-urbanist">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a35] animate-pulse" />
            <span className="text-[9px] font-bold tracking-widest uppercase text-[#ff2a35]">
              Where ideas become products
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-kronaOne">
            <span className="text-red-500">1. </span>Strategic <span className="text-red-500">Product Development</span>
          </h3>

          <p className="leading-relaxed  text-sm sm:text-base">
            For projects with defined goals, timelines, and product roadmaps. This model works best when:
          </p>

          <ul className="space-y-2 sm:space-y-3">
            {[
              'The product scope is clear',
              'The user experience is structured',
              'You need high-performance, robust frontend systems',
            ].map((item, i) => (
              <li
                key={i}
                className="text-gray-400 font-kronaOne text-sm sm:text-base transition-all duration-300 hover:translate-x-1"
              >
                • {item}
              </li>
            ))}
          </ul>

          <p className=" font-kronaOne mt-4 sm:mt-6 text-sm sm:text-base">Ideal for:</p>

          <ul className="space-y-2 sm:space-y-3">
            {[
              'SaaS Platform Launches',
              'High-Growth Startup Websites',
              'Custom Web Architectures',
              'AI Workflow Integrations',
            ].map((item, i) => (
              <li
                key={i}
                className="text-gray-400 font-kronaOne text-sm sm:text-base transition-all duration-300 hover:translate-x-1"
              >
                • {item}
              </li>
            ))}
          </ul>

          <p className=" leading-relaxed pt-3 sm:pt-4 font-kronaOne text-sm sm:text-base">
            We focus on beautiful, optimized frontend engineering, pixel-perfect UX, and secure integrations.
          </p>
        </motion.div>

        {/* COLUMN 2 */}
        <motion.div
          variants={columnVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="space-y-4 sm:space-y-5 p-6 sm:p-8 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] transition-all duration-500 border border-zinc-800 rounded-2xl bg-zinc-950/20 backdrop-blur-md"
        >
          {/* Slogan Idea Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-red-950/20 border border-red-500/20 rounded-[2px] mb-2 font-urbanist">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a35] animate-pulse" />
            <span className="text-[9px] font-bold tracking-widest uppercase text-[#ff2a35]">
              Think smarter. Build faster.
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-kronaOne">
            <span className="text-red-500">2. </span> Continuous <span className="text-red-500">Product Ownership</span>
          </h3>

          <p className=" leading-relaxed text-sm sm:text-base font-kronaOne">
            For ongoing systems evolution, feature design, scaling support, and strategic direction.
          </p>

          <p className=" font-kronaOne text-sm sm:text-base">If you require:</p>

          <ul className="space-y-2 sm:space-y-3">
            {[
              'Active roadmap design and feature prioritization',
              'UX systems audit and continuous flow improvements',
              'Ongoing scaling of software microservices and architectures',
            ].map((item, i) => (
              <li
                key={i}
                className="text-gray-400 font-kronaOne text-sm sm:text-base transition-all duration-300 hover:translate-x-1"
              >
                • {item}
              </li>
            ))}
          </ul>

          <p className=" leading-relaxed pt-3 sm:pt-4 font-kronaOne text-sm sm:text-base">
            We act as your dedicated internal tech partner. This approach allows flexibility, ongoing sprint planning, and deeper integration with your operations.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Description;
