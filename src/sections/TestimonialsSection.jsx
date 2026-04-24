import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { testimonials } from "../data/siteContent";

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 bg-surface-soft">
      <div className="w-full max-w-[1120px] mx-auto px-6">
        <SectionHeader
          tag="Testimoni"
          title="Apa Kata Tim Pengguna"
          description="Pengalaman nyata dari tim operasional yang sudah menjalankan LIS kami."
          centered
        />

        <div className="bg-gradient-to-br from-white to-[#f4f9ff] border border-[#d6e7f6] rounded-[22px] shadow-[0_14px_36px_rgba(8,57,99,0.09)] max-w-[860px] mx-auto py-10 px-8 text-center">
          <p className="text-[clamp(1.05rem,2.1vw,1.34rem)] leading-[1.8] text-[#234a6d] mb-5">
            &ldquo;{active.quote}&rdquo;
          </p>
          <div className="grid gap-1">
            <strong className="text-[#0f4f84]">{active.name}</strong>
            <span className="text-[#5c7592]">{active.org}</span>
          </div>

          <div className="flex justify-center gap-2 mt-5" aria-label="Pilih testimoni">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Testimoni ${idx + 1}`}
                className={`w-3 h-3 rounded-full border-0 cursor-pointer transition-all ${
                  idx === activeIndex
                    ? "bg-brand scale-[1.12]"
                    : "bg-[#bfd9ed] hover:bg-[#8bbdde]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
