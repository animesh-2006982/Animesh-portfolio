"use client";

import CharacterScene from "./CharacterScene";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
    >
      {/* BACKGROUND */}
      <div className="hero-background" />

      <div className="hero-shell">
        {/* =================================================
            LEFT — GLASS 3D PORTRAIT
        ================================================= */}

        <div className="hero-visual-column">
          <div className="hero-glass-card">
            <div className="hero-glass-shine" />

            <div className="hero-card-label">
              <span>CREATIVE</span>
              <strong>DEVELOPER</strong>
            </div>

            <CharacterScene />

            <div className="hero-card-footer">
              <span>ANIMESH / 2026</span>
              <span>3D PROFILE</span>
            </div>
          </div>

          <div className="hero-orbit-label">
            CODE × CREATE × DESIGN
          </div>
        </div>

        {/* =================================================
            RIGHT — INTRODUCTION
        ================================================= */}

        <HeroContent />
      </div>

      {/* SCROLL INDICATOR */}
      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </div>
    </section>
  );
}