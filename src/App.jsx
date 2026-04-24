import { useEffect, useState } from "react";

const whatsappUrl =
  "https://wa.me/6289637880523?text=Halo%20ESA%20Sagara%20Medika%2C%20saya%20tertarik%20demo%20FASTLIS";

const navLinks = [
  { label: "Masalah", href: "#masalah" },
  { label: "Platform", href: "#platform" },
  { label: "Workflow", href: "#workflow" },
  { label: "Integrasi", href: "#integrasi" },
  { label: "Demo", href: "#contact" },
];

const avatars = [
  "/images/customers/customer-1.svg",
  "/images/customers/customer-2.svg",
  "/images/customers/customer-3.svg",
  "/images/customers/customer-4.svg",
];

const stats = [
  { value: "38%", label: "TAT lebih cepat" },
  { value: "0x", label: "input ulang hasil alat" },
  { value: "24/7", label: "monitoring status lab" },
];

const painPoints = [
  {
    title: "Input hasil alat masih manual",
    text: "Setiap entry ulang membuka risiko salah ketik, delay validasi, dan kerja analis yang tidak perlu.",
  },
  {
    title: "Status sampel tidak terlihat real-time",
    text: "Admin, analis, dokter, dan manajemen sering melihat versi data yang berbeda.",
  },
  {
    title: "Integrasi SIMRS terasa ribet",
    text: "Tanpa peta implementasi yang jelas, proyek digitalisasi lab mudah molor dan sulit diukur hasilnya.",
  },
];

const partners = [
  { name: "Customer 1", image: "/assets/img/clients/1.png" },
  { name: "Customer 2", image: "/assets/img/clients/2.png" },
  { name: "Customer 3", image: "/assets/img/clients/3.png" },
  { name: "Customer 4", image: "/assets/img/clients/4.png" },
  { name: "Customer 5", image: "/assets/img/clients/5.png" },
  { name: "Customer 6", image: "/assets/img/clients/client-6.png" },
];

const capabilities = [
  {
    icon: "activity",
    title: "Instrument Interfacing",
    text: "Hasil hematologi, kimia klinis, urine, dan POCT masuk otomatis ke LIS.",
  },
  {
    icon: "shield",
    title: "Validasi Multi-Level",
    text: "Alur review analis, dokter, dan admin dengan audit trail yang jelas.",
  },
  {
    icon: "clock",
    title: "Real-Time Turnaround",
    text: "Pantau registrasi, sampling, proses alat, validasi, dan rilis hasil.",
  },
  {
    icon: "file",
    title: "Laporan Siap Kirim",
    text: "Format hasil rapi untuk cetak, PDF, WhatsApp, dan integrasi HIS/SIMRS.",
  },
  {
    icon: "database",
    title: "Master Data Terpusat",
    text: "Kelola parameter, nilai rujukan, paket pemeriksaan, harga, dan role akses.",
  },
  {
    icon: "chart",
    title: "Dashboard Manajemen",
    text: "Lihat volume pemeriksaan, SLA, abnormal flag, dan performa operasional.",
  },
];

const workflow = [
  "Order masuk",
  "Barcode sampel",
  "Proses alat",
  "Validasi klinis",
  "Rilis hasil",
];

const integrations = [
  { title: "HIS", text: "Sinkron order, data pasien, dan status hasil dari sistem rumah sakit." },
  { title: "SIMRS", text: "Alur lab tersambung ke sistem informasi manajemen rumah sakit." },
  { title: "Hematology Analyzer", text: "Tarik hasil CBC dan parameter hematologi otomatis." },
  { title: "Chemistry Analyzer", text: "Hubungkan pemeriksaan kimia klinis tanpa entry ulang." },
  { title: "Urinalysis", text: "Integrasi hasil urine analyzer ke workflow validasi." },
  { title: "POCT", text: "Satukan hasil pemeriksaan cepat dalam laporan lab." },
  { title: "Barcode", text: "Identifikasi sampel lebih rapi dari registrasi sampai rilis hasil." },
  { title: "PDF / WhatsApp", text: "Distribusi laporan hasil lebih cepat ke channel operasional." },
];

const demoPlan = [
  "Audit workflow lab saat ini",
  "Pemetaan HIS, SIMRS, dan alat lab",
  "Estimasi timeline go-live",
  "Demo dashboard dan validasi hasil",
];

