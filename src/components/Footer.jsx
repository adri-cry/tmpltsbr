import { company } from "../data/siteContent";

function Footer() {
  return (
    <footer className="border-t border-line bg-[#f7fbff] py-5">
      <div className="w-full max-w-[1120px] mx-auto px-6 flex justify-between items-center gap-4 flex-wrap">
        <p className="text-[#4a6079] m-0">
          &copy; {new Date().getFullYear()} {company.legalName}
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="#contact" className="text-[#4a6079] font-semibold no-underline hover:text-brand transition-colors">
            Kontak
          </a>
          <a href="mailto:pt.sabarayasagaramandiri1@gmail.com" className="text-[#4a6079] font-semibold no-underline hover:text-brand transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
