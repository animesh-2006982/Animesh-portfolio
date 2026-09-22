"use client";

import {
  PointerEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { skills } from "../data/skills";

type SkillCategory =
  | "ALL"
  | "DEVELOPMENT"
  | "BACKEND"
  | "CREATIVE"
  | "DESIGN"
  | "MARKETING"
  | "PROFESSIONAL";

const categories: SkillCategory[] = [
  "ALL",
  "DEVELOPMENT",
  "BACKEND",
  "CREATIVE",
  "DESIGN",
  "MARKETING",
  "PROFESSIONAL",
];

export default function SkillsSection() {
  const [category, setCategory] =
    useState<SkillCategory>("ALL");

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [autoPlay, setAutoPlay] =
    useState(true);

  const [hoverPaused, setHoverPaused] =
    useState(false);

  const categoryRef =
    useRef<HTMLDivElement>(null);

  const dragState = useRef({
    dragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const swipeState = useRef({
    startX: 0,
    startY: 0,
  });

  const filteredSkills = useMemo(() => {
    if (category === "ALL") {
      return skills;
    }

    return skills.filter(
      (skill) =>
        skill.category === category
    );
  }, [category]);

  /* -------------------------------
     CATEGORY CHANGE
  -------------------------------- */

  useEffect(() => {
    setActiveIndex(0);
  }, [category]);

  /* -------------------------------
     AUTO PLAY
  -------------------------------- */

  useEffect(() => {
    if (!autoPlay || hoverPaused) {
      return;
    }

    if (filteredSkills.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        (current + 1) %
        filteredSkills.length
      );
    }, 4200);

    return () =>
      window.clearInterval(timer);
  }, [
    autoPlay,
    hoverPaused,
    filteredSkills.length,
  ]);

  /* -------------------------------
     NEXT / PREVIOUS
  -------------------------------- */

  const nextSkill = () => {
    if (!filteredSkills.length) return;

    setActiveIndex((current) =>
      (current + 1) %
      filteredSkills.length
    );
  };

  const previousSkill = () => {
    if (!filteredSkills.length) return;

    setActiveIndex((current) =>
      (current - 1 +
        filteredSkills.length) %
      filteredSkills.length
    );
  };

  /* -------------------------------
     GET SKILL
  -------------------------------- */

  const getSkill = (offset: number) => {
    if (!filteredSkills.length) {
      return null;
    }

    const index =
      (activeIndex +
        offset +
        filteredSkills.length) %
      filteredSkills.length;

    return filteredSkills[index];
  };

  const activeSkill = getSkill(0);
  const leftSkill = getSkill(-1);
  const rightSkill = getSkill(1);

  /* -------------------------------
     CATEGORY DRAG / SLIDE
  -------------------------------- */

  const handleCategoryPointerDown = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    const container = categoryRef.current;

    if (!container) return;

    dragState.current = {
      dragging: true,
      startX: event.clientX,
      scrollLeft: container.scrollLeft,
    };

    container.setPointerCapture(
      event.pointerId
    );
  };

  const handleCategoryPointerMove = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    const container = categoryRef.current;

    if (
      !container ||
      !dragState.current.dragging
    ) {
      return;
    }

    const distance =
      event.clientX -
      dragState.current.startX;

    container.scrollLeft =
      dragState.current.scrollLeft -
      distance;
  };

  const handleCategoryPointerUp = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    const container = categoryRef.current;

    if (!container) return;

    dragState.current.dragging = false;

    if (
      container.hasPointerCapture(
        event.pointerId
      )
    ) {
      container.releasePointerCapture(
        event.pointerId
      );
    }
  };

  /* -------------------------------
     SWIPE CAROUSEL
  -------------------------------- */

  const handleSwipeStart = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    swipeState.current = {
      startX: event.clientX,
      startY: event.clientY,
    };
  };

  const handleSwipeEnd = (
    event: PointerEvent<HTMLDivElement>
  ) => {
    const deltaX =
      event.clientX -
      swipeState.current.startX;

    const deltaY =
      event.clientY -
      swipeState.current.startY;

    if (Math.abs(deltaX) < 45) {
      return;
    }

    if (
      Math.abs(deltaX) <
      Math.abs(deltaY)
    ) {
      return;
    }

    if (deltaX < 0) {
      nextSkill();
    } else {
      previousSkill();
    }
  };

  if (!activeSkill) {
    return null;
  }

  return (
    <section
      id="skills"
      className="animated-skills-section"
    >
      <div className="animated-skills-shell">

        {/* HEADER */}

        <div className="animated-skills-header">
          <span className="animated-skills-kicker">
            05 / SKILLS
          </span>

          <h2>
            WHAT I <span>USE.</span>
          </h2>

          <p>
            Technologies and tools I work with
            to build, create and ship digital
            experiences.
          </p>
        </div>

        {/* CATEGORY FILTER */}

        <div
          ref={categoryRef}
          className="animated-skills-categories"
          onPointerDown={
            handleCategoryPointerDown
          }
          onPointerMove={
            handleCategoryPointerMove
          }
          onPointerUp={
            handleCategoryPointerUp
          }
          onPointerCancel={
            handleCategoryPointerUp
          }
          onPointerLeave={
            handleCategoryPointerUp
          }
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item
                  ? "active"
                  : ""
              }
              onClick={() =>
                setCategory(item)
              }
            >
              {item}
            </button>
          ))}
        </div>

        {/* CAROUSEL */}

        <div
          className={`skills-carousel-stage ${
            hoverPaused
              ? "carousel-paused"
              : ""
          }`}
          onMouseEnter={() =>
            setHoverPaused(true)
          }
          onMouseLeave={() =>
            setHoverPaused(false)
          }
          onPointerDown={
            handleSwipeStart
          }
          onPointerUp={handleSwipeEnd}
        >

          {/* LEFT CARD */}

          {leftSkill && (
            <button
              type="button"
              className="skill-side-card skill-side-left"
              onClick={previousSkill}
            >
              <span>
                {String(
                  (activeIndex - 1 +
                    filteredSkills.length) %
                    filteredSkills.length +
                    1
                ).padStart(2, "0")}
              </span>

              <div className="skill-side-image">
                <img
                  src={leftSkill.image}
                  alt={leftSkill.name}
                />
              </div>

              <strong>
                {leftSkill.name}
              </strong>

              <small>
                PREVIOUS
              </small>
            </button>
          )}

          {/* CENTER CARD */}

          <article
            key={activeSkill.id}
            className="skill-main-card skill-main-card-enter"
          >
            <div className="skill-main-grid" />

            <div className="skill-main-corner skill-corner-tl" />
            <div className="skill-main-corner skill-corner-tr" />
            <div className="skill-main-corner skill-corner-bl" />
            <div className="skill-main-corner skill-corner-br" />

            <div className="skill-main-top">
              <span>
                {String(
                  activeIndex + 1
                ).padStart(2, "0")}
              </span>

              <span>
                {activeSkill.category}
              </span>
            </div>

            <div className="skill-main-visual">
              <div className="skill-main-glow" />

              <div className="skill-main-icon">
                <img
                  src={activeSkill.image}
                  alt={activeSkill.name}
                />
              </div>
            </div>

            <div className="skill-main-content">
              <span className="skill-main-level">
                {activeSkill.level}
              </span>

              <h3>
                {activeSkill.name}
              </h3>

              <p>
                {getSkillDescription(
                  activeSkill.name
                )}
              </p>

              <div className="skill-progress-label">
                <span>
                  EXPERIENCE LEVEL
                </span>

                <span>
                  {getSkillProgress(
                    activeSkill.level
                  )}
                  %
                </span>
              </div>

              <div className="skill-progress">
                <span
                  style={{
                    width: `${getSkillProgress(
                      activeSkill.level
                    )}%`,
                  }}
                />
              </div>
            </div>
          </article>

          {/* RIGHT CARD */}

          {rightSkill && (
            <button
              type="button"
              className="skill-side-card skill-side-right"
              onClick={nextSkill}
            >
              <span>
                {String(
                  (activeIndex + 1) %
                    filteredSkills.length +
                    1
                ).padStart(2, "0")}
              </span>

              <div className="skill-side-image">
                <img
                  src={rightSkill.image}
                  alt={rightSkill.name}
                />
              </div>

              <strong>
                {rightSkill.name}
              </strong>

              <small>
                NEXT
              </small>
            </button>
          )}
        </div>

        {/* AUTO / MANUAL */}

        <div className="skills-mode-control">
          <button
            type="button"
            className={`skills-mode-button ${
              autoPlay ? "active" : ""
            }`}
            onClick={() =>
              setAutoPlay(true)
            }
          >
            <span className="skills-mode-dot" />
            AUTO PLAY
          </button>

          <button
            type="button"
            className={`skills-mode-button ${
              !autoPlay ? "active" : ""
            }`}
            onClick={() =>
              setAutoPlay(false)
            }
          >
            <span className="skills-mode-dot" />
            MANUAL
          </button>

          <span className="skills-mode-text">
            {autoPlay
              ? "SKILLS CHANGE AUTOMATICALLY"
              : "SWIPE OR TAP A SKILL TO CHANGE"}
          </span>
        </div>

        {/* CURRENT SKILL INFORMATION */}

        <div className="skills-detail-row">
          <div>
            <span>
              {String(
                activeIndex + 1
              ).padStart(2, "0")}{" "}
              /{" "}
              {String(
                filteredSkills.length
              ).padStart(2, "0")}
            </span>

            <h3>
              {activeSkill.name}
            </h3>

            <p>
              {getSkillDescription(
                activeSkill.name
              )}
            </p>
          </div>

          <div className="skills-detail-meta">
            <span>CATEGORY</span>

            <strong>
              {activeSkill.category}
            </strong>

            <span>LEVEL</span>

            <strong>
              {activeSkill.level}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HELPERS
========================================================= */

function getSkillProgress(
  level: string
) {
  if (level === "Expert") return 94;
  if (level === "Advanced") return 82;
  return 68;
}

function getSkillDescription(
  name: string
) {
  const descriptions: Record<
    string,
    string
  > = {
    "NEXT.JS":
      "Used for building modern, responsive and practical digital experiences across development and creative workflows.",

    REACT:
      "A JavaScript library for building fast, interactive and component-based user interfaces.",

    JAVASCRIPT:
      "Used to create dynamic interfaces, interactions, API integrations and modern web functionality.",

    HTML:
      "The structural foundation for accessible, semantic and well-organized web experiences.",

    "TAILWIND CSS":
      "A utility-first styling system for creating responsive and consistent interfaces quickly.",

    "NODE.JS":
      "Used for backend logic, APIs, server-side functionality and full-stack web applications.",

    FIREBASE:
      "A backend platform used for authentication, Firestore databases, hosting and cloud services.",

    SUPABASE:
      "A modern backend platform providing database, authentication, storage and application services.",

    "VIDEO EDITING":
      "Creative editing for YouTube videos, reels, promotional content and cinematic storytelling.",

    "MOTION GRAPHICS":
      "Animation and motion design used to add visual movement, transitions and engaging effects.",

    "POSTER DESIGN":
      "Visual communication through event posters, promotional creatives and digital campaign designs.",

    PHOTOSHOP:
      "Used for photo editing, compositing, poster creation and professional visual design.",

    CANVA:
      "A practical design tool for social media creatives, posters, presentations and marketing content.",

    "DIGITAL MARKETING":
      "Creative digital promotion through content, campaigns, branding and audience-focused communication.",

    "SOCIAL MEDIA":
      "Content and visual communication for social platforms including Instagram and Facebook.",

    COMMUNICATION:
      "Client communication, presentation, collaboration and clear project coordination.",

    GITHUB:
      "Version control and collaborative development for repositories, projects and deployments.",
  };

  return (
    descriptions[name] ||
    "A practical skill used across development, design and creative digital projects."
  );
}