import { FileText, GitBranch, ListChecks, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const deliverables = [
  { icon: FileText, title: "The MVP brief", description: "A shared answer to what you’re building, who it’s for, and what belongs in the first release.", items: ["The problem and the audience", "Day-one scope and exclusions", "A definition of done"] },
  { icon: GitBranch, title: "The build map", description: "A connected view of the decisions and dependencies that shape the implementation.", items: ["Architecture and user flows", "Tasks and dependencies", "Specs for your coding tools"] },
  { icon: ListChecks, title: "The launch checklist", description: "A practical way to work through the gaps between a working prototype and a release.", items: ["Security review points", "Infrastructure and store requirements", "Open questions and next actions"] },
];

export function LaunchDeliverables() {
  return (
    <section className="launch-deliverables" id="deliverables" aria-labelledby="deliverables-title">
      <div className="studio-container">
        <Reveal className="studio-section-heading"><h2 id="deliverables-title">Turn the thinking<br /><em>into something useful.</em></h2><p>Planned outputs you can build from,<br />share, and return to.</p></Reveal>
        <div className="deliverables-grid">{deliverables.map(({ icon: Icon, title, description, items }, index) => <Reveal key={title} delay={index * 0.08}><article className="deliverable"><span className="deliverable-icon"><Icon size={25} strokeWidth={1.4} aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article></Reveal>)}</div>
        <div className="deliverables-close"><p>Less context lost between an idea, a conversation, and the next commit.</p><a className="studio-text-link" href="#waitlist">Get early access <ArrowUpRight size={17} /></a></div>
      </div>
    </section>
  );
}
