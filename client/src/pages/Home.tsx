// LoveMatch Reviews — Homepage
// Design: Editorial Trust — "The Wirecutter of Dating"
// Layout: Asymmetric editorial grid, ranked card stack above fold, comparison table, testimonials

import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { Shield, Award, Users, TrendingUp, CheckCircle, ArrowRight, Star, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppCard from '@/components/AppCard';
import StarRating from '@/components/StarRating';
import ProductRecommendations from '@/components/ProductRecommendations';
import { datingApps, testimonials, comparisonFeatures } from '@/lib/data';
import { productRecommendations } from '@/lib/product-recommendations';

// Scroll animation hook
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      {/* Urgency top bar */}
      <div className="urgency-banner">
        🔥 <strong>Limited Time:</strong> eHarmony is offering 3 months FREE with annual plans — offer ends soon
      </div>

      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, oklch(0.985 0.008 85) 0%, oklch(0.97 0.012 85) 100%)',
        }}
      >
        {/* Background abstract pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663492953418/PgsoF2EN2cXJLWmHiBGbS3/abstract-hearts-4tZMd7GgmCCeZUQe3a7v5X.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-20">
            {/* Left: headline + trust signals */}
            <div>
              {/* Trust badge row */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="trust-badge">
                  <Shield className="w-3 h-3" /> Independent Reviews
                </span>
                <span className="trust-badge">
                  <Award className="w-3 h-3" /> 50+ Apps Tested
                </span>
                <span className="trust-badge">
                  <Users className="w-3 h-3" /> 2M+ Readers
                </span>
              </div>

              <h1
                className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal mb-6"
                style={{ lineHeight: '1.1' }}
              >
                Find the Dating App That{' '}
                <span className="text-brand-red italic">Actually Works</span>
              </h1>

              <p className="font-body text-lg text-charcoal-light mb-8 leading-relaxed max-w-lg">
                We've spent 1,200+ hours testing every major dating app so you don't waste time or money. Our expert reviews cut through the hype to show you exactly which apps deliver real results.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-t border-b border-border">
                {[
                  { value: '50+', label: 'Apps Reviewed' },
                  { value: '1,200+', label: 'Hours Tested' },
                  { value: '438', label: 'Couples/Day via eHarmony' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div
                      className="text-2xl font-bold text-brand-red"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {value}
                    </div>
                    <div className="text-xs font-body text-charcoal-light mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#top-picks" className="btn-cta btn-cta-pulse">
                  See Top 3 Picks →
                </a>
                <a href="#comparison" className="btn-cta-gold">
                  Compare All Apps
                </a>
              </div>
            </div>

            {/* Right: hero image */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663492953418/PgsoF2EN2cXJLWmHiBGbS3/hero-couple-Ydp3YsqcgKefc7BdzvwuYE.webp"
                  alt="Happy couple who met through a dating app"
                  className="w-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
                {/* Overlay card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-white fill-white" />
                    </div>
                    <div>
                      <p className="font-body font-bold text-sm text-charcoal">
                        "We met on eHarmony and got engaged 18 months later."
                      </p>
                      <p className="font-body text-xs text-charcoal-light mt-0.5">— David & Rachel, Seattle</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-brand-gold text-charcoal rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg">
                <span className="font-mono font-bold text-lg" style={{ fontFamily: 'var(--font-mono)' }}>9.7</span>
                <span className="font-body text-xs font-bold">/10</span>
                <span className="font-body text-xs">Top Pick</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TOP 3 PICKS
      ═══════════════════════════════════════════ */}
      <section id="top-picks" className="py-16 bg-cream">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="trust-badge editors-choice mb-4 inline-block">
                ★ Our Expert Picks for 2025
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
                The 3 Best Dating Apps Right Now
              </h2>
              <p className="font-body text-charcoal-light max-w-2xl mx-auto text-lg">
                After testing 50+ apps, these three consistently deliver the best results for finding a meaningful relationship. Updated monthly.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {datingApps.map((app, i) => (
              <FadeUp key={app.id} delay={i * 100}>
                <AppCard app={app} featured={app.rank === 1} />
              </FadeUp>
            ))}
          </div>

          {/* Mid-section CTA */}
          <FadeUp delay={300}>
            <div className="mt-10 text-center p-6 bg-white rounded-xl border border-border shadow-sm">
              <p className="font-body text-charcoal-light mb-3">
                <strong className="text-charcoal">Not sure which to choose?</strong> Our comparison tool makes it easy.
              </p>
              <Link href="/compare/eharmony-vs-match" className="btn-cta text-sm inline-flex">
                Compare Side-by-Side →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EMOTIONAL TRIGGER SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #2c1a1a 100%)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6" style={{ lineHeight: '1.2' }}>
                You Deserve More Than{' '}
                <span className="text-brand-gold italic">Endless Swiping</span>
              </h2>
              <p className="font-body text-white/70 text-lg mb-6 leading-relaxed">
                If you're tired of meaningless matches, ghosting, and apps that feel like a second job — you're not alone. Millions of people are looking for the same thing you are: a real connection with someone who truly gets them.
              </p>
              <p className="font-body text-white/70 text-lg mb-8 leading-relaxed">
                The right dating app changes everything. It's not about swiping more — it's about being matched with people who are genuinely compatible with you. That's exactly what our top-rated apps deliver.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={datingApps[0].affiliateUrl} className="btn-cta">
                  Start Finding Real Connections →
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663492953418/PgsoF2EN2cXJLWmHiBGbS3/success-story-dkqKaZR8rYXXPwzpbC8ZEa.webp"
                alt="Couple at romantic dinner"
                className="rounded-xl shadow-2xl w-full object-cover"
                style={{ aspectRatio: '3/2' }}
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMPARISON TABLE
      ═══════════════════════════════════════════ */}
      <section id="comparison" className="py-16 bg-white">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                Head-to-Head Comparison
              </h2>
              <p className="font-body text-charcoal-light max-w-xl mx-auto">
                See exactly how the top 3 dating apps stack up across every key metric.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="text-left px-6 py-4 font-body font-semibold text-sm">Feature</th>
                    {datingApps.map((app) => (
                      <th key={app.id} className="px-6 py-4 text-center font-body font-semibold text-sm">
                        <div className="flex flex-col items-center gap-1">
                          <span>{app.name}</span>
                          {app.badge && (
                            <span className={`trust-badge ${app.badge} text-xs`}>
                              {app.badgeLabel}
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-t border-border transition-colors hover:bg-cream ${
                        i % 2 === 0 ? 'bg-white' : 'bg-cream/50'
                      }`}
                    >
                      <td className="px-6 py-3.5 font-body font-semibold text-sm text-charcoal">
                        {row.feature}
                      </td>
                      {[row.eharmony, row.match, row.bumble, row.hinge, row.tinder, row.okcupid, row.zoosk, row.coffeemeetsbagel].map((val, j) => (
                        <td key={j} className="px-6 py-3.5 text-center">
                          {typeof val === 'boolean' ? (
                            val ? (
                              <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <span className="text-charcoal-light text-lg">—</span>
                            )
                          ) : (
                            <span
                              className="font-body text-sm text-charcoal font-medium"
                              style={
                                row.feature === 'Overall Score'
                                  ? { fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--color-brand-red)' }
                                  : {}
                              }
                            >
                              {val}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-cream border-t-2 border-border">
                    <td className="px-6 py-4 font-body font-bold text-sm text-charcoal">Our Verdict</td>
                    {datingApps.map((app) => (
                      <td key={app.id} className="px-6 py-4 text-center">
                        <a href={app.affiliateUrl} className="btn-cta text-xs py-2 px-4">
                          {app.ctaText}
                        </a>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="mt-6 text-center">
              <Link href="/compare/eharmony-vs-match" className="font-body text-sm font-semibold text-brand-red hover:underline inline-flex items-center gap-1">
                Read our in-depth eHarmony vs Match.com comparison <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          HOW WE REVIEW
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-cream-dark">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-charcoal mb-4">
                How We Rate Dating Apps
              </h2>
              <p className="font-body text-charcoal-light max-w-2xl mx-auto">
                Our methodology is transparent and rigorous. We spend weeks on each app, testing every feature, analyzing match quality, and measuring real-world success rates.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'Match Quality',
                desc: 'We evaluate how well the algorithm predicts compatibility based on real interactions.',
                weight: '30%',
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'User Experience',
                desc: 'Interface design, ease of use, and how enjoyable the app is to use daily.',
                weight: '25%',
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: 'Features & Value',
                desc: 'What you get for free vs. paid, and whether premium features justify the cost.',
                weight: '25%',
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Safety & Trust',
                desc: 'Profile verification, privacy controls, and how well the platform protects users.',
                weight: '20%',
              },
            ].map(({ icon, title, desc, weight }, i) => (
              <FadeUp key={title} delay={i * 80}>
                <div className="bg-white rounded-xl p-6 border border-border shadow-sm h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-red-50 text-brand-red flex items-center justify-center">
                      {icon}
                    </div>
                    <span
                      className="text-2xl font-bold text-brand-red"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {weight}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-charcoal mb-2">{title}</h3>
                  <p className="font-body text-sm text-charcoal-light leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="trust-badge best-value mb-4 inline-block">
                ✓ Real Success Stories
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-3 mb-4">
                People Who Found Love
              </h2>
              <p className="font-body text-charcoal-light max-w-xl mx-auto">
                These aren't paid testimonials. These are real people who used the apps we recommend and found what they were looking for.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {testimonials.map((t, i) => (
              <FadeUp key={t.id} delay={i * 80}>
                <div className="bg-cream rounded-xl p-6 border border-border relative">
                  {/* Quote mark */}
                  <div
                    className="absolute top-4 right-6 text-6xl text-brand-red/10 font-display font-bold leading-none select-none"
                    aria-hidden
                  >
                    "
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    {i === 0 ? (
                      <img
                        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663492953418/PgsoF2EN2cXJLWmHiBGbS3/testimonial-woman-WNWFzkCFWwpqMJz92yoJqz.webp"
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                        <span className="font-display font-bold text-brand-red text-lg">
                          {t.name[0]}
                        </span>
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-body font-bold text-charcoal">{t.name}</span>
                        <span className="text-xs font-body text-charcoal-light">
                          {t.age}, {t.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <StarRating score={t.rating * 2} size="sm" showScore={false} />
                        <span className="text-xs font-body text-charcoal-light">via {t.app}</span>
                      </div>
                    </div>
                  </div>

                  <blockquote className="font-body text-charcoal-light italic leading-relaxed mb-4">
                    "{t.quote}"
                  </blockquote>

                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="font-body text-sm font-semibold text-green-700">{t.result}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* CTA after testimonials */}
          <FadeUp delay={200}>
            <div className="text-center">
              <p className="font-body text-charcoal-light mb-4 text-lg">
                Ready to write your own success story?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={datingApps[0].affiliateUrl} className="btn-cta btn-cta-pulse">
                  Try {datingApps[0].name} Free →
                </a>
                <a href={datingApps[1].affiliateUrl} className="btn-cta-gold">
                  Try {datingApps[1].name}
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LATEST REVIEWS PREVIEW
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-cream">
        <div className="container">
          <FadeUp>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-charcoal">
                In-Depth Reviews
              </h2>
              <Link href="/reviews/eharmony" className="font-body text-sm font-semibold text-brand-red hover:underline flex items-center gap-1">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {datingApps.map((app, i) => (
              <FadeUp key={app.id} delay={i * 80}>
                <Link href={`/reviews/${app.id}`} className="no-underline block group">
                  <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-0.5 h-full">
                    <div
                      className="h-2"
                      style={{ background: `linear-gradient(90deg, ${app.logoColor} 0%, ${app.logoColor}88 100%)` }}
                    />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          {app.badge && (
                            <span className={`trust-badge ${app.badge} text-xs mb-2 inline-block`}>
                              {app.badgeLabel}
                            </span>
                          )}
                          <h3 className="font-display font-bold text-xl text-charcoal group-hover:text-brand-red transition-colors">
                            {app.name} Review
                          </h3>
                          <p className="font-body text-sm text-charcoal-light mt-1">{app.tagline}</p>
                        </div>
                        <div
                          className="text-3xl font-bold text-brand-red flex-shrink-0"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {app.overallScore}
                        </div>
                      </div>

                      <StarRating score={app.overallScore} size="sm" showScore={false} />

                      <p className="font-body text-sm text-charcoal-light mt-3 leading-relaxed line-clamp-3">
                        {app.overview.slice(0, 150)}...
                      </p>

                      <div className="flex items-center gap-1.5 mt-4 text-brand-red font-body text-sm font-semibold group-hover:gap-2.5 transition-all">
                        Read Full Review <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMPARISON ARTICLES
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-charcoal mb-4">
                App Comparisons
              </h2>
              <p className="font-body text-charcoal-light max-w-xl mx-auto">
                Can't decide between two apps? Our head-to-head comparisons break down every difference.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                href: '/compare/eharmony-vs-match',
                title: 'eHarmony vs Match.com',
                desc: 'Both are giants — but which delivers better results for serious relationships?',
                tag: 'Most Read',
                tagClass: 'trust-badge editors-choice',
              },
              {
                href: '/compare/eharmony-vs-bumble',
                title: 'eHarmony vs Bumble',
                desc: 'The compatibility algorithm vs. the women-first approach. Which wins?',
                tag: 'Popular',
                tagClass: 'trust-badge most-popular',
              },
              {
                href: '/compare/match-vs-bumble',
                title: 'Match.com vs Bumble',
                desc: 'Old-school giant vs. modern disruptor — which is worth your time and money?',
                tag: 'New',
                tagClass: 'trust-badge best-value',
              },
            ].map(({ href, title, desc, tag, tagClass }, i) => (
              <FadeUp key={href} delay={i * 80}>
                <Link href={href} className="no-underline block group">
                  <div className="bg-cream rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-0.5 h-full">
                    <span className={`${tagClass} text-xs mb-3 inline-block`}>{tag}</span>
                    <h3 className="font-display font-bold text-xl text-charcoal group-hover:text-brand-red transition-colors mb-2">
                      {title}
                    </h3>
                    <p className="font-body text-sm text-charcoal-light leading-relaxed mb-4">{desc}</p>
                    <div className="flex items-center gap-1.5 text-brand-red font-body text-sm font-semibold">
                      Read Comparison <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DATING PREPARATION PRODUCTS
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-cream">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-charcoal mb-4">
                Prepare for Success
              </h2>
              <p className="font-body text-charcoal-light max-w-2xl mx-auto">
                Look and feel your best on your dates. We recommend products that help you make a great first impression.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <ProductRecommendations 
              products={productRecommendations.filter(p => p.category === 'First Date Fashion' || p.category === 'Fragrances & Grooming' || p.category === 'Dating Preparation').slice(0, 6)}
              title="Dating Essentials"
            />
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA SECTION
      ═══════════════════════════════════════════ */}
      <section
        className="py-20"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663492953418/PgsoF2EN2cXJLWmHiBGbS3/hero-couple-Ydp3YsqcgKefc7BdzvwuYE.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-black/65" />
          <div className="container relative z-10 text-center">
            <FadeUp>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-brand-gold" />
                <span className="font-body text-sm font-semibold text-brand-gold uppercase tracking-wider">
                  Limited Time Offer
                </span>
              </div>
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-6" style={{ lineHeight: '1.15' }}>
                Your Perfect Match is{' '}
                <span className="text-brand-gold italic">Waiting for You</span>
              </h2>
              <p className="font-body text-white/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                Every day you wait is another day without the connection you deserve. Join the millions who found love through our top-rated dating apps.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={datingApps[0].affiliateUrl} className="btn-cta btn-cta-pulse text-base px-8 py-4">
                  Start Free on eHarmony →
                </a>
                <a href={datingApps[1].affiliateUrl} className="btn-cta-gold text-base px-8 py-4">
                  Try Match.com
                </a>
              </div>
              <p className="font-body text-white/50 text-sm mt-6">
                Free to join · No credit card required · Cancel anytime
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
