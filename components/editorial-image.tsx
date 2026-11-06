"use client";
import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export function EditorialImage() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-28, 28]);
  return (
    <figure className="editorial-image" ref={ref}>
      <div className="editorial-image-frame">
        <motion.div
          className="editorial-image-plane"
          style={{ y: reduced ? 0 : y }}
        >
          <Image
            src="/images/manifest-journey.webp"
            alt="Scattered metallic blocks becoming an ordered bridge toward an illuminated cube, illustrating the journey from an idea to a launch."
            fill
            sizes="(max-width: 760px) 100vw, 1200px"
            quality={85}
          />
        </motion.div>
        <span className="editorial-image-tag">FROM POSSIBILITY TO A PLAN</span>
      </div>
      <figcaption>A little structure changes what comes next.</figcaption>
    </figure>
  );
}
