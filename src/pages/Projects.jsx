import {
  ExternalLink,
  ArrowUpRight,
  ShoppingBag,
  Code2,
} from "lucide-react";

function GitHubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481A10.003 10.003 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

function Projects() {
  const projects = [
    {
      featured: true,
      number: "01",
      title: "Sneak.in",
      category: "Full-Stack E-Commerce",

      description:
        "A full-stack footwear e-commerce platform built with the MERN stack. The application provides customers with a modern shopping experience while giving administrators tools to manage products, users and orders.",

      // Image is inside the public folder
      image: "/SneakInLogo.png",

      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
        "Tailwind CSS",
      ],

      features: [
        "JWT Authentication",
        "Product Management",
        "Shopping Cart",
        "Address Management",
        "Order Management",
        "Admin Dashboard",
      ],

      liveLink: "https://sneak-in-wlqt.onrender.com",
      githubLink: "https://github.com/muhammadniishad786-rgb/Sneak.in",
    },

    {
      featured: false,
      number: "02",
      title: "Project Two",
      category: "React Application",

      description:
        "A modern React application focused on responsive interfaces, reusable components and clean frontend architecture.",

      image: "/project-2.png",

      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Axios",
      ],

      features: [
        "Responsive Design",
        "Reusable Components",
        "API Integration",
      ],

      liveLink: "#",
      githubLink: "#",
    },

    {
      featured: false,
      number: "03",
      title: "Project Three",
      category: "Web Application",

      description:
        "A responsive web application designed with a focus on usability, clean interfaces and modern development practices.",

      image: "/project-3.png",

      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
      ],

      features: [
        "Responsive UI",
        "Modern Design",
        "Component Architecture",
      ],

      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white sm:py-28"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -left-40 top-40 h-[450px] w-[450px] rounded-full bg-orange-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div className="max-w-2xl">

            <div className="mb-4 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-gradient-to-r from-orange-500 to-amber-500" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                My Work
              </span>

            </div>

            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Here are some of the projects I've built while developing my
              skills in full-stack web development.
            </p>

          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">

            <Code2
              size={17}
              className="text-orange-500"
            />

            MERN Stack Projects

          </div>

        </div>

        {/* ================= PROJECT LIST ================= */}

        <div className="space-y-8">

          {projects.map((project) => (
            <div
              key={project.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-orange-500/40"
            >

              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* ================= PROJECT IMAGE ================= */}

                <div className="relative min-h-[280px] overflow-hidden bg-neutral-950 sm:min-h-[360px]">

                  <img
                    src={project.image}
                    alt={`${project.title} project`}
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

                  {/* Orange Glow */}

                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                  {/* Project Number */}

                  <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/40 bg-black/60 text-sm font-bold text-orange-400 backdrop-blur-md">
                    {project.number}
                  </div>

                  {/* Category */}

                  <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-medium text-gray-300 backdrop-blur-md">
                    {project.category}
                  </div>

                </div>

                {/* ================= PROJECT CONTENT ================= */}

                <div className="relative flex flex-col justify-center p-7 sm:p-9 lg:p-12">

                  {/* Content Glow */}

                  <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-orange-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                  <div className="relative">

                    {/* Title */}

                    <div className="flex items-start justify-between gap-5">

                      <div>

                        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-orange-400">

                          <ShoppingBag size={16} />

                          Featured Project

                        </div>

                        <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                          {project.title}
                        </h3>

                      </div>

                      <span className="hidden text-5xl font-extrabold text-white/[0.04] sm:block">
                        {project.number}
                      </span>

                    </div>

                    {/* Description */}

                    <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                      {project.description}
                    </p>

                    {/* ================= FEATURES ================= */}

                    <div className="mt-7">

                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                        Key Features
                      </p>

                      <div className="flex flex-wrap gap-2">

                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs text-gray-300 transition-colors duration-300 hover:border-orange-500/30 hover:text-orange-300"
                          >
                            {feature}
                          </span>
                        ))}

                      </div>

                    </div>

                    {/* ================= TECHNOLOGIES ================= */}

                    <div className="mt-7">

                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                        Built With
                      </p>

                      <div className="flex flex-wrap gap-2">

                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full bg-orange-500/10 px-3 py-1.5 text-xs font-medium text-orange-400"
                          >
                            {technology}
                          </span>
                        ))}

                      </div>

                    </div>

                    {/* ================= LINKS ================= */}

                    <div className="mt-8 flex flex-wrap items-center gap-3">

                      {/* Live Demo */}

                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-300 hover:-translate-y-1 hover:from-orange-600 hover:to-amber-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                      >
                        Live Demo

                        <ExternalLink
                          size={16}
                          className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                        />

                      </a>

                      {/* GitHub */}

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-orange-500/50 px-5 py-3 text-sm font-semibold text-orange-400 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500/10 hover:text-orange-300"
                      >
                        GitHub

                        <GitHubIcon size={17} />

                      </a>

                    </div>

                  </div>

                  {/* Bottom Accent */}

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500 group-hover:w-full" />

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">

          <div>

            <p className="text-sm font-semibold text-gray-300">
              More projects coming soon.
            </p>

            <p className="mt-1 text-sm text-gray-500">
              I'm continuously building and improving my development skills.
            </p>

          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition-colors hover:text-orange-300"
          >
            Get in touch

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

export default Projects;