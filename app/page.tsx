"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MdOutlineLightbulb, MdLightbulb, MdBusiness } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Home() {
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: trendsRef, inView: trendsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const [expandedTrend, setExpandedTrend] = useState<number | null>(null);

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
      transition: { duration: 0.5 },
    },
  };

  const trendsData = [
    {
      id: 1,
      title: "Sustainability & Biophilic Design",
      description: "Green plant integration, natural material application",
      image: "/trends-sustainability.png",
      details: "Integrate natural elements and sustainable materials to create spaces that promote employee wellbeing and reduce environmental impact.",
      benefits: ["↑ 15% productivity boost", "↓ 23% energy costs", "↑ Employee satisfaction"],
    },
    {
      id: 2,
      title: "Flexible Layout",
      description: "Open collaboration areas + private focus areas + leisure areas",
      image: "/trends-flexible-layout.png",
      details: "Design adaptable workspaces that support both collaborative teamwork and focused individual work.",
      benefits: ["↑ Collaboration", "↑ Focus time", "↓ Noise issues"],
    },
    {
      id: 3,
      title: "Human-Centered Experience",
      description: "Prioritizing comfort and employee health",
      image: "/trends-human-centered.png",
      details: "Create ergonomic, comfortable spaces that prioritize employee wellness and mental health.",
      benefits: ["↓ Sick days", "↑ Retention", "↑ Morale"],
    },
  ];

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
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Veraluz Interiors
          </h1>
          <p className="mb-8 text-base sm:text-lg md:text-xl text-[#D1CDC4]">
            Illuminating spaces with elegant interior design and curated lighting solutions
          </p>
          <motion.div 
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="/contact"
              className="rounded-lg bg-[#A29487] hover:bg-[#8b7d6f] px-6 sm:px-8 py-3 font-medium text-white transition dark:bg-[#A29487] dark:hover:bg-[#8b7d6f]"
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
      <section id="portfolio" className="px-6 py-12 sm:py-20 bg-[#F5F1ED] dark:bg-[#2A2A2A]" ref={servicesRef}>
        <div className="mx-auto max-w-5xl">
          <motion.div 
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, x: -20 }}
            animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-white">Our Services</h2>
            <div className="h-1 w-24 bg-[#1A1A1A] dark:bg-white"></div>
          </motion.div>
          
          <motion.div 
            className="space-y-8 sm:space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {/* Service 1 */}
            <motion.div 
              className="flex flex-col md:flex-row md:items-center md:gap-12"
              variants={itemVariants}
            >
              <div className="md:flex-1 order-2 md:order-1">
                <h3 className="mb-4 text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-white">Interior Lighting Design</h3>
                <p className="text-sm sm:text-base text-[#1A1A1A] dark:text-white leading-relaxed">
                  We offer customized interior lighting design services. Our designers use advanced lighting design software and techniques to create lighting plans that not only provide sufficient illumination but also enhance the atmosphere and functionality of the space.
                </p>
              </div>
              <motion.div 
                className="mb-6 md:mb-0 md:shrink-0 flex justify-center order-1 md:order-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#D1CDC4] to-[#A29487] flex items-center justify-center text-white flex-shrink-0">
                  <MdOutlineLightbulb size={40} className="sm:w-12 sm:h-12 md:w-16 md:h-16" />
                </div>
              </motion.div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              className="flex flex-col md:flex-row-reverse md:items-center md:gap-12"
              variants={itemVariants}
            >
              <div className="md:flex-1 order-2 md:order-1">
                <h3 className="mb-4 text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-white">Interior Design Consulting</h3>
                <p className="text-sm sm:text-base text-[#1A1A1A] dark:text-white leading-relaxed">
                  Our interior design consulting service provides professional advice to clients. Whether it&apos;s space planning, color matching, or material selection, our consultants draw on extensive experience to offer personalized suggestions.
                </p>
              </div>
              <motion.div 
                className="mb-6 md:mb-0 md:shrink-0 flex justify-center order-1 md:order-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#D1CDC4] to-[#A29487] flex items-center justify-center text-white flex-shrink-0">
                  <MdBusiness size={40} className="sm:w-12 sm:h-12 md:w-16 md:h-16" />
                </div>
              </motion.div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              className="flex flex-col md:flex-row md:items-center md:gap-12"
              variants={itemVariants}
            >
              <div className="md:flex-1 order-2 md:order-1">
                <h3 className="mb-4 text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-white">Lighting Product Sales</h3>
                <p className="text-sm sm:text-base text-[#1A1A1A] dark:text-white leading-relaxed">
                  We have an extensive collection of lighting products from diverse suppliers. These range from energy-efficient LED lights to stylish decorative lamps. We carefully select each product to ensure high quality and recommend the most suitable options for your projects.
                </p>
              </div>
              <motion.div 
                className="mb-6 md:mb-0 md:shrink-0 flex justify-center order-1 md:order-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#D1CDC4] to-[#A29487] flex items-center justify-center text-white flex-shrink-0">
                  <MdLightbulb size={40} className="sm:w-12 sm:h-12 md:w-16 md:h-16" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Office Space Design Trends Section */}
      <section className="px-6 py-12 sm:py-24 bg-white dark:bg-[#1A1A1A]" ref={trendsRef}>
        <div className="mx-auto max-w-5xl">
          <motion.div 
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, x: -20 }}
            animate={trendsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-[#1A1A1A] dark:text-white">Design Trends Shaping Modern Workspaces</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#A29487] to-[#D1CDC4]"></div>
          </motion.div>

          <motion.div 
            className="grid gap-6 sm:gap-8 md:grid-cols-3 grid-cols-1"
            variants={containerVariants}
            initial="hidden"
            animate={trendsInView ? "visible" : "hidden"}
          >
            {trendsData.map((trend, index) => (
              <motion.div
                key={trend.id}
                className="group relative cursor-pointer h-80 sm:h-96"
                variants={itemVariants}
                onHoverStart={() => setExpandedTrend(index)}
                onHoverEnd={() => setExpandedTrend(null)}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl overflow-hidden bg-white dark:bg-[#2A2A2A] border border-[#D1CDC4] dark:border-[#D1CDC4] dark:border-opacity-20 hover:shadow-lg transition-all duration-300"
                  initial={false}
                  animate={{
                    boxShadow: expandedTrend === index 
                      ? "0 20px 40px rgba(0,0,0,0.2)" 
                      : "0 0 0 rgba(0,0,0,0)"
                  }}
                >
                  {/* Image Background */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: expandedTrend === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={trend.image}
                      alt={trend.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>

                  {/* Default Content */}
                  <motion.div
                    className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end"
                    animate={{
                      opacity: expandedTrend === index ? 0 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="mb-2 text-base sm:text-xl font-bold text-white">{trend.title}</h3>
                    <div className="mb-4 h-1 w-12 bg-gradient-to-r from-[#A29487] to-[#D1CDC4]"></div>
                    <p className="text-xs sm:text-sm text-[#D1CDC4]">{trend.description}</p>
                  </motion.div>

                  {/* Revealed Content on Hover */}
                  <motion.div
                    className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between bg-black/85"
                    animate={{
                      opacity: expandedTrend === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      pointerEvents: expandedTrend === index ? "auto" : "none",
                    }}
                  >
                    <div>
                      <h3 className="mb-4 text-base sm:text-xl font-bold text-white">{trend.title}</h3>
                      <p className="text-xs sm:text-sm text-[#D1CDC4] leading-relaxed mb-6">
                        {trend.details}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3">
                      <p className="text-xs font-semibold text-[#A29487] uppercase tracking-wide">Key Benefits</p>
                      <div className="space-y-2">
                        {trend.benefits.map((benefit, i) => (
                          <motion.div
                            key={i}
                            className="text-xs sm:text-sm text-white flex items-center gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={expandedTrend === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A29487] flex-shrink-0"></span>
                            {benefit}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-[#1A1A1A] dark:bg-[#1A1A1A] px-6 py-16 sm:py-20 text-center" ref={ctaRef}>
        <motion.div 
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl sm:text-4xl font-bold text-white">Ready to Illuminate Your Space?</h2>
          <p className="mb-8 text-base sm:text-lg text-[#D1CDC4]">
            Let&apos;s discuss your project and bring your vision to light.
          </p>
          <motion.a
            href="/contact"
            className="inline-block rounded-lg bg-white px-6 sm:px-8 py-3 font-medium text-[#1A1A1A] transition hover:bg-[#D1CDC4]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
