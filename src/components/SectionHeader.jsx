function SectionHeader({ tag, title, description, centered = false }) {
  return (
    <div className={`max-w-[760px] mb-8 ${centered ? "text-center mx-auto" : ""}`}>
      {tag && (
        <span className="inline-block font-bold text-green uppercase text-[0.79rem] tracking-widest mb-3">
          {tag}
        </span>
      )}
      <h2 className="font-display text-[clamp(1.55rem,2.6vw,2.34rem)] leading-tight text-ink mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-muted text-[1.03rem] leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export default SectionHeader;
