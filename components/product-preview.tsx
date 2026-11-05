import { ArrowUp, Check, Circle, LockKeyhole } from "lucide-react";
import { Mark } from "./brand";
export function ProductPreview() {
  return (
    <div
      className="preview-shell"
      role="img"
      aria-label="Illustration of the Manifest workspace: scoping questions, a Day-1 MVP checklist, and a Phase 2 backlog."
    >
      <div className="preview-chrome">
        <div className="window-dots">
          <i />
          <i />
          <i />
        </div>
        <span className="project-path">manifest / habit-streaks</span>
        <span className="preview-illustration">Illustration</span>
      </div>
      <div className="preview-layout">
        <div className="chat-panel">
          <div className="panel-header">
            <span>SCOPING</span>
            <span className="question-badge">Question 3 of 6</span>
          </div>
          <div className="chat-body">
            <div className="user-message">
              I want to build a habit tracker with streaks, friends and
              reminders.
            </div>
            <div className="assistant-message">
              <Mark small />
              <p>
                Nice. Who needs to use it on day one: just you, or you and your
                friends?
              </p>
            </div>
            <div className="user-message short-message">Just me for now.</div>
            <div className="assistant-message">
              <Mark small />
              <p>
                Then friends can wait. I’ll move them to Phase 2. Should
                reminders be push notifications or email?
              </p>
            </div>
            <div className="answer-chips">
              <span>Push notifications</span>
              <span>Email</span>
              <span>Not sure yet</span>
            </div>
          </div>
          <div className="mock-composer">
            Reply to Manifest
            <span>
              <ArrowUp size={15} />
            </span>
          </div>
        </div>
        <div className="scope-panel">
          <div className="mvp-list">
            <div className="list-heading">
              <h3>Day-1 MVP</h3>
              <span className="locked-badge">
                <LockKeyhole size={10} /> Locked
              </span>
            </div>
            {[
              "Email sign-up",
              "Create a habit",
              "Daily check-in",
              "Streak counter",
              "Reminder notifications",
            ].map((item, i) => (
              <div
                className={`task-row ${i < 3 ? "task-complete" : ""}`}
                key={item}
              >
                {i < 3 ? (
                  <span className="task-check">
                    <Check size={10} />
                  </span>
                ) : (
                  <Circle size={15} />
                )}
                <span>{item}</span>
              </div>
            ))}
            <div className="mvp-progress">
              <i />
            </div>
            <p className="progress-caption">3 of 5 done</p>
          </div>
          <div className="backlog-list">
            <div className="list-heading">
              <h3>Phase 2 backlog</h3>
              <span className="backlog-count">4 items</span>
            </div>
            {[
              "Friends and sharing",
              "Dark mode",
              "Apple Watch app",
              "Weekly insights",
            ].map((item) => (
              <div className="backlog-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
