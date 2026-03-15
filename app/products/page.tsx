"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { MdSearch } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { BsGrid3X3Gap, BsGridFill, BsList } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { products as productData } from "@/lib/products";

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: string;
  variants?: string[];
  tag: string;
  imagePosition?: string;
}

type ViewMode = "grid-3" | "grid-2" | "list";
type SortOption = "featured" | "newest" | "price-low" | "price-high" | "name";

export default function Products() {
  const { ref: catalogRef } = useInView(); // remove inView check
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid-3");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "acoustic", name: "Acoustic Series" },
    { id: "linear", name: "Linear Light" },
    { id: "lighting-system", name: "Lighting System" },
    { id: "table", name: "Table Light" },
    { id: "wall", name: "Wall Light" },
    { id: "floor", name: "Floor Light" },
    { id: "general", name: "General Lighting" },
  ];

  const filteredProducts = productData.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.id - a.id;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const gridColsClass = {
    "grid-3": "lg:grid-cols-3 md:grid-cols-2",
    "grid-2": "lg:grid-cols-2 md:grid-cols-1",
    "list": "grid-cols-1",
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#1A1A1A]">
      <Navbar />

      {/* Page Heading */}
      <section className="px-6 pt-8 pb-2 bg-white dark:bg-[#1A1A1A]">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-white">
            Products
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 px-6 py-8 bg-white dark:bg-[#1A1A1A]">
        <div className="mx-auto max-w-7xl">
          {/* Top Controls Bar */}
          <div className="mb-6 flex items-center justify-between border-b border-[#D1CDC4] dark:border-[#D1CDC4]/20 pb-4">
            {/* View Mode & Count */}
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid-3")}
                  className={`p-2 rounded transition ${viewMode === "grid-3" ? "bg-[#F5F1ED] dark:bg-[#2A2A2A]" : "hover:bg-[#F5F1ED] dark:hover:bg-[#2A2A2A]"}`}
                >
                  <BsGrid3X3Gap className="text-xl text-[#A29487]" />
                </button>
                <button
                  onClick={() => setViewMode("grid-2")}
                  className={`p-2 rounded transition ${viewMode === "grid-2" ? "bg-[#F5F1ED] dark:bg-[#2A2A2A]" : "hover:bg-[#F5F1ED] dark:hover:bg-[#2A2A2A]"}`}
                >
                  <BsGridFill className="text-xl text-[#A29487]" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded transition ${viewMode === "list" ? "bg-[#F5F1ED] dark:bg-[#2A2A2A]" : "hover:bg-[#F5F1ED] dark:hover:bg-[#2A2A2A]"}`}
                >
                  <BsList className="text-xl text-[#A29487]" />
                </button>
              </div>
              <p className="text-sm text-[#A29487]">{sortedProducts.length} products</p>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 px-4 py-2 text-sm text-[#A29487] hover:text-[#1A1A1A] dark:hover:text-white transition"
              >
                Sort by
                <MdKeyboardArrowDown className="text-lg" />
              </button>
              {showSortDropdown && (
                <div className="absolute right-0 top-full mt-1 w-40 bg-white dark:bg-[#2A2A2A] border border-[#D1CDC4] dark:border-[#D1CDC4]/20 rounded-lg shadow-lg z-10">
                  {[
                    { id: "featured", label: "Featured" },
                    { id: "newest", label: "Newest" },
                    { id: "name", label: "Name (A-Z)" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSortBy(option.id as SortOption);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm transition ${
                        sortBy === option.id
                          ? "bg-[#A29487] text-white"
                          : "text-[#1A1A1A] dark:text-white hover:bg-[#F5F1ED] dark:hover:bg-[#3A3A3A]"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid gap-6 md:grid-cols-4">
            {/* Sidebar Filters */}
            <div className="md:col-span-1">
              <div className="sticky top-6 space-y-6">
                {/* Search */}
                <div>
                  <h3 className="mb-3 font-semibold text-[#1A1A1A] dark:text-white">Search</h3>
                  <div className="relative">
                    <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A29487] text-lg" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded border border-[#D1CDC4] dark:border-[#D1CDC4]/20 bg-white dark:bg-[#2A2A2A] text-[#1A1A1A] dark:text-white placeholder-[#A29487] focus:outline-none focus:border-[#A29487]"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <h3 className="mb-3 font-semibold text-[#1A1A1A] dark:text-white">Category</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`block w-full text-left px-3 py-2 rounded text-sm transition ${
                          selectedCategory === cat.id
                            ? "bg-[#A29487] text-white"
                            : "text-[#A29487] dark:text-[#D1CDC4] hover:bg-[#F5F1ED] dark:hover:bg-[#2A2A2A]"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="md:col-span-3">
              <motion.div
                ref={catalogRef}
                className={`grid gap-6 ${gridColsClass[viewMode]}`}
                initial={{ opacity: 1 }} // start visible
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {sortedProducts.length > 0 ? (
                  sortedProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      className={`group flex flex-col rounded-lg overflow-hidden bg-white dark:bg-[#2A2A2A] border border-[#D1CDC4] dark:border-[#D1CDC4]/20 hover:border-[#A29487] transition-all duration-300 ${
                        viewMode === "list" ? "md:flex-row" : ""
                      }`}
                      whileHover={{ y: -4 }}
                    >
                      {/* Image */}
                      <div className={`relative bg-[#F5F1ED] dark:bg-[#1A1A1A] overflow-hidden ${viewMode === "list" ? "h-40 w-40 flex-shrink-0" : "h-64 w-full"}`}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          style={{ objectPosition: product.imagePosition ?? "center" }}
                          sizes={viewMode === "list" ? "160px" : "(max-width: 768px) 100vw, 50vw"}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col p-4">
                        <h3 className="text-sm font-semibold text-[#1A1A1A] dark:text-white group-hover:text-[#A29487] transition">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-xs text-[#A29487] dark:text-[#D1CDC4]">{product.tag}</p>
                        {viewMode === "list" && (
                          <p className="mt-2 text-xs text-[#4A4A4A] dark:text-[#E8E4DC] leading-relaxed">
                            {product.description}
                          </p>
                        )}
                        
                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-auto pt-4">
                          <Link
                            href={`/products/${product.id}`}
                            className="flex-1 px-4 py-2 rounded-lg bg-[#A29487] text-white font-medium hover:bg-[#8b7d6f] transition text-center text-sm"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-16">
                    <p className="text-[#A29487] dark:text-[#D1CDC4]">
                      No products found. Try adjusting your search or filters.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}