"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import styles from "./Hero.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Doherty threshold: scrolling resolves fast enough that the user never
 * waits on us. Header is fixed, so offset the landing position by its height.
 */
function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - 70;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Hero() {
  const reduce = useReducedMotion();

  /** Staggered entrance. With reduced motion the element is simply present. */
  const rise = (delay: number) =>
    reduce
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: EASE, delay },
        };

  return (
    <section id="home" aria-labelledby="hero-heading" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {/* ─── Copy column ─────────────────────────────────────────── */}
          <div className={styles.copy}>
            <motion.div {...rise(0.08)} className={styles.eyebrowBadge}>
              <MapPin size={14} className={styles.eyebrowIcon} aria-hidden="true" />
              <span>Multispeciality Dental Care · Rajpur Road · Dehradun</span>
            </motion.div>

            <motion.h1 {...rise(0.16)} id="hero-heading" className={styles.headline}>
              Modern dental care, designed around your smile.
            </motion.h1>

            <motion.p {...rise(0.28)} className={styles.sub}>
              From Digital Smile Design to implants and restorative dentistry, every
              treatment plan is calm, precise, and explained before you begin.
            </motion.p>

            <motion.div {...rise(0.38)} className={styles.actions}>
              <button
                type="button"
                id="hero-book-btn"
                onClick={() => scrollToSection("book")}
                className={`btn btn-accent btn-lg ${styles.ctaPrimary}`}
              >
                <span>Book a Consultation</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("digital-smile-design")}
                className={styles.ctaSecondary}
              >
                <span>Explore Digital Smile Design</span>
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            </motion.div>
          </div>

          {/* ─── Portrait ────────────────────────────────────────────── */}
          <figure className={styles.figure}>
            <motion.div
              initial={reduce ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 0.9, ease: EASE }}
              className={styles.frame}
            >
              <motion.div
                initial={reduce ? false : { scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease: EASE }}
                style={{ position: "absolute", inset: 0 }}
              >
                <Image
                  src="/images/hero-smile.jpg"
                  alt="A patient smiling in the consultation room at Dr. Arora's Multispeciality Dental Clinic, Dehradun"
                  fill
                  priority
                  sizes="(max-width: 1023px) 92vw, 40vw"
                  className={styles.photo}
                />
              </motion.div>
            </motion.div>
          </figure>
        </div>
      </div>
    </section>
  );
}

