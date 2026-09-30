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