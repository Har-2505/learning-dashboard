"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Total Courses",
    value: "12",
  },
  {
    title: "Completed",
    value: "5",
  },
  {
    title: "In Progress",
    value: "7",
  },
  {
    title: "Study Hours",
    value: "120h",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-900 p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-zinc-400 text-sm">
            {card.title}
          </h2>

          <p className="text-3xl font-bold mt-2">
            {card.value}
          </p>
        </motion.div>
      ))}
    </div>
  );
}