// LoveMatch Reviews — Individual App Review Page
// Design: Editorial Trust — magazine-style two-column layout with sticky sidebar CTA
// SEO: Structured review content with schema-friendly headings

import { useEffect, useRef } from 'react';
import { useRoute, Link } from 'wouter';
import {
  CheckCircle, XCircle, ArrowRight, Shield, Clock, Star,
  Users, DollarSign, Award, TrendingUp, ChevronRight, Heart
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarRating from '@/components/StarRating';
import ProductRecommendations from '@/components/ProductRecommendations';
import { datingApps, testimonials } from '@/lib/data';
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

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollAnimation();
  return <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function ReviewPage() {
  const [, params] = useRoute('/reviews/:id');
  const app = datingApps.find((a) => a.id === params?.id);

  if (!app) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-charcoal mb-4">Review Not Found</h1>
            <Link href="/" className="btn-cta">Back to Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedApps = datingApps.filter((a) => a.id !== app.id);
  const appTestimonial = testimonials.find((t) => t.app === app.name);

  const badgeColors: Record<string, string> = {
    'editors-choice': 'trust-badge editors-choice',
    'best-value': 'trust-badge best-value',
    'most-popular': 'trust-badge most-popular',
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      {/* Urgency bar */}
      <div className="urgency-banner">
        🔥 <strong>Special Offer:</strong> {app.urgencyText || `Join ${app.name} today and start meeting compatible singles`}
      </div>

      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-xs font-body text-charcoal-light">
            <Link href="/" className="hover:text-brand-red transition-colors no-underline">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span>Reviews</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-charcoal font-semibold">{app.name}</span>
          </nav>
        </div>
      </div>

      {/* Review hero */}
      <section className="bg-white border-b border-border py-10">
        <div className="container">
          <div className="flex flex-wrap items-start gap-6">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                {app.badge && (
                  <span className={badgeColors[app.badge]}>{app.badgeLabel}</span>
                )}
                <span className="font-body text-xs text-charcoal-light">
                  Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
              </div>
              <h1 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-3">
                {app.name} Review {new Date().getFullYear()}: Is It Worth It?
              </h1>
              <p className="font-body text-lg text-charcoal-light mb-4 leading-relaxed">
                {app.tagline} — We spent 3 weeks testing {app.name} to give you an honest, in-depth assessment.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div
                    className="text-4xl font-bold text-brand-red"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {app.overallScore}
                  </div>
                  <div>
                    <StarRating score={app.overallScore} size="md" showScore={false} />
                    <p className="text-xs font-body text-charcoal-light mt-0.5">Overall Score</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm font-body text-charcoal-light">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-brand-gold" /> {app.memberCount} members
                  </span>
                  <span className="flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-brand-gold" /> From {app.pricing.annual || app.pricing.sixMonth}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-brand-gold" /> Verified & Tested
                  </span>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="flex-shrink-0">
              <a href={app.affiliateUrl} className="btn-cta btn-cta-pulse text-base px-8 py-4">
                {app.ctaText} →
              </a>
              <p className="text-xs font-body text-charcoal-light text-center mt-2">
                Free to join · No credit card
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content + sticky sidebar */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Main content column ── */}
          <div className="lg:col-span-2 space-y-12">

            {/* Score breakdown */}
            <FadeUp>
              <div className="bg-white rounded-xl border border-border shadow-sm p-6">
                <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Score Breakdown</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Match Quality', score: app.scores.matchQuality, desc: 'How well the algorithm predicts compatibility' },
                    { label: 'Ease of Use', score: app.scores.easeOfUse, desc: 'Interface design and daily usability' },
                    { label: 'Value for Money', score: app.scores.valueForMoney, desc: 'Features relative to pricing' },
                    { label: 'Features', score: app.scores.features, desc: 'Breadth and quality of platform features' },
                    { label: 'Success Rate', score: app.scores.successRate, desc: 'Real-world relationship outcomes' },
                  ].map(({ label, score, desc }) => (
                    <div key={label}>
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <span className="font-body font-semibold text-sm text-charcoal">{label}</span>
                          <span className="font-body text-xs text-charcoal-light ml-2">{desc}</span>
                        </div>
                        <span
                          className="font-bold text-brand-red text-sm"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {score}/10
                        </span>
                      </div>
                      <div className="rating-bar-track">
                        <div className="rating-bar-fill" style={{ width: `${score * 10}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Overview */}
            <FadeUp>
              <div className="review-prose">
                <h2>Overview</h2>
                <p>{app.overview}</p>
              </div>
            </FadeUp>

            {/* CTA #1 */}
            <FadeUp>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                <p className="font-body font-bold text-charcoal mb-1">
                  Ready to try {app.name}?
                </p>
                {app.urgencyText && (
                  <p className="font-body text-sm text-brand-red mb-4">🔥 {app.urgencyText}</p>
                )}
                <a href={app.affiliateUrl} className="btn-cta btn-cta-pulse">
                  {app.ctaText} →
                </a>
              </div>
            </FadeUp>

            {/* Key Features */}
            <FadeUp>
              <div className="review-prose">
                <h2>Key Features</h2>
                <p>
                  {app.name} stands out from competitors with a set of features specifically designed to improve match quality and user experience. Here's what makes it unique:
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {app.keyFeatures.map((feature, i) => (
                  <div key={feature} className="flex items-start gap-3 bg-white rounded-lg border border-border p-4 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0 font-mono font-bold text-sm">
                      {i + 1}
                    </div>
                    <span className="font-body text-sm font-semibold text-charcoal leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Pros & Cons */}
            <FadeUp>
              <div className="review-prose mb-4">
                <h2>Pros & Cons</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl border border-green-200 p-5">
                  <h3 className="font-body font-bold text-green-800 uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Pros
                  </h3>
                  <ul className="space-y-2.5">
                    {app.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2.5 text-sm font-body text-green-900">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl border border-red-200 p-5">
                  <h3 className="font-body font-bold text-red-800 uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                    <XCircle className="w-4 h-4" /> Cons
                  </h3>
                  <ul className="space-y-2.5">
                    {app.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2.5 text-sm font-body text-red-900">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>

            {/* Pricing */}
            <FadeUp>
              <div className="review-prose mb-4">
                <h2>Pricing Breakdown</h2>
                <p>
                  {app.name} offers a free tier with limited features, and several premium subscription options. Longer commitments offer significant savings.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
                <div className="bg-charcoal text-white px-6 py-4">
                  <h3 className="font-body font-bold text-sm uppercase tracking-wider">Subscription Plans</h3>
                </div>
                <div className="divide-y divide-border">
                  {[
                    { plan: 'Free', price: 'Free forever', features: app.freeFeatures, highlight: false },
                    { plan: '1 Month', price: app.pricing.monthly, features: app.premiumFeatures, highlight: false },
                    { plan: '3 Months', price: app.pricing.threeMonth, features: app.premiumFeatures, highlight: false },
                    { plan: '6 Months', price: app.pricing.sixMonth, features: app.premiumFeatures, highlight: true },
                    ...(app.pricing.annual ? [{ plan: 'Annual', price: app.pricing.annual, features: app.premiumFeatures, highlight: false }] : []),
                  ].map(({ plan, price, features, highlight }) => (
                    <div
                      key={plan}
                      className={`px-6 py-4 flex flex-wrap items-start gap-4 ${highlight ? 'bg-amber-50 border-l-4 border-l-brand-gold' : ''}`}
                    >
                      <div className="w-28 flex-shrink-0">
                        <div className="flex items-center gap-2">
                          <span className="font-body font-bold text-charcoal text-sm">{plan}</span>
                          {highlight && <span className="trust-badge text-xs">Best Value</span>}
                        </div>
                        <div
                          className="text-brand-red font-bold text-lg mt-0.5"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {price}
                        </div>
                      </div>
                      <div className="flex-1 flex flex-wrap gap-x-4 gap-y-1">
                        {features.slice(0, 4).map((f) => (
                          <span key={f} className="text-xs font-body text-charcoal-light flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-600" /> {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* CTA #2 */}
            <FadeUp>
              <div
                className="rounded-xl p-8 text-center text-white"
                style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #2c1a1a 100%)' }}
              >
                <Award className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                <h3 className="font-display text-2xl font-bold mb-2">
                  {app.badge === 'editors-choice' ? "Our #1 Recommended Dating App" : `Try ${app.name} Today`}
                </h3>
                <p className="font-body text-white/70 mb-6 max-w-md mx-auto">
                  Join {app.memberCount} singles already using {app.name} to find meaningful connections.
                </p>
                {app.urgencyText && (
                  <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-5">
                    <Clock className="w-4 h-4 text-brand-gold" />
                    <span className="font-body text-sm font-semibold text-brand-gold">{app.urgencyText}</span>
                  </div>
                )}
                <div className="block">
                  <a href={app.affiliateUrl} className="btn-cta btn-cta-pulse text-base px-10 py-4">
                    {app.ctaText} →
                  </a>
                </div>
                <p className="font-body text-white/40 text-xs mt-4">Free to join · No credit card required</p>
              </div>
            </FadeUp>

            {/* User Experience */}
            <FadeUp>
              <div className="review-prose">
                <h2>User Experience</h2>
                <p>{app.userExperience}</p>
              </div>
            </FadeUp>

            {/* Testimonial */}
            {appTestimonial && (
              <FadeUp>
                <div className="bg-cream rounded-xl border border-border p-6 relative">
                  <div className="absolute top-4 right-6 text-6xl text-brand-red/10 font-display font-bold leading-none select-none">"</div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-brand-red text-lg">{appTestimonial.name[0]}</span>
                    </div>
                    <div>
                      <span className="font-body font-bold text-charcoal">{appTestimonial.name}</span>
                      <span className="font-body text-xs text-charcoal-light ml-2">{appTestimonial.age}, {appTestimonial.location}</span>
                      <div className="mt-1">
                        <StarRating score={appTestimonial.rating * 2} size="sm" showScore={false} />
                      </div>
                    </div>
                  </div>
                  <blockquote className="font-body text-charcoal-light italic leading-relaxed mb-3">
                    "{appTestimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-body text-sm font-semibold text-green-700">{appTestimonial.result}</span>
                  </div>
                </div>
              </FadeUp>
            )}

            {/* Final Verdict */}
            <FadeUp>
              <div className="bg-white rounded-xl border-2 border-brand-red shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-charcoal">Final Verdict</h2>
                </div>
                <p className="font-body text-charcoal-light leading-relaxed mb-6">{app.finalVerdict}</p>
                <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div
                      className="text-4xl font-bold text-brand-red"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {app.overallScore}
                    </div>
                    <div>
                      <StarRating score={app.overallScore} size="md" showScore={false} />
                      <p className="text-xs font-body text-charcoal-light">Overall Rating</p>
                    </div>
                  </div>
                  <a href={app.affiliateUrl} className="btn-cta btn-cta-pulse">
                    {app.ctaText} →
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Product Recommendations */}
            <FadeUp>
              {(() => {
                const products = getProductsForArticle('dating-tips-first-date').slice(0, 4);
                return products.length > 0 ? <ProductRecommendations products={products} title="Look Your Best" /> : null;
              })()}
            </FadeUp>

            {/* Related reviews */}
            <FadeUp>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Also Compare</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedApps.map((related) => (
                  <Link key={related.id} href={`/reviews/${related.id}`} className="no-underline group">
                    <div className="bg-white rounded-xl border border-border p-5 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-0.5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display font-bold text-lg text-charcoal group-hover:text-brand-red transition-colors">
                          {related.name}
                        </h3>
                        <span
                          className="text-2xl font-bold text-brand-red"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {related.overallScore}
                        </span>
                      </div>
                      <StarRating score={related.overallScore} size="sm" showScore={false} />
                      <p className="font-body text-xs text-charcoal-light mt-2">{related.tagline}</p>
                      <div className="flex items-center gap-1 mt-3 text-brand-red text-xs font-semibold font-body">
                        Read Review <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* ── Sticky sidebar ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">

              {/* Quick summary card */}
              <div className="bg-white rounded-xl border-2 border-brand-red shadow-md overflow-hidden">
                <div className="bg-brand-red text-white px-5 py-4">
                  <div className="flex items-center gap-2 mb-1">
                    {app.badge && (
                      <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded">
                        {app.badgeLabel}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-xl">{app.name}</h3>
                  <p className="text-white/80 text-sm">{app.tagline}</p>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="text-4xl font-bold text-brand-red"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {app.overallScore}
                    </div>
                    <div>
                      <StarRating score={app.overallScore} size="sm" showScore={false} />
                      <p className="text-xs font-body text-charcoal-light">out of 10</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-5">
                    {[
                      { icon: <Users className="w-3.5 h-3.5" />, label: app.memberCount + ' members' },
                      { icon: <DollarSign className="w-3.5 h-3.5" />, label: 'From ' + (app.pricing.annual || app.pricing.sixMonth) },
                      { icon: <TrendingUp className="w-3.5 h-3.5" />, label: 'Best for: ' + app.bestFor },
                      { icon: <Shield className="w-3.5 h-3.5" />, label: 'Ages ' + app.ageRange },
                    ].map(({ icon, label }) => (
                      <div key={label} className="flex items-center gap-2 text-xs font-body text-charcoal-light">
                        <span className="text-brand-gold">{icon}</span>
                        {label}
                      </div>
                    ))}
                  </div>

                  {app.urgencyText && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-4">
                      <p className="text-xs font-body font-semibold text-amber-800 text-center">
                        🔥 {app.urgencyText}
                      </p>
                    </div>
                  )}

                  <a href={app.affiliateUrl} className="btn-cta w-full text-center text-sm btn-cta-pulse">
                    {app.ctaText} →
                  </a>
                  <p className="text-xs font-body text-charcoal-light text-center mt-2">
                    Free to join · No credit card
                  </p>
                </div>
              </div>

              {/* Top 3 mini list */}
              <div className="bg-white rounded-xl border border-border shadow-sm p-5">
                <h4 className="font-body font-bold text-xs uppercase tracking-wider text-charcoal mb-4">
                  Our Top 3 Picks
                </h4>
                <div className="space-y-3">
                  {datingApps.map((a) => (
                    <Link key={a.id} href={`/reviews/${a.id}`} className="no-underline flex items-center gap-3 group">
                      <div className={`rank-badge text-sm w-7 h-7 ${a.rank === 1 ? 'gold' : ''}`}>
                        {a.rank}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-body font-semibold text-sm group-hover:text-brand-red transition-colors ${a.id === app.id ? 'text-brand-red' : 'text-charcoal'}`}>
                          {a.name}
                        </p>
                        <StarRating score={a.overallScore} size="sm" showScore={true} showOutOf={false} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Comparison links */}
              <div className="bg-cream rounded-xl border border-border p-5">
                <h4 className="font-body font-bold text-xs uppercase tracking-wider text-charcoal mb-4">
                  Compare {app.name}
                </h4>
                <div className="space-y-2">
                  {relatedApps.map((related) => (
                    <Link
                      key={related.id}
                      href={`/compare/${[app.id, related.id].sort().join('-vs-')}`}
                      className="no-underline flex items-center gap-2 text-sm font-body text-charcoal-light hover:text-brand-red transition-colors group"
                    >
                      <Heart className="w-3.5 h-3.5 text-brand-red/40 group-hover:text-brand-red transition-colors" />
                      {app.name} vs {related.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
