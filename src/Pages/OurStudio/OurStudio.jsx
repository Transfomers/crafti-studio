import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSectionStudio from './HeroSectionStudio';
import HowHelp from './HowHelp';
import Pipeline from './Pipeline';
import FAQ from './FAQ';
import vdo1 from '../../assets/video/CF1.mp4';
import vdo2 from '../../assets/video/CF2.mp4';
import vdo3 from '../../assets/video/CF3.mp4';
import vdo4 from '../../assets/video/CF4.mp4';
import img from '../../assets/Image/img1.png'

import logo1 from '../../assets/Image/Systema.png'
import png1 from '../../assets/Image/img (7).png'
import png2 from '../../assets/Image/img (8).png'
import png3 from '../../assets/Image/img (9).png'
import png4 from '../../assets/Image/img (11).png'

import logo2 from '../../assets/Image/jamuna-bank-logo.png'
import png5 from '../../assets/Image/img (19).png'
import png6 from '../../assets/Image/img (20).png'
import png7 from '../../assets/Image/img (21).png'
import png8 from '../../assets/Image/img (23).png'

import logo3 from '../../assets/Image/walton-logo.png'
import png9 from '../../assets/Image/img (2).png'
import png10 from '../../assets/Image/img (3).png'
import png11 from '../../assets/Image/img (4).png'
import png12 from '../../assets/Image/img (5).png'

import logo4 from '../../assets/Image/sneaker-shoes-logo.jpg'
import png13 from '../../assets/Image/img (13).png'
import png14 from '../../assets/Image/img (14).png'
import png15 from '../../assets/Image/img (15).png'
import png16 from '../../assets/Image/img (16).png'




