"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { MdOutlineLightbulb, MdLightbulb, MdBusiness } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: trendsRef, inView: trendsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

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
        
        <motion.div
          className="max-w-4xl text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Veraluz Interiors
          </h1>
          <p className="mb-8 text-xl text-[#D1CDC4]">
            Illuminating spaces with elegant interior design and curated lighting solutions
          </p>
          <motion.div 
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#portfolio"
              className="rounded-lg bg-[#A29487] hover:bg-[#8b7d6f] px-8 py-3 font-medium text-white transition dark:bg-[#A29487] dark:hover:bg-[#8b7d6f]"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded-lg border-2 border-[#A29487] px-8 py-3 font-medium text-[#1A1A1A] transition hover:bg-[#A29487] hover:text-white dark:border-[#A29487] dark:text-white dark:hover:bg-[#A29487] dark:hover:text-[#1A1A1A]"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="portfolio" className="px-6 py-24 bg-[#D1CDC4] bg-opacity-15 dark:bg-[#D1CDC4] dark:bg-opacity-5" ref={servicesRef}>
        <div className="mx-auto max-w-5xl">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, x: -20 }}
            animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-[#1A1A1A] dark:text-white">Our Services</h2>
            <div className="h-1 w-24 bg-[#1A1A1A] dark:bg-white"></div>
          </motion.div>
          
          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {/* Service 1 */}
            <motion.div 
              className="flex flex-col md:flex-row md:items-center md:gap-12"
              variants={itemVariants}
            >
              <div className="md:flex-1">
                <h3 className="mb-4 text-2xl font-bold text-[#1A1A1A] dark:text-white">Interior Lighting Design</h3>
                <p className="text-lg text-[#1A1A1A] dark:text-white">
                  We offer a customized interior lighting design services. Our designers use advanced lighting design software and techniques to create lighting plans that not only provide sufficient illumination but also enhance the atmosphere and functionality of the space. For example, in a commercial space, we can design lighting to highlight display areas, while in a residential space, we focus on creating a warm and comfortable living environment.
                </p>
              </div>
              <motion.div 
                className="mt-8 md:mt-0 md:shrink-0 flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-32 h-32 rounded-full bg-linear-to-br from-[#D1CDC4] to-[#A29487] flex items-center justify-center text-white">
                  <MdOutlineLightbulb size={64} />
                </div>
              </motion.div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              className="flex flex-col md:flex-row-reverse md:items-center md:gap-12"
              variants={itemVariants}
            >
              <div className="md:flex-1">
                <h3 className="mb-4 text-2xl font-bold text-[#1A1A1A] dark:text-white">Interior Design Consulting</h3>
                <p className="text-lg text-[#1A1A1A] dark:text-white">
                  Our interior design consulting service is aimed at providing professional advice to clients. Whether it&apos;s space planning, color matching, or material selection, our consultants draw on their extensive experience to offer personalized suggestions. We help clients understand the latest design trends and how to incorporate them into their projects, ensuring that the final design meets their aesthetic and practical requirements.
                </p>
              </div>
              <motion.div 
                className="mt-8 md:mt-0 md:shrink-0 flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-32 h-32 rounded-full bg-linear-to-br from-[#D1CDC4] to-[#A29487] flex items-center justify-center text-white">
                  <MdBusiness size={64} />
                </div>
              </motion.div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              className="flex flex-col md:flex-row md:items-center md:gap-12"
              variants={itemVariants}
            >
              <div className="md:flex-1">
                <h3 className="mb-4 text-2xl font-bold text-[#1A1A1A] dark:text-white">Lighting Product Sales</h3>
                <p className="text-lg text-[#1A1A1A] dark:text-white">
                  We have an extensive collection of lighting products or components from diverse suppliers. These products range from energy-efficient LED lights to stylish decorative lamps. We carefully select each product to ensure high quality, and our team can recommend the most suitable lighting products based on the specific needs of different projects.
                </p>
              </div>
              <motion.div 
                className="mt-8 md:mt-0 md:shrink-0 flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-32 h-32 rounded-full bg-linear-to-br from-[#D1CDC4] to-[#A29487] flex items-center justify-center text-white">
                  <MdLightbulb size={64} />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Office Space Design Trends Section */}
      <section className="px-6 py-24 bg-white dark:bg-[#1A1A1A]" ref={trendsRef}>
        <div className="mx-auto max-w-5xl">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, x: -20 }}
            animate={trendsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-[#1A1A1A] dark:text-white">Office Space Design Trends</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#A29487] to-[#D1CDC4]"></div>
          </motion.div>

          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={trendsInView ? "visible" : "hidden"}
          >
            {/* Trend 1 */}
            <motion.div 
              className="group rounded-xl overflow-hidden bg-white dark:bg-[#2A2A2A] border border-[#D1CDC4] dark:border-[#D1CDC4] dark:border-opacity-20 hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/trends-sustainability.png"
                  alt="Sustainability & biophilic design with green plants and natural materials"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#A29487]">Sustainability & Biophilic Design</h3>
                <div className="mb-4 h-1 w-12 bg-gradient-to-r from-[#A29487] to-[#D1CDC4]"></div>
                <p className="text-sm text-[#1A1A1A] dark:text-[#D1CDC4]">
                  Green plant integration, natural material application
                </p>
              </div>
            </motion.div>

            {/* Trend 2 */}
            <motion.div 
              className="group rounded-xl overflow-hidden bg-white dark:bg-[#2A2A2A] border border-[#D1CDC4] dark:border-[#D1CDC4] dark:border-opacity-20 hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/trends-flexible-layout.png"
                  alt="Flexible office layout with open collaboration areas and private focus zones"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#A29487]">Flexible Layout</h3>
                <div className="mb-4 h-1 w-12 bg-gradient-to-r from-[#A29487] to-[#D1CDC4]"></div>
                <p className="text-sm text-[#1A1A1A] dark:text-[#D1CDC4]">
                  Open collaboration areas + private focus areas + leisure areas
                </p>
              </div>
            </motion.div>

            {/* Trend 3 */}
            <motion.div 
              className="group rounded-xl overflow-hidden bg-white dark:bg-[#2A2A2A] border border-[#D1CDC4] dark:border-[#D1CDC4] dark:border-opacity-20 hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/trends-human-centered.png"
                  alt="Human-centered office design prioritizing comfort and employee health"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#A29487]">Human-Centered Experience</h3>
                <div className="mb-4 h-1 w-12 bg-gradient-to-r from-[#A29487] to-[#D1CDC4]"></div>
                <p className="text-sm text-[#1A1A1A] dark:text-[#D1CDC4]">
                  Prioritizing comfort and employee health
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-[#1A1A1A] dark:bg-[#1A1A1A] px-6 py-20 text-center" ref={ctaRef}>
        <motion.div 
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-4xl font-bold text-white">Ready to Illuminate Your Space?</h2>
          <p className="mb-8 text-lg text-[#D1CDC4]">
            Let&apos;s discuss your project and bring your vision to light.
          </p>
          <motion.a
            href="mailto:info@veraluzinteriors.com"
            className="inline-block rounded-lg bg-white px-8 py-3 font-medium text-[#1A1A1A] transition hover:bg-[#D1CDC4]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
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
                <li><Link href="/" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Home</Link></li>
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
