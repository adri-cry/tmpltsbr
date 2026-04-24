import SectionHeader from "../components/SectionHeader";
import { faqs } from "../data/siteContent";

function FaqSection() {
  return (
    <section
      id="faq"
      className="py-20"
      style={{
        background:
          "radial-gradient(circle at 0 0, rgba(78,194,210,0.09), transparent 35%), #ffffff",
      }}
    >
      <div className="w-full max-w-[1120px] mx-auto px-6">
        <SectionHeader
          tag="FAQ"
          title="Pertanyaan yang Sering Ditanyakan"
          description="Jawaban singkat untuk membantu keputusan implementasi LIS lebih cepat."
          centered
        />

        <div className="max-w-[880px] mx-auto grid gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="border border-[#d5e7f6] rounded-[14px] bg-[#f9fcff] overflow-hidden group"
            >
              <summary className="list-none cursor-pointer font-bold text-[#164f7b] px-4 py-4 pr-12 relative hover:bg-[#f0f7fd] transition-colors">
                {faq.q}
                <span className="absolute right-4 top-4 text-[1.1rem] text-[#1b6ca8] group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="m-0 px-4 pb-4 text-muted leading-[1.72]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
