import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);
  
  // If not enough related posts, pad with recent posts
  if (relatedPosts.length < 3) {
    const additionalPosts = blogPosts
      .filter((p) => p.slug !== post.slug && !relatedPosts.some(rp => rp.slug === p.slug))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...additionalPosts);
  }

  return (
    <article className="bg-background min-h-screen pt-32 pb-24 px-container">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/blog" 
          className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold mb-12 inline-block hover:opacity-70 transition-opacity"
        >
          ← KEMBALI KE BLOG
        </Link>
        
        <header className="mb-16 border-b border-foreground/10 pb-12">
          <div className="flex gap-4 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">
              {post.category}
            </span>
            <span className="font-mono text-[10px] opacity-30 uppercase tracking-widest">
              {post.date}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-tight mb-12">
            {post.title}
          </h1>

          <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-muted border border-foreground/10 mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              priority
            />
          </div>
        </header>

        {/* Post Content with Enhanced Styling */}
        <div 
          className="font-mono text-sm md:text-base leading-relaxed text-foreground/80 space-y-12 blog-content max-w-3xl prose-custom mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* RELATED POSTS SECTION */}
        <div className="mt-32 pt-16 border-t border-foreground/10">
          <h3 className="font-display text-3xl uppercase tracking-tighter mb-12">Baca Juga Artikel Lainnya</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rp) => (
              <Link href={`/blog/${rp.slug}`} key={rp.slug} className="group block border border-foreground/10 hover:border-accent/30 transition-all p-6">
                 <div className="relative w-full aspect-video overflow-hidden bg-muted mb-6">
                  <Image
                    src={rp.image}
                    alt={rp.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold block mb-4">
                  {rp.category}
                </span>
                <h4 className="font-display text-xl uppercase tracking-tighter leading-tight group-hover:text-accent transition-colors line-clamp-3">
                  {rp.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-foreground/10 text-center">
          <p className="font-mono text-xs opacity-40 mb-8 uppercase tracking-widest">
            Butuh bantuan membangun website untuk bisnis Anda?
          </p>
          <Link 
            href="/#kontak"
            className="inline-block font-mono text-[10px] uppercase tracking-widest bg-accent text-background px-8 py-4 font-bold hover:bg-foreground hover:text-background transition-colors"
          >
            KONSULTASI GRATIS SEKARANG
          </Link>
        </footer>
      </div>
    </article>
  );
}
