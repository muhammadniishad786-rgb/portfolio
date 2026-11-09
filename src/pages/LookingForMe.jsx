
import { useEffect, useRef } from "react";

export default function LookingForMe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let drops = [];
    let animationId;

    const chars = "01アイウエオ{}[]<>/\\#$%";

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      drops = Array.from(
        { length: Math.ceil(width / 20) },
        () => Math.random() * (height / 20)
      );

      ctx.fillStyle = "#030807";
      ctx.fillRect(0, 0, width, height);
    }

    function drawMatrix() {
      ctx.fillStyle = "rgba(3, 8, 7, 0.12)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = "12px monospace";

      drops.forEach((drop, index) => {
        if (Math.random() > 0.45) return;

        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = index * 20;
        const y = drop * 20;

        ctx.fillStyle =
          Math.random() > 0.96
            ? "rgba(0, 217, 255, 0.9)"
            : "rgba(0, 255, 156, 0.5)";

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[index] = 0;
        } else {
          drops[index] += 0.28 + Math.random() * 0.5;
        }
      });

      animationId = requestAnimationFrame(drawMatrix);
    }

    function drawStaticMatrix() {
      ctx.fillStyle = "#030807";
      ctx.fillRect(0, 0, width, height);

      ctx.font = "12px monospace";

      for (let i = 0; i < 100; i++) {
        ctx.fillStyle =
          i % 5 === 0
            ? "rgba(0, 217, 255, 0.2)"
            : "rgba(0, 255, 156, 0.15)";

        ctx.fillText(
          chars[Math.floor(Math.random() * chars.length)],
          Math.random() * width,
          Math.random() * height
        );
      }
    }

    resize();

    if (reducedMotion) {
      drawStaticMatrix();
    } else {
      drawMatrix();
    }

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="looking"
      aria-label="Portfolio introduction"
      className="relative isolate h-dvh min-h-[560px] w-full overflow-hidden bg-[#030807] font-mono text-white"
    >
      {/* MATRIX BACKGROUND */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 h-full w-full opacity-70"
      />

      {/* DIGITAL GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(rgba(0,255,156,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,156,0.055)_1px,transparent_1px)] bg-[size:52px_52px]"
      />

      {/* CINEMATIC LIGHTING */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,8,7,0.3)_45%,#030807_100%)]"
      />

      {/* TOP NAVBAR */}
      <header className="absolute inset-x-0 top-0 flex h-[76px] items-center justify-between border-b border-emerald-400/15 bg-black/20 px-5 backdrop-blur-md sm:px-10 lg:px-[5vw]">
        <a
          href="#looking"
          className="flex items-center gap-3"
          aria-label="Nishad home"
        >
          <span className="text-3xl font-black tracking-tighter">
            N<span className="text-emerald-400">.</span>
          </span>

          <span className="text-[11px] font-bold tracking-[2px]">
            NISHAD<span className="text-emerald-400">_DEV</span>
          </span>
        </a>

        <div className="hidden items-center gap-2 text-[10px] tracking-widest text-emerald-300 sm:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_#00ff9c]" />
          SYSTEM ONLINE
        </div>

        <span className="text-[10px] tracking-widest text-white/40">
          INTRO / 001
        </span>
      </header>

      {/* CORNER HUD */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-24 h-7 w-7 border-l border-t border-emerald-400/60 sm:left-8"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-24 h-7 w-7 border-r border-t border-emerald-400/60 sm:right-8"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 left-5 h-7 w-7 border-b border-l border-emerald-400/60 sm:left-8"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 right-5 h-7 w-7 border-b border-r border-emerald-400/60 sm:right-8"
      />

      {/* MAIN CONTENT */}
      <main className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-5 text-center sm:px-10">
        <div className="mb-7 flex items-center justify-center gap-3 text-[9px] tracking-[0.25em] text-emerald-300/80 sm:text-xs sm:tracking-[0.4em]">
          <span className="h-px w-8 bg-emerald-400/60 sm:w-14" />

          IDENTITY SEARCH INITIALIZED

          <span className="h-px w-8 bg-emerald-400/60 sm:w-14" />
        </div>

        {/* TITLE ENTRANCE + FLOATING + ELECTRIC EFFECT */}
        <div className="title-entrance mx-auto w-fit">
          <div className="title-float">
            <h1 className="title-electric text-[clamp(2.7rem,9vw,7.5rem)] font-black leading-none tracking-[-0.07em]">
              Looking for me
              <span className="text-emerald-400">?</span>
            </h1>
          </div>
        </div>

        {/* ELECTRIC SPARKS */}
        <span
          aria-hidden="true"
          className="title-spark pointer-events-none absolute left-[12%] top-1/3 hidden text-3xl text-emerald-300 md:block"
        >
          ϟ
        </span>

        <span
          aria-hidden="true"
          className="title-spark pointer-events-none absolute right-[13%] top-2/3 hidden text-3xl text-cyan-300 [animation-delay:0.7s] md:block"
        >
          ϟ
        </span>

        {/* SUBTITLE */}
        <div className="mt-8 opacity-0 animate-[intro-fade_0.8s_ease_0.9s_forwards]">
          <p className="text-[10px] tracking-[0.12em] text-white/65 sm:text-sm sm:tracking-[0.3em]">
            SOMEWHERE BETWEEN CODE AND CREATIVITY.
          </p>

          <p className="mt-3 text-[10px] tracking-[0.12em] text-cyan-300 sm:text-xs sm:tracking-[0.25em]">
            YOU JUST FOUND YOUR DEVELOPER.
          </p>
        </div>

        {/* ENERGY DIVIDER */}
        <div className="mx-auto mt-9 flex w-48 items-center gap-2 sm:w-64">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-400/70" />

          <span className="h-2 w-2 rotate-45 border border-cyan-300 shadow-[0_0_12px_#00d9ff]" />

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-400/70" />
        </div>

        {/* SYSTEM DATA */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[9px] tracking-wider text-white/35 sm:gap-x-8">
          <span>LOC: INDIA / KERALA</span>
          <span>MODE: EXPLORATION</span>
          <span>ACCESS: PUBLIC</span>
        </div>
      </main>

      {/* LEFT SIDE DATA */}
      <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 flex-col gap-2 text-[9px] tracking-widest text-emerald-300/45 xl:flex">
        <span>BUILD</span>
        <span>BREAK</span>
        <span>CREATE</span>
        <span>
          REPEAT<span className="animate-pulse">_</span>
        </span>
      </div>

      {/* RIGHT SIDE DATA */}
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-2 text-[9px] tracking-widest text-cyan-300/45 xl:flex">
        <span>01 / DEVELOPER</span>
        <span>02 / PROBLEM SOLVER</span>
        <span>03 / CREATOR</span>
      </div>

      {/* SCROLL INDICATOR */}
      <a
        href="#home"
        className="group absolute bottom-20 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-center"
      >
        <span className="text-[10px] tracking-[0.25em] text-white/60 transition-colors group-hover:text-emerald-300">
          SCROLL TO DISCOVER
        </span>

        <span className="relative h-9 w-px overflow-hidden bg-white/15">
          <span className="absolute left-0 top-0 h-3 w-px animate-[scrollLine_1.5s_ease-in-out_infinite] bg-emerald-400 shadow-[0_0_8px_#00ff9c]" />
        </span>

        <span className="text-lg text-emerald-400 transition-transform group-hover:translate-y-1">
          ↓
        </span>
      </a>

      {/* FOOTER */}
      <footer className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between border-t border-emerald-400/10 px-5 text-[8px] tracking-widest text-white/30 sm:px-10 sm:text-[9px]">
        <span>© MUHAMMAD NISHAD</span>

        <span className="hidden sm:inline">
          DESIGNED TO BUILD WHAT&apos;S NEXT.
        </span>

        <span>V.01</span>
      </footer>
    </section>
  );
}
