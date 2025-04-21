import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import "swiper/css";

const screenshots = [
  "https://playerzon.com/asset/screens/8.png",
  "https://playerzon.com/asset/screens/8.png",
  "https://playerzon.com/asset/screens/8.png",
  "https://playerzon.com/asset/screens/8.png",
  "https://playerzon.com/asset/screens/8.png",
];

export default function AppScreenshots() {
  const swiperRef = useRef(null);
  const isInView = useInView(swiperRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-[#1a0f2e] pt-8 sm:py-10 px-4 md:px-10">
      <h2 className="text-white text-center text-3xl font-bold md:mb-8">
        App Screenshots
      </h2>

      <motion.div
        ref={swiperRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          pagination={false}
          navigation={false}
          className="cursor-pointer"
        >
          {screenshots.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="transition-transform duration-300 ease-in-out hover:scale-105">
                <img
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}
