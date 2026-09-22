"use client";

import {
  FormEvent,
  useState,
} from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] =
    useState(false);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form =
      event.currentTarget;

    const data =
      new FormData(form);

    const name =
      String(data.get("name") || "");

    const email =
      String(data.get("email") || "");

    const service =
      String(data.get("service") || "");

    const message =
      String(data.get("message") || "");

    const subject =
      encodeURIComponent(
        `Portfolio Enquiry — ${service}`
      );

    const body =
      encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Service: ${service}\n\n` +
        `Message:\n${message}`
      );

    window.location.href =
      `mailto:animeshdebnath445@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="contact-grid-bg" />

      <div className="contact-shell">

        <div className="contact-header">
          <div>
            <span className="contact-kicker">
              07 / CONTACT
            </span>

            <h2 className="contact-title">
              LET&apos;S
              <span> TALK.</span>
            </h2>
          </div>

          <div className="contact-header-copy">
            <span>
              HAVE A PROJECT IN MIND?
            </span>

            <p>
              Tell me what you are building,
              what you need and how I can help
              turn the idea into something real.
            </p>
          </div>
        </div>

        <div className="contact-grid">

          <div className="contact-info">

            <div className="contact-intro">
              <span>
                START A CONVERSATION
              </span>

              <h3>
                LET&apos;S BUILD
                <br />
                SOMETHING
                <br />
                <strong>
                  USEFUL.
                </strong>
              </h3>

              <p>
                Whether you need a website,
                full-stack application,
                video editing, poster design
                or digital creative support,
                send me the details and
                let&apos;s discuss it.
              </p>
            </div>

            <a
              href="mailto:animeshdebnath445@gmail.com"
              className="contact-email"
            >
              <span>EMAIL</span>

              <strong>
                animeshdebnath445@gmail.com
              </strong>
            </a>

            <div className="contact-socials">

              <a
                href="https://www.linkedin.com/in/animesh-debnath-48068733a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>

              <a
                href="https://www.instagram.com/animesh.d_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM
              </a>

            </div>

            <div className="contact-status">

              <span className="contact-status-dot" />

              <div>
                <strong>
                  AVAILABLE FOR WORK
                </strong>

                <small>
                  OPEN TO FREELANCE &
                  COLLABORATION
                </small>
              </div>

            </div>

          </div>

          <div className="contact-form-wrapper">

            <div className="contact-form-top">
              <span>
                PROJECT ENQUIRY
              </span>

              <span>
                * REQUIRED
              </span>
            </div>

            {submitted ? (
              <div className="contact-success">

                <div className="contact-success-icon">
                  ✓
                </div>

                <span>
                  MESSAGE PREPARED
                </span>

                <h3>
                  THANK YOU.
                </h3>

                <p>
                  Your email client should open
                  with the enquiry details.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setSubmitted(false)
                  }
                >
                  SEND ANOTHER
                </button>

              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <label>
                  <span>
                    01 / YOUR NAME *
                  </span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </label>

                <label>
                  <span>
                    02 / EMAIL ADDRESS *
                  </span>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>

                <label>
                  <span>
                    03 / WHAT DO YOU NEED? *
                  </span>

                  <select
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option
                      value=""
                      disabled
                    >
                      Select a service
                    </option>

                    <option value="Full Stack Development">
                      Full Stack Development
                    </option>

                    <option value="Web Development">
                      Web Development
                    </option>

                    <option value="Video Editing">
                      Video Editing
                    </option>

                    <option value="Poster & Visual Design">
                      Poster & Visual Design
                    </option>

                    <option value="Digital Marketing">
                      Digital Marketing
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </label>

                <label>
                  <span>
                    04 / PROJECT DETAILS *
                  </span>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  <span>
                    SEND ENQUIRY
                  </span>
                </button>

              </form>
            )}

          </div>
        </div>

        <div className="contact-bottom">
          <span>
            ANIMESH DEBNATH
          </span>

          <span>
            INDIA / 2026
          </span>

          <span>
            CODE × CREATE × DESIGN
          </span>
        </div>

      </div>
    </section>
  );
}