import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown, FileText, Layers, LockKeyhole, Rocket, ScanLine, Target, Workflow } from "lucide-react";
import { Brand, Mark } from "@/components/brand";
import { Reveal } from "@/components/reveal";
import { StudioNavigation } from "@/components/studio-navigation";
import { AgentStrips } from "@/components/agent-strips";
import { ProjectExamples } from "@/components/project-examples";
import { LaunchDeliverables } from "@/components/launch-deliverables";
import { StudioHero } from "@/components/studio-hero";
import { PricingSection } from "@/components/pricing-section";
import { WaitlistForm } from "@/components/waitlist-form";
import "./studio.css";
const process = [
    { number: "01", title: "Find the first release.", text: "Turn the big idea into a focused MVP. Keep the essentials close and give everything else a place in Phase 2.", result: "A scope you can build", icon: Target },
    { number: "02", title: "Give the build direction.", text: "Connect the architecture, specs, and next steps while your AI coding tools handle implementation.", result: "A plan that travels with you", icon: Workflow },
    { number: "03", title: "Make the next move clear.", text: "Work through security and launch requirements before sharing your project with its first users.", result: "A more considered launch", icon: Rocket },
];
const faqs = [
    ["What is Manifest AI?", "Manifest is an AI agent in development for the decisions around building software: project scope, architecture, task handoffs, and launch preparation. It is designed to help you take an idea toward a first release."],
    ["Does Manifest write the code?", "Keep using your preferred AI coding tools for implementation. Manifest is being built to connect the scope, decisions, and launch work around that code. Planned compatibility includes Cursor, Claude Code, Windsurf, v0, and GitHub; availability will be confirmed at launch."],
    ["When can I use it?", "There is no confirmed release date yet. Join the waitlist and we’ll email you when early access opens. The capabilities described here are planned and may change as we build."],
    ["Are there plans for students and hackathons?", "Yes. We’re exploring plans for individuals, teams, students, and hackathons. Pricing, limits, and feature availability have not been finalized. Joining the waitlist does not commit you to a paid plan."],
    ["What access will Manifest need to my project?", "Code permissions, supported connections, and data-handling details will be published before product access opens. Joining the email waitlist does not connect your repositories or grant access to your code."],
];
export default function Home() {
    return (<div className="manifest-site">
      <StudioNavigation />
      <main id="main">
        <StudioHero />
        <AgentStrips />
        <section className="studio-intro studio-light" id="the-launch-gap" aria-labelledby="intro-title">
          <div className="studio-container">
            <Reveal className="studio-intro-grid">
              <div><h2 id="intro-title">The code is moving.<br />Let’s move the<br /><em>whole idea.</em></h2></div>
              <div className="studio-intro-copy"><span className="studio-mini-mark"><Mark /></span><p className="studio-lead">Good code is only part of a great launch.</p><p>Manifest brings direction to everything around it. Shape the scope, connect the decisions, and keep a clear path from the first prompt to the first release.</p><a className="studio-text-link" href="#how-it-works">A little structure. A lot more clarity. <ArrowUpRight size={18}/></a></div>
            </Reveal>
            
          </div>
        </section>

        <section className="studio-process studio-light" id="how-it-works" aria-labelledby="process-title">
          <div className="studio-container">
            <Reveal className="studio-section-heading"><div><h2 id="process-title">From possibility<br />to <em>a way forward.</em></h2></div><p>Three connected stages.<br />One project with a direction.</p></Reveal>
            <div className="studio-process-grid">{process.map(({ number, title, text, result, icon: Icon }, index) => <Reveal key={number} delay={index * 0.1}><article className="studio-step"><div className="studio-step-track"><span>{number}</span><i /><Icon size={19}/></div><h3>{title}</h3><p>{text}</p><div className="studio-step-result"><Check size={14}/>{result}</div></article></Reveal>)}</div>
            <p className="studio-disclosure">The intended workflow. Product capabilities are in development.</p>
          </div>
        </section>

        <section className="studio-capabilities" id="features" aria-labelledby="features-title">
          <div className="studio-container">
            <Reveal className="studio-section-heading"><div><h2 id="features-title">Fewer loose ends.<br /><em>More momentum.</em></h2></div><p>A workspace for the thinking<br />that makes the building count.</p></Reveal>
            <div className="studio-feature-grid">
              <Reveal className="studio-feature-wide"><article className="studio-feature studio-scope"><div className="studio-feature-copy"><Target size={24}/><h3>Keep the first version<br />within reach.</h3><p>Define day-one essentials. Park the good-but-not-yet ideas in a Phase 2 backlog.</p></div><div className="studio-scope-art" aria-hidden="true"><div className="scope-orbit scope-orbit-one"/><div className="scope-orbit scope-orbit-two"/><div className="scope-orbit scope-orbit-three"/><div className="scope-core"><Target size={35}/></div></div></article></Reveal>
              <Reveal delay={0.08}><article className="studio-feature studio-blueprint"><Layers size={24}/><h3>See how it<br />comes together.</h3><p>Make architecture, flows, and project decisions easier to understand and carry forward.</p><div className="studio-blueprint-art" aria-hidden="true"><span /><i /><span /><i /><span /></div></article></Reveal>
              <Reveal><article className="studio-feature studio-handoff"><FileText size={24}/><h3>Let the context<br />come with you.</h3><p>Bring plans into Linear and Jira, and turn project thinking into specs and decks for collaborators.</p><div className="studio-handoff-tools"><span>Linear</span><span>Jira</span><span>Docs</span><span>Slides</span></div></article></Reveal>
              <Reveal className="studio-feature-wide" delay={0.08}><article className="studio-feature studio-readiness"><div className="studio-feature-copy"><ScanLine size={24}/><h3>Think beyond<br />“it runs locally.”</h3><p>Work through exposed secrets, infrastructure, and store requirements before your first release.</p></div><div className="studio-readiness-art" aria-hidden="true"><div className="readiness-ring"><LockKeyhole size={38} strokeWidth={1.2}/></div></div></article></Reveal>
            </div>
            <p className="studio-disclosure">Planned capabilities and integrations. Availability will be confirmed as early access approaches.</p>
          </div>
        </section>

        <LaunchDeliverables />

        <section className="studio-editorial studio-light" id="who-its-for" aria-labelledby="builders-title">
          <div className="studio-container">
            <Reveal className="studio-editorial-heading"><h2 id="builders-title">Your next side project.<br />Your team’s big bet.<br /><em>Your “what if.”</em></h2><p>Solo builders. Founders. Student teams.<br />People racing the hackathon clock.</p></Reveal>
            <Reveal><figure className="studio-editorial-image"><Image src="/images/manifest-macbook-studio-v2.webp" alt="A dark MacBook displaying Manifest branding in a warm, focused studio." width={1536} height={1024} sizes="(max-width: 760px) 100vw, 1200px" quality={85}/></figure></Reveal>
          </div>
        </section>

        <ProjectExamples />

        <div className="studio-plans studio-light"><PricingSection /></div>

        <section className="studio-faq studio-light" id="faq" aria-labelledby="faq-title">
          <div className="studio-container studio-faq-grid"><Reveal><h2 id="faq-title">A little<br /><em>more clarity.</em></h2><p>Good questions.<br />Straight answers.</p></Reveal><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18}/></summary><p>{answer}</p></details>)}</div></div>
        </section>

        <section className="studio-access" id="early-access" aria-labelledby="access-title">
          <div className="studio-container studio-access-grid"><Reveal><h2 id="access-title">The next chapter<br />starts with<br /><em>your idea.</em></h2><p>Manifest is in development.<br />Be there when early access opens.</p></Reveal><Reveal delay={0.1} className="studio-access-form"><WaitlistForm id="waitlist"/></Reveal></div>
        </section>
      </main>
      <footer className="studio-footer"><div className="studio-container"><div className="studio-footer-top"><Brand /><p>From prompt to production.</p><div><Link href="/signin">Sign in <ArrowUpRight size={13}/></Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div><div className="studio-footer-word" aria-hidden="true">Manifest</div><div className="studio-footer-bottom"><span>© {new Date().getFullYear()} Manifest AI</span></div></div></footer>
    </div>);
}
