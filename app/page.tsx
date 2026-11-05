import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Check,
  CheckCheck,
  ChevronDown,
  Code2,
  FileText,
  Flag,
  GitBranch,
  GitFork,
  GraduationCap,
  Layers,
  Lightbulb,
  Link2,
  ListChecks,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  Terminal,
  Users,
  WandSparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/header";
import { Brand } from "@/components/brand";
import { WaitlistForm } from "@/components/waitlist-form";
import { ProductPreview } from "@/components/product-preview";
import { Reveal } from "@/components/reveal";
const features = [
  {
    icon: Target,
    title: "MVP scope guardrail",
    text: "Find your smallest shippable version. Keep the essentials in, and the “one more things” out.",
    color: "purple",
  },
  {
    icon: Workflow,
    title: "Live blueprints",
    text: "See how it all connects with architecture and user-flow diagrams that evolve with your idea.",
    color: "blue",
  },
  {
    icon: Link2,
    title: "Linear & Jira sync",
    text: "Turn a clear plan into actionable tasks, right where you already manage your work.",
    color: "peach",
  },
  {
    icon: FileText,
    title: "Docs & decks",
    text: "Take your thinking with you. Export project specs to Google Docs and pitch decks to Slides.",
    color: "yellow",
  },
  {
    icon: ShieldCheck,
    title: "Security checks",
    text: "Catch exposed secrets and potential weak spots before your first users do.",
    color: "mint",
  },
  {
    icon: Store,
    title: "Store pre-flight",
    text: "Navigate App Store and Google Play requirements with a clear path to submission.",
    color: "pink",
  },
];
const audiences = [
  {
    icon: Terminal,
    title: "Indie hackers & vibe coders",
    text: "Less scope creep. More side projects that see daylight.",
  },
  {
    icon: Lightbulb,
    title: "Technical founders",
    text: "Go from a big vision to a focused first release.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    text: "Give your next big idea a real-world launch plan.",
  },
  {
    icon: Users,
    title: "Hackathon teams",
    text: "Get aligned fast. Build what matters before time’s up.",
  },
  {
    icon: Wrench,
    title: "Freelancers",
    text: "Keep client projects clear, contained, and moving.",
  },
];
const faqs = [
  [
    "What is Manifest?",
    "Manifest is a mission control workspace in development for people building with AI. It’s designed to guide your project from an initial idea to a live launch.",
  ],
  [
    "Does it replace Cursor or Claude Code?",
    "No. Keep coding with the tools you love. Manifest is being built to help with everything around the code: scope, planning, security, and launch readiness.",
  ],
  [
    "When does it launch?",
    "We’re building toward early access. There’s no confirmed launch date yet. Join the waitlist and we’ll let you know when it’s ready.",
  ],
  [
    "Who is it for?",
    "Indie hackers, founders, students, hackathon teams, and freelancers who use AI to build software and want a clearer path to shipping.",
  ],
  [
    "Is my code safe?",
    "We’ll publish details about code access, data handling, and security before launch, so you can make an informed decision.",
  ],
];
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-content">
            <div className="eyebrow launch-badge">
              <span className="status-dot" /> Pre-launch · early access waitlist
              open
            </div>
            <h1>
              From prompt
              <br />
              to <span>production.</span>
            </h1>
            <p className="hero-subtitle">
              Manifest keeps your AI-built project scoped, secure, and ready to
              ship.
            </p>
            <WaitlistForm id="waitlist" />
          </div>
          <Reveal className="preview-container">
            <div id="workspace">
              <ProductPreview />
            </div>
          </Reveal>
        </section>
        <section className="intro-band">
          <Reveal>
            <h2>
              One workspace.
              <br className="mobile-break" /> From idea to launch.
            </h2>
            <p>
              Describe your idea. Manifest asks the right questions, locks your
              MVP, and guides
              <br className="desktop-break" /> you through building, tracking,
              and shipping.
            </p>
          </Reveal>
          <div className="journey">
            <span>
              <Lightbulb /> The idea
            </span>
            <i />
            <span>
              <ListChecks /> The plan
            </span>
            <i />
            <span>
              <Code2 /> The build
            </span>
            <i />
            <span>
              <Rocket /> The launch
            </span>
          </div>
        </section>
        <section className="section scope-section">
          <Reveal className="two-column">
            <div className="section-copy">
              <span className="section-kicker">SCOPE GUARDRAIL</span>
              <h2>
                You bring the <br />
                idea. Manifest <br />
                keeps it shippable.
              </h2>
              <p>
                The hardest part isn’t writing the code anymore.
                <br className="desktop-break" /> It’s knowing what to build,
                what to skip, and when to stop adding “just one more thing.”
              </p>
              <p>
                Keep your day-one essentials in focus. Give the rest a place to
                wait.
              </p>
              <a className="text-link" href="#waitlist">
                Make room for your first launch <ArrowUpRight size={16} />
              </a>
            </div>
            <div
              className="scope-illustration"
              aria-label="Illustration of an out-of-scope feature moved to a later phase"
            >
              <div className="scope-orbit orbit-one" />
              <div className="scope-orbit orbit-two" />
              <span className="floating-label">
                <span className="status-dot" /> FOCUS MODE, ON.
              </span>
              <div className="scope-card">
                <div className="scope-card-top">
                  <span className="icon-box purple">
                    <Flag size={19} />
                  </span>
                  <span className="tiny-label">SCOPE GUARDRAIL</span>
                  <Sparkles size={16} />
                </div>
                <h3>Great idea. Next release.</h3>
                <p>
                  Your MVP doesn’t need to do everything.
                  <br />
                  It just needs to do the right things.
                </p>
                <div className="flagged-feature">
                  <span>
                    <Layers size={16} /> Dark mode
                  </span>
                  <span className="phase-tag">
                    Moved to Phase 2 <ArrowRight size={12} />
                  </span>
                </div>
                <div className="scope-card-bottom">
                  <CheckCheck size={15} /> Day-1 scope stays on track.
                </div>
              </div>
              <span className="scope-sticker">
                <Check size={13} /> Ship the essentials first
              </span>
            </div>
          </Reveal>
        </section>
        <section className="section features-section" id="features">
          <Reveal className="section-heading">
            <span className="section-kicker">FEATURES</span>
            <h2>
              Everything between code
              <br />
              and launch, handled.
            </h2>
            <p>Your coding tool writes the code. Manifest covers the rest.</p>
          </Reveal>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text, color }, i) => (
              <Reveal key={title}>
                <article className="feature-card">
                  <div className="feature-top">
                    <span className={`icon-box ${color}`}>
                      <Icon size={21} strokeWidth={1.6} />
                    </span>
                    <span className="coming-badge">Coming soon</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className={`feature-mini mini-${i}`} aria-hidden="true">
                    {i === 0 ? (
                      <>
                        <span>
                          <Check size={11} /> Core features
                        </span>
                        <span className="mini-later">
                          Nice-to-haves <ArrowRight size={11} /> Later
                        </span>
                      </>
                    ) : i === 1 ? (
                      <div className="mini-flow">
                        <span>Idea</span>
                        <i />
                        <span>Blueprint</span>
                        <i />
                        <span>Build</span>
                      </div>
                    ) : i === 2 ? (
                      <>
                        <span className="linear-icon">◒</span>
                        <span className="mini-dashes" />
                        <GitBranch size={18} />
                        <span className="mini-dashes" />
                        <span className="jira-icon">◆</span>
                      </>
                    ) : i === 3 ? (
                      <>
                        <span className="mini-file">
                          <FileText size={18} /> Your spec
                        </span>
                        <ArrowRight size={12} />
                        <span className="mini-file yellow">
                          <Blocks size={17} /> Your pitch
                        </span>
                      </>
                    ) : i === 4 ? (
                      <>
                        <ShieldCheck size={17} />
                        <span>Secrets stay secret.</span>
                        <Check size={13} />
                      </>
                    ) : (
                      <>
                        <Store size={18} />
                        <span>Ready for review</span>
                        <span className="mini-steps">
                          <i />
                          <i />
                          <i />
                        </span>
                      </>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="section readiness-section">
          <Reveal className="readiness-inner">
            <div className="section-copy">
              <span className="section-kicker">SHIP READINESS</span>
              <h2>
                Know when you’re <br />
                ready to ship.
              </h2>
              <p>
                “It runs on my machine” is a start. A launch takes a little
                more.
              </p>
              <p>
                The Ship Readiness Score brings your moving parts into one clear
                picture, so you know what’s ready and what still needs a little
                love.
              </p>
              <span className="readiness-note">
                <ShieldCheck size={15} /> Built for confidence, before you go
                live.
              </span>
            </div>
            <div className="readiness-card">
              <div className="panel-header">
                <span>
                  <Rocket size={16} /> Launch readiness
                </span>
                <span className="coming-badge">Illustration</span>
              </div>
              <div className="gauge">
                <svg viewBox="0 0 240 132" aria-hidden="true">
                  <path
                    className="gauge-track"
                    d="M25 115 A95 95 0 0 1 215 115"
                  />
                  <path
                    className="gauge-progress"
                    d="M25 115 A95 95 0 0 1 215 115"
                    pathLength="100"
                  />
                </svg>
                <div className="gauge-value">
                  82<span>%</span>
                  <small>SHIP READINESS SCORE</small>
                </div>
                <span className="gauge-min">0%</span>
                <span className="gauge-max">100%</span>
              </div>
              <div className="readiness-categories">
                {[
                  ["Scope", 100],
                  ["Build health", 90],
                  ["Legal", 65],
                  ["Store audit", 70],
                  ["Infrastructure", 85],
                ].map(([label, value]) => (
                  <div className="category" key={label}>
                    <span>{label}</span>
                    <div className="category-track">
                      <i style={{ width: `${value}%` }} />
                    </div>
                    <span>{value}%</span>
                  </div>
                ))}
              </div>
              <p className="illustration-note">
                An example score, not a live project assessment.
              </p>
            </div>
          </Reveal>
        </section>
        <section className="section tools-section">
          <Reveal>
            <span className="section-kicker">
              YOUR TOOLKIT. NOW WITH A FLIGHT PLAN.
            </span>
            <h2>
              Works with the tools
              <br className="mobile-break" /> you already use.
            </h2>
            <p>Keep your flow. Manifest is designed to fit right in.</p>
            <div className="tool-chips">
              {[
                { name: "Cursor", icon: ArrowUpRight },
                { name: "Claude Code", icon: Sparkles },
                { name: "Windsurf", icon: WandSparkles },
                { name: "v0", icon: Code2 },
                { name: "Linear", icon: CircleIcon },
                { name: "Jira", icon: GitBranch },
                { name: "Google Docs", icon: FileText },
                { name: "Google Slides", icon: Blocks },
                { name: "GitHub", icon: GitFork },
              ].map(({ name, icon: Icon }) => (
                <span className="tool-chip" key={name}>
                  <Icon size={18} />
                  {name}
                </span>
              ))}
            </div>
            <p className="tools-note">
              Planned compatibility and integrations. Available features will be
              confirmed at launch.
            </p>
          </Reveal>
        </section>
        <section className="section audience-section" id="who-its-for">
          <Reveal className="section-heading">
            <span className="section-kicker">WHO IT’S FOR</span>
            <h2>Built for people who ship.</h2>
            <p>Whether it’s your first project or your next big thing.</p>
          </Reveal>
          <div className="audience-grid">
            {audiences.map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <article className="audience-card">
                  <Icon size={23} strokeWidth={1.5} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="section faq-section" id="faq">
          <Reveal className="faq-layout">
            <div>
              <span className="section-kicker">FAQ</span>
              <h2>Questions, answered.</h2>
              <p>Still early. Always transparent.</p>
            </div>
            <div className="faq-list">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <ChevronDown size={17} />
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </section>
        <section className="final-cta">
          <Reveal>
            <span className="cta-symbol" aria-hidden="true">
              <Rocket size={27} strokeWidth={1.3} />
            </span>
            <span className="section-kicker">
              FROM THE FIRST PROMPT TO THE FINISH LINE
            </span>
            <h2>Be first to ship with Manifest.</h2>
            <p>Your next idea is worth finishing. Let’s get it out there.</p>
            <WaitlistForm />
          </Reveal>
        </section>
      </main>
      <footer className="site-footer">
        <div>
          <Brand />
          <span className="footer-tagline">From prompt to production.</span>
        </div>
        <span className="copyright">
          © {new Date().getFullYear()} Manifest AI
        </span>
        <nav aria-label="Legal">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="#" aria-label="Back to top">
            Back to top <ArrowUpRight size={13} />
          </a>
        </nav>
      </footer>
    </>
  );
}
function CircleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3 14 10 21a10 10 0 0 1-7-7Zm-1-4 12 12a10 10 0 0 0 3-1L3 7a10 10 0 0 0-1 3Zm3-6 15 15A10 10 0 0 0 5 4Z" />
    </svg>
  );
}
