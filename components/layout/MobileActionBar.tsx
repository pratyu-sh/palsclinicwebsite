"use client";

import { MessageCircle, Phone, Calendar } from "lucide-react";
import { clinic } from "@/data/clinic";

export default function MobileActionBar() {
  const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${clinic.whatsappMessage}`;

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        display: "flex",
        alignItems: "stretch",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        boxShadow: "0 -4px 24px rgba(21, 25, 24, 0.12)",
      }}
      className="lg:hidden"
    >
      {/* WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          padding: "0.75rem 0.375rem",
          color: "#16A34A",
          fontFamily: "var(--font-body)",
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          borderRight: "1px solid var(--border)",
          minHeight: 64,
          transition: "background 0.2s ease",
        }}
        className="active:bg-green-50"
      >
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>

      {/* Call */}
      <a
        href={`tel:${clinic.phone}`}
        aria-label="Call clinic directly"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          padding: "0.75rem 0.375rem",
          color: "var(--primary)",
          fontFamily: "var(--font-body)",
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          borderRight: "1px solid var(--border)",
          minHeight: 64,
          transition: "background 0.2s ease",
        }}
        className="active:bg-teal-50"
      >
        <Phone size={20} />
        <span>Call</span>
      </a>

      {/* Book Consultation CTA (Dominant Action) */}
      <button
        onClick={() => handleNavClick("#book")}
        aria-label="Book a consultation"
        style={{
          flex: 1.8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "0.75rem 0.75rem",
          background: "var(--primary)",
          color: "#ffffff",
          fontFamily: "var(--font-body)",
          fontSize: "0.8125rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          minHeight: 64,
          cursor: "pointer",
          transition: "background 0.2s ease",
        }}
        className="active:bg-teal-900"
      >
        <Calendar size={18} />
        <span>Book Consultation</span>
      </button>
    </div>
  );
}
