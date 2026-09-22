"use client";

import { useEffect, useState } from "react";

import { projects } from "../data/projects";

import ProjectCard from "./ProjectCard";

import ProjectModal from "./ProjectModal";

import type { Project } from "../../types";

const categories = [
  "All",
  "Full Stack",
  "Web Development",
  "Video Editing",
  "Poster Design",
  "Visual Design",
];

export default function WorkSection() {
  const [
    activeCategory,
    setActiveCategory,
  ] = useState("All");

  const [
    selectedProject,
    setSelectedProject,
  ] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category ===
            activeCategory
        );

  useEffect(() => {
    const cards =
      document.querySelectorAll(
        ".reference-project-card"
      );

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting
            ) {
              entry.target.classList.add(
                "reference-project-visible"
              );
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

    cards.forEach((card) =>
      observer.observe(card)
    );

    return () =>
      observer.disconnect();
  }, [filteredProjects]);

  return (
    <>
      <section
        id="work"
        className="reference-work-section"
      >
        <div className="reference-work-shell">

          {/* =====================================
              HEADER
          ===================================== */}

          <div className="reference-work-topline">

            <span>
              02 / SELECTED WORK
            </span>

            <span>
              IDEAS • DESIGN • DEVELOP • CREATE
            </span>

          </div>

          <div className="reference-work-heading">

            <h2>
              PRACTICING
              <br />
              PROJECT<span>.</span>
            </h2>

            <p>
              A collection of development,
              creative, editing and visual
              design work.
            </p>

          </div>

          {/* =====================================
              FILTERS
          ===================================== */}

          <div className="reference-work-filter">

            <span>
              FILTER / CATEGORY
            </span>

            <div className="reference-filter-buttons">

              {categories.map(
                (category) => (
                  <button
                    key={category}
                    type="button"
                    className={
                      activeCategory ===
                      category
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setActiveCategory(
                        category
                      )
                    }
                  >
                    {category}
                  </button>
                )
              )}

            </div>

          </div>

          {/* =====================================
              PROJECTS
          ===================================== */}

          <div className="reference-project-grid">

            {filteredProjects.map(
              (project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpen={
                    setSelectedProject
                  }
                />
              )
            )}

          </div>

          {/* =====================================
              BOTTOM
          ===================================== */}

          <div className="reference-work-bottom">

            <span>
              CODE × CREATE × EDIT × DESIGN
            </span>

            <span>
              MORE PROJECTS COMING SOON
            </span>

          </div>

        </div>
      </section>

      {/* =========================================
          MODAL
      ========================================= */}

      <ProjectModal
        project={selectedProject}
        projects={filteredProjects}
        onClose={() =>
          setSelectedProject(null)
        }
        onChange={(project) =>
          setSelectedProject(project)
        }
      />
    </>
  );
}