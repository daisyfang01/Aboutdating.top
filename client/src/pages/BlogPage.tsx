// LoveMatch Reviews — Blog Listing Page
// Displays 114+ blog articles with categories, search, and filtering

import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { Search, ChevronRight, Calendar, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fullBlogArticles as blogArticles } from '@/lib/blog-articles-full';

const categories = ['All', 'Dating Apps', 'App Reviews', 'Comparisons', 'Dating Tips', 'Relationships', 'Psychology', 'Research', 'Safety', 'Dating Safety', 'Dating Guides'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    const filtered = blogArticles.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    // Sort by date in descending order (newest first)
    return filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <div className="urgency-banner">
        🔥 <strong>New Content:</strong> 120+ comprehensive dating guides and reviews — updated weekly
      </div>

      <Navbar />

      {/* Hero */}
      <section className="bg-white border-b border-border py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Dating Tips, Reviews & Guides
            </h1>
            <p className="font-body text-lg text-charcoal-light mb-8">
              Expert advice on online dating, app reviews, safety tips, and relationship guides. Learn how to find your perfect match.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-charcoal-light" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/20"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-5xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-body font-semibold text-sm transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-red text-white'
                    : 'bg-white border border-border text-charcoal hover:border-brand-red'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {filteredArticles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`} className="no-underline group">
                <div className="bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-all h-full flex flex-col p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="trust-badge text-xs">{article.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-charcoal mb-2 group-hover:text-brand-red transition-colors line-clamp-3">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-body text-sm text-charcoal-light mb-4 flex-1 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs font-body text-charcoal-light mb-4 border-t border-border pt-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(article.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime} min read
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-body font-semibold text-brand-red group-hover:gap-3 transition-all">
                    Read Article
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="font-body text-charcoal-light mb-4">No articles found matching your search.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="btn-cta text-sm"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Results Count */}
          <div className="text-center text-sm font-body text-charcoal-light">
            Showing {filteredArticles.length} of {blogArticles.length} articles
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
