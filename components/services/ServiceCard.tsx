"use client";

import type { MouseEvent } from "react";
import {
  Code2,
  Globe2,
  Video,
  Palette,
} from "lucide-react";

import type { Service } from "../data/services";

interface ServiceCardProps {
  service: Service;
}

const iconMap = {
  "full-stack-development": Code2,
  "web-development": Globe2,
  "video-editing": Video,
  "poster-visual-design": Palette,
};

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  const Icon =
    iconMap[
      service.id as keyof typeof iconMap
    ] || Code2;

  const handleExplore = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <article className="service-card">

      <div className="service-card-top">
        <span className="service-number">
          {service.number}
        </span>

        <div className="service-icon">
          <Icon
            size={21}
            strokeWidth={1.5}
          />
        </div>

        <span className="service-card-arrow">
          
        </span>
      </div>

      <div className="service-card-title">
        <span>
          {service.shortTitle}
        </span>

        <h3>
          {service.title}
        </h3>
      </div>

      <p className="service-card-description">
        {service.description}
      </p>

      <div className="service-capabilities">
        {service.capabilities.map(
          (capability) => (
            <span key={capability}>
              {capability}
            </span>
          )
        )}
      </div>

      <div className="service-card-footer">

        <div className="service-tools">
          <span className="service-tools-label">
            TOOLS
          </span>

          <div className="service-tool-list">
            {service.tools.map((tool) => (
              <span key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        <a
          href="#contact"
          onClick={handleExplore}
          className="service-explore"
        >
          <span>LET&apos;S BUILD</span>

          
        </a>

      </div>

    </article>
  );
}