"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "WORK", target: "work" },
  { label: "SERVICES", target: "services" },
  { label: "ABOUT", target: "about" },
  { label: "SKILLS", target: "skills" },
  { label: "PROCESS", target: "process" },
  { label: "CONTACT", target: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        "home",
        "work",
        "services",
        "about",
        "skills",
        "process",
        "contact",
      ];

      const position = window.scrollY + 180;
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= position) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (target: string) => {
    const section = document.getElementById(target);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  const scrollHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header
      className={`site-navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="navbar-shell">

        {/* LOGO */}
        <button
          type="button"
          className="navbar-brand"
          onClick={scrollHome}
          aria-label="Go to homepage"
        >
          <span className="navbar-logo">
            A
          </span>

          <span className="navbar-name">
            ANIMESH <b>DEBNATH</b>
          </span>
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="navbar-links"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const active =
              activeSection === item.target;

            return (
              <button
                key={item.target}
                type="button"
                className={
                  active
                    ? "navbar-link active"
                    : "navbar-link"
                }
                onClick={() =>
                  scrollToSection(item.target)
                }
              >
                {item.label}
                <span />
              </button>
            );
          })}
        </nav>

        {/* AVAILABILITY */}
        <button
          type="button"
          className="navbar-availability"
          onClick={() =>
            scrollToSection("contact")
          }
        >
          <span className="navbar-status-dot" />
          <span>AVAILABLE FOR WORK</span>
        </button>

        {/* MOBILE MENU */}
        <button
          type="button"
          className={`navbar-menu-button ${
            menuOpen ? "menu-open" : ""
          }`}
          onClick={() =>
            setMenuOpen((value) => !value)
          }
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`mobile-navigation ${
          menuOpen
            ? "mobile-navigation-open"
            : ""
        }`}
      >
        <div className="mobile-navigation-inner">

          <div className="mobile-navigation-label">
            NAVIGATION
          </div>

          {navItems.map((item, index) => {
            const active =
              activeSection === item.target;

            return (
              <button
                key={item.target}
                type="button"
                className={
                  active
                    ? "mobile-nav-link active"
                    : "mobile-nav-link"
                }
                onClick={() =>
                  scrollToSection(item.target)
                }
              >
                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <strong>
                  {item.label}
                </strong>
              </button>
            );
          })}

          <div className="mobile-navigation-footer">
            <span>ANIMESH DEBNATH</span>
            <span>2026</span>
          </div>

        </div>
      </div>
    </header>
  );
}