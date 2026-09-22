"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="about-section"
    >
      <div className="about-shell">

        <div className="about-heading">
          <div>
            <span className="section-kicker">
              04 / ABOUT ME
            </span>

            <h2 className="section-title">
              BEHIND THE
              <span> WORK.</span>
            </h2>
          </div>

          <div className="about-index">
            <span>CREATIVE</span>
            <span>TECHNICAL</span>
            <span>CURIOUS</span>
          </div>
        </div>

        <div className="about-grid">

          <div className="about-visual">

            <div className="about-image-frame">
              <div className="about-image-glow" />

              <img
                src="/images/profile/animesh.png"
                alt="Animesh Debnath"
              />

              <div className="about-image-overlay" />

              <div className="about-image-label">
                <span>
                  ANIMESH / 2026
                </span>

                <span>
                  CREATIVE DEVELOPER
                </span>
              </div>
            </div>

            <div className="about-floating-card">
              <span className="about-card-kicker">
                CURRENTLY
              </span>

              <strong>
                BUILDING DIGITAL
                <br />
                EXPERIENCES
              </strong>

              <div className="about-card-line" />

              <span className="about-card-status">
                <span className="status-dot" />
                AVAILABLE FOR WORK
              </span>
            </div>
          </div>

          <div className="about-content">

            <span className="about-small-label">
              WHO I AM
            </span>

            <h3>
              I like combining
              <span> technology</span>
              <br />
              with
              <span> creativity.</span>
            </h3>

            <p className="about-lead">
              I work across development,
              design and video to turn ideas
              into finished digital experiences.
            </p>

            <p className="about-text">
              I am a BCA student and freelancer
              working across full-stack web
              development, modern websites,
              video editing, digital marketing
              and visual design.
            </p>

            <p className="about-text">
              I enjoy combining technical
              problem-solving with creative
              thinking to build websites,
              applications, videos and visual
              content that are useful and
              visually engaging.
            </p>

            <div className="about-specialties">

              <div className="specialty">
                <span>01</span>
                <strong>
                  FULL STACK DEVELOPMENT
                </strong>
              </div>

              <div className="specialty">
                <span>02</span>
                <strong>
                  WEB DEVELOPMENT
                </strong>
              </div>

              <div className="specialty">
                <span>03</span>
                <strong>
                  VIDEO EDITING
                </strong>
              </div>

              <div className="specialty">
                <span>04</span>
                <strong>
                  POSTER &amp; VISUAL DESIGN
                </strong>
              </div>

            </div>

            <div className="about-actions">

              <a
                href="/cv.pdf"
                className="primary-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  VIEW RESUME
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/animesh-debnath-48068733a/"
                className="about-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/animesh.d_/"
                className="about-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                Instagram
              </a>

            </div>

          </div>
        </div>

        <div className="about-bottom">
          <div className="about-bottom-line" />

          <div className="about-bottom-content">
            <span>
              CODE × DESIGN × MOTION
            </span>

            <p>
              Turning ideas into digital
              experiences.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}