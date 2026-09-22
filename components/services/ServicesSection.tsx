"use client";

import { useEffect, useRef } from "react";
import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const cards =
      section.querySelectorAll<HTMLElement>(
        ".service-card"
      );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "service-visible"
            );
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="services-section"
    >
      <div className="services-shell">

        {/* HEADER */}

        <div className="services-heading">
          <div>
            <span className="section-kicker">
              WHAT I DO
            </span>

            <h2 className="section-title">
              SERVICES<span>.</span>
            </h2>
          </div>

          <div className="services-heading-copy">
            <span className="services-index">
              03 / 07
            </span>

            <p>
              One creative skill is useful.
              A combination of technical and
              creative skills creates more
              possibilities.
            </p>
          </div>
        </div>

        {/* DIVIDER */}

        <div className="services-line">
          <span />
        </div>

        {/* SERVICE CARDS */}

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        {/* BOTTOM */}

        <div className="services-bottom">
          <span>
            CODE × CREATE × EDIT × DESIGN
          </span>

          <span>
            DIGITAL EXPERIENCES
          </span>
        </div>

      </div>
    </section>
  );
}