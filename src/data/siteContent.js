export const company = {
  name: "PT ESA SAGARA MEDIKA",
  legalName: "PT ESA SAGARA MEDIKA",
  tagline: "Laboratory Technology Partner",
  description:
    "Solusi Laboratory Information System (LIS) untuk otomasi workflow laboratorium, integrasi alat, dan integrasi HIS/SIMRS.",
  phoneDisplay: "+022-87311000",
  phoneHref: "+622287311000",
  mobileDisplay: "+62 896-3788-0523",
  mobileHref: "+6289637880523",
  email: "pt.sabarayasagaramandiri1@gmail.com",
  address:
    "Riung Arum Square, Jl. Riung Arum Raya No.51E, Cisaranten Kidul, Gedebage, Kota Bandung, Jawa Barat 40295",
  city: "Bandung",
  province: "Jawa Barat",
  country: "ID",
};

export const navLinks = [
  { id: "features", label: "Fitur" },
  { id: "workflow", label: "Workflow" },
  { id: "integrations", label: "Integrasi" },
  { id: "advantages", label: "Keunggulan" },
  { id: "testimonials", label: "Testimoni" },
  { id: "contact", label: "Kontak" },
];

export const heroKeywords = ["Akurat", "Cepat", "Terintegrasi", "Aman", "Scalable"];

export const impactStats = [
  { value: "24/7", label: "Availability" },
  { value: "Real-Time", label: "Monitoring Sampel" },
  { value: "1", label: "Platform Terpadu" },
];

export const heroHighlights = [
  "Integrasi alat laboratorium multi-vendor",
  "Validasi hasil real-time dan pelacakan sampel",
  "Integrasi HIS/SIMRS untuk alur data klinis",
  "Keamanan data dan audit trail komprehensif",
];

export const features = [
  {
    icon: "bi-diagram-3",
    title: "Instrument Interfacing",
    text: "Koneksi langsung dengan analyzer hematologi, kimia klinik, imunologi, dan perangkat lab lainnya — multi-vendor, satu platform.",
  },
  {
    icon: "bi-lightning-charge",
    title: "Real-Time Results",
    text: "Hasil pemeriksaan dikirim instan ke unit klinis. Keputusan medis lebih cepat, TAT lebih singkat.",
  },
  {
    icon: "bi-gear",
    title: "Workflow Automation",
    text: "Kurangi input manual dan human error. Otomasi end-to-end dari order sampai distribusi hasil.",
  },
  {
    icon: "bi-grid-1x2",
    title: "Intuitive Interface",
    text: "Antarmuka bersih dan mudah dikuasai. Onboarding cepat, produktivitas naik dari hari pertama.",
  },
  {
    icon: "bi-shield-lock",
    title: "Data Security & Audit",
    text: "Role-based access, audit trail lengkap, backup terjadwal. Data pasien terlindungi, compliance terpenuhi.",
  },
  {
    icon: "bi-hospital",
    title: "HIS / SIMRS Integration",
    text: "Bridging two-way dengan sistem rumah sakit. Order masuk otomatis, hasil kembali tanpa retouch.",
  },
];

export const workflowPhases = [
  {
    id: "pre-analytic",
    title: "Pre-Analytic",
    subtitle: "Order & Registrasi",
    text: "Penerimaan order dari HIS/SIMRS atau input manual, pembuatan barcode specimen, dan manajemen panel pemeriksaan.",
    points: [
      "Bridging order dari HIS/SIMRS",
      "Master test, parameter, nilai rujukan",
      "Barcode specimen & check-in sampel",
    ],
  },
  {
    id: "analytic",
    title: "Analytic",
    subtitle: "Proses & QC",
    text: "Instrument interfacing otomatis, monitoring status sampel real-time, pencatatan hasil, dan quality control berlapis.",
    points: [
      "Auto-receive dari instrumen",
      "Manual entry saat dibutuhkan",
      "QC & validasi berlapis",
    ],
  },
  {
    id: "post-analytic",
    title: "Post-Analytic",
    subtitle: "Validasi & Distribusi",
    text: "Review medis, cetak laporan, distribusi hasil ke unit klinis, dan penyimpanan data terstruktur.",
    points: [
      "Review & validasi medis",
      "Distribusi hasil real-time",
      "Audit trail & histori lengkap",
    ],
  },
];

