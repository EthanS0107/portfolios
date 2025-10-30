"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Python", level: 70 },
  { name: "SQL", level: 75 },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-600 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
