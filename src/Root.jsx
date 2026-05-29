import { Outlet, useNavigate } from "react-router-dom";
import Nav from "./Components/Nav";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "./Components/Footer";
import Curser from "./Components/Home/Curser";

gsap.registerPlugin(useGSAP);

const Root = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // FORCE HOME + RESET SCROLL ON RELOAD
  useEffect(() => {
    // disable browser scroll restore
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // always go to home on reload
    const navEntry = performance.getEntriesByType("navigation")[0];
    if (navEntry?.type === "reload") {
      navigate("/", { replace: true });
    }

    window.scrollTo(0, 0);

    // lock scroll during loading
    document.body.style.overflow = "hidden";
  }, [navigate]);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
        // unlock scroll
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "auto";
        
        // Ensure home intro-logo is visible for scroll scaling
        gsap.set("#intro-logo", { opacity: 1 });
      }
    });

    // Step 1: WE STRATEGIZE
    tl.fromTo("#intro-text", 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
    tl.to("#intro-text", 
      { y: -80, opacity: 0, duration: 0.5, delay: 0.6, ease: "power3.in" }
    );

    // Step 2: WE UX DESIGN
    tl.call(() => {
      const el = document.getElementById("intro-text");
      if (el) el.innerText = "WE UX DESIGN";
    });
    tl.fromTo("#intro-text", 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
    tl.to("#intro-text", 
      { y: -80, opacity: 0, duration: 0.5, delay: 0.6, ease: "power3.in" }
    );

    // Step 3: WE FULL-STACK ENGINEER
    tl.call(() => {
      const el = document.getElementById("intro-text");
      if (el) el.innerText = "WE FULL-STACK ENGINEER";
    });
    tl.fromTo("#intro-text", 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
    tl.to("#intro-text", 
      { y: -80, opacity: 0, duration: 0.5, delay: 0.6, ease: "power3.in" }
    );

    // Step 3.5: WELCOME TO CRAFTI STUDIO
    tl.call(() => {
      const el = document.getElementById("intro-text");
      if (el) el.innerText = "WELCOME TO CRAFTI STUDIO";
    });
    tl.fromTo("#intro-text", 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
    );
    tl.to("#intro-text", 
      { y: -80, opacity: 0, duration: 0.5, delay: 0.8, ease: "power3.in" },
      "+=0.2"
    );

    // Step 4: THE PULSE (Scene 1)
    // Fade in particles & logo svg from within the particle field
    tl.to("#intro-particles", { opacity: 1, duration: 1.0 });
    tl.fromTo("#intro-logo-svg", 
      { scale: 0.7, opacity: 0, rotate: -45 }, 
      { scale: 1, opacity: 1, rotate: 0, duration: 1.5, ease: "power4.out" },
      "-=0.5"
    );

    // Let the logo pulse/breathe slightly
    tl.to("#intro-logo-svg", {
      scale: 1.03,
      duration: 1.2,
      yoyo: true,
      repeat: 1,
      ease: "sine.inOut"
    });

    // Step 5: THE MARK (Scene 5)
    // Fade in wordmark and slogan beneath the pulsing logo
    tl.fromTo("#intro-wordmark", 
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "-=0.6"
    );
    tl.fromTo("#intro-slogan", 
      { opacity: 0 },
      { opacity: 0.5, duration: 1.0, ease: "power2.out" },
      "-=0.5"
    );

    // Hold the mark constellation for breathing reflection
    tl.to("#intro-constellation", {
      y: -2,
      duration: 1.5,
      yoyo: true,
      repeat: 1,
      ease: "sine.inOut"
    });

    // Zoom through the logo transition (Scene 5 -> Home reveal)
    tl.to("#intro-logo-svg", {
      scale: 30,
      rotate: 15,
      duration: 1.2,
      ease: "power4.inOut"
    });
    tl.to(["#intro-wordmark", "#intro-slogan", "#intro-particles"], {
      opacity: 0,
      duration: 0.4,
      ease: "power3.out"
    }, "-=1.0");
    
    tl.to("#cinematic-intro", 
      { opacity: 0, duration: 0.5, ease: "power3.out" }, 
      "-=0.6"
    );
  }, []);

  return (
    <div className='font-OdibeeSans h-screen text-white relative'>
      {/* Dynamic Animated Typographic Loader overlay */}
      {loading && (
        <div
          id="cinematic-intro"
          className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center font-KronaOne"
        >
          {/* Inline styles for automatic floating particle simulation */}
          <style>{`
            @keyframes floatUp {
              0% { transform: translateY(0) scale(0.6); opacity: 0; }
              20% { opacity: 0.7; }
              80% { opacity: 0.7; }
              100% { transform: translateY(-110vh) scale(1.2); opacity: 0; }
            }
          `}</style>

          {/* Futuristic system grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-35" />
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_90%)]" />

          {/* Glowing ambient red lights */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-red-950/20 blur-[100px]" />

          {/* Crimson Particle Field (Scene 1: The Pulse) */}
          <div id="intro-particles" className="absolute inset-0 overflow-hidden pointer-events-none opacity-0">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute bottom-[-20px] w-1.5 h-1.5 rounded-full bg-[#ff2a35] shadow-[0_0_8px_#ff2a35]"
                style={{
                  left: `${Math.random() * 100}%`,
                  animation: `floatUp ${Math.random() * 4 + 3}s linear infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Sequential statement container */}
          <div className="relative text-center overflow-hidden h-32 flex items-center justify-center px-6">
            <h1
              id="intro-text"
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 font-bold tracking-widest uppercase font-KronaOne"
            >
              WE STRATEGIZE
            </h1>
          </div>

          {/* Custom circular C logo & Brand Constellation (Scene 5: The Mark) */}
          <div id="intro-constellation" className="relative flex flex-col items-center justify-center z-20 pointer-events-none">
            
            {/* The Logo SVG */}
            <div id="intro-logo-svg" className="opacity-0 scale-50 z-20 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-40 h-40 sm:w-48 sm:h-48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="glow-filter-loader" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Outer broken circular C ring in solid white */}
                <path
                  d="M 95 35 A 65 65 0 1 0 160 100 H 135 A 40 40 0 1 1 95 60 V 35 Z"
                  fill="white"
                />
                {/* Top right corner arrowhead segment in solid crimson red with premium glow */}
                <path
                  d="M 108 35 H 160 V 87 L 142 87 C 142 74 126 54 108 54 Z"
                  fill="#ff2a35"
                  filter="url(#glow-filter-loader)"
                />
              </svg>
            </div>

            {/* Wordmark and Slogan (Scene 5 details) */}
            <div className="flex flex-col items-center mt-6">
              <h2
                id="intro-wordmark"
                className="text-2xl sm:text-3xl font-black text-white uppercase tracking-[0.25em] opacity-0 text-center select-none font-urbanist"
              >
                CRAFTI <span className="text-[#ff2a35] drop-shadow-[0_0_15px_#ff2a35]">STUDIO</span>
              </h2>

              <p
                id="intro-slogan"
                className="text-[9px] font-mono tracking-[0.4em] uppercase text-zinc-400 mt-2.5 opacity-0 select-none"
              >
                think . craft impact
              </p>
            </div>

          </div>

        </div>
      )}

      <Nav />
      <Outlet />
      <Curser />
      <Footer />
    </div>
  );
};

export default Root;
