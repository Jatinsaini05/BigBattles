import React, { useRef } from "react";
import { FaAndroid } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";
import { motion, useInView } from "framer-motion";

export default function Refer() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const imageInView = useInView(imageRef, { once: true });
  const textInView = useInView(textRef, { once: true });

  return (
    <div className="bg-[#f3f4f6] py-16">
      <h2 className="text-[#0d1033] text-center text-3xl md:text-4xl font-extrabold mb-2">
        Refer a Friend
      </h2>
      <div className="flex justify-center items-center">
        <img src="https://www.gamerji.com/img/title-shape.png" alt="" />
      </div>
      <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">
        Refer your friends & get free coins to unlock exciting rewards.
      </p>
      <div className="w-full container flex flex-col lg:flex-row items-center justify-evenly gap-10 relative">
        {/* Animated Circle Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative flex-shrink-0"
        >
          <div className="w-[280px] sm:shadow-[-25px_4px_0px_2px_rgba(0,_0,_0,_0.1)] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full bg-yellow-400 relative z-10 flex items-center justify-center">
            <img
              src="/pubg.png"
              alt="Characters"
              className="object-contain z-20"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-gray-100 z-0" />
        </motion.div>

        {/* Animated Text and Button */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:items-start items-center text-center lg:text-left"
        >
          <p className="text-[#0d1033] text-base sm:text-lg font-semibold max-w-md mb-6">
            When your friend signs up you get free{" "}
            <span className="inline-flex items-center font-bold text-yellow-500">
              <GiTwoCoins />
              150
            </span>{" "}
            coins & your friend gets{" "}
            <span className="inline-flex items-center font-bold text-yellow-500">
              <GiTwoCoins />
              100
            </span>{" "}
            coins.
          </p>

          <button className="bg-[#0d1033] hover:cursor-pointer text-white flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold shadow-md hover:bg-[#161946] transition">
            <FaAndroid size={18} />
            Download <span className="font-bold">&nbsp;Android App</span>
          </button>
        </motion.div>

        {/* Wizard Background Image */}
        <img
          src="https://wallpapercave.com/wp/wp2413723.png"
          alt="Wizard"
          className="absolute right-10 bottom-0 w-[50%] opacity-30 hidden md:block pointer-events-none select-none"
        />
      </div>
    </div>
  );
}
