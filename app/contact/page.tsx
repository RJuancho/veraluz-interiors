"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { FormEvent, useState } from "react";
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send message.");

      setSubmitted(true);
      setForm({ fullName: "", email: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#1A1A1A]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 py-20">
        <Image
          src="/hero.jpeg"
          alt="Contact Veraluz Interiors"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        
        <motion.div
          className="max-w-3xl text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Get in Touch
          </h1>
          <p className="text-xl text-[#D1CDC4]">
            Let's discuss your lighting and interior design project. We're here to help bring your vision to life.
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="flex-1 px-6 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-[#D1CDC4] dark:border-[#D1CDC4]/20 bg-[#F5F1ED] dark:bg-[#2A2A2A] p-6">
            <h2 className="text-xl font-semibold text-[#1A1A1A] dark:text-white">Get in touch</h2>

            <p className="mt-4 flex items-start gap-2 text-sm text-[#4A4A4A] dark:text-[#E8E4DC]">
              <MdOutlineEmail className="mt-0.5 text-lg text-[#A29487]" />
              <span>
                Email us at{" "}
                <a href="mailto:info@veraluzinteriors.com" className="text-[#A29487] hover:underline">
                  info@veraluzinteriors.com
                </a>
              </span>
            </p>

            <p className="mt-2 flex items-start gap-2 text-sm text-[#4A4A4A] dark:text-[#E8E4DC]">
              <MdOutlinePhone className="mt-0.5 text-lg text-[#A29487]" />
              <span>
                Phone:{" "}
                <a href="tel:+8619921575468" className="text-[#A29487] hover:underline">
                  +86 199 2157 5468
                </a>
              </span>
            </p>

            <p className="mt-2 flex items-start gap-2 text-sm text-[#4A4A4A] dark:text-[#E8E4DC]">
              <MdOutlineLocationOn className="mt-0.5 text-lg text-[#A29487]" />
              <span>Address: 8th Floor, Building 1, No. 188 Changyi Road, Baoshan District, Shanghai, P.R. China</span>
            </p>

            <p className="mt-2 text-sm text-[#4A4A4A] dark:text-[#E8E4DC]">We usually respond within 1 to 2 business days.</p>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-[#D1CDC4] dark:border-[#D1CDC4]/20 bg-white dark:bg-[#2A2A2A] p-6"
          >
            <h2 className="text-xl font-semibold text-[#1A1A1A] dark:text-white">Send a message</h2>

            <div className="mt-5 grid gap-4">
              <input
                required
                type="text"
                placeholder="Full Name"
                value={form.fullName}
                onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
                className="w-full rounded-lg border border-[#D1CDC4] dark:border-[#D1CDC4]/20 bg-white dark:bg-[#1A1A1A] px-3 py-2 text-[#1A1A1A] dark:text-white placeholder-[#A29487] focus:outline-none focus:border-[#A29487]"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full rounded-lg border border-[#D1CDC4] dark:border-[#D1CDC4]/20 bg-white dark:bg-[#1A1A1A] px-3 py-2 text-[#1A1A1A] dark:text-white placeholder-[#A29487] focus:outline-none focus:border-[#A29487]"
              />
              <textarea
                required
                placeholder="Tell us about your project"
                rows={5}
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                className="w-full rounded-lg border border-[#D1CDC4] dark:border-[#D1CDC4]/20 bg-white dark:bg-[#1A1A1A] px-3 py-2 text-[#1A1A1A] dark:text-white placeholder-[#A29487] focus:outline-none focus:border-[#A29487]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-5 w-full rounded-lg bg-[#A29487] px-4 py-2 font-medium text-white transition hover:bg-[#8b7d6f] disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {submitted && (
              <p className="mt-3 text-sm text-[#A29487] dark:text-[#D1CDC4]">
                Message sent. We'll contact you soon.
              </p>
            )}
            {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}