import {
  ArrowRight,
  Check,
  GraduationCap,
  Rocket,
  Terminal,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Individual",
    icon: Terminal,
    description: "A focused path from your first idea to your next launch.",
    points: [
      "Day-1 scope and a Phase 2 backlog",
      "Architecture and user-flow context",
      "Security and launch preparation",
    ],
  },
  {
    name: "Teams",
    icon: Users,
    description:
      "A clear project direction for founders, teams, and collaborators.",
    points: [
      "A common scope for the project",
      "Task handoffs to Linear or Jira",
      "Specs and decks for collaborators",
    ],
  },
  {
    name: "Students",
    icon: GraduationCap,
    description:
      "Turn a class project or a first idea into a release you can share.",
    points: [
      "Step-by-step project scoping",
      "Architecture and user-flow context",
      "Project specs and launch checklists",
    ],
  },
  {
    name: "Hackathons",
    icon: Rocket,
    description:
      "Get your team aligned on a focused MVP and a build you can demo.",
    points: [
      "A focused scope for the time you have",
      "Clear build priorities and task handoffs",
      "A backlog for everything after the demo",
    ],
  },
];

export function PricingSection() {
  return (
    <section
      className="marketing-section pricing-section"
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <Reveal className="centered-heading">
        <h2 id="pricing-title">
          Start with an idea.
          <br />
          Find your fit.
        </h2>
        <p>
          Exploring plans for builders, teams, students, and hackathons.{" "}
          <br className="desktop-break" />
          Join the waitlist to hear when pricing is announced.
        </p>
      </Reveal>
      <div className="pricing-grid">
        {plans.map(
          ({ name, icon: Icon, description, points }, index) => (
            <Reveal key={name} delay={(index % 4) * 0.07}>
              <article className="pricing-card">
                <div className="pricing-card-top">
                  <span className="capability-icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                </div>
                <h3>{name}</h3>
                <p className="pricing-description">{description}</p>
                <div className="pricing-amount">
                  <span>Pricing coming soon</span>
                </div>
                <ul>
                  {points.map((point) => (
                    <li key={point}>
                      <Check size={14} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                >
                  <a href="#waitlist">
                    Join the waitlist <ArrowRight size={15} />
                  </a>
                </Button>
              </article>
            </Reveal>
          ),
        )}
      </div>
      <p className="pricing-disclosure">
        Proposed plan structure. Prices, limits, and feature availability are
        not yet final.
        <br />
        Joining the waitlist does not select a paid plan or require payment.
      </p>
    </section>
  );
}
