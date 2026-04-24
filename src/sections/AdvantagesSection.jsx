import SectionHeader from "../components/SectionHeader";
import { advantages } from "../data/siteContent";

function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20">
      <div className="w-full max-w-[1120px] mx-auto px-6">
        <SectionHeader
          tag="Keunggulan"
          title="Mengapa Laboratorium Memilih Kami"
          description="Bukan sekadar software — ini adalah partner operasional yang memahami kompleksitas lab klinis."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {advantages.map((item, i) => (
            <article
              key={item.title}
              className={`border border-line rounded-[18px] shadow-[0_14px_36px_rgba(8,57,99,0.09)] p-6 hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(11,79,138,0.12)] transition-all ${
                i % 2 === 0
                  ? "bg-gradient-to-br from-white to-[#f0f7ff]"
                  : "bg-gradient-to-br from-white to-[#f0fdf8]"
              }`}
            >
              <i
                className={`bi ${item.icon} text-[2rem] mb-4 block ${
                  i % 2 === 0 ? "text-brand" : "text-green"
                }`}
              />
              <h3 className="font-display text-[1.15rem] text-ink mb-2">{item.title}</h3>
              <p className="text-muted leading-[1.72] m-0">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvantagesSection;
