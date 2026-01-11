import { motion } from "motion/react";

export default function AnimatedSection({ children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay }}
      className="px-6 py-12 md:px-10 lg:px-16"
    >
      {children}
    </motion.section>
  );
}
