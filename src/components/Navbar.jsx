import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Services",
    "Skills",
    "Projects",
    "About",
    "Contact",
  ];

  // Navbar entrance animation
  const navContainer = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
      },
    },
  };

  // Individual navbar item animation
  const navItem = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  // Mobile menu animation
  const mobileMenu = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const mobileItem = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navContainer}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl"
    >
      <motion.nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">

        {/* ================= LOGO ================= */}
        <motion.a
          href="#home"
          onClick={() => setMobileMenuOpen(false)}
          variants={navItem}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group text-2xl font-extrabold tracking-tight text-white"
        >
          Nishad
          <motion.span
            className="inline-block bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            .
          </motion.span>
        </motion.a>

        {/* ================= DESKTOP NAV ================= */}
        <motion.div
          variants={navContainer}
          className="hidden items-center gap-7 md:flex lg:gap-9"
        >
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              variants={navItem}
              whileHover={{ y: -2 }}
              className="group relative py-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              {item}

              {/* Animated underline */}
              <motion.span
                className="absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* ================= DESKTOP CTA ================= */}
        <motion.a
          href="#contact"
          variants={navItem}
          whileHover={{
            y: -3,
            scale: 1.03,
            boxShadow: "0 0 30px rgba(249,115,22,0.4)",
          }}
          whileTap={{ scale: 0.97 }}
          className="hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(249,115,22,0.2)] md:block"
        >
          Contact Me
        </motion.a>

        {/* ================= MOBILE BUTTON ================= */}
        <motion.button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          whileTap={{ scale: 0.9 }}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-300 transition-colors duration-300 hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-400 md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={23} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={23} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              className="px-5 py-5 sm:px-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    variants={mobileItem}
                    whileHover={{ x: 5 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:bg-orange-500/10 hover:text-orange-400"
                  >
                    {item}
                  </motion.a>
                ))}

                {/* Mobile CTA */}
                <motion.a
                  href="#contact"
                  variants={mobileItem}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(249,115,22,0.35)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-center text-sm font-semibold text-white"
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;


// import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";

// function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navItems = [
//     "Home",
//     "Services",
//     "Skills",
//     "Projects",
//     "About",
//     "Contact",
//   ];

//   const navContainer = {
//     hidden: { opacity: 0, y: -24 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.65,
//         ease: [0.22, 1, 0.36, 1],
//         staggerChildren: 0.07,
//       },
//     },
//   };

//   const navItem = {
//     hidden: { opacity: 0, y: -10 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.4, ease: "easeOut" },
//     },
//   };

//   const mobileMenu = {
//     hidden: { opacity: 0, height: 0 },
//     visible: {
//       opacity: 1,
//       height: "auto",
//       transition: {
//         height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
//         opacity: { duration: 0.25 },
//       },
//     },
//     exit: {
//       opacity: 0,
//       height: 0,
//       transition: { duration: 0.25, ease: "easeInOut" },
//     },
//   };

//   const mobileItem = {
//     hidden: { opacity: 0, x: -14 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//   };

//   const closeMobileMenu = () => setMobileMenuOpen(false);

//   return (
//     <motion.header
//       initial="hidden"
//       animate="visible"
//       variants={navContainer}
//       className="fixed inset-x-0 top-0 z-50 border-b border-emerald-400/15 bg-[#030806]/85 shadow-[0_4px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl"
//     >
//       {/* Subtle neon top line */}
//       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

//       <motion.nav
//         className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
//         aria-label="Main navigation"
//       >
//         {/* LOGO */}
//         <motion.a
//           href="#home"
//           onClick={closeMobileMenu}
//           variants={navItem}
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.97 }}
//           className="group flex items-center gap-2"
//           aria-label="Nishad - Home"
//         >
//           <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-400/5 text-emerald-300 transition-all duration-300 group-hover:border-emerald-300/60 group-hover:bg-emerald-400/10 group-hover:shadow-[0_0_18px_rgba(52,211,153,0.15)]">
//             <Terminal size={19} strokeWidth={1.8} />
//           </div>

//           <div className="font-mono text-base font-bold tracking-tight sm:text-lg">
//             <span className="text-zinc-100">nishad</span>
//             <span className="text-cyan-400">@</span>
//             <span className="text-emerald-400">dev</span>
//             <span className="text-zinc-500">:~$</span>

//             <motion.span
//               className="ml-0.5 inline-block text-emerald-300"
//               animate={{ opacity: [1, 0, 1] }}
//               transition={{
//                 duration: 1.1,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             >
//               _
//             </motion.span>
//           </div>
//         </motion.a>

//         {/* DESKTOP NAVIGATION */}
//         <motion.div
//           variants={navContainer}
//           className="hidden items-center gap-5 md:flex lg:gap-7"
//         >
//           {navItems.map((item, index) => (
//             <motion.a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               variants={navItem}
//               whileHover={{ y: -2 }}
//               className="group relative flex items-center gap-1 py-2 font-mono text-xs tracking-wide text-zinc-400 transition-colors duration-300 hover:text-emerald-300 lg:text-sm"
//             >
//               <span className="absolute -left-3 font-mono text-[9px] text-emerald-400/0 transition-all duration-300 group-hover:text-emerald-400/70">
//                 {String(index + 1).padStart(2, "0")}
//               </span>

