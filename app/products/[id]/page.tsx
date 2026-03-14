import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { notFound } from "next/navigation";
import { products, getProductById } from "@/lib/products";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const numericId = Number(id);

  if (Number.isNaN(numericId)) notFound();

  const product = getProductById(numericId);
  if (!product) notFound();

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#1A1A1A]">
      <Navbar />

      {/* Breadcrumb */}
      <section className="bg-[#3D4A3A] px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <Link href="/products" className="text-sm text-[#A29487] hover:underline">
            HOME / SHOP / PRODUCTS
          </Link>
          <h1 className="mt-2 text-4xl font-bold text-white">{product.name}</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 px-6 py-12 bg-white dark:bg-[#1A1A1A]">
        <div className="mx-auto max-w-7xl">
          {/* Product Detail Grid */}
          <div className="grid gap-12 md:grid-cols-2 mb-16">
            {/* Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden bg-[#F5F1ED] dark:bg-[#2A2A2A]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-[#1A1A1A] dark:text-white">{product.name}</h1>
              <p className="mt-2 text-sm text-[#A29487]">{product.tag}</p>

              <p className="mt-6 text-[#4A4A4A] dark:text-[#E8E4DC] leading-relaxed">
                {product.description}
              </p>

              {/* Specs */}
              <div className="mt-8 p-4 rounded-lg border border-[#D1CDC4] dark:border-[#D1CDC4]/20 bg-[#F5F1ED] dark:bg-[#2A2A2A]">
                <h3 className="font-semibold text-[#1A1A1A] dark:text-white mb-2">Specifications</h3>
                <p className="text-sm text-[#A29487] dark:text-[#D1CDC4]">{product.specs}</p>
              </div>

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-semibold text-[#1A1A1A] dark:text-white mb-3">Available Sizes</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <button
                        key={variant}
                        className="px-3 py-2 rounded-lg border-2 border-[#A29487] text-[#A29487] dark:text-[#D1CDC4] hover:bg-[#A29487] hover:text-white dark:hover:bg-[#A29487] dark:hover:text-[#1A1A1A] transition text-sm font-medium"
                      >
                        {variant}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto pt-8">
                <button className="flex-1 px-4 py-3 rounded-lg bg-[#A29487] text-white font-medium hover:bg-[#8b7d6f] transition text-center">
                  Inquire
                </button>
                <Link
                  href="/products"
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-[#A29487] text-[#A29487] dark:text-[#D1CDC4] font-medium hover:bg-[#A29487] hover:text-white dark:hover:bg-[#A29487] dark:hover:text-[#1A1A1A] transition text-center"
                >
                  Back to Products
                </Link>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="border-t border-[#D1CDC4] dark:border-[#D1CDC4]/20 pt-12">
              <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-white mb-6">Related Products</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/products/${related.id}`}
                    className="group rounded-lg overflow-hidden bg-white dark:bg-[#2A2A2A] border border-[#D1CDC4] dark:border-[#D1CDC4]/20 hover:border-[#A29487] transition"
                  >
                    <div className="relative h-48 bg-[#F5F1ED] dark:bg-[#1A1A1A] overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-[#1A1A1A] dark:text-white group-hover:text-[#A29487] transition">
                        {related.name}
                      </h3>
                      <p className="mt-1 text-xs text-[#A29487]">{related.tag}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}