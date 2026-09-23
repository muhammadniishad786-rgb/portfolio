import { ArrowRight, Download } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Ambient Orange Glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[150px]" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-28 md:pt-20">
        <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">

          {/* ================= LEFT CONTENT ================= */}
          <div className="order-2 flex flex-col items-center space-y-6 text-center lg:order-1 lg:col-span-7 lg:items-start lg:text-left">

            {/* Available Label */}
            <div className="flex items-center gap-2 text-sm font-medium text-orange-400">
              <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />

              Available for opportunities
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Muhammad
                </span>
              </h1>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl lg:text-5xl">
                Nishad
              </h2>

              <p className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl">
                MERN Stack{" "}
                <span className="text-orange-400">
                  Developer
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              I build modern, responsive and scalable web applications using
              React, Node.js, Express.js and MongoDB. I enjoy turning ideas
              into clean and functional digital experiences.
            </p>

            {/* ================= SOCIAL LINKS ================= */}
            <div className="flex items-center gap-4 pt-1">

              {/* GitHub */}
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/60 bg-orange-500/5 text-orange-400 transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.45)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.15-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.18 9.18 0 0 1 12 8.36c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v1.41c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/60 bg-orange-500/5 text-orange-400 transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.45)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 .8 24 1.78V1.78C24 .8 23.2 0 22.22 0Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/60 bg-orange-500/5 text-orange-400 transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.45)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
            </div>

            {/* ================= CTA BUTTONS ================= */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-3 lg:justify-start">

              {/* View Projects */}
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(249,115,22,0.3)] transition duration-300 hover:-translate-y-1 hover:from-orange-600 hover:to-amber-600 hover:shadow-[0_0_35px_rgba(249,115,22,0.5)]"
              >
                View Projects

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-orange-500/70 px-7 py-3.5 text-sm font-semibold text-orange-400 transition duration-300 hover:-translate-y-1 hover:bg-orange-500/10 hover:text-orange-300"
              >
                <Download size={17} />

                Resume
              </a>
            </div>
          </div>

          {/* ================= RIGHT PROFILE IMAGE ================= */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">

            <div className="group relative">

              {/* Outer Glow */}
              <div className="absolute inset-[-25px] rounded-full bg-gradient-to-tr from-orange-600 via-amber-500 to-orange-400 opacity-30 blur-3xl transition duration-500 group-hover:opacity-50" />

              {/* Orange Ring */}
              <div className="relative h-64 w-64 rounded-full bg-gradient-to-tr from-orange-500 via-amber-400 to-orange-600 p-[5px] shadow-[0_0_60px_rgba(249,115,22,0.35)] sm:h-80 sm:w-80 lg:h-[380px] lg:w-[380px]">

                {/* Profile Image */}
                <div className="h-full w-full overflow-hidden rounded-full bg-neutral-900">

                  <img
                    src="/profile.png"
                    alt="Muhammad Nishad"
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM LINE ================= */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-gray-600">
          <span>React / Node / MongoDB</span>

          <span>Scroll to explore ↓</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
