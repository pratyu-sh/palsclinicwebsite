"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { reviews } from "@/data/reviews";
import { clinic } from "@/data/clinic";

const ease = [0.22, 1, 0.36, 1] as const;

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? "#F5A623" : "transparent"}
          style={{ color: "#F5A623" }}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredReview = reviews.find((r) => r.featured) || reviews[0];
  const carouselReviews = reviews.filter((r) => !r.featured);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + carouselReviews.length) % carouselReviews.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % carouselReviews.length);

  return (
    <section
      id="reviews"
      aria-label="Patient reviews"
      style={{
        background: "var(--background)",
        paddingTop: "var(--section-padding)",
        paddingBottom: "var(--section-padding)",
      }}
    >
      <div className="container" ref={ref}>
        {/* Heading Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "2.5rem",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="text-eyebrow"
              style={{ marginBottom: "0.75rem" }}
            >
              Patient Stories
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease, delay: 0.1 }}
              className="text-display-md"
              style={{ color: "var(--ink)" }}
            >
              Trusted by patients in Dehradun.
            </motion.h2>
          </div>

          {/* Overall Rating Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.625rem 1.125rem",
              background: "var(--surface)",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                color: "var(--ink)",
                lineHeight: 1,
              }}
            >
              {clinic.rating}
            </span>
            <div>
              <StarRating rating={5} />
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  color: "var(--ink-soft)",
                  marginTop: 1,
                  fontWeight: 600,
                }}
              >
                {clinic.reviewCount} Google Reviews
              </p>
            </div>
          </motion.div>
        </div>

        {/* Reviews Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured Review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-6 flex flex-col justify-between"
            style={{
              background: "var(--primary-dark)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              color: "#fff",
            }}
          >
            <div>
              <div style={{ marginBottom: "1.25rem" }}>
                <StarRating rating={featuredReview.rating} />
              </div>
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.125rem, 2vw, 1.35rem)",
                  color: "#fff",
                  lineHeight: 1.5,
                  fontStyle: "italic",
                  marginBottom: "1.5rem",
                }}
              >
                &ldquo;{featuredReview.text}&rdquo;
              </blockquote>
            </div>

            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.2rem",
                }}
              >
                {featuredReview.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  color: "var(--sage)",
                }}
              >
                {featuredReview.treatment} · {featuredReview.date} · Google
              </p>
            </div>
          </motion.div>

          {/* Carousel Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-between gap-4"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35, ease }}
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                {[
                  carouselReviews[activeIndex],
                  carouselReviews[(activeIndex + 1) % carouselReviews.length],
                ].map((review) => (
                  <div
                    key={review.id}
                    style={{
                      background: "var(--surface)",
                      borderRadius: "var(--radius-lg)",
                      padding: "1.375rem",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <StarRating rating={review.rating} />
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.7rem",
                          color: "var(--ink-muted)",
                        }}
                      >
                        {review.date}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "var(--ink-soft)",
                        lineHeight: 1.6,
                        marginBottom: "0.875rem",
                      }}
                    >
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          color: "var(--ink)",
                        }}
                      >
                        {review.name}
                      </p>
                      {review.treatment && (
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.7rem",
                            color: "var(--ink-muted)",
                            marginTop: 1,
                          }}
                        >
                          {review.treatment} · Google Review
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "0.5rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button
                  onClick={prev}
                  aria-label="Previous patient review"
                  className="btn btn-ghost"
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-full)",
                    padding: 0,
                    width: 44,
                    height: 44,
                    minHeight: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next patient review"
                  className="btn btn-ghost"
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-full)",
                    padding: 0,
                    width: 44,
                    height: 44,
                    minHeight: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <a
                href={clinic.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: "var(--primary)",
                }}
              >
                Read Google Reviews
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
