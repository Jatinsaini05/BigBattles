import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const ratings = [
  { stars: 5, percent: 79, color: "bg-green-500" },
  { stars: 4, percent: 15, color: "bg-lime-400" },
  { stars: 3, percent: 4, color: "bg-yellow-400" },
  { stars: 2, percent: 1, color: "bg-orange-300" },
  { stars: 1, percent: 1, color: "bg-orange-500" },
];

export default function CustomerReview() {
  return (
    <section className="bg-[#eee] py-16 px-4 sm:px-8">
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold italic text-purple-900 uppercase mb-10">
        Customer Reviews
      </h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Section */}
        <motion.div
          className="flex-1 flex flex-col items-center border-r border-gray-300 pr-0 md:pr-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[7rem] leading-none font-extrabold text-purple-800">
            4.7
          </h3>
          <div className="flex items-center gap-1 mb-2">
            {[1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                fill="#FFC107"
                stroke="#FFC107"
                className="w-8 h-8"
              />
            ))}
            <Star fill="#FFC107" stroke="#ccc" className="w-8 h-8" />
          </div>
          <span className="italic text-sm text-gray-800">OUT OF 5</span>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex-1 w-full space-y-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {ratings.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-2">
              <div className="w-5 font-bold text-black text-right">
                {rating.stars}
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill={i < rating.stars ? "#FFC107" : "#ccc"}
                    stroke={i < rating.stars ? "#FFC107" : "#ccc"}
                    className="w-5 h-5"
                  />
                ))}
              </div>
              <div className="flex-1 bg-gray-300 rounded-full h-2 mx-2 relative overflow-hidden">
                <div
                  className={`h-2 absolute left-0 top-0 ${rating.color}`}
                  style={{ width: `${rating.percent}%` }}
                ></div>
              </div>
              <div className="text-black font-semibold text-sm w-10 text-right">
                {rating.percent}%
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
