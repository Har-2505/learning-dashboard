"use client";

import { motion } from "framer-motion";

const courses = [
  {
    title: "React Basics",
    progress: 75,
  },
  {
    title: "JavaScript Mastery",
    progress: 60,
  },
  {
    title: "Next.js Fundamentals",
    progress: 40,
  },
];

export default function CourseProgress() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Course Progress
      </h2>

      <div className="grid gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900 p-6 rounded-2xl"
          >
            <div className="flex justify-between mb-3">
              <h3 className="font-semibold">
                {course.title}
              </h3>

              <span className="text-zinc-400">
                {course.progress}%
              </span>
            </div>

            <div className="w-full bg-zinc-700 h-3 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${course.progress}%` }}
                transition={{ duration: 1 }}
                className="bg-blue-500 h-3 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}