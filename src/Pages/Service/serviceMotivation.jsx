import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './style.css'

const ServiceMotivation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-black flex items-center justify-center overflow-hidden px-4 py-15">
      <div className="max-w-7xl w-full">

        {/* Main Container */}
        <div className="relative">

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative z-10"
          >
            <p className="text-gray-400 text-xl md:text-7xl">
              Experience the future of design with our 3D services
            </p>
          </motion.div>

          {/* 3D Cube Visualization */}
          <div className="flex flex-col lg:flex-row items-center justify-center  h-70 gap-12 lg:gap-20">

            {/* Animated 3D Cube */}


            <div
              className="containere"
              dangerouslySetInnerHTML={{
                __html: `
<div class="container">
  <div class="cube" style="--x:-1;--y:-1;--z:-1;--fz:0"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:-1;--fz:1"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:-1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:-1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:-1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:-1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:0;--fz:0"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:0;--fz:1"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:0;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:0;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:0;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:0;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:1;--fz:0"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:1;--fz:1"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:-1;--y:-1;--z:1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:-1;--y:0;--z:-1;--fz:0"></div>
  <div class="cube" style="--x:-1;--y:0;--z:-1;--fz:1"></div>
  <div class="cube" style="--x:-1;--y:0;--z:-1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:-1;--y:0;--z:-1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:-1;--y:0;--z:-1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:-1;--y:0;--z:-1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:-1;--y:0;--z:0;--fz:0"></div>
  <div class="cube" style="--x:-1;--y:0;--z:0;--fz:1"></div>
  <div class="cube" style="--x:-1;--y:0;--z:0;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:-1;--y:0;--z:0;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:-1;--y:0;--z:0;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:-1;--y:0;--z:0;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:-1;--y:0;--z:1;--fz:0"></div>
  <div class="cube" style="--x:-1;--y:0;--z:1;--fz:1"></div>
  <div class="cube" style="--x:-1;--y:0;--z:1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:-1;--y:0;--z:1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:-1;--y:0;--z:1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:-1;--y:0;--z:1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:-1;--y:1;--z:-1;--fz:0"></div>
  <div class="cube" style="--x:-1;--y:1;--z:-1;--fz:1"></div>
  <div class="cube" style="--x:-1;--y:1;--z:-1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:-1;--y:1;--z:-1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:-1;--y:1;--z:-1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:-1;--y:1;--z:-1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:-1;--y:1;--z:0;--fz:0"></div>
  <div class="cube" style="--x:-1;--y:1;--z:0;--fz:1"></div>
  <div class="cube" style="--x:-1;--y:1;--z:0;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:-1;--y:1;--z:0;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:-1;--y:1;--z:0;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:-1;--y:1;--z:0;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:-1;--y:1;--z:1;--fz:0"></div>
  <div class="cube" style="--x:-1;--y:1;--z:1;--fz:1"></div>
  <div class="cube" style="--x:-1;--y:1;--z:1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:-1;--y:1;--z:1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:-1;--y:1;--z:1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:-1;--y:1;--z:1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:0;--y:-1;--z:-1;--fz:0"></div>
  <div class="cube" style="--x:0;--y:-1;--z:-1;--fz:1"></div>
  <div class="cube" style="--x:0;--y:-1;--z:-1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:0;--y:-1;--z:-1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:0;--y:-1;--z:-1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:0;--y:-1;--z:-1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:0;--y:-1;--z:0;--fz:0"></div>
  <div class="cube" style="--x:0;--y:-1;--z:0;--fz:1"></div>
  <div class="cube" style="--x:0;--y:-1;--z:0;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:0;--y:-1;--z:0;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:0;--y:-1;--z:0;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:0;--y:-1;--z:0;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:0;--y:-1;--z:1;--fz:0"></div>
  <div class="cube" style="--x:0;--y:-1;--z:1;--fz:1"></div>
  <div class="cube" style="--x:0;--y:-1;--z:1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:0;--y:-1;--z:1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:0;--y:-1;--z:1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:0;--y:-1;--z:1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:0;--y:0;--z:-1;--fz:0"></div>
  <div class="cube" style="--x:0;--y:0;--z:-1;--fz:1"></div>
  <div class="cube" style="--x:0;--y:0;--z:-1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:0;--y:0;--z:-1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:0;--y:0;--z:-1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:0;--y:0;--z:-1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:0;--y:0;--z:0;--fz:0"></div>
  <div class="cube" style="--x:0;--y:0;--z:0;--fz:1"></div>
  <div class="cube" style="--x:0;--y:0;--z:0;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:0;--y:0;--z:0;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:0;--y:0;--z:0;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:0;--y:0;--z:0;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:0;--y:0;--z:1;--fz:0"></div>
  <div class="cube" style="--x:0;--y:0;--z:1;--fz:1"></div>
  <div class="cube" style="--x:0;--y:0;--z:1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:0;--y:0;--z:1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:0;--y:0;--z:1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:0;--y:0;--z:1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:0;--y:1;--z:-1;--fz:0"></div>
  <div class="cube" style="--x:0;--y:1;--z:-1;--fz:1"></div>
  <div class="cube" style="--x:0;--y:1;--z:-1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:0;--y:1;--z:-1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:0;--y:1;--z:-1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:0;--y:1;--z:-1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:0;--y:1;--z:0;--fz:0"></div>
  <div class="cube" style="--x:0;--y:1;--z:0;--fz:1"></div>
  <div class="cube" style="--x:0;--y:1;--z:0;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:0;--y:1;--z:0;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:0;--y:1;--z:0;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:0;--y:1;--z:0;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:0;--y:1;--z:1;--fz:0"></div>
  <div class="cube" style="--x:0;--y:1;--z:1;--fz:1"></div>
  <div class="cube" style="--x:0;--y:1;--z:1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:0;--y:1;--z:1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:0;--y:1;--z:1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:0;--y:1;--z:1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:1;--y:-1;--z:-1;--fz:0"></div>
  <div class="cube" style="--x:1;--y:-1;--z:-1;--fz:1"></div>
  <div class="cube" style="--x:1;--y:-1;--z:-1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:1;--y:-1;--z:-1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:1;--y:-1;--z:-1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:1;--y:-1;--z:-1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:1;--y:-1;--z:0;--fz:0"></div>
  <div class="cube" style="--x:1;--y:-1;--z:0;--fz:1"></div>
  <div class="cube" style="--x:1;--y:-1;--z:0;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:1;--y:-1;--z:0;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:1;--y:-1;--z:0;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:1;--y:-1;--z:0;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:1;--y:-1;--z:1;--fz:0"></div>
  <div class="cube" style="--x:1;--y:-1;--z:1;--fz:1"></div>
  <div class="cube" style="--x:1;--y:-1;--z:1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:1;--y:-1;--z:1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:1;--y:-1;--z:1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:1;--y:-1;--z:1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:1;--y:0;--z:-1;--fz:0"></div>
  <div class="cube" style="--x:1;--y:0;--z:-1;--fz:1"></div>
  <div class="cube" style="--x:1;--y:0;--z:-1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:1;--y:0;--z:-1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:1;--y:0;--z:-1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:1;--y:0;--z:-1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:1;--y:0;--z:0;--fz:0"></div>
  <div class="cube" style="--x:1;--y:0;--z:0;--fz:1"></div>
  <div class="cube" style="--x:1;--y:0;--z:0;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:1;--y:0;--z:0;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:1;--y:0;--z:0;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:1;--y:0;--z:0;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:1;--y:0;--z:1;--fz:0"></div>
  <div class="cube" style="--x:1;--y:0;--z:1;--fz:1"></div>
  <div class="cube" style="--x:1;--y:0;--z:1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:1;--y:0;--z:1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:1;--y:0;--z:1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:1;--y:0;--z:1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:1;--y:1;--z:-1;--fz:0"></div>
  <div class="cube" style="--x:1;--y:1;--z:-1;--fz:1"></div>
  <div class="cube" style="--x:1;--y:1;--z:-1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:1;--y:1;--z:-1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:1;--y:1;--z:-1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:1;--y:1;--z:-1;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:1;--y:1;--z:0;--fz:0"></div>
  <div class="cube" style="--x:1;--y:1;--z:0;--fz:1"></div>
  <div class="cube" style="--x:1;--y:1;--z:0;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:1;--y:1;--z:0;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:1;--y:1;--z:0;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:1;--y:1;--z:0;--ry:1;--fy:1"></div>
  <div class="cube" style="--x:1;--y:1;--z:1;--fz:0"></div>
  <div class="cube" style="--x:1;--y:1;--z:1;--fz:1"></div>
  <div class="cube" style="--x:1;--y:1;--z:1;--rx:1;--fx:-1"></div>
  <div class="cube" style="--x:1;--y:1;--z:1;--rx:1;--fx:1"></div>
  <div class="cube" style="--x:1;--y:1;--z:1;--ry:1;--fy:-1"></div>
  <div class="cube" style="--x:1;--y:1;--z:1;--ry:1;--fy:1"></div>
</div>
        `
              }}
            />


          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceMotivation;