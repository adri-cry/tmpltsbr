import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { differentiators, workflowPhases } from "../data/siteContent";

function ProductSection() {
  const [activePhaseId, setActivePhaseId] = useState(workflowPhases[0].id);
  const activePhase = workflowPhases.find((phase) => phase.id === activePhaseId) ?? workflowPhases[0];

  return (
    <section id="product" className="section">
      <div className="container">
        <SectionHeader
          tag="Produk Utama"
          title="Laboratory Information System (LIS)"
          description="Solusi LIS terpadu untuk manajemen end-to-end laboratorium: registrasi, barcode specimen, distribusi worklist, validasi hasil, pelaporan, hingga integrasi data ke sistem rumah sakit."
        />

        <div className="marketing-strip">
          {differentiators.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="product-grid">
          <div className="product-panel">
            <h3>Workflow Laboratorium Interaktif</h3>

            <div className="phase-tabs" role="tablist" aria-label="Fase workflow LIS">
              {workflowPhases.map((phase) => (
                <button
                  key={phase.id}
                  type="button"
                  role="tab"
                  aria-selected={activePhase.id === phase.id}
                  className={`phase-tab ${activePhase.id === phase.id ? "active" : ""}`}
                  onClick={() => setActivePhaseId(phase.id)}
                >
                  {phase.title}
                </button>
              ))}
            </div>

            <div className="workflow-detail" role="tabpanel">
              <h4>{activePhase.title}</h4>
              <p>{activePhase.text}</p>
              <ul>
                {activePhase.points.map((point) => (
                  <li key={point}>
                    <i className="bi bi-check2-circle" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="product-image-card">
            <img src="/assets/img/portfolio/lis/29.png" alt="Tampilan dashboard LIS" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