//               {item}

//               <motion.span
//                 className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
//                 initial={{ scaleX: 0 }}
//                 whileHover={{ scaleX: 1 }}
//                 transition={{ duration: 0.25, ease: "easeOut" }}
//               />
//             </motion.a>
//           ))}
//         </motion.div>

//         {/* DESKTOP CTA */}
//         <motion.a
//           href="#contact"
//           variants={navItem}
//           whileHover={{
//             y: -2,
//             borderColor: "rgba(52,211,153,0.8)",
//             boxShadow: "0 0 22px rgba(52,211,153,0.16)",
//           }}
//           whileTap={{ scale: 0.97 }}
//           className="group hidden items-center gap-2 rounded-md border border-emerald-400/35 bg-emerald-400/5 px-4 py-2.5 font-mono text-xs font-semibold tracking-wide text-emerald-300 transition-colors duration-300 hover:bg-emerald-400/10 lg:flex"
//         >
//           <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
//           LET&apos;S CONNECT
//           <ArrowUpRight
//             size={14}
//             className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//           />
//         </motion.a>

//         {/* MOBILE MENU BUTTON */}
//         <motion.button
//           type="button"
//           onClick={() => setMobileMenuOpen((prev) => !prev)}
//           whileTap={{ scale: 0.9 }}
//           className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-2.5 text-emerald-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 md:hidden"
//           aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
//           aria-expanded={mobileMenuOpen}
//           aria-controls="mobile-navigation"
//         >
//           <AnimatePresence mode="wait" initial={false}>
//             {mobileMenuOpen ? (
//               <motion.span
//                 key="close"
//                 className="block"
//                 initial={{ rotate: -90, opacity: 0 }}
//                 animate={{ rotate: 0, opacity: 1 }}
//                 exit={{ rotate: 90, opacity: 0 }}
//                 transition={{ duration: 0.18 }}
//               >
//                 <X size={22} />
//               </motion.span>
//             ) : (
//               <motion.span
//                 key="menu"
//                 className="block"
//                 initial={{ rotate: 90, opacity: 0 }}
//                 animate={{ rotate: 0, opacity: 1 }}
//                 exit={{ rotate: -90, opacity: 0 }}
//                 transition={{ duration: 0.18 }}
//               >
//                 <Menu size={22} />
//               </motion.span>
//             )}
//           </AnimatePresence>
//         </motion.button>
//       </motion.nav>

//       {/* MOBILE MENU */}
//       <AnimatePresence initial={false}>
//         {mobileMenuOpen && (
//           <motion.div
//             id="mobile-navigation"
//             variants={mobileMenu}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             className="overflow-hidden border-t border-emerald-400/15 bg-[#030806]/98 backdrop-blur-2xl md:hidden"
//           >
//             <motion.div
//               className="mx-auto max-w-7xl px-5 py-5 sm:px-6"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 hidden: {},
//                 visible: {
//                   transition: {
//                     staggerChildren: 0.055,
//                     delayChildren: 0.06,
//                   },
//                 },
//               }}
//             >
//               {/* Terminal status */}
//               <div className="mb-4 flex items-center gap-2 border-b border-emerald-400/10 pb-3 font-mono text-[10px] tracking-[0.18em] text-zinc-500">
//                 <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
//                 NAVIGATION_SYSTEM
//                 <span className="ml-auto text-emerald-400/70">ONLINE</span>
//               </div>

//               <div className="flex flex-col gap-1">
//                 {navItems.map((item, index) => (
//                   <motion.a
//                     key={item}
//                     href={`#${item.toLowerCase()}`}
//                     variants={mobileItem}
//                     whileHover={{ x: 5 }}
//                     whileTap={{ scale: 0.99 }}
//                     onClick={closeMobileMenu}
//                     className="group flex items-center justify-between rounded-lg border border-transparent px-4 py-3 font-mono text-sm text-zinc-400 transition-colors duration-300 hover:border-emerald-400/15 hover:bg-emerald-400/5 hover:text-emerald-300"
//                   >
//                     <span className="flex items-center gap-3">
//                       <span className="text-[10px] text-emerald-400/50">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>
//                       {item}
//                     </span>

//                     <ArrowUpRight
//                       size={15}
//                       className="text-emerald-400/0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300"
//                     />
//                   </motion.a>
//                 ))}

//                 {/* MOBILE CTA */}
//                 <motion.a
//                   href="#contact"
//                   variants={mobileItem}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={closeMobileMenu}
//                   className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-5 py-3.5 font-mono text-sm font-semibold tracking-wide text-emerald-300 transition-colors duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
//                 >
//                   <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
//                   LET&apos;S CONNECT
//                   <ArrowUpRight size={16} />
//                 </motion.a>
//               </div>

//               <div className="mt-5 border-t border-emerald-400/10 pt-3 font-mono text-[10px] text-zinc-600">
//                 <span className="text-emerald-400">root@nishad</span>:~$ exit_
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// }

// export default Navbar;
