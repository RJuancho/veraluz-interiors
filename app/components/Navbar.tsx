import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#1A1A1A] border-b border-[#D1CDC4] dark:border-[#D1CDC4] dark:border-opacity-20">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Veraluz Interiors Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-xl font-bold text-[#1A1A1A] dark:text-white">Veraluz</span>
        </div>
        <div className="hidden sm:flex items-center gap-8">
          <a href="#portfolio" className="text-[#1A1A1A] dark:text-[#D1CDC4] hover:text-[#A29487] dark:hover:text-[#A29487] transition">
            Services
          </a>
          <a href="#contact" className="text-[#1A1A1A] dark:text-[#D1CDC4] hover:text-[#A29487] dark:hover:text-[#A29487] transition">
            Contact
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-[#A29487] hover:bg-[#8b7d6f] px-6 py-2 font-medium text-white transition dark:bg-[#A29487] dark:hover:bg-[#8b7d6f]"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}