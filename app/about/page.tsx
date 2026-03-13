"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { MdCheckCircle } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref: storyRef, inView: storyInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: comparisonRef, inView: comparisonInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: strengthsRef, inView: strengthsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: processRef, inView: processInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const procedures = [
    { number: "01", title: "Demand Communication", color: "from-blue-400 to-blue-600" },
    { number: "02", title: "Space Design Interpretation", color: "from-orange-400 to-orange-600" },
    { number: "03", title: "Lighting Scheme Design", color: "from-gray-400 to-gray-600" },
    { number: "04", title: "Product Selection Matching", color: "from-yellow-400 to-yellow-600" },
    { number: "05", title: "Manufacturing Coordination", color: "from-blue-400 to-blue-600" },
    { number: "06", title: "Installation Guidance", color: "from-yellow-400 to-yellow-600" },
    { number: "07", title: "After Sales Support", color: "from-blue-400 to-blue-600" },
  ];

  const comparisonData = [
    {
      aspect: "Design Involvement",
      traditional: "No design participation, only responding to procurement needs",
      ours: "Pre-engagement of dual interior + lighting design teams to accurately match space needs",
    },
    {
      aspect: "Product Selection & Supply Chain Integration",
      traditional: "Single brand/limited categories, cost-performance constrained",
      ours: "Integrate high-quality products or lighting components from multiple suppliers, screen on demand, optimize costs.",
    },
    {
      aspect: "Implementation Adaptability",
      traditional: "Potential mismatch between products and space, requiring secondary adjustments",
      ours: "Design-driven product selection to ensure adaptability and effect consistency",
    },
  ];

  const strengths = [
    {
      title: "Integrated Expertise",
      description: "Our team combines deep knowledge in both interior design and lighting solutions, ensuring cohesive and effective project outcomes."
    },
    {
      title: "Curated Selection",
      description: "Access to high-quality lighting products from diverse suppliers, carefully selected to ensure excellence and value for every project."
    },
    {
      title: "Client-Centric Approach",
      description: "We prioritize understanding your vision and needs, delivering personalized solutions that transform your space exactly as you envision it."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#1A1A1A]">
      <Navbar />

      {/* About Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
        <Image
          src="/hero.jpeg"
          alt="Veraluz Interiors About"
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
            About Veraluz Interiors
          </h1>
          <p className="mb-8 text-xl text-[#D1CDC4]">
            Discover our story, values, and commitment to excellence
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="px-6 py-20 bg-white dark:bg-[#1A1A1A]" ref={storyRef}>
        <div className="mx-auto max-w-4xl">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-[#1A1A1A] dark:text-white">Our Story</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#A29487] to-[#D1CDC4]"></div>
          </motion.div>
          
          <motion.div 
            className="space-y-6 text-lg leading-relaxed text-[#4A4A4A] dark:text-[#E8E4DC]"
            variants={containerVariants}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
          >
            <motion.p variants={itemVariants}>
              Veraluz Interiors was founded with a simple yet powerful vision: to transform spaces through the perfect combination of thoughtful design and exceptional lighting. We believe that lighting is not just about illumination—it&apos;s about creating atmosphere, enhancing functionality, and telling a story within every space.
            </motion.p>
            <motion.p variants={itemVariants}>
              Our journey began with a deep understanding that many interior design projects fall short because lighting is treated as an afterthought. We decided to change that by bringing together expertise in both interior design and specialized lighting solutions. Today, we serve clients across residential and commercial sectors, delivering integrated design services that exceed expectations.
            </motion.p>
            <motion.p variants={itemVariants}>
              At Veraluz Interiors, we&apos;re passionate about working closely with our clients to understand their vision, their space, and their unique needs. Whether you&apos;re redesigning a home, revitalizing a commercial space, or launching a new project, we&apos;re committed to bringing your vision to light with elegance, innovation, and professionalism.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="px-6 py-20 bg-[#F5F1ED] dark:bg-[#2A2A2A]" ref={comparisonRef}>
        <div className="mx-auto max-w-5xl">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={comparisonInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-[#1A1A1A] dark:text-white">Why We&apos;re Different</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#A29487] to-[#D1CDC4]"></div>
          </motion.div>

          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={comparisonInView ? "visible" : "hidden"}
          >
            {comparisonData.map((item, index) => (
              <motion.div key={index} className="group" variants={itemVariants}>
                <div className="mb-4 h-1 w-12 bg-gradient-to-r from-[#A29487] to-[#D1CDC4] group-hover:w-24 transition-all duration-300"></div>
                <h3 className="mb-6 text-xl font-bold text-[#1A1A1A] dark:text-white">{item.aspect}</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-[#A29487] dark:text-[#D1CDC4] uppercase tracking-wide">Traditional Approach</p>
                    <p className="text-[#4A4A4A] dark:text-[#E8E4DC] leading-relaxed text-sm">
                      {item.traditional}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 py-3 my-4">
                    <div className="flex-1 h-px bg-[#D1CDC4] dark:bg-[#D1CDC4] dark:bg-opacity-40"></div>
                    <span className="text-xs font-semibold text-[#A29487] dark:text-[#D1CDC4]">vs</span>
                    <div className="flex-1 h-px bg-[#D1CDC4] dark:bg-[#D1CDC4] dark:bg-opacity-40"></div>
                  </div>
                  
                  <div>
                    <p className="mb-2 text-sm font-semibold text-[#A29487] dark:text-[#D1CDC4] uppercase tracking-wide">Our Approach</p>
                    <p className="text-[#4A4A4A] dark:text-[#E8E4DC] leading-relaxed font-medium text-sm">
                      {item.ours}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Strengths Section */}
      <section className="px-6 py-20 bg-white dark:bg-[#1A1A1A]" ref={strengthsRef}>
        <div className="mx-auto max-w-5xl">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={strengthsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-[#1A1A1A] dark:text-white">Our Strengths</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#A29487] to-[#D1CDC4]"></div>
          </motion.div>

          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={strengthsInView ? "visible" : "hidden"}
          >
            {strengths.map((strength, index) => (
              <motion.div 
                key={index} 
                className="group p-8 rounded-xl bg-white dark:bg-[#2A2A2A] border border-[#E8E4DC] dark:border-[#D1CDC4] dark:border-opacity-20 hover:border-[#A29487] dark:hover:border-[#A29487] transition-all duration-300 hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#A29487] to-[#8b7d6f]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MdCheckCircle size={24} className="text-white" />
                </motion.div>
                <h3 className="mb-4 text-xl font-bold text-[#1A1A1A] dark:text-white">{strength.title}</h3>
                <p className="leading-relaxed text-[#4A4A4A] dark:text-[#E8E4DC]">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Working Procedures Section */}
      <section className="px-6 py-20 bg-[#F5F1ED] dark:bg-[#2A2A2A]" ref={processRef}>
        <div className="mx-auto max-w-6xl">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={processInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-[#1A1A1A] dark:text-white">Our Process</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#A29487] to-[#D1CDC4]"></div>
          </motion.div>

          {/* Desktop view */}
          <motion.div 
            className="hidden lg:grid grid-cols-7 gap-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
          >
            {procedures.map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className={`mb-4 flex items-center justify-center h-20 rounded-xl bg-gradient-to-br ${step.color} p-1`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="h-full w-full rounded-lg bg-white dark:bg-[#1A1A1A] flex items-center justify-center">
                    <span className={`text-2xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                      {step.number}
                    </span>
                  </div>
                </motion.div>
                <p className="font-semibold text-sm text-[#1A1A1A] dark:text-white leading-tight">
                  {step.title}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile/Tablet view */}
          <motion.div 
            className="lg:hidden overflow-x-auto pb-4"
            initial={{ opacity: 0 }}
            animate={processInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-4 min-w-max">
              {procedures.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex-shrink-0 w-48 text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={processInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className={`mb-4 flex items-center justify-center h-24 rounded-xl bg-gradient-to-br ${step.color} p-1`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="h-full w-full rounded-lg bg-white dark:bg-[#1A1A1A] flex items-center justify-center">
                      <span className={`text-2xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                    </div>
                  </motion.div>
                  <p className="font-semibold text-sm text-[#1A1A1A] dark:text-white text-center leading-tight">
                    {step.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A1A1A] dark:bg-[#1A1A1A] px-6 py-20 text-center" ref={ctaRef}>
        <motion.div 
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-white">Ready to Illuminate Your Space?</h2>
          <p className="mb-8 text-lg text-[#D1CDC4] leading-relaxed">
            Let&apos;s work together to transform your vision into reality with elegant design and exceptional lighting solutions.
          </p>
          <motion.div 
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <motion.a
              href="/#portfolio"
              className="inline-block rounded-lg bg-[#A29487] hover:bg-[#8b7d6f] px-8 py-3 font-medium text-white transition"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Services
            </motion.a>
            <motion.a
              href="mailto:info@veraluzinteriors.com"
              className="inline-block rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] px-8 py-3 font-medium transition"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white dark:bg-[#1A1A1A] border-t border-[#D1CDC4] dark:border-[#D1CDC4] dark:border-opacity-10 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div>
              <h3 className="font-semibold text-[#1A1A1A] dark:text-white mb-4">Veraluz Interiors</h3>
              <p className="text-sm text-[#A29487] dark:text-[#D1CDC4]">Illuminating spaces with elegant design and lighting solutions</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#1A1A1A] dark:text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-[#A29487] dark:text-[#D1CDC4]">
                <li><a href="/#portfolio" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Lighting Design</a></li>
                <li><a href="/#portfolio" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Design Consulting</a></li>
                <li><a href="/#portfolio" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Product Sales</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1A1A1A] dark:text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-[#A29487] dark:text-[#D1CDC4]">
                <li><Link href="/" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#1A1A1A] dark:hover:text-white transition">About</Link></li>
                <li><a href="/#contact" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Contact</a></li>
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
          <div className="border-t border-[#D1CDC4] dark:border-[#D1CDC4] dark:border-opacity-10 pt-8 text-center text-sm text-[#A29487] dark:text-[#D1CDC4]">
            <p>&copy; 2026 Veraluz Interiors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
