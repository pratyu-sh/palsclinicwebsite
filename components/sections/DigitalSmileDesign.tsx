"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    label: "Analyse",
    title: "We analyse your smile with precision.",
    description:
      "Using high-resolution photography and digital tools, we capture every detail of your current smile — proportions, symmetry, tooth shape, and colour.",
  },
  {
    number: "02",
    label: "Understand",
    title: "We listen to what you want.",
    description:
      "This is a collaborative process. We take time to understand your aesthetic goals, lifestyle, and what matters most about your smile.",
  },
  {
    number: "03",
    label: "Design",
    title: "Your personalised smile is designed.",
    description:
      "Using digital design software, we map out a smile that is proportional, natural-looking, and tailored to your facial characteristics.",
  },
  {
    number: "04",
    label: "Preview",
    title: "You see your future smile.",
    description:
      "A visual preview is generated before any treatment begins. You can evaluate, refine, and understand exactly what to expect.",
  },
  {
    number: "05",
    label: "Plan",
    title: "A clear treatment plan is built around you.",
    description:
      "With your smile designed and approved, we create a structured treatment roadmap — with timeline, steps, and cost — so you can move forward with full confidence.",
  },
];

export default function DigitalSmileDesign() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true, margin: "-60px" });
  const [activeStep, setActiveStep] = useState(0);

  const handleNavClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#book");
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="digital-smile-design"
      ref={sectionRef}
      aria-label="Digital Smile Design"
      style={{ background: "var(--background)", overflow: "hidden" }}
    >
      {/* Intro */}
      <div
        className="container"
        style={{ paddingTop: "var(--section-padding)", paddingBottom: "2.5rem" }}
        ref={headingRef}
      >
        <div style={{ maxWidth: "720px" }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="text-eyebrow"
            style={{ marginBottom: "1rem", color: "var(--teal)" }}
          >
            Digital Smile Design
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
            className="text-display-lg"
            style={{ color: "var(--ink)", marginBottom: "1.25rem" }}
          >
            Your smile shouldn&apos;t be{" "}
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>
              one-size-fits-all.
            </em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(0.9375rem, 1.5vw, 1.125rem)",
              color: "var(--ink-soft)",
              lineHeight: 1.65,
              maxWidth: "580px",
            }}
          >
            Digital Smile Design allows treatment to be thoughtfully planned around your
            facial characteristics, goals and proposed treatment — so you can see your
            future smile before a single procedure begins.
          </motion.p>
        </div>
      </div>

      {/* Interactive Steps */}
      <div
        className="container"
        style={{
          paddingBottom: "var(--section-padding)",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* Step Nav (Scrollable horizontally on small screens without scrollbar) */}
        <div
          className="no-scrollbar"
          style={{
            display: "flex",
            gap: "0.5rem",
            overflowX: "auto",
            paddingBottom: "0.5rem",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {steps.map((step, i) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(i)}
              aria-pressed={activeStep === i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.625rem 1.125rem",
                borderRadius: "var(--radius-full)",
                border: `1.5px solid ${
                  activeStep === i ? "var(--primary)" : "var(--border)"
                }`,
                background: activeStep === i ? "var(--primary)" : "var(--surface)",
                color: activeStep === i ? "#fff" : "var(--ink-soft)",
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                fontWeight: activeStep === i ? 700 : 600,
                cursor: "pointer",
                transition: "all 0.25s ease",
                whiteSpace: "nowrap",
                scrollSnapAlign: "start",
                flexShrink: 0,
                minHeight: 44,
              }}
            >
              <span style={{ opacity: 0.7, fontSize: "0.7rem", fontWeight: 800 }}>
                {step.number}
              </span>
              {step.label}
            </button>
          ))}
        </div>

        {/* Content Area Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Panel */}
          <motion.div
            key={`img-${activeStep}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease }}
            style={{
              position: "relative",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              aspectRatio: "4/3",
              background: "var(--primary-dark)",
            }}
          >
            <Image
              src="/images/dsd-visual.jpg"
              alt={`Digital Smile Design — ${steps[activeStep].label}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: "cover", opacity: 0.88 }}
            />

            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(9,45,51,0.7) 0%, transparent 60%)",
              }}
            />

            {/* Step number watermark */}
            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: "1.25rem",
              }}
            >
              <motion.span
                key={`num-${activeStep}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 8vw, 4rem)",
                  color: "rgba(255,255,255,0.2)",
                  lineHeight: 1,
                }}
              >
                {steps[activeStep].number}
              </motion.span>
            </div>

            {/* Analysis Overlay Dots */}
            <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
              {[
                { top: "35%", left: "30%", delay: 0 },
                { top: "42%", left: "55%", delay: 0.1 },
                { top: "52%", left: "40%", delay: 0.2 },
                { top: "38%", left: "68%", delay: 0.15 },
              ].map((dot, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: dot.delay + 0.2, duration: 0.3 }}
                  style={{
                    position: "absolute",
                    top: dot.top,
                    left: dot.left,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    boxShadow: "0 0 0 3px rgba(199,166,106,0.35)",
                  }}
                />
              ))}
            </div>

            {/* Step Label Tag */}
            <div
              style={{
                position: "absolute",
                bottom: "1.25rem",
                left: "1.25rem",
                padding: "0.375rem 0.875rem",
                background: "var(--accent)",
                borderRadius: "var(--radius-full)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6875rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--primary-dark)",
                }}
              >
                {steps[activeStep].label}
              </span>
            </div>
          </motion.div>

          {/* Text Content Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${activeStep}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease }}
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--teal)",
                    marginBottom: "0.625rem",
                  }}
                >
                  Step {steps[activeStep].number} of 05
                </p>
                <h3
                  className="text-display-sm"
                  style={{ color: "var(--ink)", marginBottom: "0.875rem" }}
                >
                  {steps[activeStep].title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    color: "var(--ink-soft)",
                    lineHeight: 1.7,
                  }}
                >
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Progress Indicator Dots */}
              <div style={{ display: "flex", gap: "0.375rem", marginTop: "0.5rem" }}>
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    aria-label={`Go to step ${i + 1}`}
                    style={{
                      height: 4,
                      flex: i === activeStep ? 2 : 1,
                      borderRadius: 2,
                      background:
                        i === activeStep
                          ? "var(--primary)"
                          : i < activeStep
                          ? "var(--sage)"
                          : "var(--border-dark)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              <div style={{ paddingTop: "0.5rem" }}>
                <button
                  onClick={handleNavClick}
                  className="btn btn-primary w-full sm:w-auto"
                  style={{ justifyContent: "center" }}
                >
                  <Sparkles size={16} />
                  Book DSD Consultation
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}


