import {
  Code2,
  Server,
  Database,
  BrainCircuit,
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
        "Building responsive, interactive and component-based user interfaces with modern React development practices.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript ES6+",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "React Router",
        "Redux Toolkit",
        "Vite",
      ],
    },

    {
      icon: Server,
      title: "Backend",
      description:
        "Developing secure REST APIs, authentication systems and scalable server-side applications.",
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
        "Designing and managing application data using MongoDB, Mongoose and structured data models, Also using SQL",
      skills: [
        "MongoDB",
        "SQL",
        "Mongoose",
        "CRUD Operations",
        "Data Modeling",
        "Populate",
        "Aggregation",
      ],
    },

    {
      icon: BrainCircuit,
      title: "AI Integration",
      description:
        "Integrating AI-powered features into web applications using AI APIs for intelligent and personalized experiences.",
      skills: [
        "AI APIs",
        "OpenAI API",
        "AI Assistants",
        "Prompt Integration",
        "API Integration",
        "AI Automation",
      ],
    },

    {
      icon: Wrench,
      title: "Tools & Workflow",
      description:
        "Using modern development tools and workflows to build, test, manage and deploy full-stack applications.",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Figma",
        "Render",
        "npm",
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
          {/* Small label */}

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

          {/* Heading */}

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          {/* Description */}

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            Technologies and tools I use to build modern full-stack web
            applications and integrate AI-powered features.
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
                Core Stack
              </p>

              <p className="mt-2 text-sm text-gray-500">
                React • Next.js • Node.js • Express • MongoDB • SQL
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

// import { motion } from "framer-motion";
// import {
//   Code2,
//   Palette,
//   Smartphone,
//   Layers,
//   Globe,
//   Server,
//   Database,
//   ShieldCheck,
//   Brain,
//   Sparkles,
//   GitBranch,
//   Terminal,
//   Workflow,
//   Monitor,
//   Package,
//   Bot,
//   FileCode2,
//   Cloud,
//   Send,
//   Settings,
//   Cpu,
//   Boxes,
//   Wrench,
//   Rocket,
// } from "lucide-react";

// const skillCategories = [
//   {
//     title: "Frontend Development",
//     subtitle: "Creating modern user interfaces",
//     icon: Monitor,
//     skills: [
//       { name: "HTML5", icon: Code2 },
//       { name: "CSS3", icon: Palette },
//       { name: "JavaScript", icon: FileCode2 },
//       { name: "TypeScript", icon: Code2 },
//       { name: "React.js", icon: Layers },
//       { name: "Next.js", icon: Globe },
//       { name: "Tailwind CSS", icon: Palette },
//       { name: "Redux Toolkit", icon: Workflow },
//       { name: "Responsive UI", icon: Smartphone },
//     ],
//   },
//   {
//     title: "Backend Development",
//     subtitle: "Building APIs and server logic",
//     icon: Server,
//     skills: [
//       { name: "Node.js", icon: Terminal },
//       { name: "Express.js", icon: Server },
//       { name: "REST APIs", icon: Send },
//       { name: "JWT Authentication", icon: ShieldCheck },
//       { name: "Middleware", icon: Workflow },
//       { name: "API Integration", icon: Package },
//     ],
//   },
//   {
//     title: "Database",
//     subtitle: "Managing application data",
//     icon: Database,
//     skills: [
//       { name: "MongoDB", icon: Database },
//       { name: "Mongoose", icon: Layers },
//       { name: "CRUD Operations", icon: Settings },
//       { name: "Data Modeling", icon: Boxes },
//     ],
//   },
//   {
//     title: "AI Integration",
//     subtitle: "Connecting applications with AI",
//     icon: Brain,
//     skills: [
//       { name: "Gemini API", icon: Sparkles },
//       { name: "AI Chatbot", icon: Bot },
//       { name: "Prompt Engineering", icon: Brain },
//       { name: "Third-Party APIs", icon: Cloud },
//     ],
//   },
//   {
//     title: "Tools & Workflow",
//     subtitle: "Tools I use to build and deploy",
//     icon: Terminal,
//     skills: [
//       { name: "Git", icon: GitBranch },
//       { name: "GitHub", icon: GitBranch },
//       { name: "VS Code", icon: Code2 },
//       { name: "Postman", icon: Send },
//       { name: "NPM", icon: Package },
//       { name: "Vercel", icon: Cloud },
//       { name: "Render", icon: Rocket },
//     ],
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 35,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.55,
//       ease: "easeOut",
//     },
//   },
// };

// const skillVariants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.8,
//     y: 10,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: {
//       duration: 0.35,
//       ease: "easeOut",
//     },
//   },
// };

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="relative isolate overflow-hidden bg-[#050807] px-5 py-24 text-white sm:px-8 md:py-32"
//     >
//       {/* Background effects */}
//       <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

//         <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

//         <div
//           className="absolute inset-0 opacity-[0.04]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)",
//             backgroundSize: "45px 45px",
//           }}
//         />
//       </div>

//       <div className="relative mx-auto max-w-7xl">
//         {/* Section heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//           className="mb-16 text-center"
//         >
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-4 py-2 font-mono text-xs tracking-[0.2em] text-emerald-300">
//             <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
//             MY TECH ARSENAL
//           </div>

//           <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
//             Skills &{" "}
//             <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
//               Technologies
//             </span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
//             Technologies and tools I use to build modern full-stack
//             applications and AI-powered experiences.
//           </p>

//           <div className="mx-auto mt-7 h-[2px] w-28 rounded-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
//         </motion.div>

//         {/* Animated skill cards */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.08 }}
//           className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
//         >
//           {skillCategories.map((category, index) => {
//             const CategoryIcon = category.icon;

//             return (
//               <motion.article
//                 key={category.title}
//                 variants={cardVariants}
//                 whileHover={{ y: -7 }}
//                 className="group relative overflow-hidden rounded-2xl border border-emerald-400/15 bg-[#0a100e]/90 p-6 transition-colors duration-300 hover:border-emerald-300/45 hover:shadow-[0_0_35px_rgba(16,185,129,0.1)] sm:p-7"
//               >
//                 {/* Card glow */}
//                 <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/[0.06] blur-3xl transition-all duration-500 group-hover:bg-emerald-400/[0.15]" />

//                 {/* Category heading */}
//                 <div className="relative mb-7 flex items-center gap-4">
//                   <motion.div
//                     whileHover={{
//                       rotate: [0, -8, 8, 0],
//                       scale: 1.1,
//                     }}
//                     transition={{ duration: 0.4 }}
//                     className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-400/10"
//                   >
//                     <CategoryIcon
//                       size={27}
//                       strokeWidth={1.7}
//                       className="text-emerald-300"
//                     />
//                   </motion.div>

//                   <div>
//                     <h3 className="text-lg font-bold text-white transition-colors group-hover:text-emerald-300 sm:text-xl">
//                       {category.title}
//                     </h3>

//                     <p className="mt-1 text-xs text-gray-500">
//                       {category.subtitle}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Terminal label */}
//                 <div className="mb-4 flex items-center justify-between border-b border-white/[0.07] pb-3 font-mono text-[10px] tracking-[0.15em] text-emerald-400/70">
//                   <span>
//                     STACK_{String(index + 1).padStart(2, "0")}
//                   </span>
//                   <span>{category.skills.length} SKILLS</span>
//                 </div>

//                 {/* Individual skill icons */}
//                 <motion.div
//                   variants={containerVariants}
//                   className="grid grid-cols-2 gap-3"
//                 >
//                   {category.skills.map((skill) => {
//                     const SkillIcon = skill.icon;

//                     return (
//                       <motion.div
//                         key={skill.name}
//                         variants={skillVariants}
//                         whileHover={{
//                           scale: 1.05,
//                           y: -3,
//                         }}
//                         className="group/skill relative flex min-h-[88px] flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] px-2 py-4 text-center transition-all duration-300 hover:border-emerald-300/40 hover:bg-emerald-300/[0.06]"
//                       >
//                         <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-300/[0.06] to-transparent transition-transform duration-700 group-hover/skill:translate-x-full" />

//                         <motion.div
//                           whileHover={{
//                             rotate: [0, -5, 5, 0],
//                             scale: 1.15,
//                           }}
//                           transition={{ duration: 0.3 }}
//                           className="relative"
//                         >
//                           <SkillIcon
//                             size={25}
//                             strokeWidth={1.7}
//                             className="text-gray-400 transition-colors duration-300 group-hover/skill:text-emerald-300"
//                           />
//                         </motion.div>

//                         <span className="relative text-xs font-medium leading-5 text-gray-300 transition-colors group-hover/skill:text-white">
//                           {skill.name}
//                         </span>
//                       </motion.div>
//                     );
//                   })}
//                 </motion.div>

//                 {/* Animated bottom accent */}
//                 <div className="mt-7 h-px w-full overflow-hidden bg-white/[0.06]">
//                   <motion.div
//                     initial={{ width: "0%" }}
//                     whileInView={{ width: "100%" }}
//                     viewport={{ once: true }}
//                     transition={{
//                       duration: 0.9,
//                       delay: index * 0.1,
//                     }}
//                     className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
//                   />
//                 </div>
//               </motion.article>
//             );
//           })}
//         </motion.div>

//         {/* Terminal footer */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mt-14 text-center font-mono text-xs text-gray-500"
//         >
//           <span className="text-emerald-400">nishad@dev</span>
//           <span className="text-gray-600">:</span>
//           <span className="text-cyan-300">~</span>
//           <span className="text-gray-600">$ </span>
//           <span>always_learning --build --improve</span>

//           <motion.span
//             animate={{ opacity: [1, 0, 1] }}
//             transition={{ duration: 1, repeat: Infinity }}
//             className="ml-1 inline-block h-3 w-[6px] translate-y-[2px] bg-emerald-400"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }