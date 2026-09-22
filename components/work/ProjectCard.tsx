"use client";

import { Play } from "lucide-react";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index,
  onOpen,
}: ProjectCardProps) {
  const thumbnail =
    project.image ||
    project.gallery?.[0];

  const hasVideo =
    Boolean(project.video) ||
    Boolean(project.videos?.length);

  const number = String(index + 1).padStart(
    2,
    "0"
  );

  return (
    <article
      className="reference-project-card"
      onClick={() => onOpen(project)}
    >
      <div className="reference-project-media">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={project.title}
            className="reference-project-image"
          />
        ) : hasVideo ? (
          <video
            src={
              project.video ||
              project.videos?.[0]
            }
            muted
            playsInline
            preload="metadata"
            className="reference-project-image"
          />
        ) : (
          <div className="reference-project-no-image">
            {project.category}
          </div>
        )}

        <div className="reference-project-overlay" />

        <span className="reference-project-number">
          {number}
        </span>

        <span className="reference-project-category">
          {project.category}
        </span>

        <button
          type="button"
          className="reference-project-view"
          onClick={(event) => {
            event.stopPropagation();
            onOpen(project);
          }}
        >
          {hasVideo ? (
            <>
              <Play
                size={12}
                fill="currentColor"
              />
              WATCH
            </>
          ) : (
            <>VIEW</>
          )}
        </button>

        <div className="reference-project-media-title">
          <h3>{project.title}</h3>

          <p>
            {getProjectShortDescription(
              project.title
            )}
          </p>
        </div>
      </div>

      <div className="reference-project-info">
        <div className="reference-project-info-main">
          <span className="reference-project-year">
            {project.year} / PROJECT
          </span>

          <h3>{project.title}</h3>

          <p>{project.description}</p>
        </div>

        <button
          type="button"
          className="reference-project-open"
          onClick={(event) => {
            event.stopPropagation();
            onOpen(project);
          }}
        >
          <span>
            {hasVideo
              ? "PLAY PROJECT"
              : "VIEW PROJECT"}
          </span>
        </button>
      </div>

      <div className="reference-project-tech">
        {project.technologies
          .slice(0, 5)
          .map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
      </div>
    </article>
  );
}

function getProjectShortDescription(
  title: string
) {
  const descriptions: Record<
    string,
    string
  > = {
    "Restaurant Management System":
      "Menus • Orders • Customers • Staff",

    "Client Portfolio Website":
      "Identity • Services • Projects • Web",

    "School One-Page Website":
      "Information • Activities • Contact",

    "Website Subscription Page":
      "Plans • Pricing • Features • UI",

    "CFAC National Arts Olympiad":
      "Art • Dance • Music • Creative Campaign",

    "Good Manners & Habits":
      "Educational • Animation • Storytelling",

    "Video Editing Showreel":
      "Cinematic • Motion • Transitions • Editing",

    "Poster & Visual Design":
      "Posters • Campaigns • Visual Communication",
  };

  return (
    descriptions[title] ||
    "Creative digital project • design • development"
  );
}