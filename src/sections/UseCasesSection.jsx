import SectionHeader from "../components/SectionHeader";
import { useCases } from "../data/siteContent";

function UseCasesSection() {
  return (
    <section id="use-cases" className="section">
      <div className="container">
        <SectionHeader
          tag="Use Cases"
          title="Implementasi LIS untuk Berbagai Fasilitas"
          description="Pendekatan implementasi yang menyesuaikan kebutuhan operasional dan skala layanan di setiap fasilitas kesehatan."
        />

        <div className="use-case-grid">
          {useCases.map((useCase) => (
            <article key={useCase.title} className="use-case-card">
              <i className={`bi ${useCase.icon}`} />
              <h3>{useCase.title}</h3>
              <p>{useCase.text}</p>
              <p className="use-case-outcome">{useCase.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCasesSection;
