import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSectionStudio from './HeroSectionStudio';
import cardImage from '../../assets/Image/image.png';
import HowHelp from './HowHelp';
import Pipeline from './Pipeline';
import FAQ from './FAQ';
import vdo1 from '../../assets/video/CF1.mp4';
import vdo2 from '../../assets/video/gif2.gif';
import vdo3 from '../../assets/video/CF3.mp4';
import vdo4 from '../../assets/video/Gif.gif';
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

  const caseStudies = [
    {
      id: 1,
      title: 'ITC Formation Website',
      category: 'Education Platform',
      description: 'Modern educational and professional training platform designed for students and institutions.',
      video: vdo1,
      logo: logo1,
      client: 'ITC Formation',
      year: '2024',
      duration: '1.5 months',
      challenge: 'ITC Formation needed a comprehensive digital platform to streamline training programs and manage student learning materials in a responsive and accessible manner.',
      solution: 'We designed and engineered a custom education platform with a modern UI/UX, fast resource loading, and accessible layouts for both students and training administrators.',
      process: 'We analyzed user flows, mapped professional learning roadmaps, built a responsive and accessible frontend platform, and deployed serverless resources for training documents.',
      results: 'Delivered a high-performance educational workspace that improved program navigation and simplified registration for training cohorts.',
      images: [
        png1,
        png2,
        png3,
        png4
      ],
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      testimonial: {
        text: 'ITC Formation revolutionized our training portal. Access to student resources and responsive program paths has never been cleaner.',
        author: 'Director of Programs',
        position: 'ITC Formation'
      }
    },

    {
      id: 2,
      title: 'ITC Santé Platform',
      category: 'Healthcare Education',
      description: 'Medical and healthcare training platform with modern UI/UX and educational resources.',
      video: vdo2,
      logo: logo2,
      client: 'ITC Santé',
      year: '2024',
      duration: '2 months',
      challenge: 'ITC Santé required a specialized portal to market and run medical training programs securely, demanding robust visual layouts and interactive content.',
      solution: 'We engineered a customized medical portal featuring high-fidelity responsive layouts, interactive training roadmap displays, and a premium healthcare design theme.',
      process: 'Structured medical program directories, established custom theme options, optimized mobile responsiveness, and verified web vital scores for maximum accessibility.',
      results: 'Boosted program registration rates and successfully modernized ITC Santé\'s branding presence across the digital ecosystem.',
      images: [
        png8,
        png6,
        png7,
        png5
      ],
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'API Integration'],
      testimonial: {
        text: 'The healthcare portal created by Crafti is incredibly engaging. Standardizing our medical curriculums has dramatically boosted student engagement.',
        author: 'Head of Clinical Education',
        position: 'ITC Santé'
      }
    },

    {
      id: 3,
      title: 'Trandjia LinkedIn Profile',
      category: 'Professional Network',
      description: 'Professional networking and business presence showcasing entrepreneurial and digital activities.',
      video: vdo3,
      logo: logo3,
      client: 'Trandjia Network',
      year: '2024',
      duration: '1.5 months',
      challenge: 'Trandjia needed to establish a unified professional identity to communicate entrepreneurial ventures, technology roadmaps, and venture portfolios.',
      solution: 'We formulated a cohesive digital branding and profile strategy highlighting leadership assets, visual storytelling, and innovation-driven milestones.',
      process: 'Conducted branding audits, defined strategic narrative frameworks, designed high-caliber profile sections, and unified copy representing key projects.',
      results: 'Substantially increased profile visibility, building robust engagement with co-founders, investors, and strategic digital ecosystem partners.',
      images: [
        png9,
        png10,
        png11,
        png12
      ],
      technologies: ['Digital Branding', 'Strategic Design', 'UI/UX Copy'],
      testimonial: {
        text: 'Trandjia\'s digital branding strategy established co-founder Moise Donald\'s position as a premier strategic collaborator in our startup ecosystem.',
        author: 'Founding Partner',
        position: 'Trandjia Network'
      }
    },

    {
      id: 4,
      title: 'Dodonpa LinkedIn Page',
      category: 'Creative Brand',
      description: 'Creative digital brand focused on innovation, design, and online identity.',
      video: vdo4,
      logo: logo4,
      client: 'Dodonpa',
      year: '2024',
      duration: '2 months',
      challenge: 'Dodonpa required a highly distinct digital brand identity on professional platforms to showcase creative direction capabilities and software systems.',
      solution: 'We engineered a striking digital brand identity focusing on modern visual storytelling, unified creative assets, and impact-driven copy.',
      process: 'Developed creative visual guidelines, created geometric identity graphics, and composed engaging portfolio statements centered on innovative identity.',
      results: 'Successfully launched Dodonpa\'s digital brand presence, achieving consistent professional engagement and establishing a premium market positioning.',
      images: [
        png13,
        png14,
        png15,
        png16
      ],
      technologies: ['Creative Direction', 'Visual Design', 'Branding Identity'],
      testimonial: {
        text: 'Dodonpa\'s modern visual brand identity is strikingly distinct. Standardizing creative visual storytelling has positioned us at the top of our professional platforms.',
        author: 'Head of Creative',
        position: 'Dodonpa'
      }
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-KronaOne">

      {/* Hero Section */}
      <HeroSectionStudio></HeroSectionStudio>
      <HowHelp></HowHelp>


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



// Reusable custom circular segmented logo renderer for Case Studies
const renderCaseStudyLogo = (projectId) => {
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
        fill="#FF1F3D"
      />
      
      {/* Inner icons based on Case Study */}
      {projectId === 1 && (
        // Orbit: Outer ring, inner core
        <g>
          <ellipse cx="50" cy="50" rx="16" ry="5" stroke="#FF1F3D" strokeWidth="1.5" fill="none" transform="rotate(-30 50 50)" />
          <circle cx="50" cy="50" r="6" fill="#F3F3F3" />
        </g>
      )}
      {projectId === 2 && (
        // NovaPay: Double chevron exchange (fintech)
        <g>
          <path d="M38 42 L48 50 L38 58" stroke="#F3F3F3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M62 58 L52 50 L62 42" stroke="#FF1F3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      )}
      {projectId === 3 && (
        // Flux: Dynamic flowing infinity wave (AI workflows)
        <g>
          <path d="M36 50 C36 42, 44 42, 50 50 C56 58, 64 58, 64 50 C64 42, 56 42, 50 50 C44 58, 36 58, 36 50 Z" stroke="#FF1F3D" strokeWidth="2.25" fill="none" />
          <circle cx="50" cy="50" r="3" fill="#F3F3F3" />
        </g>
      )}
      {projectId === 4 && (
        // CoreOS: Nested structured squares (UX systems)
        <g>
          <rect x="38" y="38" width="24" height="24" stroke="#F3F3F3" strokeWidth="2" fill="none" />
          <rect x="45" y="45" width="10" height="10" fill="#FF1F3D" />
        </g>
      )}
    </svg>
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
      {/* Background Image with opacity */}
      <img
        src={cardImage}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-all duration-700 group-hover:scale-110"
      />

      {/* White opacity overlay */}
      <div className="absolute inset-0 bg-white/10 group-hover:bg-white/[0.15] transition-colors duration-500" />

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

          <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center">
            {renderCaseStudyLogo(project.id)}
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

            {/* Hero Showcase Image with white opacity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10 sm:mb-12 md:mb-16 relative w-full h-[220px] sm:h-[320px] md:h-[500px] border border-red-500/30 overflow-hidden bg-black"
            >
              <img
                src={cardImage}
                alt={project.title}
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-white/10" />
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