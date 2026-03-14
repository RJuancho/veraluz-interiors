"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from "react-icons/md";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#1A1A1A]">
      <Navbar />

      <section className="px-6 pt-8 pb-2">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-white">
            Contact
          </h1>
          <p className="mt-2 text-[#A29487] dark:text-[#D1CDC4]">
            Let’s discuss your lighting and interior design project.
          </p>
        </div>
      </section>

      <section className="flex-1 px-6 py-8">
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
                <a href="tel:+8613800138000" className="text-[#A29487] hover:underline">
                  +86 19921575468
                </a>
              </span>
            </p>

            <p className="mt-2 flex items-start gap-2 text-sm text-[#4A4A4A] dark:text-[#E8E4DC]">
              <MdOutlineLocationOn className="mt-0.5 text-lg text-[#A29487]" />
              <span>Address: 123 Sample St., Makati City, Metro Manila, Philippines</span>
            </p>

            <p className="mt-2 text-sm text-[#4A4A4A] dark:text-[#E8E4DC]">
              We usually respond within 1–2 business days.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-xl border border-[#D1CDC4] dark:border-[#D1CDC4]/20 bg-white dark:bg-[#2A2A2A] p-6"
          >
            <h2 className="text-xl font-semibold text-[#1A1A1A] dark:text-white">Send a message</h2>

            <div className="mt-5 grid gap-4">
              <input
                required
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border border-[#D1CDC4] dark:border-[#D1CDC4]/20 bg-white dark:bg-[#1A1A1A] px-3 py-2 text-[#1A1A1A] dark:text-white placeholder-[#A29487] focus:outline-none focus:border-[#A29487]"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-[#D1CDC4] dark:border-[#D1CDC4]/20 bg-white dark:bg-[#1A1A1A] px-3 py-2 text-[#1A1A1A] dark:text-white placeholder-[#A29487] focus:outline-none focus:border-[#A29487]"
              />
              <textarea
                required
                placeholder="Tell us about your project"
                rows={5}
                className="w-full rounded-lg border border-[#D1CDC4] dark:border-[#D1CDC4]/20 bg-white dark:bg-[#1A1A1A] px-3 py-2 text-[#1A1A1A] dark:text-white placeholder-[#A29487] focus:outline-none focus:border-[#A29487]"
              />
            </div>

            <button
              type="submit"
              className="mt-5 w-full rounded-lg bg-[#A29487] px-4 py-2 font-medium text-white transition hover:bg-[#8b7d6f]"
            >
              Send Message
            </button>

            {submitted && (
              <p className="mt-3 text-sm text-[#A29487] dark:text-[#D1CDC4]">
                Message submitted. We’ll contact you soon.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}