"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);

      const target =
        event.target as HTMLElement | null;

      if (
        target?.closest(
          "a, button, input, textarea, select, [role='button']"
        )
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const handleLeave = () => {
      setVisible(false);
    };

    window.addEventListener(
      "mousemove",
      handleMove
    );

    document.addEventListener(
      "mouseleave",
      handleLeave
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove
      );

      document.removeEventListener(
        "mouseleave",
        handleLeave
      );
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${
          visible ? "cursor-visible" : ""
        } ${hovering ? "cursor-hover" : ""}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <span />
      </div>

      <div
        className={`custom-cursor-dot ${
          visible ? "cursor-visible" : ""
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </>
  );
}