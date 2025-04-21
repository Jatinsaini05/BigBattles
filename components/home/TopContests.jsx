import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const contests = [
  {
    id: 1,
    game: "Ludo",
    image:
      "https://play-lh.googleusercontent.com/xuxQrwmbnehb5ZiGv1NGMBL-mUaYxiVP4JTl1xzhpRO2xDSr9aZxMqUeq5S87_O3FisY",
    pool: 2005,
    winners: 1,
    potLimit: 2,
    fee: 1210,
  },
  {
    id: 2,
    game: "Carrom",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDq4AtOVSVBT6WRDfbEXfAlIpVJOMpYfRLA&s",
    pool: 120,
    winners: 1,
    potLimit: 2,
    fee: 60,
  },
  {
    id: 3,
    game: "Chess",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/640px-ChessSet.jpg",
    pool: 100,
    winners: 1,
    potLimit: 2,
    fee: 50,
  },
];

export default function TopContestsSlider() {
  return (
    <div className="bg-[#262626]">
      <div className="py-10 container mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-bold relative mb-8">
          <span className="inline-block border-y-2 text-white border-purple-500 px-4 py-1">
            Top Contests
          </span>
        </h2>
        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
        >
          {contests.map((contest, index) => (
            <SwiperSlide key={contest.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 8px 24px rgba(255, 0, 0, 0.3)",
                }}
                className="rounded-xl overflow-hidden bg-[#1a1a1a] shadow-md p-4 relative cursor-pointer transition-all border border-[#333]"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={contest.image}
                    alt={contest.game}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <div className="text-sm text-gray-200 font-medium">
                      {contest.game}
                    </div>
                    <div className="text-sm text-gray-300 flex flex-col">
                      <span className="text-red-500 text-xl font-bold mr-2">
                        ₹{contest.pool}
                      </span>
                      <span className="text-blue-400 underline text-xs">
                        Winning Pool - Guaranteed
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3 text-xs border border-dashed border-[#717070] rounded-md py-2 text-center text-gray-400">
                  <div>
                    <div className="font-bold text-white">
                      {contest.winners}
                    </div>
                    <div>No. of Winners</div>
                  </div>
                  <div>
                    <div className="font-bold text-white">
                      {contest.potLimit}
                    </div>
                    <div>Pot Limit</div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="bg-red-600 text-white px-4 py-1 rounded text-sm font-semibold">
                    Regular
                  </span>
                  <span className="bg-blue-700 text-white px-4 py-1 rounded text-sm font-semibold">
                    Fee ₹{contest.fee}
                  </span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
