"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="page-loader">

      <div className="loader-content">

        <span className="loader-small">
          PORTFOLIO / 2026
        </span>

        <div className="loader-name">
          ANIMESH
          <span>.</span>
        </div>

        <div className="loader-line">
          <span />
        </div>

        <span className="loader-loading">
          LOADING EXPERIENCE
        </span>

      </div>

    </div>
  );
}