"use client";

import {
  Play,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";

import type { Project } from "../../types";

interface ProjectModalProps {
  project: Project | null;
  projects: Project[];
  onClose: () => void;
  onChange: (project: Project) => void;
}

export default function ProjectModal({
  project,
  projects,
  onClose,
  onChange,
}: ProjectModalProps) {
  const [activeMedia, setActiveMedia] =
    useState<string | null>(null);

  const [mediaType, setMediaType] =
    useState<"video" | "image">("image");

  useEffect(() => {
    if (!project) return;

    const firstVideo =
      project.video ||
      project.videos?.[0];

    const firstImage =
      project.image ||
      project.gallery?.[0];

    if (firstVideo) {
      setActiveMedia(firstVideo);
      setMediaType("video");
    } else if (firstImage) {
      setActiveMedia(firstImage);
      setMediaType("image");
    } else {
      setActiveMedia(null);
    }
  }, [project]);

  useEffect(() => {
    if (!project) return;

    document.body.classList.add(
      "project-modal-open"
    );

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrevious();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.classList.remove(
        "project-modal-open"
      );

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [project]);

  if (!project) return null;

  const currentIndex =
    projects.findIndex(
      (item) => item.id === project.id
    );

  const gallery =
    project.gallery || [];

  const videos =
    project.videos ||
    (project.video
      ? [project.video]
      : []);

  function goNext() {
    if (!projects.length) return;

    const nextIndex =
      (currentIndex + 1) %
      projects.length;

    onChange(projects[nextIndex]);
  }

  function goPrevious() {
    if (!projects.length) return;

    const previousIndex =
      (currentIndex - 1 +
        projects.length) %
      projects.length;

    onChange(
      projects[previousIndex]
    );
  }

  function selectVideo(video: string) {
    setActiveMedia(video);
    setMediaType("video");
  }

  function selectImage(image: string) {
    setActiveMedia(image);
    setMediaType("image");
  }

  return (
    <div
      className="reference-modal-backdrop"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className="reference-project-modal">

        {/* HEADER */}

        <div className="reference-modal-header">
          <span>
            {String(
              currentIndex + 1
            ).padStart(2, "0")}{" "}
            /{" "}
            {String(
              projects.length
            ).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project"
          >
            <X size={20} />
          </button>
        </div>

        {/* MEDIA */}

        <div className="reference-modal-media">
          {activeMedia &&
          mediaType === "video" ? (
            <video
              key={activeMedia}
              src={activeMedia}
              controls
              autoPlay
              playsInline
              className="reference-modal-video"
            />
          ) : activeMedia ? (
            <img
              src={activeMedia}
              alt={project.title}
              className="reference-modal-image"
            />
          ) : (
            <div className="reference-modal-empty">
              NO MEDIA AVAILABLE
            </div>
          )}

          {mediaType === "video" && (
            <div className="reference-modal-media-label">
              <Play
                size={11}
                fill="currentColor"
              />
              VIDEO
            </div>
          )}
        </div>

        {/* CONTENT */}

        <div className="reference-modal-content">
          <div className="reference-modal-meta">
            <span>
              {project.category}
            </span>

            <span>
              {project.year}
            </span>
          </div>

          <div className="reference-modal-title-row">
            <h2>{project.title}</h2>

            <span>
              {String(
                currentIndex + 1
              ).padStart(2, "0")}
            </span>
          </div>

          <p className="reference-modal-description">
            {project.description}
          </p>

          {/* TECHNOLOGIES */}

          <div className="reference-modal-tech">
            {project.technologies.map(
              (technology) => (
                <span key={technology}>
                  {technology}
                </span>
              )
            )}
          </div>

          {/* ACTIONS */}

          <div className="reference-modal-actions">
            {videos.length > 0 && (
              <button
                type="button"
                className="reference-modal-primary"
                onClick={() =>
                  selectVideo(
                    videos[0]
                  )
                }
              >
                <Play
                  size={13}
                  fill="currentColor"
                />
                PLAY VIDEO
              </button>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="reference-modal-secondary"
              >
                LIVE PROJECT
              </a>
            )}
          </div>

          {/* MEDIA THUMBNAILS */}

          {(gallery.length > 0 ||
            videos.length > 1) && (
            <div className="reference-modal-gallery">

              <div className="reference-gallery-track">

                {videos.map(
                  (video, index) => (
                    <button
                      type="button"
                      key={`video-${index}`}
                      className={
                        activeMedia === video
                          ? "reference-gallery-item active"
                          : "reference-gallery-item"
                      }
                      onClick={() =>
                        selectVideo(video)
                      }
                    >
                      <video
                        src={video}
                        muted
                        playsInline
                        preload="metadata"
                      />

                      <span>
                        <Play
                          size={10}
                          fill="currentColor"
                        />
                      </span>
                    </button>
                  )
                )}

                {gallery.map(
                  (image, index) => (
                    <button
                      type="button"
                      key={`image-${index}`}
                      className={
                        activeMedia === image
                          ? "reference-gallery-item active"
                          : "reference-gallery-item"
                      }
                      onClick={() =>
                        selectImage(image)
                      }
                    >
                      <img
                        src={image}
                        alt={`${project.title} ${
                          index + 1
                        }`}
                      />
                    </button>
                  )
                )}

              </div>
            </div>
          )}

          {/* FOOTER */}

          <div className="reference-modal-footnote">
            <span>
              CODE × CREATE × DESIGN
            </span>

            <span>
              {project.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}