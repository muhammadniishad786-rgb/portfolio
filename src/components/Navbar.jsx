import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Home", "About", "service", "Skills", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-tight"
        >
          Nishad
          <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            .
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative py-2 text-sm font-medium text-gray-400 transition duration-300 hover:text-white"
            >
              {item}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(249,115,22,0.25)] transition duration-300 hover:-translate-y-0.5 hover:from-orange-600 hover:to-amber-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.45)] md:block"
        >
          Contact Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-300 transition hover:border-orange-500/50 hover:text-orange-400 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/5 bg-[#0a0a0a] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-orange-500/10 hover:text-orange-400"
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;