const OurStudio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample data
  const teamMembers = [
    {
      id: 1,
      name: 'Nazmul Hasan',
      role: 'Lead Product Manager',
      bio: 'Leading digital product strategy with 10+ years of experience aligning user needs with business goals.',
      avatar: img,
      specialty: 'Product Roadmaps',
      experience: '10+ Years'
    },
    {
      id: 2,
      name: 'YEAHYEA ABDULLAH',
      role: 'UX/UI Systems Designer',
      bio: 'Expert in modular user interfaces, interactive states, and pixel-perfect design system engineering.',
      avatar: 'https://i.pinimg.com/736x/fb/3b/06/fb3b06e4729ccf1940543485e0f57919.jpg',
      specialty: 'Design Systems',
      experience: '8+ Years'
    },
    {
      id: 3,
      name: 'MD. MEHRAB',
      role: 'Senior Frontend Developer',
      bio: 'Specializing in high-performance web engineering, fluid Framer Motion transitions, and clean codebases.',
      avatar: 'https://images.unsplash.com/photo-1664730904126-0c0a1c747ee0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFuZ2xhZGVzaGklMjBib3l8ZW58MHx8MHx8fDA%3D',
      specialty: 'React & Next.js',
      experience: '7+ Years'
    },
    {
      id: 4,
      name: 'TORIKU ISLAM',
      role: 'Chief Solutions Architect',
      bio: 'Building highly secure backend systems, cloud microservices, and custom automation pipelines.',
      avatar: 'https://p3.hippopx.com/preview/950/539/stylish-handsome-cute-romantic-bangladeshi-bangladeshi-boy-cute-smart-boy-images-boy-attitude-stock-wallpapers-romantic-boy-pic-smart-boy-wallpaper-download-thumbnail.jpg',
      specialty: 'API & Microservices',
      experience: '12+ Years'
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Orbit SaaS Analytics Platform',
      category: 'Product Strategy & Next.js Build',
      description: 'Strategic feature prioritization, modular design systems, and frontend Next.js platform build.',
      video: vdo1,
      logo: logo1,
      client: 'Orbit Analytics',
      year: '2024',
      duration: '1.5 months',
      challenge: 'Orbit required a comprehensive product roadmap, highly-polished user dashboard, and performant serverless architecture to support their public beta launch under a high-stress timeline.',
      solution: 'We mapped the feature set into prioritized sprints, established a theme-able UX design system in Figma, and built a blazing fast responsive dashboard using React and Tailwind CSS.',
      process: 'We structured the application wireframes and user flows to eliminate UX friction, engineered reusable modular components with optimal lazy-loading, and conducted thorough audit scans to ensure robust web vitals.',
      results: 'Delivered a state-of-the-art interactive SaaS dashboard on-schedule, helping secure over 5,000 beta signups in the first week of deployment.',
      images: [
        png1,
        png2,
        png3,
        png4
      ],
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      testimonial: {
        text: 'Crafti engineered a seamless data platform that helped us secure our Series A. Their engineering standards are world-class.',
        author: 'Director of Product',
        position: 'Orbit Analytics'
      }
    },

    {
      id: 2,
      title: 'NovaPay Fintech Infrastructure',
      category: 'Fintech API & Backend Engineering',
      description: 'High-security API payment gateways, JWT token auth pipelines, and responsive portal.',
      video: vdo2,
      logo: logo2,
      client: 'NovaPay Inc.',
      year: '2024',
      duration: '2 months',
      challenge: 'NovaPay needed a custom backend API middleware system and transaction dashboard that could handle real-time syncs securely and efficiently.',
      solution: 'We built a secure payment middleware layer using Node.js and Express, coupled with a fast, modern transaction interface utilizing real-time WebSockets.',
      process: 'We designed the API schema to prevent latency, implemented custom JWT and MFA authentication security protocols, and established thorough automated testing scripts.',
      results: 'Reduced payment transactional synchronization lag by 65% while providing a seamless user interface for merchants.',
      images: [
        png8,
        png6,
        png7,
        png5
      ],
      technologies: ['Node.js', 'Express', 'WebSockets', 'React', 'Jest'],
      testimonial: {
        text: 'Integrating NovaPay’s middleware reduced our checkout latency by 65%. Their security auditing is top-tier.',
        author: 'VP of Engineering',
        position: 'NovaPay Inc.'
      }
    },

    {
      id: 3,
      title: 'Flux AI Automation Engine',
      category: 'AI Orchestration & Workflows',
      description: 'Intelligent automation systems, prompt routers, and node-based workspace canvas.',
      video: vdo3,
      logo: logo3,
      client: 'Flux AI',
      year: '2024',
      duration: '3 months',
      challenge: 'Flux required an intuitive node-based user workspace that allows companies to define and run custom automated AI agent workflows.',
      solution: 'We built an intelligent LLM routing system and a high-fidelity visual workspace canvas using custom React Flow systems.',
      process: 'We engineered prompt template handlers, structured automated vector store searches, and integrated popular LLM APIs behind a resilient gateway.',
      results: 'Boosted customer workflow automation productivity by 80% and reduced administrative overhead.',
      images: [
        png9,
        png10,
        png11,
        png12
      ],
      technologies: ['React', 'React Flow', 'OpenAI API', 'Vector DB', 'Node.js'],
      testimonial: {
        text: 'Flux revolutionized our workflow automations. Crafti’s vector search and node-based UI increased client productivity by 80%.',
        author: 'Chief Architect',
        position: 'Flux AI'
      }
    },

    {
      id: 4,
      title: 'CoreOS Product Management System',
      category: 'UX Systems & Dashboard Engineering',
      description: 'Accessible, theme-able Tailwind component libraries with Storybook documentation.',
      video: vdo4,
      logo: logo4,
      client: 'CoreOS Group',
      year: '2024',
      duration: '2 months',
      challenge: 'CoreOS needed a unified design system framework to standardize UI/UX consistency across their multiple product lines.',
      solution: 'We engineered a highly customizable, fully responsive, and accessible UI component framework built in Tailwind CSS.',
      process: 'Designed and coded over 45 foundational UI components, documented them using Storybook, and optimized bundle sizing for fast loads.',
      results: 'Successfully adopted by 12 internal engineering teams, cutting product design-to-release cycles in half.',
      images: [
        png13,
        png14,
        png15,
        png16
      ],
      technologies: ['Tailwind CSS', 'Storybook', 'Vite', 'React', 'Framer Motion'],
      testimonial: {
        text: 'CoreOS standardized our entire interface design language. Engineering speed has doubled across our active product squads.',
        author: 'Head of Design',
        position: 'CoreOS Group'
      }
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-KronaOne">

      {/* Hero Section */}
      <HeroSectionStudio></HeroSectionStudio>
      <HowHelp></HowHelp>


      {/* Team Members Section */}
      <section className="py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-20 text-center tracking-tighter">
              Team <span className="text-red-600">MEMBER\'S</span>
            </h2>
            <p className="text-gray-300 text-2xl w-full mx-auto text-center tracking-tighter">
              Crafti is a focused, founder-led product and software studio, collaborating with a small network of trusted architects and specialists when needed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="pb-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-center tracking-tighter">
              Case <span className="text-red-600">Studies</span>
            </h2>
            <p className="text-gray-300 text-lg text-center w-full mx-auto tracking-tighter">
              <span className='text-5xl text-red-600'>We begin </span> by understanding the project from the <span className='text-red-600'>client’s perspective</span>. From there, we translate that vision into a functional solution — breaking complex ideas down into clear, manageable parts and building them with intention and precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {caseStudies.map((project, index) => (
              <CaseStudyCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <div className="">
        <Pipeline />
        <FAQ />
      </div>

    </div>
  );
};

// Team Card Component
const TeamCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative overflow-hidden border border-red-500/30 bg-black group"
    >
      {/* Background Image with Heavy Blur and Dark Overlay */}
      <div className="absolute inset-0 ">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-full h-full object-cover blur-xl"
          style={{ filter: "blur(10px)" }}
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center 
                      p-6 sm:p-8 md:p-10 
                      min-h-[220px] sm:min-h-[240px] md:min-h-[260px]">

        {/* Left Side - Content */}
        <div className="flex-1 md:pr-8 text-center md:text-left">
          <span className="inline-block mb-4 md:mb-5 
                           bg-gradient-to-r from-red-600 to-red-700 
                           px-3 py-1 md:px-4 
                           text-[10px] md:text-xs 
                           font-bold tracking-[0.25em] md:tracking-[0.35em] 
                           uppercase">
            {member.role}
          </span>

          <h3 className="font-bold leading- tracking-widest mb-3 md:mb-4
                         text-xl sm:text-2xl uppercase">
            {member.name}
          </h3>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 md:mb-8">
            {member.bio}
          </p>

          {/* Bottom Info */}
          <div className="pt-5 md:pt-6 border-t border-white/20">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center md:justify-start">
              <div>
                <p className="text-gray-500 text-[10px] mb-1 uppercase tracking-wider">
                  Specialty
                </p>
                <p className="text-white text-xs sm:text-sm">
                  {member.specialty}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-[10px] mb-1 uppercase tracking-wider">
                  Experience
                </p>
                <p className="text-white text-xs sm:text-sm">
                  {member.experience}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Member Photo */}
        <div className="mt-8 md:mt-0 
                        w-48 h-64 sm:w-56 sm:h-72 md:w-72 md:h-96 
                        flex-shrink-0 relative overflow-hidden 
                        border-2 border-red-500/40 
                        group-hover:border-red-500 
                        transition-all duration-500">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-10 h-10 md:w-12 md:h-12 border-t-2 border-r-2 border-red-500/40 z-20" />
      <div className="absolute bottom-0 left-0 w-10 h-10 md:w-12 md:h-12 border-b-2 border-l-2 border-red-500/40 z-20" />
    </motion.div>
  );
};


