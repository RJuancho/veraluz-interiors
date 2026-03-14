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
      transition: { duration: 0.5 },
    },
  };

  const procedures = [
    { number: "01", title: "Demand Communication", color: "from-[#A29487] to-[#8b7d6f]" },
    { number: "02", title: "Space Design Interpretation", color: "from-[#A29487] to-[#8b7d6f]" },
    { number: "03", title: "Lighting Scheme Design", color: "from-[#A29487] to-[#8b7d6f]" },
    { number: "04", title: "Product Selection Matching", color: "from-[#A29487] to-[#8b7d6f]" },
    { number: "05", title: "Manufacturing Coordination", color: "from-[#A29487] to-[#8b7d6f]" },
    { number: "06", title: "Installation Guidance", color: "from-[#A29487] to-[#8b7d6f]" },
    { number: "07", title: "After Sales Support", color: "from-[#A29487] to-[#8b7d6f]" },
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
          transition={{ duration: 0.8 }}
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

      {/* Working Procedures Section - Timeline Approach */}
      <section className="px-6 py-20 bg-white dark:bg-[#1A1A1A]" ref={processRef}>
        <div className="mx-auto max-w-5xl">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, x: -20 }}
            animate={processInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-[#1A1A1A] dark:text-white">Our Process</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#A29487] to-[#D1CDC4]"></div>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            className="space-y-8 relative"
            variants={containerVariants}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
          >
            {/* Vertical Line */}
            <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#A29487] via-[#A29487] to-[#D1CDC4] hidden md:block"></div>

            {procedures.map((step, index) => (
              <motion.div 
                key={index}
                className="flex gap-6 md:gap-12 items-start group relative"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                {/* Step Number Circle */}
                <motion.div 
                  className={`flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br ${step.color} p-1 flex items-center justify-center relative z-10 shadow-lg group-hover:shadow-xl transition-shadow`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-[#1A1A1A] flex items-center justify-center">
                    <span className={`text-3xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                      {step.number}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="flex-1 pt-3 p-6 rounded-lg bg-[#F5F1ED] dark:bg-[#2A2A2A] border border-[#D1CDC4] dark:border-[#D1CDC4] dark:border-opacity-20 group-hover:border-[#A29487] dark:group-hover:border-[#A29487] hover:bg-[#EFEAE4] dark:hover:bg-[#333333] transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-3 group-hover:text-[#A29487] dark:group-hover:text-[#D1CDC4] transition">
                    {step.title}
                  </h3>
                  <p className="text-[#4A4A4A] dark:text-[#E8E4DC] leading-relaxed text-sm md:text-base">
                    {index === 0 && "We begin by listening to your needs, requirements, and vision for the space. Understanding your goals and constraints helps us develop a tailored approach."}
                    {index === 1 && "Our team analyzes your space dimensions, layout, and functionality to create an optimal design framework that maximizes potential."}
                    {index === 2 && "We develop comprehensive lighting schemes that enhance ambiance, functionality, and energy efficiency for your specific environment."}
                    {index === 3 && "We curate premium products from our diverse supplier network, ensuring quality and value while matching your design vision."}
                    {index === 4 && "We coordinate manufacturing timelines and quality control to ensure all components meet our high standards before delivery."}
                    {index === 5 && "Our team provides expert guidance during installation, ensuring every detail is executed perfectly for optimal results."}
                    {index === 6 && "We remain your partner beyond installation, providing ongoing support and maintenance guidance for lasting satisfaction."}
                  </p>
                </motion.div>
              </motion.div>
            ))}
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
              href="/"
              className="inline-block rounded-lg bg-[#A29487] hover:bg-[#8b7d6f] px-8 py-3 font-medium text-white transition"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Home
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
                <li><Link href="/#portfolio" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Lighting Design</Link></li>
                <li><Link href="/#portfolio" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Design Consulting</Link></li>
                <li><Link href="/#portfolio" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Product Sales</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#1A1A1A] dark:text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-[#A29487] dark:text-[#D1CDC4]">
                <li><Link href="/" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#1A1A1A] dark:hover:text-white transition">About</Link></li>
                <li><Link href="/#contact" className="hover:text-[#1A1A1A] dark:hover:text-white transition">Contact</Link></li>
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
