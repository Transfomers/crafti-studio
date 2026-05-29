import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, Code, Users } from "lucide-react";
import saasMockup from "../../assets/saas_mockup.png";

const Storyboard = () => {
  const [currentScene, setCurrentScene] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [timelineProgress, setTimelineProgress] = useState(0);
  
  const audioCtxRef = useRef(null);
  const droneOscRef = useRef(null);
  const chimeOscRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // Scene timing configurations (in seconds)
  const sceneDurations = {
    1: 8,  // 0s - 8s: The Pulse
    2: 8,  // 8s - 16s: The Space Opens
    3: 10, // 16s - 26s: Ideas in the Air
    4: 12, // 26s - 38s: The Builders
    5: 8   // 38s - 46s: The Mark
  };

  const totalDuration = Object.values(sceneDurations).reduce((a, b) => a + b, 0);

  // Get current elapsed time based on scene and timeline progress
  const getElapsedSeconds = () => {
    let elapsed = 0;
    for (let i = 1; i < currentScene; i++) {
      elapsed += sceneDurations[i];
    }
    return elapsed + (timelineProgress / 100) * sceneDurations[currentScene];
  };

  // Web Audio Synth Drone & Sound FX
  const initAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  };

  const playDrone = () => {
    try {
      initAudio();
      if (isMuted) return;

      // Deep Sub-Bass Synth Drone
      if (!droneOscRef.current) {
        const osc = audioCtxRef.current.createOscillator();
        const gainNode = audioCtxRef.current.createGain();
        const filter = audioCtxRef.current.createBiquadFilter();

        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(55, audioCtxRef.current.currentTime); // Low A

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(150, audioCtxRef.current.currentTime);

        gainNode.gain.setValueAtTime(0.15, audioCtxRef.current.currentTime);

        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtxRef.current.destination);

        osc.start();
        droneOscRef.current = { osc, gain: gainNode, filter };
      }
    } catch (e) {
      console.log("Audio not supported or blocked");
    }
  };

  const stopDrone = () => {
    if (droneOscRef.current) {
      try {
        droneOscRef.current.osc.stop();
      } catch (e) {}
      droneOscRef.current = null;
    }
  };

  const triggerChime = (freq = 440) => {
    if (isMuted || !audioCtxRef.current) return;
    try {
      const osc = audioCtxRef.current.createOscillator();
      const gainNode = audioCtxRef.current.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);

      gainNode.gain.setValueAtTime(0.08, audioCtxRef.current.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 2.5);

      osc.connect(gainNode);
      gainNode.connect(audioCtxRef.current.destination);

      osc.start();
      osc.stop(audioCtxRef.current.currentTime + 3);
    } catch (e) {}
  };

  // Handle Mute/Unmute audio synthesis
  useEffect(() => {
    if (!isMuted && isPlaying) {
      playDrone();
    } else {
      stopDrone();
    }
    return () => stopDrone();
  }, [isMuted, isPlaying]);

  // Automated Timeline and Scene Progression Loop
  useEffect(() => {
    if (isPlaying) {
      progressIntervalRef.current = setInterval(() => {
        setTimelineProgress((prev) => {
          if (prev >= 100) {
            // Transition to next scene
            setCurrentScene((scene) => {
              if (scene >= 5) {
                // Video finished, loop to Scene 1
                triggerChime(220);
                return 1;
              } else {
                // Play transition chime
                const chimes = [220, 330, 440, 550, 660];
                triggerChime(chimes[scene]);
                return scene + 1;
              }
            });
            return 0;
          }
          return prev + (100 / (sceneDurations[currentScene] * 20)); // ~20fps updates
        });
      }, 50);
    } else {
      clearInterval(progressIntervalRef.current);
    }

    return () => clearInterval(progressIntervalRef.current);
  }, [isPlaying, currentScene]);

  // Reset to Scene 1
  const handleReplay = () => {
    setCurrentScene(1);
    setTimelineProgress(0);
    setIsPlaying(true);
    triggerChime(220);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-urbanist flex flex-col items-center justify-center p-4">
      {/* Background System Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-35 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_90%)] z-0" />

      {/* Main Video Canvas Screen Container */}
      <div className="w-full max-w-[1000px] aspect-video bg-[#050506] border border-red-500/15 rounded-[4px] relative overflow-hidden shadow-[0_0_80px_rgba(255,42,53,0.06)] group z-10">
        
        {/* Pixel-Perfect Corner Red Accents */}
        <div className="absolute top-0 right-0 w-5 h-5 border-t-[2px] border-r-[2px] border-[#ff2a35] pointer-events-none z-30" />
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-[2px] border-l-[2px] border-[#ff2a35] pointer-events-none z-30" />

        {/* Ambient background glow inside the canvas */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Automated Rendering Engine of the 5 Storyboard Scenes */}
        <AnimatePresence mode="wait">
          
          {/* SCENE 1: THE PULSE (0s - 8s) */}
          {currentScene === 1 && (
            <motion.div
              key="scene-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10"
            >
              {/* Particle Field assembly background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(35)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      x: Math.random() * 1000 - 500, 
                      y: 400, 
                      opacity: 0, 
                      scale: Math.random() * 0.5 + 0.5 
                    }}
                    animate={{ 
                      y: -400, 
                      opacity: [0, 0.7, 0],
                      x: Math.random() * 200 - 100 
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: Math.random() * 4 + 2, 
                      delay: Math.random() * 2 
                    }}
                    className="absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full bg-[#ff2a35] shadow-[0_0_8px_#ff2a35]"
                  />
                ))}
              </div>

              {/* Centered Logo Assembling */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 3.5, ease: "easeOut" }}
                className="relative w-36 h-36 md:w-48 md:h-48"
              >
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-[0_0_25px_rgba(255,42,53,0.3)]">
                  <defs>
                    <filter id="scene-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Outer broken circular C ring */}
                  <motion.path
                    initial={{ strokeDasharray: "400", strokeDashoffset: "400" }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                    d="M 95 35 A 65 65 0 1 0 160 100 H 135 A 40 40 0 1 1 95 60 V 35 Z"
                    fill="white"
                  />
                  {/* Top right corner arrowhead segment */}
                  <motion.path
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.2, duration: 1.5, type: "spring" }}
                    d="M 108 35 H 160 V 87 L 142 87 C 142 74 126 54 108 54 Z"
                    fill="#ff2a35"
                    filter="url(#scene-glow-filter)"
                  />
                </svg>
              </motion.div>

              {/* Status HUD overlay */}
              <div className="absolute top-6 left-6 font-mono text-[9px] tracking-widest text-zinc-500 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                SYSTEM INITIATING: THE PULSE
              </div>
            </motion.div>
          )}

          {/* SCENE 2: THE SPACE OPENS (8s - 16s) */}
          {currentScene === 2 && (
            <motion.div
              key="scene-2"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 flex items-center justify-center p-6 z-10 bg-black/60"
            >
              {/* Deep perspective grids representing Matte Black Studio surfaces */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,42,53,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,42,53,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)_translateY(-50px)] opacity-50" />
              
              {/* Laser neon ceiling lines */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2a35] to-transparent shadow-[0_0_15px_#ff2a35]" />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2a35] to-transparent shadow-[0_0_15px_#ff2a35]" />

              <div className="text-center space-y-4 max-w-xl">
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg font-bold tracking-[0.25em] text-red-500 uppercase font-KronaOne"
                >
                  THE SPACE OPENS
                </motion.h3>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-xs sm:text-sm text-zinc-400 font-dmsans leading-relaxed"
                >
                  A vast architectural studio space materializes — matte black surfaces, red neon outlining the boundaries. Floating wireframe schemas drift in the air, humming with potential.
                </motion.p>
              </div>

              {/* Status HUD overlay */}
              <div className="absolute top-6 left-6 font-mono text-[9px] tracking-widest text-zinc-500 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a35] animate-pulse" />
                ENVIRONMENT RENDER: ACTIVE
              </div>
            </motion.div>
          )}

          {/* SCENE 3: IDEAS IN THE AIR (16s - 26s) */}
          {currentScene === 3 && (
            <motion.div
              key="scene-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center p-6 z-10"
            >
              {/* Spinning 3D Holographic schemas container */}
              <div className="grid grid-cols-3 gap-6 max-w-3xl w-full">
                {[
                  { icon: <Sparkles className="w-5 h-5 text-[#ff2a35]" />, label: "Strategy Flow", val: "01 Discovery" },
                  { icon: <Code className="w-5 h-5 text-white" />, label: "Product Node", val: "Resilient API" },
                  { icon: <Users className="w-5 h-5 text-[#ff2a35]" />, label: "UX System", val: "SaaS Analytics" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateY: 90 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ delay: index * 0.3, duration: 0.8 }}
                    className="p-4 bg-[#0b0b0d] border border-red-500/10 rounded-[4px] relative flex flex-col justify-between h-40 shadow-[0_0_20px_rgba(255,42,53,0.03)]"
                  >
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-[2.5px] border-r-[2.5px] border-[#ff2a35]" />
                    <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-[2.5px] border-l-[2.5px] border-[#ff2a35]" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">{item.label}</span>
                      {item.icon}
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-bold text-white uppercase">{item.val}</div>
                      <div className="w-full h-1 bg-zinc-900 rounded overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: "80%" }} 
                          transition={{ delay: 1, duration: 1.5 }} 
                          className="h-full bg-gradient-to-r from-red-600 to-red-400" 
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Status HUD overlay */}
              <div className="absolute top-6 left-6 font-mono text-[9px] tracking-widest text-zinc-500 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a35] animate-pulse" />
                HOLOGRAPHIC COMPILING: OK
              </div>
            </motion.div>
          )}

          {/* SCENE 4: THE BUILDERS (26s - 38s) */}
          {currentScene === 4 && (
            <motion.div
              key="scene-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between p-8 gap-8 z-10"
            >
              <div className="flex-1 space-y-4 text-left">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-2 py-1 bg-red-950/20 border border-red-500/25 rounded-[2px]"
                >
                  <span className="w-1 h-1 rounded-full bg-[#ff2a35]" />
                  <span className="text-[8px] font-mono tracking-widest uppercase text-[#ff2a35]">SCENE 4: TEAM ENGINE</span>
                </motion.div>

                <motion.h3 
                  initial={{ x: -20, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ delay: 0.5 }}
                  className="text-2xl font-bold uppercase tracking-tight text-white"
                >
                  THE BUILDERS
                </motion.h3>

                <motion.p 
                  initial={{ x: -20, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ delay: 0.7 }}
                  className="text-xs text-zinc-400 font-dmsans leading-relaxed max-w-sm"
                >
                  Developers and designers gather around the glowing interface. Gesturing, planning, building the future of SaaS platforms. Focused, human-centered intelligence.
                </motion.p>
              </div>

              {/* High-fidelity visual mockup panel */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }} 
                transition={{ delay: 0.6 }}
                className="flex-1 max-w-[360px] aspect-square rounded-[4px] border border-red-500/20 overflow-hidden relative shadow-[0_0_30px_rgba(255,42,53,0.04)]"
              >
                <img src={saasMockup} alt="" className="w-full h-full object-cover opacity-85" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-[2px] border-r-[2px] border-[#ff2a35]" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[2px] border-l-[2px] border-[#ff2a35]" />
              </motion.div>

              {/* Status HUD overlay */}
              <div className="absolute top-6 left-6 font-mono text-[9px] tracking-widest text-zinc-500 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Active Collaboration: ON
              </div>
            </motion.div>
          )}

          {/* SCENE 5: THE MARK (38s - 46s) */}
          {currentScene === 5 && (
            <motion.div
              key="scene-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10 bg-black"
            >
              {/* Perfectly Centered pulsing logo */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: [1, 1.02, 1], opacity: 1 }}
                transition={{ 
                  scale: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                  opacity: { duration: 2.5 }
                }}
                className="w-32 h-32 md:w-40 md:h-40"
              >
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-[0_0_30px_rgba(255,42,53,0.4)]">
                  {/* Outer broken circular C ring */}
                  <path
                    d="M 95 35 A 65 65 0 1 0 160 100 H 135 A 40 40 0 1 1 95 60 V 35 Z"
                    fill="white"
                  />
                  {/* Top right corner arrowhead segment */}
                  <path
                    d="M 108 35 H 160 V 87 L 142 87 C 142 74 126 54 108 54 Z"
                    fill="#ff2a35"
                  />
                </svg>
              </motion.div>

              {/* Wordmark Fades In Beneath */}
              <motion.h2
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 1.5 }}
                className="text-2xl sm:text-3xl font-black text-white uppercase tracking-[0.25em] mt-8 text-center"
              >
                CRAFTI <span className="text-[#ff2a35] drop-shadow-[0_0_15px_#ff2a35]">STUDIO</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 3, duration: 1 }}
                className="text-[9px] font-mono tracking-[0.4em] uppercase text-zinc-400 mt-3"
              >
                think . craft impact
              </motion.p>

              {/* Status HUD overlay */}
              <div className="absolute top-6 left-6 font-mono text-[9px] tracking-widest text-zinc-500 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                SEQUENCE HANDOVER: COMPLETE
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Dynamic Timeline Progression Indicator Bar (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-950 z-20">
          <div 
            className="h-full bg-gradient-to-r from-red-600 via-red-500 to-white transition-all duration-75"
            style={{ width: `${timelineProgress}%` }}
          />
        </div>
        
      </div>

      {/* High-Fidelity Cinematic Controls and HUD Panel */}
      <div className="w-full max-w-[1000px] mt-6 bg-[#0b0b0d] border border-red-500/15 p-4 sm:p-6 rounded-[4px] flex flex-col md:flex-row items-center justify-between gap-4 z-10">
        
        {/* LEFT: Video Status Indicators */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <div className="font-mono text-xs uppercase tracking-widest text-[#ff2a35]">
              playing: SCENE {currentScene}/5
            </div>
          </div>
          
          <div className="hidden sm:block border-l border-zinc-800 h-6" />
          
          {/* Time Counter */}
          <div className="hidden sm:block font-mono text-xs text-zinc-500">
            TIME: <span className="text-white">{getElapsedSeconds().toFixed(1)}s</span> / {totalDuration}s
          </div>
        </div>

        {/* CENTER: Playback Controls */}
        <div className="flex items-center gap-4">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 rounded-full border border-red-500/20 bg-black/40 hover:bg-[#ff2a35] hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer text-red-500"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 pl-0.5" />}
          </button>

          {/* Replay / Reset Button */}
          <button
            onClick={handleReplay}
            className="w-10 h-10 rounded-full border border-zinc-800 bg-black/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center cursor-pointer text-zinc-400"
            title="Replay Storyboard"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* RIGHT: Synthesizer Audio Controls */}
        <div className="flex items-center gap-3 bg-black/40 border border-zinc-850 px-4 py-2 rounded-full">
          <button
            onClick={() => {
              setIsMuted(!isMuted);
              initAudio();
            }}
            className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title={isMuted ? "Unmute Ambient Drone Synth" : "Mute Sound"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#ff2a35]" />}
          </button>
          <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
            {isMuted ? "Audio Synthesizer: Muted" : "Drone Synth: Live"}
          </span>
        </div>

      </div>

      {/* Storyboard Navigation / Shortcuts */}
      <div className="w-full max-w-[1000px] mt-4 grid grid-cols-5 gap-2 z-10">
        {[
          { id: 1, label: "01 Pulse" },
          { id: 2, label: "02 Space" },
          { id: 3, label: "03 Ideas" },
          { id: 4, label: "04 Builders" },
          { id: 5, label: "05 Mark" }
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => {
              setCurrentScene(btn.id);
              setTimelineProgress(0);
              const chimes = [220, 330, 440, 550, 660];
              triggerChime(chimes[btn.id - 1]);
            }}
            className={`py-2 px-1 text-[8px] font-mono uppercase tracking-widest border transition-all rounded-[2px] cursor-pointer ${
              currentScene === btn.id
                ? "border-[#ff2a35] bg-[#ff2a35]/10 text-[#ff2a35] font-bold"
                : "border-zinc-900 bg-zinc-950/20 text-zinc-500 hover:border-zinc-800 hover:text-zinc-300"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default Storyboard;
