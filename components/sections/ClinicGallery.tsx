"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const galleryItems = [
  {
    src: "/images/clinic-interior.jpg",
    alt: "Modern dental treatment room at Dr. Arora's clinic",
    label: "Treatment Room",
    aspect: "16/10",
  },
  {
    src: "/images/doctor-portrait.jpg",
    alt: "Dr. Dhananjay Arora, Prosthodontist",
    label: "Your Specialist",
    aspect: "3/4",
  },
  {
    src: "/images/dsd-visual.jpg",
    alt: "Digital Smile Design technology",
    label: "Digital Planning",
    aspect: "16/10",
  },
];

export default function ClinicGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="clinic"
      aria-label="Clinic experience"
      style={{
        background: "var(--background)",
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
      }}
    >
      <div className="container" ref={ref}>
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-end mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="text-eyebrow"
              style={{ marginBottom: "0.75rem" }}
            >
              The Clinic
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease, delay: 0.1 }}
              className="text-display-md"
              style={{ color: "var(--ink)" }}
            >
              Modern care, in a space designed for comfort.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                color: "var(--ink-soft)",
                lineHeight: 1.65,
                marginBottom: "1rem",
              }}
            >
              Dr. Arora&apos;s clinic in Dehradun provides a calm, modern environment
              with sterilised instruments, high-quality materials, and a team committed
              to your comfort at every visit.
            </p>

            {/* Hygiene badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {[
                "Sterilised Instruments",
                "High-Quality Materials",
                "Modern Equipment",
                "Hygienic Environment",
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.3rem 0.75rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-full)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    color: "var(--ink-soft)",
                  }}
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease, delay: i * 0.1 }}
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                aspectRatio: item.aspect,
                background: "var(--surface-warm)",
                width: "100%",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(9,45,51,0.55) 0%, transparent 50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0.875rem",
                  left: "0.875rem",
                  padding: "0.25rem 0.625rem",
                  background: "rgba(248,247,243,0.92)",
                  borderRadius: "var(--radius-full)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                  }}
                >
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
