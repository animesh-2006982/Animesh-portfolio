interface SectionHeadingProps {
  number?: string;
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  number,
  eyebrow,
  title,
  highlight,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading ${className}`}
    >
      <div className="section-heading-main">

        {(number || eyebrow) && (
          <span className="section-heading-kicker">
            {number && `${number} / `}
            {eyebrow}
          </span>
        )}

        <h2 className="section-heading-title">
          {title}

          {highlight && (
            <span>
              {highlight}
            </span>
          )}

          <b>.</b>
        </h2>

      </div>

      {description && (
        <p className="section-heading-description">
          {description}
        </p>
      )}
    </div>
  );
}