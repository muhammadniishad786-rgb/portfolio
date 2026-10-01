import {
  Code2,
  Server,
  ShoppingBag,
  Dumbbell,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    // ================= INTERNSHIP =================
    {
      year: "Aug 2026 — Sep 2026",
      title: "Full-Stack Developer Intern",
      type: "Professional Experience · CodeMe",
      icon: Code2,
      description:
        "Completed a 2-month full-stack development internship at CodeMe, gaining practical experience in modern web development, frontend development, backend APIs, database integration, and collaborative software development.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Git & GitHub",
      ],
    },

    // ================= SNEAK.IN =================
    {
      year: "2026",
      title: "Sneak.in",
      type: "Full-Stack E-Commerce Project",
      icon: ShoppingBag,
      description:
        "Designed and developed a complete footwear e-commerce application with customer and admin functionality. Implemented authentication, product management, shopping cart, addresses, checkout, and order management.",
      skills: [
        "JWT Authentication",
        "Product CRUD",
        "Shopping Cart",
        "Orders",
        "Admin Dashboard",
      ],
    },

    // ================= IRONMIND =================
    {
      year: "2026",
      title: "IronMind",
      type: "MERN Stack Fitness Application",
      icon: Dumbbell,
      description:
        "Built a full-stack fitness tracking application using the MERN stack for creating and managing workouts, tracking exercises, sets, reps, weight, rest time, workout history, and fitness progress.",
      skills: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "Workout Tracking",
      ],
    },

    // ================= MERN TRAINING =================
    {
      year: "2026",
      title: "MERN Stack Development",
      type: "Professional Training · CodeMe",
      icon: Server,
      description:
        "Completed a 5-month MERN Stack Development course focused on building full-stack web applications using React, Node.js, Express.js, and MongoDB, with practical experience in REST APIs, authentication, database integration, and deployment.",
      skills: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
        "REST APIs",
      ],
    },

    // ================= DEVELOPMENT JOURNEY =================
    {
      year: "2025 — 2026",
      title: "Frontend & Backend Learning",
      type: "Development Journey",
      icon: Server,
      description:
        "Built a strong foundation in web development by working with modern frontend and backend technologies, REST APIs, database operations, responsive UI development, and version control.",
      skills: [
        "JavaScript",
        "REST APIs",
        "Axios",
        "Tailwind CSS",
        "Git & GitHub",
        "Figma",
      ],
    },
  ];

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
    }),

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white sm:py-28"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-orange-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{ duration: 0.6 }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-amber-500"
            />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              My Journey
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Experience &{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Growth
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            My journey has been focused on learning, gaining practical
            experience, building real-world applications, and continuously
            improving my full-stack development skills.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative">
          {/* Timeline Line */}

          <div className="absolute left-[20px] top-0 hidden h-full w-px bg-gradient-to-b from-orange-500/50 via-white/10 to-transparent sm:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.div
                  key={`${experience.title}-${index}`}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: false,
                    amount: 0.15,
                  }}
                  className="group relative sm:pl-16"
                >
                  {/* ================= TIMELINE DOT ================= */}

                  <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-orange-500/30 bg-[#0a0a0a] text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.15)] sm:flex">
                    <motion.div
                      whileInView={{
                        scale: [0.7, 1.15, 1],
                      }}
                      viewport={{
                        once: false,
                        amount: 0.15,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                      className="h-2.5 w-2.5 rounded-full bg-orange-500"
                    />
                  </div>

                  {/* ================= EXPERIENCE CARD ================= */}

                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:border-orange-500/30 hover:bg-orange-500/[0.03] sm:p-9">
                    {/* Glow */}

                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      {/* ================= TOP ================= */}

                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex gap-4">
                          {/* Icon */}

                          <motion.div
                            whileHover={{
                              rotate: 6,
                              scale: 1.05,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400"
                          >
                            <Icon size={22} />
                          </motion.div>

                          <div>
                            {/* Type */}

                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-400">
                              {experience.type}
                            </p>

                            {/* Title */}

                            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                              {experience.title}
                            </h3>
                          </div>
                        </div>

                        {/* Year */}

                        <span className="w-fit rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-semibold text-gray-400">
                          {experience.year}
                        </span>
                      </div>

                      {/* ================= DESCRIPTION ================= */}

                      <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                        {experience.description}
                      </p>

                      {/* ================= SKILLS ================= */}

                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{
                              opacity: 0,
                              y: 10,
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                            }}
                            viewport={{
                              once: false,
                              amount: 0.15,
                            }}
                            transition={{
                              duration: 0.35,
                              delay: skillIndex * 0.05,
                            }}
                            className="rounded-full bg-orange-500/10 px-3 py-1.5 text-xs font-medium text-orange-400 transition-colors duration-300 hover:bg-orange-500/20"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* ================= BOTTOM ACCENT ================= */}

                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= CURRENT STATUS ================= */}

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
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/[0.08] to-transparent p-7 sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-500" />

                <p className="text-sm font-semibold text-orange-400">
                  Currently Learning & Building
                </p>
              </div>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Continuously improving my skills through practical projects
                and real-world development.
              </p>
            </div>

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition-colors hover:text-orange-300"
            >
              View Projects

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
