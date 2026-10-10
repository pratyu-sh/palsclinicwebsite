"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Menu, X, MessageCircle, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clinic } from "@/data/clinic";

const navLinks = [
  { label: "Treatments", href: "#treatments" },
  { label: "Digital Smile Design", href: "#digital-smile-design" },
  { label: "Why Us", href: "#why-us" },
  { label: "Doctor", href: "#doctor" },
  { label: "Patient Stories", href: "#reviews" },
  { label: "Clinic", href: "#clinic" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${clinic.whatsappMessage}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          background: scrolled ? "rgba(248, 247, 243, 0.96)" : "rgba(248, 247, 243, 0.72)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 20px rgba(21, 25, 24, 0.08)" : "none",
        }}
      >
        <div
          className="container"
          style={{
            height: "var(--header-height)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Dr. Arora's Dental Clinic — Home"
            style={{ display: "flex", flexDirection: "column", gap: "1px", flexShrink: 0 }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: "var(--primary)",
                transition: "color 0.3s ease",
                lineHeight: 1.15,
              }}
            >
              Dr. Arora&apos;s
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink-soft)",
                transition: "color 0.3s ease",
              }}
            >
              Multispeciality Dental Clinic
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Main desktop navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.125rem",
            }}
            className="hidden lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  padding: "0.5rem 0.875rem",
                  borderRadius: "var(--radius-full)",
                  color: "var(--ink-soft)",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--ink)";
                  (e.target as HTMLElement).style.background = "var(--surface-warm)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--ink-soft)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
            <a
              href={`tel:${clinic.phone}`}
              aria-label="Call clinic"
              className="hidden lg:flex"
              style={{
                alignItems: "center",
                gap: "0.375rem",
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--ink-soft)",
                transition: "color 0.2s ease",
                padding: "0.5rem",
              }}
            >
              <Phone size={14} />
              {clinic.phoneDisplay}
            </a>

            <a
              href="#book"
              onClick={(e) => handleNavClick(e, "#book")}
              className="btn btn-primary btn-sm hidden lg:inline-flex"
              style={{
                fontWeight: 700,
                transition: "all 0.3s ease",
              }}
            >
              Book Consultation
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              className="lg:hidden"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 44,
                height: 44,
                borderRadius: "var(--radius-md)",
                background: "var(--surface-warm)",
                color: "var(--ink)",
                transition: "all 0.2s ease",
              }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ─── Mobile Drawer Menu Overlay ────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(9, 35, 39, 0.65)",
                zIndex: 98,
                backdropFilter: "blur(6px)",
              }}
            />

            {/* Slide-out Panel */}
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(340px, 88vw)",
                background: "var(--surface)",
                zIndex: 99,
                padding: "1.5rem 1.25rem 2rem",
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                boxShadow: "-8px 0 32px rgba(0,0,0,0.2)",
              }}
            >
              {/* Drawer Top Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", color: "var(--ink)" }}>
                    Dr. Arora&apos;s
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.625rem", fontWeight: 700, color: "var(--teal)", textTransform: "uppercase" }}>
                    Dental Navigation
                  </p>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  style={{
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "var(--radius-md)",
                    background: "var(--surface-warm)",
                    color: "var(--ink)",
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav aria-label="Mobile menu navigation" style={{ flex: 1 }}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 + 0.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.9375rem 0",
                      borderBottom: "1px solid var(--border)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--ink)",
                      minHeight: 48,
                    }}
                  >
                    <span>{link.label}</span>
                    <span style={{ color: "var(--ink-muted)", fontSize: "0.8125rem" }}>→</span>
                  </motion.a>
                ))}
              </nav>

              {/* Drawer Bottom Actions */}
              <div style={{ marginTop: "1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a
                  href="#book"
                  onClick={(e) => handleNavClick(e, "#book")}
                  className="btn btn-primary"
                  style={{ justifyContent: "center", width: "100%", gap: "0.5rem" }}
                >
                  <Calendar size={18} />
                  Book Consultation
                </a>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                  <a
                    href={`tel:${clinic.phone}`}
                    className="btn btn-secondary btn-sm"
                    style={{ justifyContent: "center", gap: "0.375rem" }}
                  >
                    <Phone size={15} />
                    Call Clinic
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                    style={{ justifyContent: "center", gap: "0.375rem" }}
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
