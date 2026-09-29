interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-xl text-center">
      <p className="text-[13px] font-semibold uppercase tracking-wide text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-2.5 text-[32px] font-extrabold leading-tight text-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
}
