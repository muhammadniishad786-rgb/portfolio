import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

function About() {
  const highlights = [
    "Full-Stack MERN Development",
    "REST API Development",
    "JWT Authentication",
    "MongoDB & Mongoose",
    "Responsive UI Development",
    "Admin Dashboard Development",
  ];

  /* =========================================================
     ANIMATIONS
  ========================================================= */

  const leftCardVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const rightContainerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const rightCardVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const highlightContainerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const highlightVariants = {
    hidden: {
      opacity: 0,
      x: -15,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white sm:py-28"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-orange-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[150px]" />

      {/* Subtle Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">

            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 40,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 0.7,
              }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-amber-500"
            />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              About Me
            </span>

          </div>

          <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Turning ideas into{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              real applications.
            </span>
          </h2>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}

          <motion.div
            variants={leftCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.15,
            }}
            className="lg:col-span-7"
          >
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm transition-colors duration-500 hover:border-orange-500/30 hover:bg-orange-500/[0.025] sm:p-9">

              {/* Hover Glow */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-orange-500/10 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

              {/* =================================================
                  PROFILE HEADER
              ================================================== */}

              <div className="relative mb-6 flex items-center gap-3">

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: -5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400"
                >
                  <Code2 size={21} />
                </motion.div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    MERN Stack Developer
                  </p>

                  <p className="text-xs text-gray-500">
                    Building modern web applications
                  </p>
                </div>

              </div>

              {/* =================================================
                  ABOUT TEXT
              ================================================== */}

              <div className="relative space-y-5 text-sm leading-7 text-gray-400 sm:text-base">

                <p>
                  I'm{" "}
                  <span className="font-semibold text-white">
                    Muhammad Nishad
                  </span>
                  , a MERN Stack Developer passionate about building modern,
                  responsive and scalable web applications.
                </p>

                <p>
                  I work mainly with{" "}
                  <span className="text-orange-400">
                    React, Node.js, Express.js and MongoDB
                  </span>
                  , and enjoy working across both frontend and backend
                  development.
                </p>

                <p>
                  My approach is focused on writing clean, maintainable code
                  while creating interfaces that are simple, responsive and
                  easy to use. I enjoy taking an idea from concept to a
                  working application.
                </p>

              </div>

              {/* =================================================
                  HIGHLIGHTS
              ================================================== */}

              <div className="relative mt-8 border-t border-white/10 pt-7">

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                  What I Work With
                </p>

                <motion.div
                  variants={highlightContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                >
                  {highlights.map((highlight) => (
                    <motion.div
                      key={highlight}
                      variants={highlightVariants}
                      className="group/highlight flex items-center gap-3 text-sm text-gray-300"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-orange-500 transition-transform duration-300 group-hover/highlight:scale-110"
                      />

                      <span className="transition-colors duration-300 group-hover/highlight:text-white">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

              </div>

              {/* Bottom Accent */}

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 group-hover:w-full" />

            </div>
          </motion.div>

          {/* ===================================================
              RIGHT CONTENT
          ==================================================== */}

          <motion.div
            variants={rightContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.1,
            }}
            className="space-y-5 lg:col-span-5"
          >

            {/* =================================================
                EDUCATION
            ================================================== */}

            <motion.div
              variants={rightCardVariants}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/[0.03]"
            >

              <div className="flex items-start gap-4">

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: -5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400"
                >
                  <GraduationCap size={22} />
                </motion.div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-400">
                    Education
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-white">
                    BSc Computer Science
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    University of Calicut
                  </p>

                </div>

              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 group-hover:w-full" />

            </motion.div>

            {/* =================================================
                FOCUS
            ================================================== */}

            <motion.div
              variants={rightCardVariants}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/[0.03]"
            >

              <div className="flex items-start gap-4">

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400"
                >
                  <BriefcaseBusiness size={21} />
                </motion.div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-400">
                    Focus
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-white">
                    Full-Stack Web Development
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    React • Node.js • Express.js • MongoDB
                  </p>

                </div>

              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 group-hover:w-full" />

            </motion.div>

            {/* =================================================
                LOCATION
            ================================================== */}

            <motion.div
              variants={rightCardVariants}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/[0.03]"
            >

              <div className="flex items-start gap-4">

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: -5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400"
                >
                  <MapPin size={21} />
                </motion.div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-400">
                    Based In
                  </p>

                  <h3 className="mt-2 text-lg font-bold text-white">
                    Kerala, India
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Open to opportunities and collaborations
                  </p>

                </div>

              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 group-hover:w-full" />

            </motion.div>

          </motion.div>

        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/[0.08] to-transparent p-7 sm:flex-row sm:items-center sm:p-8"
        >

          <div>

            <p className="text-lg font-bold text-white sm:text-xl">
              Interested in working together?
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Let's build something useful, modern and impactful.
            </p>

          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-300 hover:-translate-y-1 hover:from-orange-600 hover:to-amber-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
          >
            Let's Talk

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default About;