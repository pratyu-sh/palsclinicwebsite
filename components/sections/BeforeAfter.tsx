"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updateSlider = useCallback((clientX: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(95, Math.max(5, pos)));
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updateSlider(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSlider(e.touches[0].clientX);
  };
  const onTouchEnd = () => setIsDragging(false);
  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) updateSlider(e.touches[0].clientX);
  };

  return (
    <section
      id="before-after"
      aria-label="Before and after results"
      style={{
        background: "var(--surface)",
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
      }}
    >
      <div className="container" ref={ref}>
        {/* Heading */}
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="text-eyebrow"
            style={{ marginBottom: "0.75rem" }}
          >
            Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
            className="text-display-md"
            style={{ color: "var(--ink)", marginBottom: "0.75rem" }}
          >
            Results that speak for themselves.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              color: "var(--ink-muted)",
              fontStyle: "italic",
            }}
          >
            All patient cases require individual consent. Results vary by treatment and patient.
          </motion.p>
        </div>

        {/* Draggable Comparison Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.65, ease, delay: 0.2 }}
          ref={sliderRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "840px",
            margin: "0 auto",
            aspectRatio: "16/9",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            touchAction: "none", // Critical to allow horizontal touch drag without triggering page scroll
            background: "var(--surface-warm)",
            border: "1px solid var(--border)",
          }}
          aria-label="Drag horizontally to compare before and after dental results"
        >
          {/* AFTER Image (Background) */}
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/images/before-after.jpg"
              alt="After dental treatment"
              fill
              sizes="(max-width: 840px) 100vw, 840px"
              style={{ objectFit: "cover" }}
              draggable={false}
            />
            {/* After Tag */}
            <div
              style={{
                position: "absolute",
                top: "0.875rem",
                right: "1rem",
                padding: "0.3rem 0.75rem",
                background: "var(--primary)",
                borderRadius: "var(--radius-full)",
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#fff",
                }}
              >
                After
              </span>
            </div>
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              transition: isDragging ? "none" : "clip-path 0.05s ease",
            }}
          >
            <Image
              src="/images/before-after.jpg"
              alt="Before dental treatment"
              fill
              sizes="(max-width: 840px) 100vw, 840px"
              style={{
                objectFit: "cover",
                filter: "saturate(0.7) brightness(0.9)",
              }}
              draggable={false}
            />
            {/* Before Tag */}
            <div
              style={{
                position: "absolute",
                top: "0.875rem",
                left: "1rem",
                padding: "0.3rem 0.75rem",
                background: "rgba(21, 25, 24, 0.75)",
                borderRadius: "var(--radius-full)",
                backdropFilter: "blur(4px)",
                zIndex: 2,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#fff",
                }}
              >
                Before
              </span>
            </div>
          </div>

          {/* Vertical Divider Line & Touch Handle */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${sliderPos}%`,
              transform: "translateX(-50%)",
              width: 2,
              background: "#fff",
              zIndex: 3,
              pointerEvents: "none",
            }}
          >
            {/* Handle Target (44px) */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#ffffff",
                boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6 4L2 9L6 14" stroke="var(--ink)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 4L16 9L12 14" stroke="var(--ink)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Hint Overlay */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            style={{
              position: "absolute",
              bottom: "0.875rem",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "0.375rem 0.875rem",
              background: "rgba(9, 45, 51, 0.85)",
              borderRadius: "var(--radius-full)",
              backdropFilter: "blur(8px)",
              zIndex: 4,
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6875rem",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "0.06em",
              }}
            >
              ← Drag slider to compare →
            </span>
          </motion.div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            textAlign: "center",
            marginTop: "1.25rem",
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "var(--ink-muted)",
          }}
        >
          Individual consultation required.{" "}
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              const t = document.querySelector("#book");
              if (t) window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
            }}
            style={{ color: "var(--primary)", fontWeight: 700 }}
          >
            Book consultation to discuss your smile →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
