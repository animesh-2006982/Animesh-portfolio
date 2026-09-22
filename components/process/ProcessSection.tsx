"use client";

import {
  useEffect,
  useRef,
} from "react";

const processSteps = [
  {
    number: "01",
    label: "DISCOVER",
    title: "UNDERSTAND THE IDEA",
    description:
      "I first understand the project, goals, audience, requirements and the result you want to achieve.",
    tags: [
      "RESEARCH",
      "REQUIREMENTS",
      "PLANNING",
    ],
  },
  {
    number: "02",
    label: "PLAN",
    title: "BUILD THE DIRECTION",
    description:
      "The project structure, visual direction, technology stack and development approach are planned before production.",
    tags: [
      "STRATEGY",
      "STRUCTURE",
      "UI / UX",
    ],
  },
  {
    number: "03",
    label: "CREATE",
    title: "DESIGN & DEVELOP",
    description:
      "I turn the concept into a working digital experience through development, design, editing and creative production.",
    tags: [
      "DEVELOPMENT",
      "DESIGN",
      "MOTION",
    ],
  },
  {
    number: "04",
    label: "DELIVER",
    title: "REFINE & LAUNCH",
    description:
      "The final product is tested, refined, optimized and prepared for delivery or deployment.",
    tags: [
      "TESTING",
      "OPTIMIZATION",
      "DEPLOYMENT",
    ],
  },
];

export default function ProcessSection() {
  const sectionRef =
    useRef<HTMLElement>(null);

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;

    const steps =
      section.querySelectorAll<HTMLElement>(
        ".process-step"
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                entry.target.classList.add(
                  "process-step-visible"
                );
              }
            }
          );
        },
        {
          threshold: 0.15,
          rootMargin:
            "0px 0px -80px 0px",
        }
      );

    steps.forEach((step) =>
      observer.observe(step)
    );

    return () =>
      observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="process-section"
    >
      <div className="process-grid-bg" />

      <div className="process-shell">

        <div className="process-header">
          <div>
            <span className="process-kicker">
              06 / HOW I WORK
            </span>

            <h2 className="process-title">
              THE
              <span> PROCESS.</span>
            </h2>
          </div>

          <div className="process-header-copy">
            <span>
              FROM IDEA TO DELIVERY
            </span>

            <p>
              A simple and structured
              workflow designed to turn
              an idea into a finished
              digital experience.
            </p>
          </div>
        </div>

        <div className="process-timeline">

          <div className="process-line">
            <span />
          </div>

          {processSteps.map(
            (step, index) => (
              <article
                key={step.number}
                className="process-step"
              >

                <div className="process-step-marker">
                  <span>
                    {step.number}
                  </span>

                  <div className="process-marker-dot" />
                </div>

                <div className="process-step-content">

                  <div className="process-step-top">
                    <span className="process-step-label">
                      {step.label}
                    </span>

                    <span className="process-step-count">
                      {String(
                        index + 1
                      ).padStart(2, "0")}{" "}
                      / 04
                    </span>
                  </div>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                  <div className="process-tags">
                    {step.tags.map(
                      (tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      )
                    )}
                  </div>

                </div>

                <div className="process-step-visual">
                  <div className="process-orbit">
                    <div className="process-orbit-inner" />

                    <span>
                      {step.number}
                    </span>
                  </div>

                  <div className="process-visual-label">
                    {step.label}
                  </div>
                </div>

              </article>
            )
          )}

        </div>

        <div className="process-bottom">

          <div className="process-bottom-number">
            04
          </div>

          <div className="process-bottom-text">
            <span>
              SIMPLE PROCESS.
            </span>

            <strong>
              CLEAR RESULTS.
            </strong>
          </div>

        </div>

      </div>
    </section>
  );
}