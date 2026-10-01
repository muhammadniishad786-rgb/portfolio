import {
  Code2,
  Server,
  Database,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      description:
        "Building responsive, interactive and component-based user interfaces.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript ES6+",
        "React.js",
        "Tailwind CSS",
        "React Router",
        "Redux Toolkit",
      ],
    },

    {
      icon: Server,
      title: "Backend",
      description:
        "Developing REST APIs, authentication systems and server-side applications.",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "Middleware",
        "MVC Architecture",
        "Axios",
      ],
    },

    {
      icon: Database,
      title: "Database",
      description:
        "Designing and managing application data using MongoDB and Mongoose.",
      skills: [
        "MongoDB",
        "Mongoose",
        "CRUD Operations",
        "Data Modeling",
        "Populate",
        "Aggregation",
      ],
    },

    {
      icon: Wrench,
      title: "Tools & Workflow",
      description:
        "Using modern development tools for building, testing and deploying applications.",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Figma",
        "Render",
        "Vite",
      ],
    },
  ];

  /* ================= ANIMATIONS ================= */

  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -80 : 80,
      y: 30,
    }),

    visible: {
      opacity: 1,
      x: 0,
      y: 0,

      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 10,
    },

    visible: {
      opacity: 1,
      scale: 1,
      y: 0,

      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white sm:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-orange-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[140px]" />

      {/* Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 40,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-amber-500"
            />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              My Skills
            </span>

            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 40,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="h-[2px] bg-gradient-to-r from-amber-500 to-orange-500"
            />
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and tools I use to build modern, responsive and
            full-stack web applications.
          </p>
        </motion.div>

        {/* ================= SKILLS GRID ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.15,
          }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                custom={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm transition-colors duration-500 hover:border-orange-500/40 hover:bg-orange-500/[0.03] sm:p-8"
              >
                {/* ================= HOVER GLOW ================= */}

                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-orange-500/10 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

                {/* ================= LARGE NUMBER ================= */}

                <span className="pointer-events-none absolute -right-3 top-0 text-[8rem] font-black leading-none text-white/[0.025] transition-colors duration-500 group-hover:text-orange-500/[0.05]">
                  0{index + 1}
                </span>

                {/* ================= HEADER ================= */}

                <div className="relative flex items-center gap-4">
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -5,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400 transition-all duration-300 group-hover:border-orange-500/60 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(249,115,22,0.35)]"
                  >
                    <Icon size={25} strokeWidth={1.8} />
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-orange-400">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* ================= SKILLS ================= */}

                <motion.div
                  variants={containerVariants}
                  className="relative mt-7 flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      whileHover={{
                        y: -3,
                        scale: 1.04,
                      }}
                      className="group/skill flex cursor-default items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-300"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-orange-500/70 transition-colors duration-300 group-hover/skill:text-orange-400"
                      />

                      {skill}
                    </motion.div>
                  ))}
                </motion.div>

                {/* ================= BOTTOM ACCENT ================= */}

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ================= CURRENT STACK ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-16 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                Current Stack
              </p>

              <p className="mt-2 text-sm text-gray-500">
                React • Node.js • Express • MongoDB • Redux Toolkit
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.9, 1.15, 0.9],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
              />

              Open to learning new technologies
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
