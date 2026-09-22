"use client";

export default function HeroContent() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="hero-content">
      {/* EYEBROW */}
      <div className="hero-eyebrow">
        <span />
        AVAILABLE FOR CREATIVE WORK
      </div>

      {/* INTRO */}
      <div className="hero-intro-label">I&apos;M</div>

      <h1 className="hero-name">
        <span>ANIMESH</span>
        <span>DEBNATH</span>
      </h1>

      {/* ROLE */}
      <div className="hero-role">
        <strong>FULL STACK DEVELOPER</strong>
        <span>WEB</span>
        <i>•</i>
        <span>CREATIVE</span>
      </div>

      {/* DESCRIPTION */}
      <p className="hero-description">
        I build modern digital experiences
        through code, design and creativity.
      </p>

      {/* SOCIAL ICONS */}
      <div className="hero-socials">
        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/animesh-debnath-48068733a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6.5 8.5H3.2V20h3.3V8.5ZM4.85 3A2 2 0 1 0 4.85 7 2 2 0 0 0 4.85 3ZM20.8 13.4c0-3.45-1.84-5.05-4.3-5.05-1.98 0-2.87 1.09-3.36 1.85V8.5H9.84V20h3.3v-6.1c0-1.61.3-3.17 2.3-3.17 1.97 0 1.99 1.84 1.99 3.27V20h3.37v-6.6Z" />
          </svg>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/animesh-2006982"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.12c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.22 3.26.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.16a10.7 10.7 0 0 1 5.61 0c2.13-1.46 3.08-1.16 3.08-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.15 5.56.4.35.76 1.04.76 2.1v3.11c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
          </svg>
        </a>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/animesh.d_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
            />

            <circle
              cx="12"
              cy="12"
              r="4"
            />

            <circle
              cx="17.5"
              cy="6.5"
              r="1"
              className="instagram-dot"
            />
          </svg>
        </a>

        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/profile.php?id=61560450430501"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          title="Facebook"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.7V4a22.8 22.8 0 0 0-2.48-.13c-2.45 0-4.13 1.5-4.13 4.25V10H7.3v3h2.8v8h3.4Z" />
          </svg>
        </a>
      </div>

      {/* ACTION BUTTONS */}
      <div className="hero-actions">
        <button
          type="button"
          className="hero-primary-button"
          onClick={() => scrollTo("work")}
        >
          <span>VIEW MY WORK</span>
          <b></b>
        </button>

        <button
          type="button"
          className="hero-secondary-button"
          onClick={() => scrollTo("contact")}
        >
          <span>LET&apos;S TALK</span>
          <b></b>
        </button>
      </div>

      {/* SKILL TAGS */}
      <div className="hero-tags">
        {[
          "NEXT.JS",
          "REACT",
          "FIREBASE",
          "VIDEO",
          "DESIGN",
        ].map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}