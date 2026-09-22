"use client";

const socialLinks = [
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/animesh-debnath-48068733a/",
  },
  {
    label: "GITHUB",
    href: "https://github.com/animesh-2006982",
  },
  {
    label: "INSTAGRAM",
    href: "https://www.instagram.com/animesh.d_/",
  },
  {
    label: "FACEBOOK",
    href: "https://www.facebook.com/profile.php?id=61560450430501",
  },
];

const navigation = [
  { label: "WORK", target: "work" },
  { label: "SERVICES", target: "services" },
  { label: "ABOUT", target: "about" },
  { label: "SKILLS", target: "skills" },
  { label: "PROCESS", target: "process" },
  { label: "CONTACT", target: "contact" },
];

export default function Footer() {
  const scrollToSection = (target: string) => {
    const section = document.getElementById(target);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-grid-bg" />

      <div className="footer-shell">

        {/* TOP */}

        <div className="footer-top">

          <div className="footer-brand">

            <button
              type="button"
              className="footer-logo"
              onClick={scrollHome}
              aria-label="Back to top"
            >
              A
            </button>

            <div>
              <span className="footer-name">
                ANIMESH DEBNATH
              </span>

              <p>
                FULL STACK DEVELOPER
                <br />
                WEB • CREATIVE
              </p>
            </div>

          </div>

          <div className="footer-statement">
            <span>LET&apos;S CREATE</span>

            <h2>
              SOMETHING
              <br />
              <strong>USEFUL.</strong>
            </h2>
          </div>

        </div>

        {/* MIDDLE */}

        <div className="footer-middle">

          {/* NAVIGATION */}

          <div className="footer-column">

            <span className="footer-column-title">
              NAVIGATION
            </span>

            <div className="footer-nav">

              {navigation.map((item, index) => (
                <button
                  key={item.target}
                  type="button"
                  onClick={() =>
                    scrollToSection(item.target)
                  }
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {item.label}
                  </strong>

                  <i>↗</i>
                </button>
              ))}

            </div>

          </div>

          {/* SOCIAL */}

          <div className="footer-column">

            <span className="footer-column-title">
              CONNECT
            </span>

            <div className="footer-socials">

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{social.label}</span>
                  <b>↗</b>
                </a>
              ))}

            </div>

          </div>

          {/* CONTACT */}

          <div className="footer-column footer-contact">

            <span className="footer-column-title">
              CONTACT
            </span>

            <a href="mailto:animeshdebnath445@gmail.com">
              animeshdebnath445@gmail.com
            </a>

            <span className="footer-location">
              INDIA
            </span>

            <span className="footer-availability">
              <span />
              AVAILABLE FOR WORK
            </span>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">

          <div>
            © {new Date().getFullYear()} ANIMESH DEBNATH
          </div>

          <div>
            DESIGNED &amp; DEVELOPED BY ANIMESH
          </div>

          <button
            type="button"
            onClick={scrollHome}
            className="footer-back-top"
          >
            BACK TO TOP
            <span>↑</span>
          </button>

        </div>

      </div>
    </footer>
  );
}