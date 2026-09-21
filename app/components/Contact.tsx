"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative bg-bg py-28 md:py-40">
      <div className="container-px grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl font-bold leading-[1.05] text-text-primary md:text-6xl"
          >
            Have a complex
            <br />
            problem?
            <br />
            <span className="text-text-secondary">
              Let&apos;s build the answer.
            </span>
          </motion.h2>
          <p className="mt-8 max-w-sm text-base leading-relaxed text-text-secondary">
            Tell us what you&apos;re working on. A member of our team will
            respond within one business day.
          </p>
        </div>

        <div className="md:col-span-6">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex h-full min-h-[320px] flex-col justify-center rounded-3xl border border-line bg-bg-elevated p-10"
            >
              <span className="font-display text-2xl font-semibold text-text-primary">
                Message received.
              </span>
              <p className="mt-3 text-text-secondary">
                Thank you for reaching out — we&apos;ll be in touch shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <Field label="Name" name="name" type="text" required />
              <Field
                label="Work email"
                name="email"
                type="email"
                required
              />
              <Field label="Company" name="company" type="text" />
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="mono-tag text-text-tertiary"
                >
                  What can we help you with?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="resize-none border-b border-line bg-transparent py-3 text-lg text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-accent"
                  placeholder="Tell us briefly…"
                />
              </div>

              <button
                type="submit"
                data-cursor="SEND"
                className="group mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-text-primary px-6 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.02]"
              >
                Start a Conversation
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="mono-tag text-text-tertiary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border-b border-line bg-transparent py-3 text-lg text-text-primary outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
