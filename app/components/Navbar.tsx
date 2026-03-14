import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#1A1A1A] border-b border-[#D1CDC4] dark:border-[#D1CDC4] dark:border-opacity-20">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Veraluz Interiors Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-xl font-bold text-[#1A1A1A] dark:text-white">Veraluz Interiors</span>
        </Link>
        <div className="hidden sm:flex items-center gap-8">
          <Link href="/about" className="text-[#1A1A1A] dark:text-[#D1CDC4] hover:text-[#A29487] dark:hover:text-[#A29487] transition">
            About
          </Link>
          <Link href="/products" className="text-[#1A1A1A] dark:text-[#D1CDC4] hover:text-[#A29487] dark:hover:text-[#A29487] transition">
            Products
          </Link>
          <Link href="/contact" className="text-[#1A1A1A] dark:text-[#D1CDC4] hover:text-[#A29487] dark:hover:text-[#A29487] transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}