interface FloatingSkillProps {
  className?: string;
  category: string;
  title: string;
}

export default function FloatingSkill({
  className = "",
  category,
  title,
}: FloatingSkillProps) {
  return (
    <div
      className={`floating-skill ${className}`}
    >
      <span>{category}</span>

      <strong>{title}</strong>
    </div>
  );
}