// Case Study Card Component
const CaseStudyCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onClick={onClick}
      className="relative overflow-hidden border border-red-500/30 bg-black cursor-pointer group"
    >
      {/* Background Video */}
      <video
        src={project.video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65 group-hover:bg-black/50 transition-colors duration-500" />

      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col justify-between 
                      p-6 sm:p-8 md:p-10 
                      min-h-[260px] sm:min-h-[320px] md:min-h-[340px]">

        {/* Top */}
        <div>
          <span className="inline-block mb-4 md:mb-5 
                           bg-gradient-to-r from-red-600 to-red-700 
                           px-3 py-1 md:px-4 
                           text-[10px] md:text-xs 
                           font-bold tracking-[0.25em] md:tracking-[0.35em] 
                           uppercase">
            {project.category}
          </span>

          <h3 className="font-bold leading- tracking-wide
                         text-xl sm:text-2xl ">
            {project.title}
          </h3>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between 
                        pt-6 sm:pt-8 md:pt-12 
                        border-t border-white/20">

          <span className="text-[10px] sm:text-xs md:text-sm 
                           tracking-[0.25em] md:tracking-[0.4em] 
                           text-gray-300 uppercase 
                           group-hover:text-red-500 
                           transition-colors duration-300">
            View Breakdown
          </span>

          <div className="relative 
                          w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                          rounded-full overflow-hidden 
                          border border-white/30">
            <img
              src={project.logo}
              alt="logo"
              className="w-full h-full object-cover bg-white"
            />
          </div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-10 h-10 md:w-12 md:h-12 border-t-2 border-r-2 border-red-500/40" />
      <div className="absolute bottom-0 left-0 w-10 h-10 md:w-12 md:h-12 border-b-2 border-l-2 border-red-500/40" />
    </motion.div>
  );
};


