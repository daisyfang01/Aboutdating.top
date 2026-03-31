// LoveMatch Reviews — Individual Blog Article Page
// Displays full article content with related articles and CTAs

import { useEffect, useRef } from 'react';
import { useRoute, Link } from 'wouter';
import { Calendar, Clock, Share2, ChevronRight, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductRecommendations from '@/components/ProductRecommendations';
import { fullBlogArticles as blogArticles } from '@/lib/blog-articles-full';
import { getProductsForArticle } from '@/lib/product-recommendations';

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// Helper function to sanitize and style HTML content
function processArticleContent(html: string): string {
  return html
    // Style h2 headings
    .replace(/<h2>/g, '<h2 class="font-display text-2xl font-bold text-charcoal mt-6 mb-3">')
    // Style h3 headings
    .replace(/<h3>/g, '<h3 class="font-display text-xl font-bold text-charcoal mt-4 mb-2">')
    // Style h4 headings
    .replace(/<h4>/g, '<h4 class="font-display text-lg font-bold text-charcoal mt-3 mb-2">')
    // Style paragraphs
    .replace(/<p>/g, '<p class="font-body text-base lg:text-lg text-charcoal-light leading-relaxed my-4">')
    // Style strong/bold text
    .replace(/<strong>/g, '<strong class="font-semibold text-charcoal">')
    .replace(/<b>/g, '<b class="font-semibold text-charcoal">')
    // Style unordered lists
    .replace(/<ul>/g, '<ul class="list-disc list-inside space-y-2 my-4 font-body text-charcoal-light">')
    // Style ordered lists
    .replace(/<ol>/g, '<ol class="list-decimal list-inside space-y-2 my-4 font-body text-charcoal-light">')
    // Style list items
    .replace(/<li>/g, '<li class="text-base">')
    // Style tables
    .replace(/<table>/g, '<table class="w-full border-collapse my-6">')
    .replace(/<thead>/g, '<thead class="bg-brand-red/10">')
    .replace(/<tbody>/g, '<tbody>')
    // Style table headers
    .replace(/<th>/g, '<th class="px-4 py-2 border border-border font-semibold text-charcoal text-left">')
    // Style table rows
    .replace(/<tr>/g, '<tr class="hover:bg-cream/50 transition-colors">')
    // Style table cells
    .replace(/<td>/g, '<td class="px-4 py-2 border border-border font-body text-sm">')
    // Style line breaks
    .replace(/<br\s*\/?>/g, '<br class="my-2" />');
}

export default function BlogArticlePage() {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug || '';

  const article = blogArticles.find((a) => a.slug === slug);
  const relatedArticles = article
    ? blogArticles.filter((a) => article.relatedArticles.includes(a.slug)).slice(0, 3)
    : [];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-charcoal mb-4">Article Not Found</h1>
            <Link href="/blog" className="btn-cta">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const publishDate = new Date(article.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-xs font-body text-charcoal-light">
            <Link href="/" className="hover:text-brand-red transition-colors no-underline">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-brand-red transition-colors no-underline">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-charcoal font-semibold line-clamp-1">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-white border-b border-border py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-4">
              <span className="trust-badge text-xs">{article.category}</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-4">{article.title}</h1>
            <p className="font-body text-lg text-charcoal-light mb-6">{article.excerpt}</p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-body text-charcoal-light border-t border-b border-border py-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-charcoal">By {article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {publishDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime} min read
              </div>
              <button className="ml-auto flex items-center gap-2 text-brand-red hover:text-brand-red-light transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Render HTML content with proper styling */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: processArticleContent(article.content)
              }}
            />

            {/* Product Recommendations */}
            {(() => {
              const products = getProductsForArticle(article.slug);
              return products.length > 0 ? <ProductRecommendations products={products} /> : null;
            })()}

            {/* CTA Section */}
            <div
              className="rounded-xl p-8 text-center text-white mt-12"
              style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #2c1a1a 100%)' }}
            >
              <h3 className="font-display text-2xl font-bold mb-2">Ready to Find Your Match?</h3>
              <p className="font-body text-white/70 mb-6 max-w-md mx-auto">
                Use our expert reviews to find the best dating app for your goals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/" className="btn-cta btn-cta-pulse">
                  See Top 3 Picks →
                </Link>
                <Link href="/blog" className="btn-cta-gold">
                  Read More Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-white border-t border-border py-12">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-charcoal mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link key={related.id} href={`/blog/${related.slug}`} className="no-underline group">
                    <div className="bg-cream rounded-lg border border-border p-4 hover:shadow-md transition-all h-full flex flex-col">
                      <span className="trust-badge text-xs mb-2">{related.category}</span>
                      <h3 className="font-display font-bold text-charcoal mb-2 group-hover:text-brand-red transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="font-body text-xs text-charcoal-light mb-3 flex-1 line-clamp-2">{related.excerpt}</p>
                      <div className="flex items-center gap-2 text-xs font-body text-brand-red group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
