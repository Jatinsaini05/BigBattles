import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { SiBattledotnet } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-10 px-4 sm:px-10 overflow-hidden">
      {/* Animated Top Border */}
      <div className="w-full border-gradient" />

      <div className="container mx-auto max-w-7xl py-5 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left z-10 relative">
        {/* Left Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-2xl  flex items-center gap-1 font-bold bg-gradient-to-r from-blue-700 to-[#f60002] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.h1>
          <p className="text-sm mt-2 text-gray-400 max-w-xs">
            Where competition meets rewards. Join skill-based tournaments & earn
            coins!
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-[#1877F2]" // Facebook Blue
          >
            <Facebook size={20} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-[#1DA1F2]" // Twitter Blue
          >
            <Twitter size={20} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-[#E1306C]" // Instagram Pink
          >
            <Instagram size={20} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-[#FF0000]" // YouTube Red
          >
            <Youtube size={20} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-[#0A66C2]" // LinkedIn Blue
          >
            <Linkedin size={20} />
          </motion.a>
        </motion.div>

        {/* Links */}
        <motion.ul
          className="flex flex-col sm:flex-row gap-3 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <li>
            <a href="#" className="hover:text-[#1d227c] transition">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#1d227c] transition">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#1d227c] transition">
              Support
            </a>
          </li>
        </motion.ul>
      </div>

      <motion.p
        className="text-xs text-center mt-8 text-gray-500 z-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} BigBattles. All rights reserved.
      </motion.p>
    </footer>
  );
}
