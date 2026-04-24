import SectionHeader from "../components/SectionHeader";
import { features } from "../data/siteContent";

function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-surface-soft">
      <div className="w-full max-w-[1120px] mx-auto px-6">
        <SectionHeader
          tag="Fitur"
          title="Semua yang Lab Modern Butuhkan"
          description="Dirancang untuk meningkatkan kualitas hasil, mempercepat workflow, dan memudahkan monitoring operasional."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="bg-surface border border-line rounded-[18px] shadow-[0_14px_36px_rgba(8,57,99,0.09)] p-5 hover:-translate-y-1.5 hover:shadow-[0_16px_28px_rgba(11,79,138,0.12)] hover:border-[#93c1e2] transition-all"
            >
              <i
                className={`bi ${f.icon} inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#e5f1fb] text-brand text-[1.2rem] mb-3`}
              />
              <h3 className="font-display text-[1.1rem] text-ink mb-2">{f.title}</h3>
              <p className="text-muted leading-[1.66] m-0">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
