import { useMemo, useState } from "react";
import { company } from "../data/siteContent";

const initialFormState = {
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  companyType: "Rumah Sakit",
  message: "",
  website: "",
};

function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) errors.fullName = "Nama wajib diisi.";
  if (!values.organization.trim()) errors.organization = "Nama institusi wajib diisi.";

  if (!values.email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Format email tidak valid.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Nomor telepon wajib diisi.";
  } else if (!/^[0-9+\-()\s]{8,20}$/.test(values.phone)) {
    errors.phone = "Format nomor telepon tidak valid.";
  }

  if (!values.message.trim()) {
    errors.message = "Kebutuhan Anda wajib diisi.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Isi kebutuhan minimal 20 karakter agar tim kami bisa menyiapkan demo yang relevan.";
  }

  return errors;
}

function LeadForm() {
  const [values, setValues] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const messageLength = useMemo(() => values.message.trim().length, [values.message]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (values.website.trim()) {
      setStatus("success");
      setFeedback("Terima kasih. Permintaan Anda sudah diterima.");
      return;
    }

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setFeedback("Mohon periksa kembali data yang masih belum valid.");
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const payload = new FormData();
    payload.append("name", values.fullName);
    payload.append("email", values.email);
    payload.append("subject", `Request Demo LIS - ${values.companyType}`);
    payload.append(
      "message",
      [
        `Institusi: ${values.organization}`,
        `Jenis Fasilitas: ${values.companyType}`,
        `Telepon: ${values.phone}`,
        "",
        values.message,
      ].join("\n")
    );

    setStatus("loading");
    setFeedback("Mengirim permintaan demo...");

    try {
      const response = await fetch("/forms/contact.php", {
        method: "POST",
        body: payload,
        signal: controller.signal,
      });

      const text = await response.text();
      if (!response.ok || /error|failed/i.test(text)) {
        throw new Error("Gagal mengirim form");
      }

      setStatus("success");
      setFeedback("Permintaan demo berhasil dikirim. Tim kami akan menghubungi Anda secepatnya.");
      setValues(initialFormState);
      setErrors({});
    } catch {
      setStatus("error");
      setFeedback(
        `Pengiriman otomatis belum berhasil. Silakan kirim email ke ${company.email} atau hubungi ${company.mobileDisplay}.`
      );
    } finally {
      clearTimeout(timeoutId);
    }
  };

  return (
    <div className="bg-surface border border-line rounded-[18px] shadow-[0_14px_36px_rgba(8,57,99,0.09)] p-5 bg-gradient-to-b from-white to-[#f7fcff]" id="lead-form">
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <label className="flex flex-col gap-1.5 font-bold text-[0.92rem] text-[#264663]">
            Nama Lengkap
            <input
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              placeholder="Nama PIC"
              autoComplete="name"
              aria-invalid={Boolean(errors.fullName)}
              className="border border-[#cbddec] rounded-xl px-4 py-3 text-ink font-medium bg-white w-full focus:outline-none focus:border-[#69a8db] focus:shadow-[0_0_0_0.2rem_rgba(14,96,163,0.12)]"
            />
            {errors.fullName && <span className="text-[#b32828] text-[0.8rem] font-semibold">{errors.fullName}</span>}
          </label>

          <label className="flex flex-col gap-1.5 font-bold text-[0.92rem] text-[#264663]">
            Nama Institusi
            <input
              type="text"
              name="organization"
              value={values.organization}
              onChange={handleChange}
              placeholder="RS / Klinik / Laboratorium"
              autoComplete="organization"
              aria-invalid={Boolean(errors.organization)}
              className="border border-[#cbddec] rounded-xl px-4 py-3 text-ink font-medium bg-white w-full focus:outline-none focus:border-[#69a8db] focus:shadow-[0_0_0_0.2rem_rgba(14,96,163,0.12)]"
            />
            {errors.organization && <span className="text-[#b32828] text-[0.8rem] font-semibold">{errors.organization}</span>}
          </label>

          <label className="flex flex-col gap-1.5 font-bold text-[0.92rem] text-[#264663]">
            Email
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="nama@institusi.co.id"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              className="border border-[#cbddec] rounded-xl px-4 py-3 text-ink font-medium bg-white w-full focus:outline-none focus:border-[#69a8db] focus:shadow-[0_0_0_0.2rem_rgba(14,96,163,0.12)]"
            />
            {errors.email && <span className="text-[#b32828] text-[0.8rem] font-semibold">{errors.email}</span>}
          </label>

          <label className="flex flex-col gap-1.5 font-bold text-[0.92rem] text-[#264663]">
            Nomor Telepon
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="+62..."
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              className="border border-[#cbddec] rounded-xl px-4 py-3 text-ink font-medium bg-white w-full focus:outline-none focus:border-[#69a8db] focus:shadow-[0_0_0_0.2rem_rgba(14,96,163,0.12)]"
            />
            {errors.phone && <span className="text-[#b32828] text-[0.8rem] font-semibold">{errors.phone}</span>}
          </label>

          <label className="flex flex-col gap-1.5 font-bold text-[0.92rem] text-[#264663]">
            Jenis Fasilitas
            <select
              name="companyType"
              value={values.companyType}
              onChange={handleChange}
              className="border border-[#cbddec] rounded-xl px-4 py-3 text-ink font-medium bg-white w-full focus:outline-none focus:border-[#69a8db] focus:shadow-[0_0_0_0.2rem_rgba(14,96,163,0.12)]"
            >
              <option>Rumah Sakit</option>
              <option>Klinik</option>
              <option>Laboratorium Mandiri</option>
              <option>Diagnostic Center</option>
            </select>
          </label>

          {/* Honeypot */}
          <label className="absolute w-px h-px p-0 -m-px overflow-hidden clip-[rect(0,0,0,0)] border-0" aria-hidden="true">
            Website
            <input
              type="text"
              name="website"
              value={values.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>

          <label className="flex flex-col gap-1.5 font-bold text-[0.92rem] text-[#264663] md:col-span-2">
            Kebutuhan Anda
            <textarea
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              placeholder="Ceritakan kondisi saat ini, target integrasi alat/HIS, dan kebutuhan timeline implementasi."
              aria-invalid={Boolean(errors.message)}
              className="border border-[#cbddec] rounded-xl px-4 py-3 text-ink font-medium bg-white w-full focus:outline-none focus:border-[#69a8db] focus:shadow-[0_0_0_0.2rem_rgba(14,96,163,0.12)] resize-y"
            />
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className={`text-[0.8rem] font-bold ${messageLength < 20 ? "text-[#8a5e00]" : "text-[#1a7a4a]"}`}>
                {messageLength}/20 karakter minimum
              </span>
              {errors.message && <span className="text-[#b32828] text-[0.8rem] font-semibold">{errors.message}</span>}
            </div>
          </label>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-gradient-to-r from-brand to-brand-light text-white font-bold rounded-full px-6 py-3 border-0 cursor-pointer hover:-translate-y-0.5 hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Mengirim..." : "Request Demo Sekarang"}
        </button>

        {status !== "idle" && (
          <p
            role="status"
            aria-live="polite"
            className={`mt-4 mb-0 rounded-xl px-4 py-3 font-bold ${
              status === "error" ? "bg-[#ffefef] text-[#9b2a2a]" : "bg-[#ecfff8] text-[#16604b]"
            }`}
          >
            {feedback}
          </p>
        )}
      </form>
    </div>
  );
}

export default LeadForm;
