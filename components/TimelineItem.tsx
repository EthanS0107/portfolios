"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

type TimelineItemProps = {
  item: {
    title: string;
    organization: string;
    period: string;
    description: string;
    type: "education" | "work";
    tags?: string[];
  };
  index: number;
};

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const isEducation = item.type === "education";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-brand-muted" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-brand-primary flex items-center justify-center">
        {isEducation ? (
          <GraduationCap className="text-brand-primary" size={20} />
        ) : (
          <Briefcase className="text-brand-primary" size={20} />
        )}
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-brand-muted/30 hover:shadow-md transition-shadow">
        {/* Header */}
        <div className="space-y-2 mb-4">
          <h3 className="text-xl font-semibold text-brand-text">
            {item.title}
          </h3>
          <div className="flex items-center gap-2 text-brand-primary font-medium">
            <span>{item.organization}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-brand-text/60">
            <Calendar size={14} />
            <span>{item.period}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-brand-text/70 leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Tags for work experience */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
