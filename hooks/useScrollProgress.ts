"use client";

import { useEffect, useState } from "react";

export default function useScrollProgress() {
  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop =
        window.scrollY;

      const scrollHeight =
        document.documentElement
          .scrollHeight;

      const viewportHeight =
        window.innerHeight;

      const totalScrollable =
        scrollHeight -
        viewportHeight;

      if (totalScrollable <= 0) {
        setProgress(0);
        return;
      }

      const currentProgress =
        scrollTop / totalScrollable;

      setProgress(
        Math.min(
          1,
          Math.max(
            0,
            currentProgress
          )
        )
      );
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        updateProgress();

        ticking = false;
      });
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updateProgress
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );
    };
  }, []);

  return progress;
}