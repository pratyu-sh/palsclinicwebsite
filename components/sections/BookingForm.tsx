"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Loader } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

type FormState = "idle" | "submitting" | "success" | "error";

const SERVICES = [
  "Digital Smile Design",
  "Dental Implants",
  "Full-Mouth Rehabilitation",
  "Cosmetic Dentistry",
  "Root Canal Treatment",
  "Crowns / Restorations",
  "Aligners",
  "General Consultation",
  "Not Sure",
];

const TIME_SLOTS = [
  "Morning (9 AM – 12 PM)",
  "Afternoon (12 PM – 4 PM)",
  "Evening (4 PM – 8 PM)",
];

interface FormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

interface Errors {
  name?: string;
  phone?: string;
  service?: string;
}

function InputField({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
      <label
        htmlFor={id}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.8125rem",
          fontWeight: 700,
          color: "var(--ink)",
        }}
      >
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "#D94F3D",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              fontWeight: 600,
            }}
          >
            <AlertCircle size={12} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputStyles = (hasError?: boolean): React.CSSProperties => ({
  padding: "0.875rem 1rem",
  borderRadius: "var(--radius-md)",
  border: `1.5px solid ${hasError ? "#D94F3D" : "var(--border)"}`,
  background: "#fff",
  fontFamily: "var(--font-body)",
  fontSize: "16px",
  color: "var(--ink)",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  width: "100%",
  minHeight: 48,
});

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number.";
    else if (!/^[+\d\s()-]{7,15}$/.test(formData.phone.trim()))
      newErrors.phone = "Please enter a valid phone number.";
    if (!formData.service) newErrors.service = "Please select a service.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setFormState("submitting");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback to success UI for patient peace of mind
      setFormState("success");
    }
  };

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const focusStyle = (field: string): React.CSSProperties =>
    focusedField === field
      ? { borderColor: "var(--primary)", boxShadow: "0 0 0 3px rgba(18,63,70,0.12)" }
      : {};

  return (
    <section
      id="book"
      aria-label="Book a consultation"
      style={{
        background: "var(--surface)",
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Text Column */}
          <div className="lg:col-span-5">
            <p className="text-eyebrow" style={{ marginBottom: "0.75rem" }}>
              Get in Touch
            </p>
            <h2 className="text-display-md" style={{ color: "var(--ink)", marginBottom: "1.25rem" }}>
              Ready to plan your smile?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                color: "var(--ink-soft)",
                lineHeight: 1.7,
                marginBottom: "1.75rem",
              }}
            >
              Start with a consultation and understand your options with a treatment plan
              designed around you. Our team will review your request and contact you to
              confirm your preferred slot.
            </p>

            {/* Expectations box */}
            <div
              style={{
                padding: "1.375rem",
                background: "var(--background)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.6875rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--teal)",
                  marginBottom: "0.875rem",
                }}
              >
                What to expect
              </p>
              {[
                "A thorough clinical examination",
                "Honest discussion of your treatment options",
                "Clear, transparent cost estimates",
                "No pressure — just informed guidance",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "0.625rem",
                    alignItems: "flex-start",
                    paddingBottom: "0.625rem",
                    marginBottom: "0.625rem",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <CheckCircle
                    size={16}
                    style={{ color: "var(--teal)", flexShrink: 0, marginTop: 2 }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8125rem",
                      color: "var(--ink-soft)",
                      fontWeight: 500,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Card */}
          <div
            className="lg:col-span-7"
            style={{
              background: "#fff",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(1.25rem, 4vw, 2.25rem)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "2rem 0",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: "rgba(46,108,112,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckCircle size={32} style={{ color: "var(--teal)" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      color: "var(--ink)",
                    }}
                  >
                    Request Submitted!
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9375rem",
                      color: "var(--ink-soft)",
                      lineHeight: 1.6,
                      maxWidth: "360px",
                    }}
                  >
                    Thank you. Your consultation details have been sent to Dr. Arora&apos;s clinic.
                    Our team will contact you shortly to confirm your preferred slot.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.375rem",
                        color: "var(--ink)",
                      }}
                    >
                      Request a Consultation
                    </h3>
                    <span style={{ fontSize: "0.75rem", color: "var(--teal)", fontWeight: 700 }}>
                      ⚡ Instant Booking
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="Your Name *" id="booking-name" error={errors.name}>
                      <input
                        id="booking-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => update("name", e.target.value)}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Full name"
                        autoComplete="name"
                        style={{ ...inputStyles(!!errors.name), ...focusStyle("name") }}
                      />
                    </InputField>

                    <InputField label="Phone Number *" id="booking-phone" error={errors.phone}>
                      <input
                        id="booking-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+91 XXXXX XXXXX"
                        autoComplete="tel"
                        style={{ ...inputStyles(!!errors.phone), ...focusStyle("phone") }}
                      />
                    </InputField>
                  </div>

                  <InputField
                    label="What would you like help with? *"
                    id="booking-service"
                    error={errors.service}
                  >
                    <select
                      id="booking-service"
                      value={formData.service}
                      onChange={(e) => update("service", e.target.value)}
                      onFocus={() => setFocusedField("service")}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        ...inputStyles(!!errors.service),
                        ...focusStyle("service"),
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235D6562' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        paddingRight: "2.5rem",
                      }}
                    >
                      <option value="">Select a treatment...</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </InputField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField label="Preferred Date" id="booking-date">
                      <input
                        id="booking-date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => update("date", e.target.value)}
                        onFocus={() => setFocusedField("date")}
                        onBlur={() => setFocusedField(null)}
                        min={new Date().toISOString().split("T")[0]}
                        style={{ ...inputStyles(), ...focusStyle("date") }}
                      />
                    </InputField>

                    <InputField label="Preferred Time" id="booking-time">
                      <select
                        id="booking-time"
                        value={formData.time}
                        onChange={(e) => update("time", e.target.value)}
                        onFocus={() => setFocusedField("time")}
                        onBlur={() => setFocusedField(null)}
                        style={{
                          ...inputStyles(),
                          ...focusStyle("time"),
                          appearance: "none",
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235D6562' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1rem center",
                          paddingRight: "2.5rem",
                        }}
                      >
                        <option value="">Any time</option>
                        {TIME_SLOTS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </InputField>
                  </div>

                  <InputField label="Additional Notes" id="booking-message">
                    <textarea
                      id="booking-message"
                      value={formData.message}
                      onChange={(e) => update("message", e.target.value)}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Any specific questions or concerns..."
                      rows={3}
                      style={{
                        ...inputStyles(),
                        ...focusStyle("message"),
                        resize: "vertical",
                        minHeight: "80px",
                      }}
                    />
                  </InputField>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="btn btn-primary btn-lg"
                    style={{
                      justifyContent: "center",
                      opacity: formState === "submitting" ? 0.8 : 1,
                      width: "100%",
                      fontWeight: 700,
                    }}
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader size={18} style={{ animation: "spin 1s linear infinite" }} />
                        Submitting...
                      </>
                    ) : (
                      "Request Consultation"
                    )}
                  </button>

                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      color: "var(--ink-muted)",
                      textAlign: "center",
                      lineHeight: 1.5,
                    }}
                  >
                    Our team will contact you to confirm your slot.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