const edges = [
  {
    title: "Go-live lebih cepat",
    copy: "Implementasi bertahap mengikuti alur lab, bukan memaksa tim mengganti semua proses sekaligus.",
  },
  {
    title: "Kontrol risiko lebih kuat",
    copy: "Role access, audit trail, critical flag, dan validasi berlapis menjaga hasil tetap terkendali.",
  },
  {
    title: "Siap untuk skala cabang",
    copy: "Data, user, alat, dan laporan bisa ditata untuk kebutuhan multi-cabang dan dashboard pusat.",
  },
];

const testimonials = [
  {
    name: "dr. Ratih Prameswari",
    role: "Kepala Laboratorium RS Mitra Sehat",
    image: "/images/customers/customer-2.svg",
    quote:
      "Turnaround time pemeriksaan rutin turun drastis karena hasil alat tidak lagi dipindahkan manual.",
  },
  {
    name: "Andri Wijaya",
    role: "IT Manager Klinik Utama",
    image: "/images/customers/customer-3.svg",
    quote:
      "Tim kami bisa menghubungkan workflow lab dengan SIMRS tanpa membuat proses front office berubah besar.",
  },
  {
    name: "Siska Amelia",
    role: "Manager Operasional Lab Diagnostik",
    image: "/images/customers/customer-4.svg",
    quote:
      "Dashboard status sampel membuat bottleneck terlihat cepat, terutama saat volume pasien tinggi.",
  },
];

