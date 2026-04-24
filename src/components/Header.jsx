import { company, navLinks } from "../data/siteContent";

function Header({ menuOpen, scrolled, onToggleMenu, onCloseMenu }) {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-white/97 border-b border-line shadow-[0_8px_24px_rgba(10,46,79,0.08)]"
          : "bg-white/86 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-[1120px] mx-auto px-6 flex items-center justify-between gap-4 py-3.5">
        <a className="font-display font-extrabold text-[1.06rem] text-ink no-underline" href="#hero" onClick={onCloseMenu}>
          {company.name}
        </a>

        <button
          className="md:hidden border-0 bg-transparent text-ink text-[1.8rem] cursor-pointer"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
          <i className={`bi ${menuOpen ? "bi-x" : "bi-list"}`} />
        </button>

        <nav className={`flex items-center gap-2 max-md:absolute max-md:top-[calc(100%+8px)] max-md:left-4 max-md:right-4 max-md:bg-white max-md:border max-md:border-line max-md:rounded-2xl max-md:shadow-[0_14px_36px_rgba(8,57,99,0.09)] max-md:p-3 max-md:flex-col max-md:items-stretch ${menuOpen ? "max-md:flex" : "max-md:hidden"}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={onCloseMenu}
              className="font-semibold text-ink px-3 py-2 rounded-xl hover:text-brand hover:bg-[#eef6fd] no-underline transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={onCloseMenu}
            className="bg-gradient-to-r from-brand to-brand-light text-white font-bold rounded-full px-5 py-2.5 no-underline hover:-translate-y-0.5 hover:from-brand-dark hover:to-brand transition-all"
          >
            Request Demo
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
