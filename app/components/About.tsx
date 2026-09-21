"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WORDS = [
  "People.",
  "Data.",
  "Technology.",
  "Governance.",
  "Democracy.",
  "Impact.",
];

export default function About() {
  return (
    <section id="about" className="relative bg-bg-elevated py-28 md:py-36">
      <div className="container-px">
        <span className="mono-tag text-accent-cyan">About Jarvis</span>

        <h2 className="font-display mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-text-primary md:text-5xl">
          We work where complexity
          <br />
          meets consequence.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="max-w-md text-lg leading-relaxed text-text-secondary">
              Leaders in leveraging people-centric tech &amp; data
              capabilities for the governance and political domain. We are
              furthering our vision by offering unique solutions to
              India&apos;s largest political party and various government
              units — helping them manage internal work, connect with
              voters, target their messaging, and achieve their goals in a
              swift manner.
            </p>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-text-secondary">
              We believe that by harnessing the power of data and
              analytics, we can help shape a more informed, engaged and
              fair political landscape for all.
            </p>
          </div>

          <div className="flex flex-wrap content-start gap-x-4 gap-y-2 md:col-span-6">
            {WORDS.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0.15, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="font-display text-4xl font-extrabold text-text-primary md:text-5xl"
              >
                {w}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.a
            href="#contact"
            data-cursor="WATCH"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="group relative col-span-1 block overflow-hidden rounded-3xl border border-line lg:col-span-7"
          >
            <Image
              src="/images/about-impact.jpg"
              alt="Innovating for impact — a look at our work"
              width={1060}
              height={586}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative col-span-1 flex flex-col overflow-hidden rounded-3xl border border-line lg:col-span-5"
          >
            <div className="relative h-40 w-full overflow-hidden sm:h-full">
              <Image
                src="/images/data-political-capital.jpg"
                alt="Jarvis team reviewing live campaign data dashboards"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated-2 via-bg-elevated-2/40 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col justify-end bg-bg-elevated-2 p-7">
              <h3 className="font-display text-xl font-bold leading-tight text-text-primary">
                Data Tech as
                <br />
                Political Capital
              </h3>
              <a
                href="#insights"
                className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent-cyan transition-colors hover:text-accent"
              >
                Learn More →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
