import Image from "next/image";

const agents = [
  { name: "Claude", icon: "claude-color", wordmark: "claude-text", width: 97 },
  { name: "Codex", icon: "codex-color", wordmark: "codex-text", width: 91 },
  { name: "Gemini", icon: "gemini-color", wordmark: "gemini-text", width: 98 },
  { name: "Cursor", icon: "cursor", wordmark: "cursor-text", width: 123 },
  { name: "Windsurf", icon: "windsurf", wordmark: "windsurf-text", width: 111 },
  { name: "GitHub Copilot", icon: "githubcopilot", wordmark: "githubcopilot-text", width: 154 },
  { name: "v0", icon: "v0", wordmark: null, width: 24 },
];

export function AgentStrips() {
  return (
    <section className="agent-strips" aria-labelledby="agents-title">
      <div className="studio-container agent-strip-heading">
        <h2 id="agents-title">Your AI tools. In good company.</h2>
      </div>
      <div className="agent-strip-window">
        <div className="agent-strip-track">
          {[0, 1].map(copy => (
            <ul className="agent-strip-group" key={copy} aria-hidden={copy > 0 ? true : undefined}>
              {[...agents, ...agents].map((agent, index) => (
                <li className="agent-brand-tile" key={`${agent.name}-${index}`} aria-label={agent.name} aria-hidden={index >= agents.length ? true : undefined}>
                  <Image src={`/brands/${agent.icon}.svg`} width={32} height={32} alt="" className={agent.wordmark ? "agent-symbol" : "agent-v0"} loading="eager" unoptimized />
                  {agent.wordmark && <Image src={`/brands/${agent.wordmark}.svg`} width={agent.width} height={24} alt="" className="agent-wordmark" loading="eager" unoptimized />}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