export const integrations = [
  {
    icon: "bi-hospital",
    title: "HIS / SIMRS",
    text: "Bridging two-way: order masuk otomatis, hasil dikirim balik tanpa input ulang.",
  },
  {
    icon: "bi-cpu",
    title: "Hematology Analyzer",
    text: "Koneksi langsung ke Sysmex, Mindray, Abbott, dan vendor lainnya.",
  },
  {
    icon: "bi-droplet-half",
    title: "Clinical Chemistry",
    text: "Interface ke Cobas, Architect, BS-series, dan platform kimia klinik.",
  },
  {
    icon: "bi-virus2",
    title: "Immunology / Serology",
    text: "Integrasi alat ELISA, CLIA, dan platform imunologi otomatis.",
  },
  {
    icon: "bi-clipboard2-pulse",
    title: "Point-of-Care Testing",
    text: "Manajemen hasil POCT dengan connectivity dan quality tracking.",
  },
  {
    icon: "bi-database",
    title: "Data Warehouse",
    text: "Ekspor data terstruktur ke sistem pelaporan, BI, dan data warehouse.",
  },
];

export const advantages = [
  {
    icon: "bi-speedometer2",
    title: "Turnaround Time Lebih Cepat",
    text: "Otomasi workflow dan auto-reduce hasil instrumen memangkas TAT secara signifikan — dari order ke distribusi hasil dalamhitungan menit.",
  },
  {
    icon: "bi-shield-check",
    title: "Akurasi & Konsistensi Hasil",
    text: "Validasi berlapis, QC tracking, dan reference range otomatis meminimalkan human error dan memastikan hasil terukur.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Skalabel untuk Pertumbuhan",
    text: "Arsitektur yang mendukung penambahan alat, lokasi, dan volume sampel tanpa perlu overhaul sistem.",
  },
  {
    icon: "bi-people",
    title: "Onboarding & Support Terbaik",
    text: "Tim implementasi hands-on dari discovery hingga go-live. Training, UAT, dan dukungan pascago-live included.",
  },
];

export const testimonials = [
  {
    quote:
      "Setelah implementasi LIS, waktu validasi hasil menurun signifikan dan koordinasi tim lab dengan dokter menjadi jauh lebih cepat.",
    name: "Kepala Laboratorium",
    org: "RS Swasta Regional",
  },
  {
    quote:
      "Integrasi alat dan workflow otomatis membantu kami menjaga konsistensi hasil saat volume sampel sedang tinggi.",
    name: "Supervisor Operasional",
    org: "Laboratorium Mandiri",
  },
  {
    quote:
      "Tim implementasi responsif, transisi berjalan lancar, dan user cepat beradaptasi karena antarmuka sistem jelas.",
    name: "Manajer IT",
    org: "Klinik Jaringan",
  },
];

export const faqs = [
  {
    q: "Apakah LIS bisa diintegrasikan dengan alat laboratorium yang sudah kami gunakan?",
    a: "Bisa. Tim kami melakukan assessment perangkat, mapping protokol komunikasi, dan pengujian end-to-end sebelum go-live.",
  },
  {
    q: "Berapa lama proses implementasi biasanya?",
    a: "Timeline tergantung kompleksitas integrasi dan jumlah alat. Umumnya dimulai dari discovery, konfigurasi, training, UAT, lalu go-live bertahap.",
  },
  {
    q: "Jika belum punya HIS/SIMRS, apakah LIS tetap bisa jalan?",
    a: "Bisa. Sistem mendukung input manual terlebih dahulu, lalu dapat di-bridging ketika HIS/SIMRS sudah siap.",
  },
  {
    q: "Bagaimana aspek keamanan data pasien?",
    a: "LIS menerapkan role-based access control, audit trail, backup terjadwal, dan standar praktik keamanan data untuk operasional klinis.",
  },
];

export const seo = {
  title: "PT ESA SAGARA MEDIKA | Laboratory Information System (LIS)",
  description:
    "PT ESA SAGARA MEDIKA menghadirkan LIS modern untuk integrasi alat laboratorium, workflow otomatis, hasil real-time, dan koneksi HIS/SIMRS.",
  keywords:
    "LIS, Laboratory Information System, Sistem Informasi Laboratorium, HIS, SIMRS, software laboratorium, integrasi alat laboratorium",
  url: "https://www.esasagaramedika.co.id/",
  image: "https://www.esasagaramedika.co.id/assets/img/portfolio/lis/29.png",
};
