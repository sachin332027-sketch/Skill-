"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STRENGTHS = [
  {
    title: "Community Outreach",
    image: "/images/community-outreach.jpg",
  },
  {
    title: "Political Organization, Mobilization and Management",
    image: "/images/political-mobilization.jpg",
  },
];

export default function OurStrength() {
  return (
    <section className="relative bg-bg py-28 md:py-36">
      <div className="container-px">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="font-display text-center text-3xl font-bold text-text-primary md:text-4xl"
        >
          Our Strength
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {STRENGTHS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-line"
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
