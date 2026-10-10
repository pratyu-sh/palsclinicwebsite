"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { treatments, type Treatment } from "@/data/treatments";

const ease = [0.22, 1, 0.36, 1] as const;

function TreatmentCard({ t, i, inView }: { t: Treatment; i: number; inView: boolean }) {
  const handleNavClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#book");
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease, delay: i * 0.06 }}
      onClick={handleNavClick}
      style={{
        position: "relative",
        background: "var(--surface)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        display: "flex",
        flexDirection: "column",
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 16px 40px rgba(21,25,24,0.10)",
        transition: { duration: 0.25 },
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/10",
          overflow: "hidden",
          background: "var(--surface-warm)",
        }}
      >
        <Image
          src={t.image}
          alt={t.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />

        {/* Category pill */}
        <div
          style={{
            position: "absolute",
            top: "0.875rem",
            left: "0.875rem",
            padding: "0.3rem 0.75rem",
            background: t.highlight ? "var(--primary)" : "rgba(248,247,243,0.94)",
            borderRadius: "var(--radius-full)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: t.highlight ? "#fff" : "var(--ink-soft)",
            }}
          >
            {t.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.375rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem",
            color: "var(--ink)",
            marginBottom: "0.5rem",
            lineHeight: 1.25,
          }}
        >
          {t.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            color: "var(--ink-soft)",
            lineHeight: 1.6,
            marginBottom: "1.25rem",
            flex: 1,
          }}
        >
          {t.shortDesc}
        </p>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            color: "var(--primary)",
            fontFamily: "var(--font-body)",
            fontSize: "0.8125rem",
            fontWeight: 700,
            minHeight: 36,
          }}
        >
          <span>Book Consultation for {t.title}</span>
          <ArrowRight size={15} />
        </div>
      </div>
    </motion.article>
  );
}

export default function Treatments() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="treatments"
      aria-label="Signature Treatments"
      style={{
        background: "var(--background)",
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
      }}
    >
      <div className="container" ref={ref}>
        {/* Heading */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "2.5rem",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="text-eyebrow"
              style={{ marginBottom: "0.75rem" }}
            >
              Treatments
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="text-display-md"
              style={{ color: "var(--ink)", maxWidth: "520px" }}
            >
              Care designed for your specific needs.
            </motion.h2>
          </div>

          <motion.a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#book");
              if (target) {
                const top = target.getBoundingClientRect().top + window.scrollY - 70;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="btn btn-secondary btn-sm"
          >
            Book Consultation
            <ArrowRight size={15} />
          </motion.a>
        </div>

        {/* Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, i) => (
            <TreatmentCard key={t.id} t={t} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}


