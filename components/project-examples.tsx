"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Lightbulb } from "lucide-react";
import { Reveal } from "@/components/reveal";

const projects = [
  {
    name: "A solo SaaS",
    idea: "A simple booking tool for independent tutors.",
    focus: "Make the first booking work beautifully.",
    scope: ["Tutor availability and booking requests", "Email confirmations", "A simple way to manage sessions"],
    later: "Payments, subscriptions, and a tutor marketplace.",
    checks: "Time zones, double bookings, and access to student details.",
  },
  {
    name: "An internal tool",
    idea: "One place for the team to track equipment requests.",
    focus: "Get a request from submitted to resolved.",
    scope: ["An equipment request form", "An owner and status for each request", "A team view of open requests"],
    later: "Inventory forecasting and automated procurement.",
    checks: "Employee permissions, request ownership, and data retention.",
  },
  {
    name: "A hackathon build",
    idea: "Help students find a study group for their next exam.",
    focus: "Make one complete demo flow possible.",
    scope: ["Create a group for a course", "Browse and join an available group", "Share a meeting time and place"],
    later: "Live chat, recommendations, and calendar sync.",
    checks: "Demo data, group visibility, and a reliable presentation path.",
  },
];

export function ProjectExamples() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];
  return (
    <section className="project-examples" id="project-examples" aria-labelledby="examples-title">
      <div className="studio-container">
        <Reveal className="studio-section-heading">
          <h2 id="examples-title">Big idea.<br /><em>Small first step.</em></h2>
          <p>Explore a few starting points.<br />Illustrative plans for different kinds of builds.</p>
        </Reveal>
        <div className="project-choices" role="group" aria-label="Choose a project example">
          {projects.map((item, index) => <button key={item.name} type="button" aria-pressed={selected === index} aria-controls="project-example-detail" onClick={() => setSelected(index)}>{item.name}<ArrowUpRight size={16} /></button>)}
        </div>
        <div className="project-example-detail" id="project-example-detail" aria-live="polite" aria-atomic="true">
          <div className="project-idea">
            <Lightbulb size={26} strokeWidth={1.4} aria-hidden="true" />
            <h3>{project.idea}</h3>
            <p>{project.focus}</p>
            <a href="#waitlist" className="studio-text-link">Bring your own idea <ArrowUpRight size={17} /></a>
          </div>
          <div className="project-plan">
            <div><h4>Build first</h4><ul>{project.scope.map(item => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}</ul></div>
            <div className="project-later"><h4>Save for later</h4><p>{project.later}</p></div>
            <div><h4>Check before sharing</h4><p>{project.checks}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
