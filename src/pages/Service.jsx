import {
  Code2,
  Server,
  Database,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      number: "01",
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building complete web applications with React, Node.js, Express.js and MongoDB, from frontend interfaces to backend APIs.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      number: "02",
      icon: Server,
      title: "Frontend Development",
      description:
        "Creating responsive, modern and user-friendly interfaces using React, Tailwind CSS and reusable components.",
      tags: ["React", "Tailwind", "UI/UX"],
    },
    {
      number: "03",
      icon: Database,
      title: "Backend & APIs",
      description:
        "Developing secure REST APIs with Node.js and Express.js, including authentication, authorization and database integration.",
      tags: ["Node.js", "Express", "REST API"],
    },
    {
      number: "04",
      icon: Rocket,
      title: "Deployment & Integration",
      description:
        "Connecting frontend and backend applications and deploying full-stack projects for real-world use.",
      tags: ["Git", "Render", "Deployment"],
    },
  ];

  /*
   * Main horizontal animation
   *
   * Cards enter from the left and slowly move
   * into their final position.
   */
  const cardsAnimation = {
    hidden: {
      x: "-45vw",
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 2.8,
        ease: [0.22, 1, 0.36, 1],
        delayChildren: 0.25,
        staggerChildren: 0.18,
      },
    },
  };

  const cardAnimation = {
    hidden: {
      opacity: 0,
      x: -80,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white sm:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-orange-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[150px]" />

      {/* Subtle grid */}

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
            HEADER
        ====================================================== */}

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
          className="mb-14 max-w-2xl"
        >
          {/* Small label */}

          <div className="mb-4 flex items-center gap-3">
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
                delay: 0.2,
              }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-amber-500"
            />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              What I Do
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Services I{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Provide
            </span>
          </h2>

          {/* Description */}

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            I create modern and scalable web solutions focused on clean
            development, responsive design and real-world functionality.
          </p>
        </motion.div>

        {/* =====================================================
            DESKTOP / TABLET CARDS
        ====================================================== */}

        <div className="hidden overflow-hidden lg:block">

          <motion.div
            variants={cardsAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.15,
            }}
            className="grid grid-cols-4 gap-5"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  variants={cardAnimation}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-sm transition-colors duration-500 hover:border-orange-500/40 hover:bg-orange-500/[0.035] xl:p-8"
                >
                  {/* Hover glow */}

                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/10 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

                  {/* Large number */}

                  <span className="pointer-events-none absolute -right-3 top-2 text-[8rem] font-black leading-none text-white/[0.025] transition-colors duration-500 group-hover:text-orange-500/[0.05]">
                    {service.number}
                  </span>

                  {/* Top content */}

                  <div className="relative">

                    {/* Icon + number */}

                    <div className="flex items-start justify-between">

                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: -5,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="flex h-14 w-14 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400 transition-all duration-300 group-hover:border-orange-500/60 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-[0_0_30px_rgba(249,115,22,0.35)]"
                      >
                        <Icon
                          size={25}
                          strokeWidth={1.8}
                        />
                      </motion.div>

                      <span className="font-mono text-sm text-orange-500/50">
                        {service.number}
                      </span>

                    </div>

                    {/* Title */}

                    <h3 className="mt-9 text-2xl font-bold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-orange-400 xl:text-3xl">
                      {service.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-4 text-sm leading-7 text-gray-400">
                      {service.description}
                    </p>

                  </div>

                  {/* Bottom content */}

                  <div className="relative mt-8">

                    {/* Tags */}

                    <div className="mb-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400 transition-colors duration-300 group-hover:border-orange-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Learn more */}

                    <div className="flex items-center justify-between border-t border-white/10 pt-5">

                      <span className="text-sm font-semibold text-orange-400">
                        Learn More
                      </span>

                      <motion.div
                        whileHover={{
                          x: 4,
                          y: -4,
                        }}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-500/30 text-orange-400 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white"
                      >
                        <ArrowUpRight size={17} />
                      </motion.div>

                    </div>

                  </div>

                  {/* Bottom line */}

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileHover={{
                      width: "100%",
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500"
                  />

                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE / SMALL SCREEN
        ====================================================== */}

        <div className="lg:hidden">

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group relative flex min-h-[410px] w-[310px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:w-[350px] sm:p-8"
                >
                  {/* Number */}

                  <span className="absolute right-5 top-5 font-mono text-sm text-orange-500/50">
                    {service.number}
                  </span>

                  {/* Glow */}

                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />

                  {/* Content */}

                  <div className="relative">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400">
                      <Icon
                        size={25}
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold leading-tight">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-400">
                      {service.description}
                    </p>

                  </div>

                  {/* Bottom */}

                  <div className="relative">

                    <div className="mb-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-5">

                      <span className="text-sm font-semibold text-orange-400">
                        Learn More
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-500/30 text-orange-400">
                        <ArrowUpRight size={17} />
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Swipe hint */}

          <div className="mt-2 flex items-center justify-between">

            <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              Swipe to explore
            </span>

            <a
              href="#contact"
              className="group flex items-center gap-2 text-sm font-semibold text-orange-400"
            >
              Let's Work Together

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

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
          className="mt-14 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl text-sm leading-6 text-gray-500">
            From idea to deployment, I focus on building applications that
            are functional, maintainable and ready for real users.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-orange-500/50 px-6 py-3 text-sm font-semibold text-orange-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-300"
          >
            Let's Work Together

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

export default Services;