// Case Study Modal Component
const CaseStudyModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
    >
      <div className="min-h-screen p-3 sm:p-4 md:p-8">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-zinc-900 border border-red-500/30 
                     max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl 
                     mx-auto my-4 sm:my-6 md:my-8 font-KronaOne"
        >

          <div className="p-4 sm:p-6 md:p-16">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 sm:mb-10 md:mb-12"
            >
              <span className="inline-block mb-4 bg-gradient-to-r from-red-600 to-red-700 
                               px-3 sm:px-4 py-1 text-[10px] sm:text-xs 
                               font-bold tracking-[0.25em] sm:tracking-[0.35em] uppercase">
                {project.category}
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold 
                             mb-6 sm:mb-8 leading-tight">
                {project.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 
                              pb-6 sm:pb-8 border-b border-zinc-800">
                <div>
                  <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Client</p>
                  <p className="text-white text-sm sm:text-lg">{project.client}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Year</p>
                  <p className="text-white text-sm sm:text-lg">{project.year}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Duration</p>
                  <p className="text-white text-sm sm:text-lg">{project.duration}</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10 sm:mb-12 md:mb-16"
            >
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full 
                           h-[220px] sm:h-[320px] md:h-[500px] 
                           object-cover border border-red-500/30"
              />
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-10 sm:mb-12 md:mb-16"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-red-500">
                The Challenge
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-10 sm:mb-12 md:mb-16"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-red-500">
                Our Solution
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                {project.solution}
              </p>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {project.images.map((img, idx) => (
                  <motion.img
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    src={img}
                    alt={`Project image ${idx + 1}`}
                    className="w-full 
                               h-40 sm:h-44 md:h-48 
                               object-cover border border-red-500/30 
                               hover:border-red-500 transition-colors duration-300"
                  />
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-10 sm:mb-12 md:mb-16"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-red-500">
                The Process
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                {project.process}
              </p>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-10 sm:mb-12 md:mb-16"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-red-500">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 sm:px-4 py-2 bg-zinc-800 
                               border border-red-500/30 
                               text-[10px] sm:text-sm uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-10 sm:mb-12 md:mb-16"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-red-500">
                Results & Impact
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                {project.results}
              </p>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="border-l-4 border-red-500 
                         pl-4 sm:pl-6 md:pl-8 
                         py-4 sm:py-6 
                         bg-zinc-800/50"
            >
              <p className="text-gray-300 text-sm sm:text-lg italic mb-3 sm:mb-4">
                "{project.testimonial.text}"
              </p>
              <p className="text-white font-bold text-sm sm:text-base">
                {project.testimonial.author}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                {project.testimonial.position}
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};


export default OurStudio;