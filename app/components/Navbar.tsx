"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

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

        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-[#1A1A1A] dark:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu - Animated */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#2A2A2A] border-b border-[#D1CDC4] dark:border-[#D1CDC4]/20 shadow-lg"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-4">
              {[
                { href: "/about", label: "About" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={item.href}
                    className="block text-[#1A1A1A] dark:text-[#D1CDC4] hover:text-[#A29487] dark:hover:text-[#A29487] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}