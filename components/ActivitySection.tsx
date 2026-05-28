"use client";

import { motion } from "framer-motion";

const activities = [
  "Completed React Basics lesson",
  "Started Next.js Fundamentals",
  "Finished JavaScript Quiz",
  "Watched UI Design tutorial",
];

export default function ActivitySection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-zinc-900 p-6 rounded-2xl mt-10"
    >
      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-4 rounded-xl text-zinc-300"
          >
            {activity}
          </div>
        ))}
      </div>
    </motion.div>
  );
}