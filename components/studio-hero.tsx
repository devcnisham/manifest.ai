"use client";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
export function StudioHero() {
    const reduced = useReducedMotion();
    return (<section className="studio-hero" aria-labelledby="studio-hero-title">
      <h1 id="studio-hero-title" className="sr-only">Manifest AI — From prompt to production.</h1>
      <div className="studio-hero-frame">
        <motion.div className="studio-hero-photo" initial={reduced ? false : { scale: 1.06, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}>
          <Image src="/images/manifest-macbook-workspace.webp" alt="Manifest branding on a MacBook in a quiet, softly lit workspace." fill preload sizes="100vw" quality={85}/>
        </motion.div>
        <div className="studio-hero-vignette"/>
        <div className="studio-hero-caption"><span>LESS FRICTION.<br />MORE FORWARD.</span><a href="#waitlist">Join the waitlist <ArrowUpRight size={18}/></a></div>
      </div>
      <div className="studio-hero-bottom"><a href="#the-launch-gap" aria-label="Learn about Manifest"><ArrowDown size={18}/></a></div>
    </section>);
}
