import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#1A1A1A]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
        <Image
          src="/hero.jpeg"
          alt="Modern office lighting design with elegant fixtures"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        
        <div className="max-w-4xl text-center relative z-10">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Veraluz Interiors
          </h1>
          <p className="mb-8 text-xl text-[#D1CDC4]">
            Illuminating spaces with elegant interior design and curated lighting solutions
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#portfolio"
              className="rounded-lg bg-[#A29487] hover:bg-[#8b7d6f] px-8 py-3 font-medium text-white transition dark:bg-[#A29487] dark:hover:bg-[#8b7d6f]"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="rounded-lg border-2 border-[#A29487] px-8 py-3 font-medium text-[#1A1A1A] transition hover:bg-[#A29487] hover:text-white dark:border-[#A29487] dark:text-white dark:hover:bg-[#A29487] dark:hover:text-[#1A1A1A]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#D1CDC4] bg-opacity-20 dark:bg-[#D1CDC4] dark:bg-opacity-10 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-4xl font-bold text-[#1A1A1A] dark:text-white">Our Story</h2>
          <p className="mb-6 text-lg text-[#1A1A1A] dark:text-white">
            Veraluz Interiors seamlessly integrates interior lighting design, interior design consulting, and premium lighting product sales to create harmonious and aesthetically pleasing spaces. Our team is composed of professionals with profound knowledge and rich experience in all aspects of interior design and lighting innovation.
          </p>
          <p className="text-lg text-[#1A1A1A] dark:text-white">
            With a passion for transforming environments through light and design, we provide comprehensive one-stop solutions to meet diverse needs in the interior design and lighting market. From concept to completion, we deliver exceptional results through collaborative expertise, quality materials, and meticulous attention to detail.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="portfolio" className="px-6 py-20 bg-white dark:bg-[#1A1A1A]">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-4xl font-bold text-[#1A1A1A] dark:text-white">Our Services</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Interior Lighting Design",
              "Design Consulting",
              "Lighting Product Sales",
              "Residential Projects",
              "Commercial Spaces",
              "Complete Space Planning"
            ].map((service) => (
              <div key={service} className="rounded-lg border border-[#D1CDC4] dark:border-[#A29487] bg-white dark:bg-[#2a2a2a] p-6 hover:border-[#A29487] dark:hover:border-[#D1CDC4] transition">
                <h3 className="font-semibold text-[#1A1A1A] dark:text-white">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-[#1A1A1A] dark:bg-[#1A1A1A] px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-4xl font-bold text-white">Ready to Illuminate Your Space?</h2>
          <p className="mb-8 text-lg text-[#D1CDC4]">
            Let's discuss your project and bring your vision to light.
          </p>
          <a
            href="mailto:info@veraluzinteriors.com"
            className="inline-block rounded-lg bg-white px-8 py-3 font-medium text-[#1A1A1A] transition hover:bg-[#D1CDC4]"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white dark:bg-[#1A1A1A] border-t border-[#D1CDC4] px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div>
              <h3 className="font-semibold text-[#1A1A1A] dark:text-white mb-4">Veraluz Interiors</h3>
              <p className="text-sm text-[#A29487] dark:text-[#D1CDC4]">Illuminating spaces with elegant design and lighting solutions</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1A1A1A] dark:text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-[#A29487] dark:text-[#D1CDC4]">
                <li><a href="#portfolio" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Lighting Design</a></li>
                <li><a href="#portfolio" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Design Consulting</a></li>
                <li><a href="#portfolio" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Product Sales</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1A1A1A] dark:text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-[#A29487] dark:text-[#D1CDC4]">
                <li><a href="#portfolio" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Contact</a></li>
                <li><a href="/" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Home</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1A1A1A] dark:text-white mb-4">Connect</h4>
              <p className="text-sm text-[#A29487] dark:text-[#D1CDC4]">
                <a href="mailto:info@veraluzinteriors.com" className="hover:text-[#1A1A1A] dark:hover:text-white transition">
                  info@veraluzinteriors.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-[#D1CDC4] pt-8 text-center text-sm text-[#A29487] dark:text-[#D1CDC4]">
            <p>&copy; 2026 Veraluz Interiors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
