"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";

export default function CourseProgress() {
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("*");

      console.log(data);
      console.log(error);

      setCourses(data || []);
    };

    fetchCourses();
  }, []);

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
            className="bg-zinc-900 p-6 rounded-2xl shadow-lg"
          >
            <div className="flex justify-between mb-3">
              <h3 className="font-semibold text-lg">
                {course.title}
              </h3>

              <span className="text-zinc-300">
                {course.progress}%
              </span>
            </div>

            <div className="w-full bg-zinc-700 h-3 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${course.progress}%`,
                }}
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