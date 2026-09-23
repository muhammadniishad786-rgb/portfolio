import {
  Code2,
  Server,
  Database,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

function Services() {
  const services = [
    {
      number: "01",
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building complete web applications with React, Node.js, Express.js and MongoDB, from frontend interfaces to backend APIs.",
    },
    {
      number: "02",
      icon: Server,
      title: "Frontend Development",
      description:
        "Creating responsive, modern and user-friendly interfaces using React, Tailwind CSS and reusable components.",
    },
    {
      number: "03",
      icon: Database,
      title: "Backend & APIs",
      description:
        "Developing secure REST APIs with Node.js and Express.js, including authentication, authorization and database integration.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Deployment & Integration",
      description:
        "Connecting frontend and backend applications and deploying full-stack projects for real-world use.",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-orange-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-16 max-w-2xl">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-gradient-to-r from-orange-500 to-amber-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              What I Do
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Services I{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Provide
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            I create modern and scalable web solutions focused on clean
            development, responsive design and real-world functionality.
          </p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-orange-500/[0.03] sm:p-8"
              >

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-orange-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                {/* Top Row */}
                <div className="relative flex items-start justify-between">

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400 transition-all duration-300 group-hover:border-orange-500/60 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  {/* Number */}
                  <span className="text-sm font-bold tracking-widest text-white/20 transition-colors duration-300 group-hover:text-orange-500/60">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-8">

                  <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-orange-400">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-gray-400">
                    {service.description}
                  </p>

                </div>

                {/* Bottom Arrow */}
                <div className="relative mt-8 flex items-center gap-2 text-sm font-semibold text-orange-400">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    Learn More
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">

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

        </div>
      </div>
    </section>
  );
}

export default Services;