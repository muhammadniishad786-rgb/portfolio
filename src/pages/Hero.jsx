import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Braces,
  Code2,
  Download,
  Terminal,
} from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import resume from "../assets/Nishad_MERN_Developer.pdf"

const GITHUB_URL = "https://github.com/muhammadniishad786-rgb";
const LINKEDIN_URL = "https://www.linkedin.com/in/muhammad-nishad-849197439/";
const INSTAGRAM_URL = "https://www.instagram.com/muhammad.nishad_/";

function Hero() {
  const [terminalMode, setTerminalMode] = useState("whoami");
  const [typedText, setTypedText] = useState("");

  // ================================
  // Terminal mode changes every 3 sec
  // ================================
  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalMode((prev) => (prev === "whoami" ? "stack" : "whoami"));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ================================
  // Terminal typing animation
  // ================================
  useEffect(() => {
    const text =
      terminalMode === "whoami"
        ? "Muhammad Nishad"
        : `stack = {
  frontend: "React",
  backend: "Node.js",
  database: "MongoDB"
}`;

    setTypedText("");

    let index = 0;

    const typingInterval = setInterval(
      () => {
        setTypedText(text.slice(0, index + 1));
        index++;

        if (index >= text.length) {
          clearInterval(typingInterval);
        }
      },
      terminalMode === "stack" ? 25 : 55,
    );

    return () => clearInterval(typingInterval);
  }, [terminalMode]);

  // ================================
  // Mouse movement
  // ================================
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Disable mouse effect on smaller screens
      if (window.innerWidth < 1024) return;

      const x = (event.clientX / window.innerWidth - 0.5) * 45;

      const y = (event.clientY / window.innerHeight - 0.5) * 45;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* ================================
          BACKGROUND GRID
      ================================= */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================================
          BACKGROUND GLOW
      ================================= */}
      <motion.div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-orange-600/10 blur-[130px]"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================================
          TOP LINE
      ================================= */}
      <motion.div
        className="absolute left-0 right-0 top-0 h-[2px] bg-orange-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        style={{
          transformOrigin: "left",
        }}
      />

      {/* ================================
          MAIN
      ================================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-24 pt-28 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-20">
          {/* ==================================================
              LEFT
          ================================================== */}
          <div className="min-w-0">
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 sm:text-xs sm:tracking-[0.25em]">
                Available for opportunities
              </span>
            </motion.div>

            {/* ================================
                NAME
            ================================= */}
            <div className="overflow-visible">
  <motion.h1
    initial={{ opacity: 0, y: 70 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.9,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      whitespace-nowrap
      text-[15vw]
      font-black
      leading-[0.8]
      tracking-[-0.08em]
      sm:text-[13vw]
      md:text-[10vw]
      lg:text-[7vw]
      xl:text-[8rem]
    "
  >
    MUHAMMAD
  </motion.h1>
</div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  bg-gradient-to-r
                  from-white
                  via-white
                  to-zinc-500
                  bg-clip-text
                  text-[18vw]
                  font-black
                  leading-[0.9]
                  tracking-[-0.07em]
                  text-transparent
                  sm:text-[14vw]
                  md:text-[12vw]
                  lg:text-[8vw]
                  xl:text-[8.5rem]
                "
              >
                NISHAD
              </motion.h1>
            </div>

            {/* ================================
                ROLE
            ================================= */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="mt-7 flex items-center gap-3 sm:mt-8 sm:gap-4"
            >
              <div className="h-px w-8 bg-orange-500 sm:w-10" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:text-sm sm:tracking-[0.3em] md:text-base">
                MERN Stack Developer
              </p>
            </motion.div>

            {/* ================================
                DESCRIPTION
            ================================= */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.55,
              }}
              className="mt-5 max-w-xl text-sm leading-6 text-zinc-400 sm:mt-6 sm:text-base sm:leading-7 md:text-lg"
            >
              I build modern full-stack web applications with clean interfaces,
              scalable backend systems, and real-world functionality.
            </motion.p>

            {/* ================================
                BUTTONS
            ================================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="mt-8 flex flex-wrap gap-3 sm:mt-9 sm:gap-4"
            >
              <a
                href="#projects"
                className="group flex min-h-11 items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-black transition-all duration-300 hover:bg-orange-500 sm:px-6 sm:text-sm"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-11 items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:border-orange-500 hover:text-orange-500 sm:px-6 sm:text-sm"
              >
                Resume
                <Download
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </motion.div>

            {/* ================================
                SOCIALS
            ================================= */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.85,
              }}
              className="mt-8 flex items-center gap-3 sm:mt-10"
            >
              {/* GitHub */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500 sm:h-11 sm:w-11"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[18px] w-[18px] sm:h-5 sm:w-5"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.15-4.55-5.06 0-1.12.39-2.03 1.03-2.75.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.18 9.18 0 0 1 12 8.36c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v1.41c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500 sm:h-11 sm:w-11"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[18px] w-[18px] sm:h-5 sm:w-5"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 .8 24 22.22V1.78C24 .8 23.2 0 22.22 0Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-500 sm:h-11 sm:w-11"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-[18px] w-[18px] sm:h-5 sm:w-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* ==================================================
              RIGHT - TERMINAL
          ================================================== */}
          <div className="flex min-w-0 items-center justify-center lg:justify-end">
            {/* Mouse movement */}
            <motion.div
              style={{
                x: smoothX,
                y: smoothY,
              }}
              className="relative w-full max-w-[540px]"
            >
              {/* Floating animation */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Orbit */}
                <motion.div
                  className="pointer-events-none absolute -inset-5 rounded-full border border-orange-500/10 sm:-inset-8 lg:-inset-10"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="pointer-events-none absolute -inset-10 rounded-full border border-dashed border-zinc-800/60 sm:-inset-14 lg:-inset-20"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Terminal */}
                <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-[#0d0d0d]/95 shadow-2xl shadow-black/50 backdrop-blur-xl sm:rounded-2xl">
                  {/* Terminal header */}
                  <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3 sm:px-5 sm:py-4">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="h-2 w-2 rounded-full bg-red-500/80 sm:h-2.5 sm:w-2.5" />
                      <span className="h-2 w-2 rounded-full bg-yellow-500/80 sm:h-2.5 sm:w-2.5" />
                      <span className="h-2 w-2 rounded-full bg-green-500/80 sm:h-2.5 sm:w-2.5" />
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] text-zinc-600 sm:gap-2 sm:text-xs">
                      <Terminal size={12} />
                      terminal
                    </div>
                  </div>

                  {/* Terminal body */}
                  <div className="min-h-[280px] overflow-hidden p-5 font-mono text-xs sm:min-h-[310px] sm:p-7 sm:text-sm">
                    <div className="mb-6 flex items-center gap-2 text-zinc-500 sm:mb-7">
                      <span className="text-orange-500">~/portfolio</span>
                      <span>$</span>
                    </div>

                    <motion.div
                      key={terminalMode}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >
                      {/* Command */}
                      <div className="flex items-center gap-2 text-zinc-300">
                        <span className="text-orange-500">❯</span>

                        <span>
                          {terminalMode === "whoami" ? "whoami" : "stack = {}"}
                        </span>
                      </div>

                      {/* Output */}
                      <div className="mt-5 min-h-[155px]">
                        {terminalMode === "whoami" ? (
                          <div className="break-words text-xl font-semibold tracking-tight text-white sm:text-2xl">
                            {typedText}

                            <span className="ml-1 inline-block h-5 w-[2px] translate-y-1 animate-pulse bg-orange-500" />
                          </div>
                        ) : (
                          <pre className="whitespace-pre-wrap break-words text-[11px] leading-6 sm:text-sm sm:leading-7">
                            <span className="text-zinc-500">{typedText}</span>
                            <span className="ml-1 inline-block h-4 w-[2px] translate-y-1 animate-pulse bg-orange-500" />
                          </pre>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Terminal footer */}
                  <div className="flex items-center justify-between border-t border-zinc-800 px-4 py-2.5 text-[8px] uppercase tracking-[0.15em] text-zinc-600 sm:px-5 sm:py-3 sm:text-[10px] sm:tracking-[0.2em]">
                    <span>developer.mode</span>

                    <span className="text-orange-500/70">online</span>
                  </div>
                </div>

                {/* ================================
                    FLOATING CODE ICON
                ================================= */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-2 -top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-[#111111] text-orange-500 shadow-xl sm:-right-4 sm:-top-6 sm:h-14 sm:w-14"
                >
                  <Code2 size={20} className="sm:h-6 sm:w-6" />
                </motion.div>

                {/* ================================
                    FLOATING BRACES
                ================================= */}
                <motion.div
                  animate={{
                    y: [0, 9, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-5 -left-2 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-[#111111] text-orange-500 shadow-xl sm:-bottom-6 sm:-left-4 sm:h-12 sm:w-12"
                >
                  <Braces size={18} className="sm:h-5 sm:w-5" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================================
          BOTTOM INFO
      ================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
        className="absolute bottom-6 left-5 right-5 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-zinc-600 sm:left-8 sm:right-8 sm:text-[10px] lg:left-12 lg:right-12 xl:left-16 xl:right-16"
      >
        <div className="hidden gap-4 sm:flex sm:gap-5">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </div>

        <a
          href="#services"
          className="group ml-auto flex items-center gap-2 transition-colors hover:text-orange-500 sm:gap-3"
        >
          Scroll to explore
          <ArrowDown size={13} className="animate-bounce" />
        </a>
      </motion.div>

      {/* Side label - desktop only */}
      <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] uppercase tracking-[0.4em] text-zinc-700 xl:block">
        Portfolio · 2026
      </div>
    </section>
  );
}

export default Hero;
