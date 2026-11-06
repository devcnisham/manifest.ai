import Image from "next/image";
import { Reveal } from "@/components/reveal";

const scenes = [
  {
    src: "/images/manifest-macbook-studio.webp",
    alt: "Space-black MacBook displaying Manifest branding in a warmly lit graphite studio.",
    caption: "A space for your next idea.",
  },
  {
    src: "/images/manifest-macbook-workspace.webp",
    alt: "MacBook with a geometric Manifest monogram beside a notebook in a quiet workspace.",
    caption: "Room to think. A direction to build.",
  },
];

export function MacbookGallery() {
  return (
    <section className="marketing-section macbook-section" aria-labelledby="macbook-title">
      <Reveal className="marketing-heading">
        <div>
          <p className="marketing-eyebrow">YOUR NEXT BUILD STARTS HERE</p>
          <h2 id="macbook-title">Make room for what’s next.</h2>
        </div>
        <p>Bring the idea. Give the next step a little more clarity.</p>
      </Reveal>
      <div className="macbook-grid">
        {scenes.map((scene, index) => (
          <Reveal key={scene.src} delay={index * 0.1}>
            <figure className="macbook-scene">
              <div className="macbook-image-frame">
                <Image src={scene.src} alt={scene.alt} width={1536} height={1024}
                  sizes="(max-width: 760px) 100vw, 50vw" quality={85} />
              </div>
              <figcaption>{scene.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
