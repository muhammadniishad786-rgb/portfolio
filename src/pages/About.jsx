import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
  CheckCircle2,
} from "lucide-react";

function About() {
  const highlights = [
    "Full-Stack MERN Development",
    "REST API Development",
    "JWT Authentication",
    "MongoDB & Mongoose",
    "Responsive UI Development",
    "Admin Dashboard Development",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white sm:py-28"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-orange-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}

        <div className="mb-16">

          <div className="mb-4 flex items-center gap-3">

            <span className="h-[2px] w-10 bg-gradient-to-r from-orange-500 to-amber-500" />

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

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          {/* ================= LEFT CONTENT ================= */}

          <div className="lg:col-span-7">

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9">

              <div className="mb-6 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400">
                  <Code2 size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    MERN Stack Developer
                  </p>

                  <p className="text-xs text-gray-500">
                    Building modern web applications
                  </p>
                </div>

              </div>

              <div className="space-y-5 text-sm leading-7 text-gray-400 sm:text-base">

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

              {/* ================= HIGHLIGHTS ================= */}

              <div className="mt-8 border-t border-white/10 pt-7">

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                  What I Work With
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-orange-500"
                      />

                      <span>{highlight}</span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="space-y-5 lg:col-span-5">

            {/* Education */}

            <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/[0.03]">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400 transition-transform duration-300 group-hover:scale-105">
                  <GraduationCap size={22} />
                </div>

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

            </div>

            {/* Experience */}

            <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/[0.03]">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400 transition-transform duration-300 group-hover:scale-105">
                  <BriefcaseBusiness size={21} />
                </div>

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

            </div>

            {/* Location */}

            <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/[0.03]">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400 transition-transform duration-300 group-hover:scale-105">
                  <MapPin size={21} />
                </div>

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

            </div>

          </div>

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-orange-500/20 bg-gradient-to-r from-orange-500/[0.08] to-transparent p-7 sm:flex-row sm:items-center sm:p-8">

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

        </div>

      </div>
    </section>
  );
}

export default About;