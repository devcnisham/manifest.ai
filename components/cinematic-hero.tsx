"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#early-access", label: "Early access", className: "dock-about" },
];

export function CinematicHero() {
  const section = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 95]);

  return (
    <section
      ref={section}
      className="cinematic-hero hero-art-only"
      aria-labelledby="hero-title"
    >
      <h1 id="hero-title" className="sr-only">
        Manifest AI — From prompt to production.
      </h1>
      <div className="hero-environment" aria-hidden="true">
        <div className="environment-light light-warm" />
        <div className="environment-light light-cool" />
      </div>
      <motion.div
        className="hero-image-wrap"
        style={{ y: reduced ? 0 : y }}
        initial={reduced ? false : { opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/manifest-hero.webp"
          alt="A brushed-metal Manifest emblem floating above a dark stone plinth with sculptural orbital rings."
          fill
          preload
          sizes="100vw"
          quality={85}
          className="hero-scene-image"
        />
      </motion.div>
      <div className="hero-image-shade" aria-hidden="true" />
      <motion.nav
        className="hero-dock"
        style={{ x: "-50%" }}
        aria-label="Explore Manifest"
        initial={reduced ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: reduced ? 0 : 0.3 }}
      >
        {links.map(({ href, label, className }) => (
          <motion.a
            key={href}
            href={href}
            className={className}
            whileHover={reduced ? undefined : { y: -2 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
          >
            {label}
          </motion.a>
        ))}
        <motion.a
          href="#waitlist"
          className="dock-cta"
          whileHover={reduced ? undefined : { y: -2 }}
          whileTap={reduced ? undefined : { scale: 0.97 }}
        >
          Join the waitlist <ArrowUpRight size={14} />
        </motion.a>
      </motion.nav>
      <a
        href="#the-launch-gap"
        className="hero-scroll-cue"
        aria-label="Explore the launch story"
      >
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
