"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${clinic.whatsappMessage}`;

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
      aria-label="Final call to action"
      style={{
        background: "var(--primary)",
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Graphic */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-1rem",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(10rem, 24vw, 22rem)",
          color: "rgba(255,255,255,0.03)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          fontStyle: "italic",
        }}
      >
        ✦
      </div>

      <div className="container" ref={ref}>
        <div style={{ maxWidth: "720px" }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="text-eyebrow"
            style={{ color: "var(--accent)", marginBottom: "1rem" }}
          >
            Take the First Step
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
            className="text-display-lg"
            style={{ color: "#fff", marginBottom: "1.25rem" }}
          >
            Ready to plan{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              your smile?
            </em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.65,
              marginBottom: "2rem",
              maxWidth: "560px",
            }}
          >
            Start with a consultation and understand your options with a treatment plan
            designed around you. Our team is ready to help.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.28 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
            className="sm:flex-row sm:flex-wrap"
          >
            <button
              onClick={handleBookClick}
              id="final-cta-book-btn"
              className="btn btn-accent btn-lg w-full sm:w-auto"
              style={{ fontWeight: 700, justifyContent: "center" }}
            >
              Book a Consultation
              <ArrowRight size={18} />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg w-full sm:w-auto"
              id="final-cta-whatsapp-btn"
              style={{ justifyContent: "center" }}
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>

            <a
              href={`tel:${clinic.phone}`}
              className="btn btn-lg w-full sm:w-auto"
              id="final-cta-call-btn"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.25)",
                justifyContent: "center",
              }}
            >
              <Phone size={18} />
              Call Clinic
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
