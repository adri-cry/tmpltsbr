import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { workflowPhases } from "../data/siteContent";

function WorkflowSection() {
  const [activeId, setActiveId] = useState(workflowPhases[0].id);
  const active = workflowPhases.find((p) => p.id === activeId) ?? workflowPhases[0];

  return (
    <section id="workflow" className="py-20">
      <div className="w-full max-w-[1120px] mx-auto px-6">
        <SectionHeader
          tag="Workflow"
          title="Dari Order ke Hasil, Tanpa Celah"
          description="Alur kerja laboratorium terintegrasi end-to-end: pre-analytic, analytic, post-analytic — dalam satu platform."
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-5" role="tablist" aria-label="Fase workflow">
          {workflowPhases.map((phase) => (
            <button
              key={phase.id}
              type="button"
              role="tab"
              aria-selected={active.id === phase.id}
              onClick={() => setActiveId(phase.id)}
              className={`rounded-full px-5 py-2.5 font-bold cursor-pointer border transition-all ${
                active.id === phase.id
                  ? "bg-gradient-to-r from-brand to-brand-light text-white border-transparent"
                  : "bg-[#f7fbff] border-[#c9dff1] text-[#1f4d73] hover:border-[#7bb5df] hover:text-brand-dark"
              }`}
            >
              {phase.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-5">
          <div className="bg-white border border-line rounded-[18px] shadow-[0_14px_36px_rgba(8,57,99,0.09)] p-6">
            <p className="text-green font-bold text-sm uppercase tracking-wider mb-1">
              {active.subtitle}
            </p>
            <h3 className="font-display text-[1.3rem] text-ink mb-3">{active.title}</h3>
            <p className="text-muted leading-[1.65] mb-4">{active.text}</p>
            <ul className="m-0 p-0 list-none grid gap-2.5">
              {active.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-muted">
                  <i className="bi bi-check2-circle text-green mt-0.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-line rounded-[18px] shadow-[0_14px_36px_rgba(8,57,99,0.09)] p-3 flex items-center bg-white">
            <img
              src="/assets/img/portfolio/lis/29.png"
              alt="Tampilan dashboard LIS"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkflowSection;
