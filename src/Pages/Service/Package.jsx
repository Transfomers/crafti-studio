import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, CheckCircle, Star, Box } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import vdo1 from '../../assets/video/montage footage CF.mp4'
gsap.registerPlugin(ScrollTrigger);

const Package = () => {
  const [selectedService, setSelectedService] = useState(null);
  const dotRef = useRef(null);

  // Sample data for services
  const services = [
    // ================= GIG BASED =================
    {
      id: 1,
      type: 'gig',
      title: 'UX/UI Audit & Design System',
      category: 'Strategic UX',
      description: 'Design Systems / Audits / Flows',
      priceRange: '$500 - $1,500',
      video: vdo1,
      rating: 4.9,
      reviews: 132,
      fullDescription:
        'A comprehensive design audit and custom-tailored modular design system using modern Figma standards, ready for immediate frontend conversion.',
      packages: [
        { name: 'Basic', price: 500, delivery: '3 days', revisions: 1, features: ['UX audit of 3 key pages', 'Basic UI component kit', 'Color & font scale definitions', 'Figma file delivery'] },
        { name: 'Standard', price: 950, delivery: '5 days', revisions: 2, features: ['UX audit of 8 key pages', 'Comprehensive UI design system', 'Responsive layouts', 'Interactive states spec'] },
        { name: 'Premium', price: 1500, delivery: '8 days', revisions: 3, features: ['Complete product flows (up to 15 pages)', 'Full responsive design system', 'Animation specs', 'Figma and Storybook-ready code specs'] }
      ]
    },
    {
      id: 2,
      type: 'gig',
      title: 'SaaS Frontend Development',
      category: 'Engineering',
      description: 'React / Next.js / Tailwind CSS',
      priceRange: '$800 - $2,500',
      video: vdo1,
      rating: 4.9,
      reviews: 114,
      fullDescription:
        'Sleek, responsive, and pixel-perfect React or Next.js frontend screens based on your design system. Optimized for maximum performance.',
      packages: [
        { name: 'Basic', price: 800, delivery: '4 days', revisions: 1, features: ['2 responsive pages', 'Clean Tailwind CSS code', 'SEO basic tags', 'Next.js setup'] },
        { name: 'Standard', price: 1500, delivery: '7 days', revisions: 2, features: ['5 responsive pages', 'Framer Motion animations', 'Global state management', 'SEO advanced markup'] },
        { name: 'Premium', price: 2500, delivery: '12 days', revisions: 3, features: ['Full frontend app (up to 10 pages)', 'Interactive micro-interactions', 'Storybook components', 'Ultra-high performance audit score (95+)'] }
      ]
    },
    {
      id: 3,
      type: 'gig',
      title: 'API Integration & Middleware',
      category: 'Systems Engineering',
      description: 'GraphQL / REST / Integrations',
      priceRange: '$600 - $1,800',
      video: vdo1,
      rating: 4.8,
      reviews: 95,
      fullDescription:
        'High-performance backend API integrations, custom middleware development, and secure database connections for modern applications.',
      packages: [
        { name: 'Basic', price: 600, delivery: '3 days', revisions: 1, features: ['1 external API integration', 'Clean Node.js/Express router', 'Basic error handling'] },
        { name: 'Standard', price: 1100, delivery: '5 days', revisions: 2, features: ['3 API integrations', 'Data schema modeling', 'Secure JWT authentication', 'Unit test coverage'] },
        { name: 'Premium', price: 1800, delivery: '9 days', revisions: 3, features: ['Complex multi-source pipeline', 'GraphQL API gateway layer', 'Real-time WebSockets integration', 'Comprehensive error logger & monitoring'] }
      ]
    },
    {
      id: 4,
      type: 'gig',
      title: 'Product Roadmap & Sprint Plan',
      category: 'Product Ownership',
      description: 'Roadmaps / Agile / Sprint Setup',
      priceRange: '$400 - $1,200',
      video: vdo1,
      rating: 5.0,
      reviews: 84,
      fullDescription:
        'Accelerate your product launch with structured roadmaps, backlog prioritization, and interactive agile dashboard setups.',
      packages: [
        { name: 'Basic', price: 400, delivery: '2 days', revisions: 1, features: ['1-month detailed roadmap', 'Backlog grooming (up to 15 items)', 'Trello or Jira dashboard setup'] },
        { name: 'Standard', price: 750, delivery: '4 days', revisions: 2, features: ['3-month product roadmap', 'Full backlog prioritization', 'Epic and User Story structuring', 'Agile process training session'] },
        { name: 'Premium', price: 1200, delivery: '7 days', revisions: 3, features: ['6-month product roadmap', 'Complete sprint plan with sizing estimates', 'System architecture review notes', 'Weekly agile scrum master support'] }
      ]
    },

    // ================= CUSTOM BASED =================
    {
      id: 9,
      type: 'custom',
      title: 'Custom SaaS Platform Development',
      category: 'Custom Service',
      description: 'End-to-end web products',
      priceRange: 'Starting at $5,000',
      video: vdo1,
      rating: 5.0,
      reviews: 42,
      fullDescription:
        'A comprehensive product design, product ownership alignment, and full-stack development of your custom SaaS platform or dashboard.',
      customFeatures: [
        'Strategic roadmapping and product thinking',
        'Stunning dark UI/UX custom design system',
        'State-of-the-art frontend in Next.js & React',
        'Scalable serverless API backend architecture',
        'Interactive charts, reports, and AI helper widgets'
      ],
      startingPrice: 5000,
      estimatedTime: '4–8 weeks'
    },
    {
      id: 10,
      type: 'custom',
      title: 'AI Workflow & Automation Integrations',
      category: 'Custom Service',
      description: 'Intelligent systems & automation',
      priceRange: 'Starting at $4,000',
      video: vdo1,
      rating: 4.9,
      reviews: 56,
      fullDescription:
        'Transform company productivity with bespoke AI workflow integrations, LLM pipelines, autonomous agents, and smart databases.',
      customFeatures: [
        'AI prompt engineering and routing engines',
        'Bespoke agent workflows and automation scripts',
        'Integrations with popular LLM providers',
        'Vector search databases & vector indexing',
        'Secure API gateways and performance audits'
      ],
      startingPrice: 4000,
      estimatedTime: '2–4 weeks'
    }
  ];


  const leftColumn = services.filter(service => service.type === 'gig');
  const rightColumn = services.filter(service => service.type === 'custom');


  // GSAP Scroll Animation
  useEffect(() => {
    const dot = dotRef.current;

    if (dot) {
      // Detect screen size for responsive adjustments
      const screenWidth = window.innerWidth;

      // Set different y-distance for mobile/tablet
      let yDistance = 800; // default for desktop
      if (screenWidth < 1024 && screenWidth >= 640) {
        // Tablet
        yDistance = 600;
      } else if (screenWidth < 640) {
        // Mobile
        yDistance = 400;
      }

      gsap.to(dot, {
        y: yDistance,
        ease: "none",
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    }

    // Cleanup ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pt-20 font-KronaOne">

      {/* Section Titles */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:mb-16  ">
        <div className="hidden lg:flex relative justify-between items-center mb-20">
          {/* Left Title */}
          <motion.div
            
            className="group flex items-center gap-4 cursor-pointer"
          >
            <h2 className="text-4xl md:text-4xl font-KronaOne text-white tracking-tighter">
              Gig <span className="text-red-500">Services</span>
            </h2>
            <span className="absolute left-0 -bottom-3 h-[2px] w-0 bg-red-500 group-hover:w-full transition-all duration-500" />
          </motion.div>

          {/* Middle Divider */}
          

          {/* Right Title */}
          
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="scroll-section max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative   justify-between">
          {/* Vertical Center Line (Desktop Only) */}
          {/* <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/30 via-red-500/50 to-red-500/30 -translate-x-1/2">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />

            
            <div
              ref={dotRef}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-xl shadow-red-500/70"
            />

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
          </div> */}


          {/* Left Column (Gig Based) */}
          <div className=" md:space-y-12 grid grid-cols-2 gap-5 md:gap-16">
            {/* Mobile Title */}
            

            {leftColumn.map((item, index) => (
              <ServiceCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => setSelectedService(item)}
              />
            ))}
          </div>
          <motion.div
            
            className="group flex items-center mt-40 mb-10 gap-4 cursor-pointer"
          >
            <h2 className="text-4xl md:text-4xl font-KronaOne text-white tracking-tighter">
              Custom <span className="text-red-500">Solutions</span>
            </h2>
            <span className="absolute right-0 -bottom-3 h-[2px] w-0 bg-red-500 group-hover:w-full transition-all duration-500" />
          </motion.div>

          {/* Right Column (Custom Based) */}
          <div className="md:space-y-12 grid grid-cols-2 gap-5 md:gap-16">
            
            

            {rightColumn.map((item, index) => (
              <ServiceCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => setSelectedService(item)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ item, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative overflow-hidden border border-red-500/30 bg-black cursor-pointer group h-[300px] sm:h-[320px] md:h-[350px] font-KronaOne"
      onClick={onClick}
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
      <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-500" />

      {/* Card Content - Bottom Only */}
      <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 md:p-8">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-2xl text-white leading-tight tracking-tighter mb-1 sm:mb-2 md:mb-2 font-KronaOne">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-red-500 text-sm sm:text-sm md:text-sm font-medium mb-2 sm:mb-3 md:mb-3 font-KronaOne">
          {item.description}
        </p>

        {/* Price Range */}
        <p className="text-gray-300 text-base sm:text-lg md:text-lg font-semibold mb-3 sm:mb-4 md:mb-4 font-KronaOne">
          {item.priceRange}
        </p>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-t-2 border-r-2 border-red-500/40" />
      <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-b-2 border-l-2 border-red-500/40" />
    </motion.div>
  );
};

// Service Modal Component
const ServiceModal = ({ service, onClose }) => {
  const [selectedPackage, setSelectedPackage] = useState(
    service.type === 'gig' ? 1 : null
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto font-KronaOne"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 30 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="relative w-full max-w-7xl mx-auto my-8 bg-black border border-red-500/30 font-KronaOne"
        onClick={(e) => e.stopPropagation()}
      >

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5 sm:m-15 lg:m-0">

          {/* LEFT SIDE */}
          <div className="lg:col-span-3 p-6 lg:p-8 space-y-6 border-r border-red-500/20">

            {/* Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative rounded-lg overflow-hidden border border-red-500/30 group"
            >
              <video
                src={service.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl lg:text-3xl text-white mb-2 font-KronaOne">
                {service.title}
              </h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span className="text-yellow-500 font-KronaOne text-sm">
                    {service.rating}
                  </span>
                </div>
                <span className="text-gray-400 text-xs font-KronaOne">
                  ({service.reviews} reviews)
                </span>
              </div>
            </motion.div>

            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg lg:text-xl font-KronaOne text-red-500 mb-3">
                About This Service
              </h3>
              <p className="text-gray-300 leading-relaxed text-xs lg:text-sm font-KronaOne">
                {service.fullDescription}
              </p>
            </motion.div>

            {/* Packages / Features */}
            {service.type === 'gig' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-lg lg:text-xl font-KronaOne text-red-500 mb-4">
                  Available Packages
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.packages.map((pkg, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(239, 68, 68, 0.2)' }}
                      onClick={() => setSelectedPackage(index)}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${selectedPackage === index
                        ? 'border-red-500 bg-red-500/10 shadow-lg shadow-red-500/20'
                        : 'border-zinc-800 hover:border-red-500/50 bg-zinc-900/30'
                        }`}
                    >
                      <div className="flex flex-col mb-3">
                        <h4 className="text-base lg:text-lg font-KronaOne text-white mb-1">
                          {pkg.name}
                        </h4>
                        <div className="text-xl lg:text-2xl font-KronaOne text-red-500 mb-2">
                          ${pkg.price}
                        </div>
                        <p className="text-xs text-gray-400 font-KronaOne">
                          {pkg.delivery} • {pkg.revisions} Revisions
                        </p>
                      </div>

                      <ul className="space-y-1">
                        {pkg.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-xs text-gray-400 font-KronaOne"
                          >
                            <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-lg lg:text-xl font-KronaOne text-red-500 mb-4">
                  What's Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.customFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 6 }}
                      className="flex gap-3 p-3 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-red-500/30 transition-all duration-300"
                    >
                      <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-xs lg:text-sm font-KronaOne">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2 p-6 lg:p-8 bg-zinc-900/30 flex flex-col">

            {/* Pricing Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-black/40 rounded-lg border border-red-500/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <Box className="w-5 h-5 text-red-500" />
                <span className="text-xs font-KronaOne text-gray-400 uppercase tracking-tighter">
                  {service.type === 'gig' ? 'Package Pricing' : 'Starting Price'}
                </span>
              </div>

              {service.type === 'gig' && selectedPackage !== null ? (
                <motion.div
                  key={selectedPackage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl lg:text-5xl font-KronaOne text-white mb-2">
                    ${service.packages[selectedPackage].price}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-300 space-y-1 font-KronaOne">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-red-500" />
                      {service.packages[selectedPackage].delivery} delivery
                    </div>
                    <div className="text-gray-400">
                      {service.packages[selectedPackage].revisions} Revisions
                    </div>
                  </div>
                </motion.div>
              ) : service.type === 'custom' ? (
                <>
                  <div className="text-4xl lg:text-5xl font-KronaOne text-white mb-2">
                    ${service.startingPrice}+
                  </div>
                  <div className="text-xs lg:text-sm text-gray-300 font-KronaOne">
                    <Clock className="w-4 h-4 inline mr-1 text-red-500" />
                    {service.estimatedTime}
                  </div>
                </>
              ) : (
                <div className="text-lg lg:text-xl text-gray-500 font-KronaOne">
                  Select a package above
                </div>
              )}
            </motion.div>

            {/* CTA Buttons - Immediately Below Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 space-y-3"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(239, 68, 68, 0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-KronaOne py-3 lg:py-4 rounded-lg tracking-tighter uppercase text-xs lg:text-sm transition-all duration-300"
              >
                {service.type === 'gig' ? 'Order Now' : 'Book Consultation'}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(239, 68, 68, 1)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full border-2 border-red-500 text-red-500 hover:text-white font-KronaOne py-3 lg:py-4 rounded-lg tracking-tighter uppercase text-xs lg:text-sm transition-all duration-300"
              >
                Contact Us
              </motion.button>

              <div className="pt-4 border-t border-zinc-800 text-center text-xs text-gray-400 flex justify-center gap-2 font-KronaOne">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Satisfaction guaranteed
              </div>
            </motion.div>

            {/* Key Features - Below CTA */}
            {((service.type === 'gig' && selectedPackage !== null) || service.type === 'custom') && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 p-6 bg-black/40 rounded-lg border border-red-500/20"
              >
                <h4 className="text-xs font-KronaOne text-gray-400 uppercase tracking-tighter mb-4">
                  Key Highlights
                </h4>
                <ul className="space-y-3">
                  {service.type === 'gig' && selectedPackage !== null ? (
                    service.packages[selectedPackage].features.slice(0, 5).map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-start gap-2 text-xs lg:text-sm text-gray-300 font-KronaOne"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))
                  ) : (
                    service.customFeatures.slice(0, 5).map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-start gap-2 text-xs lg:text-sm text-gray-300 font-KronaOne"
                      >
                        <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))
                  )}
                </ul>
              </motion.div>
            )}
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default Package;