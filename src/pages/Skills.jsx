import {
  Code2,
  Server,
  Database,
  Wrench,
  CheckCircle2,
} from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      description: "Building responsive and interactive user interfaces.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "React Router",
        "Redux Toolkit",
      ],
    },
    {
      icon: Server,
      title: "Backend",
      description: "Developing secure and scalable server-side applications.",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "Middleware",
        "MVC Architecture",
      ],
    },
    {
      icon: Database,
      title: "Database",
      description: "Working with structured and scalable data solutions.",
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
      description: "Using modern tools to build and manage projects.",
      skills: [
        "GitHub",
        "Postman",
        "figma",
        "VS Code",
        "Axios",
        "Render",
        "Vite",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-orange-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-16 max-w-2xl text-center">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-gradient-to-r from-orange-500 to-amber-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              My Skills
            </span>

            <span className="h-[2px] w-10 bg-gradient-to-r from-amber-500 to-orange-500" />
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            A collection of technologies and tools I use to build modern,
            responsive and full-stack web applications.
          </p>
        </div>

        {/* ================= SKILLS GRID ================= */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-orange-500/[0.03] sm:p-8"
              >

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-orange-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Header */}
                <div className="relative flex items-center gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400 transition-all duration-300 group-hover:border-orange-500/60 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {category.description}
                    </p>
                  </div>

                </div>

                {/* Skills */}
                <div className="relative mt-7 flex flex-wrap gap-2">

                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="group/skill flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-300"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-orange-500/70 transition-colors duration-300 group-hover/skill:text-orange-400"
                      />

                      {skill}
                    </div>
                  ))}

                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}

        </div>

        {/* ================= TECH STACK LINE ================= */}
        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                Current Stack
              </p>

              <p className="mt-2 text-sm text-gray-500">
                React • Node.js • Express • MongoDB
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
              Open to learning new technologies
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;