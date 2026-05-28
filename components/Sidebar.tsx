"use client";

import { Home, BookOpen, BarChart3, MessageSquare, Settings } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Dashboard", icon: Home },
  { name: "Courses", icon: BookOpen },
  { name: "Analytics", icon: BarChart3 },
  { name: "Messages", icon: MessageSquare },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-64 min-h-screen bg-zinc-900 text-white p-5"
    >
      <h1 className="text-2xl font-bold mb-10">LearnX</h1>

      <div className="space-y-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-zinc-800 transition"
            >
              <Icon size={22} />
              <span>{item.name}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}