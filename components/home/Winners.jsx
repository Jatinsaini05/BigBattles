import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const winners = [
  {
    name: "Pooja",
    prize: "₹2.5 Lakh+",
    image:
      "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
    text: "...",
  },
  {
    name: "Narender Modi",
    prize: "₹5 Lakh+",
    image: "https://m.media-amazon.com/images/I/41LxPG19KlL.jpg",
    text: "रियाणा के लोकप्रिय मुख्यमंत्री श्रीमान नायब सिंह सैनी जी, केंद्रीय मंत्रिमंडल के मेरे सहयोगी मनोहर लाल जी, राव इंद्रजीत सिंह जी, कृष्णपाल जी, हरियाणा सरकार के मंत्रिगण, सांसद और विधायकगण",
  },
  {
    name: "Salman Khan",
    prize: "₹3.5 Lakh+",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjMwNTIxODg0OF5BMl5BanBnXkFtZTgwODg2NzM0OTE@._V1_FMjpg_UX1000_.jpg",
    text: "Main aaun kya apni pr?",
  },
  { name: "Neha", prize: "₹1.2 Lakh+", image: "/images/neha.jpg", text: "..." },
  {
    name: "Vikram",
    prize: "₹4.7 Lakh+",
    image: "/images/vikram.jpg",
    text: "...",
  },
  { name: "Sneha", prize: "₹3 Lakh+", image: "/images/sneha.jpg", text: "..." },
];

export default function WinnerCarousel() {
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(1);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const children = Array.from(container.children);
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCenterIndex(closestIndex);
  };

  useEffect(() => {
    handleScroll(); // Initial highlight
  }, []);

  const handleInfiniteScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth;
    const scrollPosition = container.scrollLeft;

    if (scrollPosition === totalWidth - container.offsetWidth) {
      container.scrollLeft = 0;
    }

    if (scrollPosition === 0) {
      container.scrollLeft = totalWidth - container.offsetWidth;
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#1b1e31] px-2 py-10"
    >
      <h2 className="text-center text-3xl font-bold text-purple-800 mb-6">
        Our WINNERS
      </h2>

      <div
        ref={scrollRef}
        onScroll={() => {
          handleScroll();
          handleInfiniteScroll();
        }}
        className="flex gap-6 overflow-x-auto px-4 sm:px-6 scroll-smooth py-12 sm:py-16 snap-x snap-mandatory custom-scrollbar perspective-1000"
      >
        {[...winners, ...winners].map((winner, index) => {
          const isCenter = index === centerIndex;
          const rotationAngle = 15 * (index - centerIndex);

          return (
            <div
              key={index}
              className={`flex-shrink-0 snap-center w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.33%-1.5rem)] transition-all duration-300 bg-[#fff] rounded-xl p-4 sm:p-5 shadow-md transform ${
                isCenter
                  ? "scale-110 border-2 border-[#6e11b0] z-10"
                  : "scale-95"
              }`}
              style={{
                transform: `rotateY(${rotationAngle}deg)`,
              }}
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={winner.image}
                  alt={winner.name}
                  className="w-24 h-24 sm:w-30 sm:h-30 rounded-md border p-1 border-[#7e3ffc] object-cover"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#1b1e31]">
                    {winner.name}
                  </h3>
                  <p className="text-[#012664] text-sm">Won {winner.prize}</p>
                </div>
              </div>
              <p className="text-sm text-[#1b1e31] max-h-[90px] overflow-y-auto">
                {winner.text}
              </p>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
