"use client";

import {
  useRef,
  type ReactNode,
  type MouseEvent,
} from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.25,
  onClick,
}: MagneticButtonProps) {
  const buttonRef =
    useRef<HTMLButtonElement>(null);

  const handleMouseMove = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    const button = buttonRef.current;

    if (!button) return;

    const rect =
      button.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left -
      rect.width / 2;

    const y =
      event.clientY -
      rect.top -
      rect.height / 2;

    button.style.transform =
      `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;

    if (!button) return;

    button.style.transform =
      "translate(0, 0)";
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
}