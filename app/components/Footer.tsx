import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#1A1A1A] border-t border-[#D1CDC4] dark:border-opacity-20 dark:border-[#D1CDC4]">
      {/* Top Section (Links) */}
      <div className="mx-auto max-w-6xl px-6 py-12 w-full">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
              <li><a href="#contact" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Contact</a></li>
              <li><Link href="/" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Home</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1A1A1A] dark:text-white mb-4">Contacts</h4>
            <ul className="space-y-3 text-sm text-[#A29487] dark:text-[#D1CDC4]">
              <li>
                <a href="mailto:info@veraluzinteriors.com" className="hover:text-[#1A1A1A] dark:hover:text-white transition">
                  info@veraluzinteriors.com
                </a>
              </li>
              <li>
                <a href="tel:+8619921575468" className="hover:text-[#1A1A1A] dark:hover:text-white transition">
                  +86 199 2157 5468
                </a>
              </li>
              <li>
                Address: 8th Floor, Building 1, No. 188 Changyi Road, Baoshan District, Shanghai, P.R. China
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="w-full border-t border-[#D1CDC4] dark:border-opacity-20 dark:border-[#D1CDC4]">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-[#A29487] dark:text-[#D1CDC4]">
          <p>&copy; 2026 Veraluz Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}