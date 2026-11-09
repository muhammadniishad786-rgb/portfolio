
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export default function CyberCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, { stiffness: 220, damping: 24, mass: 0.35 });
  const y = useSpring(mouseY, { stiffness: 220, damping: 24, mass: 0.35 });

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      const target = e.target;
      setHovering(
        Boolean(
          target instanceof Element &&
          target.closest("a, button, input, textarea, select, [role='button']")
        )
      );
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100000] hidden md:block"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Outer targeting field */}
      <motion.div
        animate={
          reduceMotion
            ? {}
            : { rotate: 360 }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className={`relative flex items-center justify-center rounded-full border ${
          hovering
            ? "h-14 w-14 border-cyan-300/80"
            : "h-10 w-10 border-emerald-400/50"
        }`}
      >
        {/* Four HUD brackets */}
        <span className="absolute -left-[3px] -top-[3px] h-3 w-3 border-l-2 border-t-2 border-emerald-300" />
        <span className="absolute -right-[3px] -top-[3px] h-3 w-3 border-r-2 border-t-2 border-emerald-300" />
        <span className="absolute -bottom-[3px] -left-[3px] h-3 w-3 border-b-2 border-l-2 border-emerald-300" />
        <span className="absolute -bottom-[3px] -right-[3px] h-3 w-3 border-b-2 border-r-2 border-emerald-300" />

        {/* Rotating segmented ring */}
        <div className="absolute inset-[5px] rounded-full border border-dashed border-cyan-400/60" />

        {/* Crosshair */}
        <span className="absolute h-px w-[52px] bg-emerald-400/50" />
        <span className="absolute h-[52px] w-px bg-emerald-400/50" />

        {/* Energy core */}
        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  scale: [1, 1.35, 1],
                  opacity: [0.75, 1, 0.75],
                }
          }
          transition={{ duration: 1.3, repeat: Infinity }}
          className={`relative z-10 h-2 w-2 rounded-full ${
            hovering
              ? "bg-cyan-200 shadow-[0_0_16px_5px_rgba(0,245,255,0.7)]"
              : "bg-emerald-300 shadow-[0_0_15px_5px_rgba(0,255,156,0.65)]"
          }`}
        />
      </motion.div>

      {/* Target lock label */}
      <div className="absolute left-8 top-8 whitespace-nowrap border-l border-emerald-400/60 bg-black/70 px-2 py-1 font-mono text-[8px] tracking-[0.2em] text-emerald-300 backdrop-blur-sm">
        {hovering ? "TARGET_LOCKED" : "SCANNING"}
      </div>
    </motion.div>
  );
}
