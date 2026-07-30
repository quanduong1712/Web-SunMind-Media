import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, highlight, desc, center = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className={`${center ? "text-center" : "text-left"} mx-auto max-w-3xl`}
    >
      <span
        className={`inline-flex rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] ${
          light
            ? "border-orange-300/40 bg-white/10 text-orange-200"
            : "border-orange-300/70 bg-orange-50 text-sunmind-primary"
        }`}
      >
        {eyebrow}
      </span>
      <h2 className={`section-heading mt-5 text-4xl font-extrabold md:text-5xl xl:text-6xl ${light ? "text-white" : "text-sunmind-dark"}`}>
        {title} {highlight ? <span className="text-sunmind-primary">{highlight}</span> : null}
      </h2>
      <p className={`mt-5 text-base leading-relaxed md:text-lg ${light ? "text-orange-100/90" : "text-sunmind-gray"}`}>{desc}</p>
    </motion.div>
  );
}
