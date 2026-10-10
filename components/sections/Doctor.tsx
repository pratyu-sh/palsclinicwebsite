"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { doctor } from "@/data/doctor";
import { ArrowRight, Award } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Doctor() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#book");
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="doctor"
      aria-label="About the doctor"
      style={{
        background: "var(--background)",
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
        overflow: "hidden",
      }}
    >
      <div className="container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image & Floating Credential Card Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease }}
            className="lg:col-span-5 relative"
          >
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                aspectRatio: "3/4",
                background: "var(--surface-warm)",
                width: "100%",
              }}
            >
              <Image
                src={doctor.image}
                alt={`${doctor.name}, ${doctor.designation}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>

            {/* Credential Card */}
            <div
              style={{
                background: "var(--surface)",
                borderRadius: "var(--radius-lg)",
                padding: "1.25rem 1.5rem",
                boxShadow: "var(--shadow-lg)",
                border: "1px solid var(--border)",
                marginTop: "-2rem",
                position: "relative",
                zIndex: 2,
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
              className="lg:absolute lg:-bottom-6 lg:-right-6 lg:m-0 lg:min-w-[220px]"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.375rem" }}>
                <Award size={16} style={{ color: "var(--teal)" }} />
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6875rem",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--teal)",
                  }}
                >
                  Your Specialist
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.125rem",
                  color: "var(--ink)",
                  marginBottom: "0.2rem",
                  lineHeight: 1.2,
                }}
              >
                {doctor.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78125rem",
                  color: "var(--ink-soft)",
                  fontWeight: 600,
                }}
              >
                {doctor.qualifications} · {doctor.speciality}
              </p>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div>
              <p className="text-eyebrow" style={{ marginBottom: "0.75rem" }}>
                The Doctor
              </p>
              <h2 className="text-display-md" style={{ color: "var(--ink)", marginBottom: "0.5rem" }}>
                Meet the dentist behind your smile plan.
              </h2>
              <div
                style={{
                  width: 40,
                  height: 2,
                  background: "var(--accent)",
                  borderRadius: 2,
                  marginTop: "1rem",
                }}
              />
            </div>

            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                  color: "var(--ink)",
                  marginBottom: "1rem",
                  lineHeight: 1.5,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{doctor.philosophy}&rdquo;
              </p>

              {doctor.bio.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    color: "var(--ink-soft)",
                    lineHeight: 1.7,
                    marginBottom: "0.875rem",
                  }}
                >
                  {para.trim()}
                </p>
              ))}
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-3">
              {doctor.credentials.map((c) => (
                <div
                  key={c.label}
                  style={{
                    padding: "0.875rem 1rem",
                    background: "var(--surface)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--ink-muted)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {c.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                    }}
                  >
                    {c.value}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ paddingTop: "0.5rem" }}>
              <button
                onClick={handleBookClick}
                className="btn btn-primary w-full sm:w-auto"
                style={{ justifyContent: "center" }}
              >
                Book a Consultation
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
