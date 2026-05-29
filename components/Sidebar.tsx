"use client";

import { useState } from "react";
import {
  Home,
  BookOpen,
  BarChart3,
  MessageSquare,
  Settings,
  Menu,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Dashboard", icon: Home },
  { name: "Courses", icon: BookOpen },
  { name: "Analytics", icon: BarChart3 },
  { name: "Messages", icon: MessageSquare },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Topbar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-zinc-900 text-white">
        <h1 className="text-xl font-bold">LearnX</h1>

        <button onClick={() => setIsOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 min-h-screen bg-zinc-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-10">
          LearnX
        </h1>

        <div className="space-y-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-zinc-800"
              >
                <Icon size={22} />
                <span>{item.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-full bg-zinc-900 text-white p-5 z-50"
          >
            <div className="flex justify-between items-center mb-10">
              <h1 className="text-2xl font-bold">
                LearnX
              </h1>

              <button onClick={() => setIsOpen(false)}>
                <X />
              </button>
            </div>

            <div className="space-y-4">
              {menuItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-zinc-800"
                  >
                    <Icon size={22} />
                    <span>{item.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

