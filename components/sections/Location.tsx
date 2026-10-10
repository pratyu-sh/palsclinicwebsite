"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { clinic } from "@/data/clinic";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${clinic.whatsappMessage}`;

  return (
    <section
      id="location"
      aria-label="Clinic location"
      style={{
        background: "var(--surface)",
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
      }}
    >
      <div className="container" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Information & Action Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-eyebrow" style={{ marginBottom: "0.75rem" }}>
                Find Us
              </p>
              <h2 className="text-display-md" style={{ color: "var(--ink)", marginBottom: "1.5rem" }}>
                We&apos;re easy to find on Rajpur Road.
              </h2>

              {/* Address Box */}
              <div
                style={{
                  padding: "1.5rem",
                  background: "var(--background)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--border)",
                  marginBottom: "1.25rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.875rem", marginBottom: "1.25rem" }}>
                  <MapPin size={20} style={{ color: "var(--primary)", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        color: "var(--ink)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Dr. Arora&apos;s Multispeciality Dental Clinic
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "var(--ink-soft)",
                        lineHeight: 1.6,
                      }}
                    >
                      {clinic.address.line1},<br />
                      {clinic.address.line2},<br />
                      {clinic.address.city}, {clinic.address.state} {clinic.address.pincode}
                    </p>
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78125rem",
                    color: "var(--ink-muted)",
                    fontStyle: "italic",
                    paddingTop: "0.875rem",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  Landmark: Opposite NIEVD (Blind School), Jakhan, Rajpur Road
                </p>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <a
                href={clinic.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ justifyContent: "center", width: "100%", gap: "0.5rem" }}
              >
                <MapPin size={17} />
                Get Directions on Google Maps
                <ExternalLink size={14} style={{ opacity: 0.8 }} />
              </a>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" }}>
                <a
                  href={`tel:${clinic.phone}`}
                  className="btn btn-secondary"
                  style={{ justifyContent: "center", gap: "0.375rem" }}
                >
                  <Phone size={16} />
                  Call
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ justifyContent: "center", gap: "0.375rem" }}
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Responsive Map Embed */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.12 }}
            className="lg:col-span-6"
            style={{
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--border)",
              aspectRatio: "16/10",
              background: "var(--surface-warm)",
              position: "relative",
              width: "100%",
            }}
          >
            <iframe
              title="Dr. Arora's Multispeciality Dental Clinic location"
              src="https://maps.google.com/maps?q=Dr+Arora+Multispeciality+Dental+Clinic+Rajpur+Road+Dehradun&output=embed&z=15"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
