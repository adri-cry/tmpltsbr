import { company } from "../data/siteContent";
import SectionHeader from "../components/SectionHeader";

function AboutSection() {
  return (
    <section id="about" className="section section-soft">
      <div className="container two-col">
        <img
          src="/assets/img/about.jpg"
          className="about-image"
          alt={`Tim teknologi laboratorium ${company.name}`}
          loading="lazy"
        />

        <div>
          <SectionHeader
            tag="Tentang Kami"
            title={company.name}
            description="Perusahaan teknologi kesehatan yang fokus pada pengembangan dan implementasi Laboratory Information System (LIS) untuk fasilitas layanan kesehatan di Indonesia."
          />

          <div className="about-points">
            <p>
              Kami menggabungkan pemahaman proses laboratorium dengan arsitektur sistem modern untuk
              meningkatkan efisiensi operasional, konsistensi data, dan kualitas pelayanan diagnostik.
            </p>
            <p>
              Tim kami mendampingi dari tahap assessment, integrasi alat, pelatihan user, hingga support
              pasca implementasi agar transformasi digital berjalan stabil dan terukur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
