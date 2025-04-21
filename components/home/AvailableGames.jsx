import React from "react";
import { motion } from "framer-motion";

const games = [
  {
    name: "Battlegrounds Mobile India (BGMI)",
    img: "https://static1.xdaimages.com/wordpress/wp-content/uploads/2018/06/pubg.jpg",
  },
  {
    name: "Free Fire",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxd5f6owtc5TnHEQFm04eg1ZMeozaHey9NbeGFW4Ilga6diS49GVi64LkfY0lK8awlObi",
  },
  {
    name: "Call of Duty Mobile",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTD0k16djF-C4IQuVAFp_ZDuC8PbFae91puJCHQ3yJDFJ6rVh3rummg0VhGbZyKeUsric13yA",
  },
];

const AvailableGames = () => {
  return (
    <div className="bg-[#1b1e31] py-12 px-4">
      <h2 className="text-center text-3xl font-bold text-white mb-8">
        Available Games
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {games.map((game, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-[#23263d] p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#2c304d] cursor-pointer flex flex-col items-center text-center"
          >
            <img
              src={game.img}
              alt={game.name}
              className="w-32 h-32 object-cover rounded-md mb-4"
            />
            <p className="text-white font-semibold">{game.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AvailableGames;
