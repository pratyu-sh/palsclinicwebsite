"use client";

import Link from "next/link";
import { MapPin, Phone, MessageCircle, Star, ExternalLink } from "lucide-react";
import { clinic } from "@/data/clinic";

const footerLinks = {
  treatments: [
    { label: "Digital Smile Design", href: "#digital-smile-design" },
    { label: "Dental Implants", href: "#treatments" },
    { label: "Full-Mouth Rehabilitation", href: "#treatments" },
    { label: "Cosmetic Dentistry", href: "#treatments" },
    { label: "Crowns & Bridges", href: "#treatments" },
    { label: "Root Canal Treatment", href: "#treatments" },
    { label: "Aligners", href: "#treatments" },
  ],
  clinic: [
    { label: "Doctor", href: "#doctor" },
    { label: "Patient Stories", href: "#reviews" },
    { label: "Clinic Experience", href: "#clinic" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact & Location", href: "#location" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Medical Disclaimer", href: "/disclaimer" },
  ],
};

export default function Footer() {
  const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${clinic.whatsappMessage}`;

  return (
    <>
      <style>{`
        .footer-link {
          font-size: 0.8125rem;
          color: rgba(255,255,255,0.7);
          transition: color 0.2s ease;
          text-decoration: none;
          display: inline-block;
          padding: 2px 0;
        }
        .footer-link:hover { color: #fff; }
        .footer-legal-link {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.45);
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .footer-legal-link:hover { color: rgba(255,255,255,0.8); }
        .footer-action-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          color: var(--accent);
          font-weight: 600;
          transition: opacity 0.2s ease;
          text-decoration: none;
          min-height: 40px;
        }
        .footer-action-link:hover { opacity: 0.8; }
      `}</style>

      <footer
        style={{
          background: "var(--primary-dark)",
          color: "rgba(255,255,255,0.8)",
          paddingTop: "3.5rem",
          paddingBottom: "2.5rem",
        }}
      >
        <div className="container">
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[rgba(255,255,255,0.1)]">
            {/* Brand */}
            <div>
              <div style={{ marginBottom: "1.25rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    color: "#fff",
                    lineHeight: 1.2,
                    marginBottom: "0.25rem",
                  }}
                >
                  Dr. Arora&apos;s
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--sage)",
                  }}
                >
                  Multispeciality Dental Clinic
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                <div style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                  <MapPin size={16} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontSize: "0.8125rem", lineHeight: 1.6 }}>
                    {clinic.address.line1},<br />
                    {clinic.address.line2},<br />
                    {clinic.address.city}, {clinic.address.state} {clinic.address.pincode}
                  </p>
                </div>

                <a
                  href={`tel:${clinic.phone}`}
                  className="footer-link"
                  style={{ display: "inline-flex", gap: "0.625rem", alignItems: "center" }}
                >
                  <Phone size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  {clinic.phoneDisplay}
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ display: "inline-flex", gap: "0.625rem", alignItems: "center" }}
                >
                  <MessageCircle size={15} style={{ color: "#25D366", flexShrink: 0 }} />
                  WhatsApp Consultation
                </a>
              </div>

              {/* Rating Pill */}
              <div
                style={{
                  marginTop: "1.25rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.625rem 0.875rem",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Star size={15} fill="#F5A623" style={{ color: "#F5A623" }} />
                <span style={{ fontWeight: 700, color: "#fff", fontSize: "0.875rem" }}>
                  {clinic.rating}
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--sage)" }}>
                  · {clinic.reviewCount}+ Google Reviews
                </span>
              </div>
            </div>

            {/* Treatments */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--sage)",
                  marginBottom: "1rem",
                }}
              >
                Treatments
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {footerLinks.treatments.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinic Links */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--sage)",
                  marginBottom: "1rem",
                }}
              >
                Clinic
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {footerLinks.clinic.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--sage)",
                  marginBottom: "1rem",
                }}
              >
                Directions & Reviews
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a
                  href={clinic.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-action-link"
                >
                  <ExternalLink size={14} />
                  Get Directions on Map
                </a>
                <a
                  href={clinic.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-action-link"
                >
                  <ExternalLink size={14} />
                  Read Google Reviews
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Legal Bar */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              paddingTop: "1.25rem",
            }}
          >
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
              © {new Date().getFullYear()} Dr. Arora&apos;s Multispeciality Dental Clinic, Dehradun.
            </p>

            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
              {footerLinks.legal.map((link) => (
                <Link key={link.label} href={link.href} className="footer-legal-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Medical disclaimer */}
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.6875rem",
              color: "rgba(255,255,255,0.25)",
              lineHeight: 1.6,
              maxWidth: "640px",
            }}
          >
            The information provided on this website is for informational purposes only and does not
            constitute medical advice. Treatments, outcomes, and timelines vary between individuals.
            Please consult a qualified dental professional for personalised clinical guidance.
          </p>
        </div>
      </footer>
    </>
  );
}
