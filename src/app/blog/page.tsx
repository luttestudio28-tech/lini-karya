import { Metadata } from "next";
import BlogListing from "@/components/sections/BlogListing";

export const metadata: Metadata = {
  title: "Blog & Wawasan Digital UMKM Indonesia",
  description: "Dapatkan tips, panduan, dan strategi pengembangan website untuk memajukan bisnis UMKM Anda di seluruh Indonesia.",
};

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 px-container">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-20 border-b border-foreground/10 pb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-6 font-bold">
            Wawasan & Strategi
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none mb-8">
            Blog <span className="italic-accent text-accent">Lini Karya</span>
          </h1>
          <p className="font-mono text-sm md:text-base text-foreground/50 max-w-2xl leading-relaxed">
            Berbagi panduan praktis, studi kasus, dan strategi digital untuk membantu UMKM Indonesia tumbuh lebih cepat dengan website yang tepat.
          </p>
        </header>

        <BlogListing />
      </div>
    </div>
  );
}
