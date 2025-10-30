"use client";

import { motion } from "framer-motion";

type Skill = {
  name: string;
  level: number;
};

type SkillCategoryProps = {
  category: {
    title: string;
    skills: Skill[];
  };
};

export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Category Title */}
      <h2 className="text-2xl font-light text-brand-text border-l-4 border-brand-primary pl-4 dark:text-gray-100">
        {category.title}
      </h2>

      {/* Skills Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="space-y-2"
          >
            {/* Skill Name and Level */}
            <div className="flex justify-between items-center">
              <span className="text-brand-text font-medium dark:text-gray-200">
                {skill.name}
              </span>
              <span className="text-sm text-brand-text/60 font-light dark:text-gray-400">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-brand-muted/30 rounded-full overflow-hidden dark:bg-gray-700">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.1 + 0.2,
                  ease: "easeOut",
                }}
                className="h-full bg-gradient-to-r from-brand-primary to-brand-primary/70 rounded-full relative dark:from-teal-500 dark:to-teal-400"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
