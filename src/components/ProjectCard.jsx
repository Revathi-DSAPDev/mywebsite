import { motion } from "motion/react";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-medium">{project.name}</h3>
        <div className="text-xs text-slate-400">{project.period}</div>
      </div>
      <div className="mt-2 flex flex-wrap gap-2 text-xs text-accent">
        {project.stack?.map((s) => (
          <span key={s} className="rounded bg-slate-800/60 px-2 py-1">{s}</span>
        ))}
      </div>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
        {project.bullets?.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </motion.div>
  );
}
