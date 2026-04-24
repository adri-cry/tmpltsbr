import LeadForm from "../components/LeadForm";
import SectionHeader from "../components/SectionHeader";
import { company } from "../data/siteContent";

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-surface-soft">
      <div className="w-full max-w-[1120px] mx-auto px-6">
        <SectionHeader
          tag="Kontak"
          title="Konsultasi dan Request Demo"
          description="Tim kami siap membantu menyusun roadmap implementasi LIS yang sesuai target operasional dan anggaran."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <article className="bg-surface border border-line rounded-[18px] shadow-[0_14px_36px_rgba(8,57,99,0.09)] p-5 hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(13,96,158,0.11)] transition-all">
            <i className="bi bi-geo-alt text-brand text-[1.3rem] mb-2 block" />
            <h3 className="font-display text-[1rem] text-ink mb-2">Alamat Kantor</h3>
            <p className="text-muted leading-[1.7] m-0">{company.address}</p>
          </article>

          <article className="bg-surface border border-line rounded-[18px] shadow-[0_14px_36px_rgba(8,57,99,0.09)] p-5 hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(13,96,158,0.11)] transition-all">
            <i className="bi bi-envelope text-brand text-[1.3rem] mb-2 block" />
            <h3 className="font-display text-[1rem] text-ink mb-2">Email</h3>
            <p className="m-0">
              <a href={`mailto:${company.email}`} className="text-muted no-underline hover:text-brand transition-colors">
                {company.email}
              </a>
            </p>
          </article>

          <article className="bg-surface border border-line rounded-[18px] shadow-[0_14px_36px_rgba(8,57,99,0.09)] p-5 hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(13,96,158,0.11)] transition-all">
            <i className="bi bi-telephone text-brand text-[1.3rem] mb-2 block" />
            <h3 className="font-display text-[1rem] text-ink mb-2">Telepon</h3>
            <p className="m-0 text-muted leading-[1.7]">
              <a href={`tel:${company.phoneHref}`} className="text-muted no-underline hover:text-brand transition-colors">
                {company.phoneDisplay}
              </a>
              <br />
              <a href={`tel:${company.mobileHref}`} className="text-muted no-underline hover:text-brand transition-colors">
                {company.mobileDisplay}
              </a>
            </p>
          </article>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}

export default ContactSection;
