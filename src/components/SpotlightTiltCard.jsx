"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const SpotlightTiltCard = ({ children, className = "", tilt = true, spotlightColor = "99,102,241" }) => {
  const ref = useRef(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlight({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 1 });

    if (tilt) {
      const px = x / rect.width - 0.5;
      const py = y / rect.height - 0.5;
      rotateY.set(px * 14);
      rotateX.set(py * -14);
    }
  };

  const handleMouseLeave = () => {
    setSpotlight((s) => ({ ...s, opacity: 0 }));
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tilt ? { rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" } : undefined}
      className={`card-3d relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(400px circle at ${spotlight.x}% ${spotlight.y}%, rgba(${spotlightColor}, 0.15), transparent 70%)`,
        }}
      />
      <div style={tilt ? { transform: "translateZ(30px)" } : undefined} className="relative h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default SpotlightTiltCard;