function Icon({ name, className = "h-5 w-5" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    activity: <path d="M22 12h-4l-3 8L9 4l-3 8H2" />,
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    file: (
      <>
        <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 3 5-7" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m18 6-12 12" />
        <path d="m6 6 12 12" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    spark: <path d="M13 2 4 14h8l-1 8 9-12h-8Z" />,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function Button({
  children,
  href = "#contact",
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-blue-600 text-white shadow-[0_18px_40px_rgba(37,99,235,0.26)] hover:bg-blue-700",
    secondary:
      "border border-slate-200 bg-white/85 text-slate-900 shadow-[0_16px_35px_rgba(15,23,42,0.08)] hover:border-blue-200 hover:bg-white",
    inverted:
      "bg-white text-blue-700 shadow-[0_18px_40px_rgba(255,255,255,0.22)] hover:bg-blue-50",
    ghost: "border border-white/25 bg-white/10 text-white hover:bg-white/15",
  };

  return (
    <a
      href={href}
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition duration-300 hover:-translate-y-1 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionHeader({ eyebrow, title, text, align = "center" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>
    </div>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [leadSent, setLeadSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLeadSubmit = (event) => {
    event.preventDefault();
    setLeadSent(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-900 antialiased">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/90 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "bg-white/20 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#hero" className="flex items-center gap-3" aria-label="FASTLIS">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-[0_16px_35px_rgba(37,99,235,0.3)]">
              <Icon name="spark" className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-display text-base font-extrabold text-slate-950">
                FASTLIS
              </span>
              <span className="block text-xs font-semibold text-slate-500">
                Laboratory Information System
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 rounded-full border border-white/60 bg-white/60 px-5 py-3 shadow-[0_10px_28px_rgba(15,23,42,0.06)] backdrop-blur-xl lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-slate-600 transition hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button href={whatsappUrl} target="_blank" rel="noreferrer">Jadwalkan Demo</Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm lg:hidden"
            aria-label="Buka navigasi"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </nav>

        {menuOpen && (
          <div className="mx-6 mb-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl lg:hidden">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={whatsappUrl}
                className="mt-2 w-full"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Jadwalkan Demo
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="hero" className="relative pt-32 md:pt-36">
          <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-200 via-indigo-100 to-cyan-100 opacity-75 blur-3xl" />
          <div className="absolute right-0 top-28 -z-10 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl" />
          <div className="absolute left-0 top-80 -z-10 h-64 w-64 rounded-full bg-cyan-200/50 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/75 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.16)]" />
                LIS modern untuk rumah sakit, klinik, dan lab diagnostik
              </div>

              <h1 className="mt-7 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl md:leading-[1.08]">
                Bikin lab Anda terlihat lebih cepat, lebih akurat, dan lebih siap audit sejak halaman pertama.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                FASTLIS menyatukan order, barcode, alat laboratorium, validasi hasil,
                dan integrasi HIS/SIMRS dalam satu platform yang langsung terasa bernilai
                untuk direktur, kepala lab, IT, dan operasional.
              </p>

              <div className="mt-7 grid max-w-2xl grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl"
                  >
                    <p className="font-display text-2xl font-extrabold text-slate-950">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-bold leading-5 text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href={whatsappUrl} target="_blank" rel="noreferrer">
                  Minta Demo Premium
                  <Icon name="arrow" className="h-4 w-4" />
                </Button>
                <Button href={whatsappUrl} variant="secondary" target="_blank" rel="noreferrer">
                  Chat WhatsApp
                </Button>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex -space-x-3">
                  {avatars.map((avatar, index) => (
                    <img
                      key={avatar}
                      src={avatar}
                      alt={`Customer ${index + 1}`}
                      className="h-10 w-10 rounded-full border-2 border-white bg-slate-100 object-cover grayscale shadow-md transition duration-300 hover:grayscale-0"
                    />
                  ))}
                </div>
                <p className="max-w-sm text-sm font-semibold leading-6 text-slate-600">
                  Dirancang untuk tim lab yang ingin mengurangi kerja manual tanpa kehilangan kontrol klinis.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-5 top-10 z-10 hidden rounded-2xl border border-white/70 bg-white/80 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:block">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  TAT Today
                </p>
                <p className="mt-1 text-2xl font-extrabold text-slate-950">-38%</p>
                <p className="text-xs font-semibold text-emerald-600">lebih cepat</p>
              </div>

              <div className="absolute -right-3 bottom-16 z-10 hidden rounded-2xl border border-white/70 bg-white/85 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-slate-950">98.7%</p>
                    <p className="text-xs font-semibold text-slate-500">hasil tervalidasi</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-[0_30px_100px_rgba(37,99,235,0.2)] backdrop-blur-2xl">
                <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950">
                  <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-400" />
                      <span className="h-3 w-3 rounded-full bg-amber-300" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-xs font-bold text-slate-400">FASTLIS Control Room</span>
                  </div>

                  <div className="grid gap-4 p-5 md:grid-cols-[0.8fr_1.2fr]">
                    <div className="space-y-4">
                      {["Registrasi", "Sampling", "Analytic", "Validasi"].map((item, index) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-bold text-white">{item}</p>
                            <span className="text-xs font-bold text-cyan-300">
                              {82 + index * 4}%
                            </span>
                          </div>
                          <div className="mt-3 h-2 rounded-full bg-white/10">
                            <div
                              className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                              style={{ width: `${64 + index * 8}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-3xl bg-white p-5 text-slate-900">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-bold text-slate-500">Live Sample Queue</p>
                          <p className="mt-2 font-display text-3xl font-extrabold">1,248</p>
                        </div>
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700">
                          Online
                        </span>
                      </div>

                      <div className="mt-6 grid grid-cols-3 gap-3">
                        {[
                          ["Critical", "18", "text-rose-600"],
                          ["Final", "936", "text-blue-600"],
                          ["Pending", "294", "text-amber-600"],
                        ].map(([label, value, color]) => (
                          <div key={label} className="rounded-2xl bg-slate-50 p-3">
                            <p className="text-xs font-bold text-slate-500">{label}</p>
                            <p className={`mt-1 text-xl font-extrabold ${color}`}>{value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 space-y-3">
                        {[
                          ["CBC-2408", "Analyzer connected", "Ready"],
                          ["CHEM-8841", "Auto validation", "Review"],
                          ["URI-3017", "Result released", "Done"],
                        ].map(([code, label, status]) => (
                          <div
                            key={code}
                            className="flex items-center justify-between rounded-2xl border border-slate-100 p-3"
                          >
                            <div>
                              <p className="text-sm font-extrabold text-slate-900">{code}</p>
                              <p className="text-xs font-semibold text-slate-500">{label}</p>
                            </div>
                            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-blue-700">
                              {status}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                        <img
                          src="/assets/img/portfolio/lis/29.png"
                          alt="Preview modul FASTLIS"
                          className="h-32 w-full object-cover object-top opacity-95"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/80 bg-white/75 py-10 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-center text-sm font-extrabold uppercase tracking-[0.18em] text-slate-500">
              Dibangun untuk institusi kesehatan yang butuh kontrol, kecepatan, dan auditability
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="group flex min-h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_18px_50px_rgba(37,99,235,0.12)]"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-12 max-w-full object-contain grayscale opacity-55 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="masalah" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeader
              align="left"
              eyebrow="Why Now"
              title="Kalau workflow lab masih manual, setiap sampel membawa risiko operasional."
              text="Landing page ini sekarang langsung menjawab hal yang bikin calon klien ragu: akurasi, integrasi, audit trail, timeline implementasi, dan dukungan setelah go-live."
            />

            <div className="grid gap-4">
              {painPoints.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_24px_70px_rgba(37,99,235,0.12)]"
                >
                  <div className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blue-50 font-display text-sm font-extrabold text-blue-700">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-extrabold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow="Core Capabilities"
              title="Semua kemampuan LIS yang bikin proses lab terasa lebih ringan."
              text="Didesain untuk mengubah aktivitas harian laboratorium menjadi workflow digital yang cepat, transparan, dan mudah dikontrol."
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:scale-105">
                    <Icon name={item.icon} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-extrabold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow="Frictionless Workflow"
              title="Adopsi tanpa membuat tim lab merasa dipaksa belajar ulang."
              text="Flow dibuat sederhana agar admin, analis, dokter, dan IT bergerak dalam proses yang sama dari awal sampai hasil keluar."
            />

            <div className="mt-16 grid gap-4 lg:grid-cols-5">
              {workflow.map((step, index) => (
                <div key={step} className="relative">
                  {index < workflow.length - 1 && (
                    <div className="absolute left-[50%] top-10 hidden h-px w-full bg-gradient-to-r from-blue-200 to-cyan-200 lg:block" />
                  )}
                  <div
                    className="relative block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)]"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-600 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(37,99,235,0.25)]">
                      {index + 1}
                    </div>
                    <h3 className="mt-5 font-display text-lg font-extrabold text-slate-950">
                      {step}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Status tersinkron real-time dan bisa ditelusuri oleh role yang berwenang.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="integrasi"
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <SectionHeader
            align="left"
            eyebrow="Seamless Ecosystem"
            title="Terhubung dengan HIS, SIMRS, dan alat lab yang sudah Anda gunakan."
            text="FASTLIS menjadi lapisan operasional yang menyatukan sistem rumah sakit, instrumen laboratorium, dan kebutuhan pelaporan manajemen."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {integrations.map((item) => (
              <article
                key={item.title}
                className="grid min-h-36 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_22px_60px_rgba(37,99,235,0.12)]"
              >
                <span className="font-display text-base font-extrabold text-slate-950">
                  {item.title}
                </span>
                <span className="mt-2 text-sm font-semibold leading-6 text-slate-500">
                  {item.text}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                  Competitive Edge
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                  Bukan sekadar digitalisasi. Ini sistem kontrol mutu untuk pertumbuhan layanan lab.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Platform premium untuk tim yang butuh proses rapi, data bisa dipercaya,
                  dan integrasi yang tidak berubah jadi proyek tanpa akhir.
                </p>
              </div>

              <div className="grid gap-4">
                {edges.map((edge) => (
                  <article
                    key={edge.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"
                  >
                    <div className="flex gap-4">
                      <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-cyan-300/15 text-cyan-200">
                        <Icon name="check" className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-extrabold">{edge.title}</h3>
                        <p className="mt-2 leading-7 text-slate-300">{edge.copy}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="testimoni" className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeader
            eyebrow="Wall of Love"
            title="Dibuat untuk orang-orang yang menjaga layanan lab tetap presisi."
            text="Dari kepala laboratorium sampai tim IT, FASTLIS membantu semua pihak melihat status, risiko, dan hasil dalam konteks yang sama."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(37,99,235,0.12)]"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded-full border-2 border-white bg-slate-100 grayscale shadow-md transition duration-300 hover:grayscale-0"
                  />
                  <div>
                    <h3 className="font-display font-extrabold text-slate-950">{item.name}</h3>
                    <p className="text-sm font-semibold text-slate-500">{item.role}</p>
                  </div>
                </div>
                <p className="mt-7 text-lg font-semibold leading-8 text-slate-700">
                  "{item.quote}"
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-600">
                  Demo Plan
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                  Demo bukan cuma presentasi. Tim Anda pulang dengan gambaran implementasi.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Dalam sesi pertama, tim FASTLIS bantu petakan alur kerja,
                  kebutuhan integrasi, prioritas modul, dan risiko sebelum go-live.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {demoPlan.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_22px_60px_rgba(37,99,235,0.12)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                        <Icon name="check" className="h-5 w-5" />
                      </span>
                      <p className="font-display font-extrabold text-slate-950">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-950 px-6 py-10 text-white shadow-[0_30px_100px_rgba(37,99,235,0.25)] md:px-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-purple-300/20 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-cyan-200">
                  Final Push
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-5xl">
                  Jadikan website ini pintu masuk lead serius untuk FASTLIS.
                </h2>
                <p className="mt-6 text-lg leading-8 text-blue-50">
                  Isi form singkat, lalu lanjutkan via WhatsApp agar tim sales bisa
                  follow up kebutuhan HIS, SIMRS, alat lab, jumlah cabang, dan target go-live.
                </p>
                <div className="mt-8 grid gap-3 text-sm font-bold text-blue-50">
                  <p>SLA onboarding jelas</p>
                  <p>Dukungan implementasi lokal</p>
                  <p>Dibangun untuk integrasi rumah sakit</p>
                </div>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button href={whatsappUrl} variant="inverted" target="_blank" rel="noreferrer">
                    Chat WhatsApp
                  </Button>
                  <Button href="tel:+622287311000" variant="ghost">
                    Telepon Sales
                  </Button>
                </div>
              </div>

              <form
                onSubmit={handleLeadSubmit}
                className="rounded-[1.5rem] border border-white/20 bg-white p-5 text-slate-900 shadow-[0_24px_80px_rgba(0,0,0,0.2)] md:p-6"
              >
                <div className="grid gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-extrabold text-slate-700">
                      Nama
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Nama lengkap"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="institution" className="text-sm font-extrabold text-slate-700">
                        Institusi
                      </label>
                      <input
                        id="institution"
                        name="institution"
                        required
                        placeholder="RS / Klinik / Lab"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-extrabold text-slate-700">
                        WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        required
                        placeholder="08xxxxxxxxxx"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="need" className="text-sm font-extrabold text-slate-700">
                      Kebutuhan utama
                    </label>
                    <select
                      id="need"
                      name="need"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    >
                      <option>Integrasi alat laboratorium</option>
                      <option>Integrasi HIS / SIMRS</option>
                      <option>Digitalisasi workflow lab</option>
                      <option>Multi-cabang dan dashboard manajemen</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(37,99,235,0.26)] transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
                  >
                    Kirim Permintaan Demo
                    <Icon name="arrow" className="h-4 w-4" />
                  </button>

                  {leadSent && (
                    <div className="rounded-2xl bg-emerald-50 p-4">
                      <p className="text-sm font-extrabold text-emerald-700">
                        Siap. Form sudah kebaca. Klik WhatsApp supaya tim sales bisa follow up lebih cepat.
                      </p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex text-sm font-extrabold text-blue-700 hover:text-blue-900"
                      >
                        Lanjut ke WhatsApp
                      </a>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-600 text-white">
                <Icon name="spark" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display font-extrabold text-slate-950">FASTLIS</p>
                <p className="text-sm font-semibold text-slate-500">
                  Premium Laboratory Information System by PT ESA SAGARA MEDIKA
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md leading-7 text-slate-600">
              Riung Arum Square, Jl. Riung Arum Raya No.51E, Cisaranten Kidul,
              Gedebage, Bandung, Jawa Barat 40295.
            </p>
          </div>

          <div>
            <p className="font-display font-extrabold text-slate-950">Platform</p>
            <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-600">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-blue-700">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display font-extrabold text-slate-950">Kontak</p>
            <div className="mt-4 grid gap-3 text-sm font-semibold text-slate-600">
              <a href="mailto:pt.sabarayasagaramandiri1@gmail.com" className="hover:text-blue-700">
                pt.sabarayasagaramandiri1@gmail.com
              </a>
              <a href="tel:+622287311000" className="hover:text-blue-700">
                +022-87311000
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-blue-700">
                WhatsApp Sales
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
