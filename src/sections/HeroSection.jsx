import { useEffect, useState } from "react";
import { heroHighlights, heroKeywords, impactStats } from "../data/siteContent";

function HeroSection() {
  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % heroKeywords.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-36 pb-20 overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 18% 24%, rgba(47,159,143,0.22), transparent 45%), radial-gradient(circle at 82% 18%, rgba(11,79,138,0.18), transparent 42%), linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.3) 100%)",
        }}
      />

      <div className="relative w-full max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-6 items-center">
        {/* Left — copy */}
        <div>
          <span className="inline-block font-bold text-green uppercase text-[0.79rem] tracking-widest mb-4">
            Laboratory Technology Partner
          </span>

          <h1 className="font-display text-[clamp(2rem,4.4vw,3.35rem)] leading-[1.12] text-ink mb-4 max-w-[13ch]">
            Laboratorium yang Berjalan{" "}
            <span className="text-brand">Lebih Cepat,</span>{" "}
            Lebih Akurat
          </h1>

          <p className="text-muted text-[1.08rem] leading-[1.78] max-w-[56ch] mb-2 font-semibold">
            Dibangun untuk lab yang ingin bergerak lebih{" "}
            <span
              key={keywordIndex}
              className="text-brand font-extrabold inline-block min-w-[7ch] animate-[fade-up_0.55s_ease]"
            >
              {heroKeywords[keywordIndex]}
            </span>
          </p>

          <p className="text-muted text-[1.08rem] leading-[1.78] max-w-[56ch]">
            PT ESA SAGARA MEDIKA membantu laboratorium mengelola pre-analytic, analytic, dan
            post-analytic secara terintegrasi — termasuk koneksi instrumen dan sinkronisasi data
            HIS/SIMRS.
          </p>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap mt-7">
            <a
              href="#contact"
              className="bg-gradient-to-r from-brand to-brand-light text-white font-bold rounded-full px-6 py-3 no-underline hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              Request Demo
            </a>
            <a
              href="#features"
              className="border border-brand text-brand font-bold rounded-full px-6 py-3 no-underline hover:bg-brand hover:text-white transition-all"
            >
              Jelajahi Fitur
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-8 max-w-[560px]">
            {impactStats.map((item) => (
              <div
                key={item.label}
                className="border border-line-strong rounded-[14px] bg-white/80 p-3 hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(15,81,138,0.14)] transition-all"
              >
                <strong className="block text-brand font-display text-[1rem]">
                  {item.value}
                </strong>
                <span className="text-muted text-[0.83rem]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — card */}
        <div className="bg-white/90 border border-line rounded-[18px] shadow-[0_14px_36px_rgba(8,57,99,0.09)] p-6">
          <h2 className="font-display text-[1.2rem] text-ink mb-4">
            Nilai Utama LIS
          </h2>
          <ul className="m-0 p-0 list-none grid gap-3.5">
            {heroHighlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-muted">
                <i className="bi bi-check-circle-fill text-green text-[1rem] mt-0.5 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-5 font-bold text-brand no-underline hover:text-brand-dark transition-colors"
          >
            Bicara dengan tim konsultasi
            <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
