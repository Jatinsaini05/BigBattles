import React, { useEffect, useState } from "react";
import Header from "../menus/Header";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../menus/Footer";

export default function Layout({ children }) {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 45);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative z-40">
        <Header />
      </div>
      <AnimatePresence>
        {showSticky && (
          <motion.header
            className="fixed top-0 left-0 w-full z-[999]"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Header />
          </motion.header>
        )}
      </AnimatePresence>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
