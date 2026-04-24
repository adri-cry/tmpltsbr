import SectionHeader from "../components/SectionHeader";
import { integrations } from "../data/siteContent";

function IntegrationSection() {
  return (
    <section id="integrations" className="py-20 bg-surface-soft">
      <div className="w-full max-w-[1120px] mx-auto px-6">
        <SectionHeader
          tag="Integrasi"
          title="Terhubung ke Ekosistem yang Sudah Ada"
          description="LIS kami berbicara dengan instrumen, HIS/SIMRS, dan sistem pelaporan — tanpa silo data."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrations.map((item) => (
            <article
              key={item.title}
              className="bg-white border border-line rounded-[18px] shadow-[0_14px_36px_rgba(8,57,99,0.09)] p-5 hover:-translate-y-1.5 hover:border-[#93c1e2] hover:shadow-[0_16px_28px_rgba(11,79,138,0.12)] transition-all group"
            >
              <i
                className={`bi ${item.icon} inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#e5f1fb] text-brand text-[1.2rem] mb-3 group-hover:bg-[#d0e4f8] transition-colors`}
              />
              <h3 className="font-display text-[1.1rem] text-ink mb-2">{item.title}</h3>
              <p className="text-muted leading-[1.66] m-0">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IntegrationSection;
