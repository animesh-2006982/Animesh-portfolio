export function cn(
  ...classes: Array<
    string | false | null | undefined
  >
) {
  return classes
    .filter(Boolean)
    .join(" ");
}


export function clamp(
  value: number,
  min: number,
  max: number
) {
  return Math.min(
    Math.max(value, min),
    max
  );
}


export function lerp(
  start: number,
  end: number,
  amount: number
) {
  return (
    start +
    (end - start) * amount
  );
}


export function formatNumber(
  value: number,
  digits = 2
) {
  return String(value).padStart(
    digits,
    "0"
  );
}


export function scrollToSection(
  id: string
) {
  const element =
    document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}