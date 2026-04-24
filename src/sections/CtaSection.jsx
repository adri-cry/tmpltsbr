function CtaSection() {
  return (
    <section id="cta" className="py-10">
      <div className="w-full max-w-[1120px] mx-auto px-6">
        <div
          className="border border-[#b8d8f3] rounded-[18px] shadow-[0_14px_36px_rgba(8,57,99,0.09)] p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-5"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, rgba(78,194,210,0.15), transparent 35%), linear-gradient(120deg, #ebf6ff 0%, #f3fffd 100%)",
          }}
        >
          <div>
            <span className="inline-block font-bold text-green uppercase text-[0.79rem] tracking-widest mb-3">
              Siap Digitalisasi Laboratorium?
            </span>
            <h2 className="font-display text-[clamp(1.4rem,2.1vw,2rem)] leading-tight text-ink mb-3">
              Jadwalkan Demo LIS
            </h2>
            <p className="text-muted leading-[1.72] m-0 max-w-[56ch]">
              Kami membantu analisis kebutuhan, implementasi bertahap, migrasi data, integrasi
              instrumen, dan sinkronisasi HIS/SIMRS — agar go-live lebih cepat dan minim
              gangguan.
            </p>
          </div>
          <a
            href="#contact"
            className="bg-gradient-to-r from-brand to-brand-light text-white font-bold rounded-full px-7 py-3.5 no-underline hover:-translate-y-0.5 hover:shadow-lg transition-all shrink-0 self-center"
          >
            Request Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
