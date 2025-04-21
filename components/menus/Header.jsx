import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiBattledotnet } from "react-icons/si";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-black/85 backdrop-blur-lg shadow-md">
        <div className="container">
          <div className="w-full flex justify-between items-center">
            {/* Logo */}
            <motion.h1
              className="text-2xl  flex items-center gap-1 font-bold bg-gradient-to-r from-blue-700 to-[#f60002] text-transparent bg-clip-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="flex items-center gap-1">
                BigBattles{" "}
                <svg width="40" height="40" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient
                      id="iconGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#1c48e3" />
                      <stop offset="100%" stopColor="#f60002" />
                    </linearGradient>
                  </defs>
                  <SiBattledotnet fill="url(#iconGradient)" />
                </svg>
              </Link>
            </motion.h1>

            {/* Desktop Nav */}
            <nav className="hidden py-4 md:flex space-x-6 text-sm font-semibold relative z-[999]">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact-us" },
                { label: "SignUp", href: "/registration" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group px-3 py-1"
                >
                  {/* Hover background (angled gradient) */}
                  <span className="absolute inset-0 -skew-x-12 scale-110 bg-gradient-to-r from-[#f60002] to-blue-700 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out z-0 rounded-sm"></span>

                  {/* Link text */}
                  <span className="relative z-10 text-white group-hover:text-black transition duration-300">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button with animation */}
            <motion.button
              className="md:hidden p-2 rounded hover:bg-white/10 transition"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={28} color="white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu size={28} color="white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Side Panel for Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background blur */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in menu */}
            <motion.aside
              className="fixed top-0 left-0 h-full w-64 bg-black/70 backdrop-blur-xs p-6 shadow-xl z-[999] text-white"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col space-y-4 text-lg font-medium">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
                <Link href="/blog" onClick={() => setMenuOpen(false)}>
                  Blog
                </Link>
                <Link href="/contact-us" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
                <Link href="/registration" onClick={() => setMenuOpen(false)}>
                  Sign-Up
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
