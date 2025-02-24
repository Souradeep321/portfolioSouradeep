import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://plus.unsplash.com/premium_photo-1670274606895-f2dc713f8a90?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyfGVufDB8fDB8fHww",
  "https://cdn.pixabay.com/photo/2023/02/09/16/43/cat-7779237__340.jpg",
  "https://cdn.pixabay.com/photo/2023/12/07/11/11/girl-8435340_1280.png",
  "https://cdn.pixabay.com/photo/2024/11/05/05/38/japancontest-9175030__340.jpg",
  "https://cdn.pixabay.com/photo/2024/12/13/20/29/alps-9266131__340.jpg",
];

// grid grid-cols-2 sm:grid-cols-3 md:flex  gap-4 
const HomeCard = () => {
  return (
    <div className="flex justify-center items-center px-4 py-8">
      <div className="flex flex-nowrap gap-5">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="w-40 h-40 sm:w-44 sm:h-44 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-lg"
            whileHover={{ rotate: Math.random() * 10 - 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <img src={src} alt={`Image ${index}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
