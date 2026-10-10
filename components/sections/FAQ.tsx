"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faq";

const ease = [0.22, 1, 0.36, 1] as const;

function FAQItem({ faq, index, inView }: { faq: typeof faqs[0]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease, delay: index * 0.04 }}
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-answer-${faq.id}`}
        id={`faq-btn-${faq.id}`}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.25rem",
          padding: "1.25rem 0",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          minHeight: 52, // 52px touch target height
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
            fontWeight: 600,
            color: "var(--ink)",
            lineHeight: 1.4,
          }}
        >
          {faq.question}
        </span>

        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: open ? "var(--primary)" : "var(--surface-warm)",
            border: `1px solid ${open ? "var(--primary)" : "var(--border)"}`,
            flexShrink: 0,
            transition: "all 0.25s ease",
          }}
        >
          {open ? (
            <Minus size={14} style={{ color: "#fff" }} />
          ) : (
            <Plus size={14} style={{ color: "var(--ink-soft)" }} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            role="region"
            aria-labelledby={`faq-btn-${faq.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                paddingBottom: "1.375rem",
                paddingRight: "1rem",
              }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      style={{
        background: "var(--background)",
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
      }}
    >
      <div className="container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Header Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-[calc(var(--header-height)+1.5rem)]">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="text-eyebrow"
              style={{ marginBottom: "0.75rem" }}
            >
              FAQ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease, delay: 0.1 }}
              className="text-display-md"
              style={{ color: "var(--ink)", marginBottom: "1rem" }}
            >
              Common questions, clear answers.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, ease, delay: 0.2 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                color: "var(--ink-soft)",
                lineHeight: 1.65,
                marginBottom: "1.5rem",
              }}
            >
              Have a question not listed here? We&apos;d be happy to answer it directly.
            </motion.p>

            <motion.a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                const t = document.querySelector("#book");
                if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
              }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="btn btn-primary btn-sm w-full sm:w-auto"
              style={{ justifyContent: "center" }}
            >
              Book Consultation
            </motion.a>
          </div>

          {/* Questions Column */}
          <div className="lg:col-span-8">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.id} faq={faq} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
