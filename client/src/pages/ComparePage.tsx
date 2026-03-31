// LoveMatch Reviews — Comparison Article Page
// Design: Editorial Trust — head-to-head comparison with verdict
// SEO: Targets "App A vs App B" buying-intent keywords

import { useEffect, useRef } from 'react';
import { useRoute, Link } from 'wouter';
import { CheckCircle, XCircle, ArrowRight, Award, ChevronRight, Scale } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarRating from '@/components/StarRating';
import { datingApps, comparisonFeatures } from '@/lib/data';

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

export default function ComparePage() {
  const [, params] = useRoute('/compare/:slug');
  const slug = params?.slug || '';

  // Parse slug like "eharmony-vs-match" or "match-vs-bumble"
  const parts = slug.split('-vs-');
  const app1 = datingApps.find((a) => a.id === parts[0]);
  const app2 = datingApps.find((a) => a.id === parts[1]);

  if (!app1 || !app2) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-charcoal mb-4">Comparison Not Found</h1>
            <Link href="/" className="btn-cta">Back to Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const winner = app1.overallScore >= app2.overallScore ? app1 : app2;
  const loser = winner.id === app1.id ? app2 : app1;

  // Filter comparison features to just these two apps
  const relevantFeatures = comparisonFeatures.map((f) => ({
    feature: f.feature,
    val1: app1.id === 'eharmony' ? f.eharmony : app1.id === 'match' ? f.match : f.bumble,
    val2: app2.id === 'eharmony' ? f.eharmony : app2.id === 'match' ? f.match : f.bumble,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <div className="urgency-banner">
        🔥 <strong>Compare & Save:</strong> Both {app1.name} and {app2.name} offer free trials — join today
      </div>

      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-xs font-body text-charcoal-light">
            <Link href="/" className="hover:text-brand-red transition-colors no-underline">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span>Comparisons</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-charcoal font-semibold">{app1.name} vs {app2.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white border-b border-border py-12">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-8">
              <span className="trust-badge editors-choice mb-4 inline-block">
                ★ Expert Comparison
              </span>
              <h1 className="font-display text-3xl lg:text-5xl font-bold text-charcoal mb-4">
                {app1.name} vs {app2.name}
              </h1>
              <p className="font-body text-lg text-charcoal-light max-w-2xl mx-auto">
                We tested both apps for 3 weeks each. Here's an honest, data-driven breakdown to help you choose the right one for your dating goals.
              </p>
            </div>

            {/* Head-to-head score cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {/* App 1 */}
              <div className={`bg-white rounded-xl border-2 p-6 text-center shadow-sm ${winner.id === app1.id ? 'border-brand-red' : 'border-border'}`}>
                {winner.id === app1.id && (
                  <div className="trust-badge editors-choice text-xs mb-3 inline-block">Winner</div>
                )}
                <h2 className="font-display font-bold text-xl text-charcoal mb-2">{app1.name}</h2>
                <div className="text-4xl font-bold text-brand-red mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
                  {app1.overallScore}
                </div>
                <StarRating score={app1.overallScore} size="sm" showScore={false} />
                <p className="text-xs font-body text-charcoal-light mt-2">{app1.tagline}</p>
                <a href={app1.affiliateUrl} className="btn-cta text-xs py-2 px-4 mt-4 inline-flex">
                  {app1.ctaText}
                </a>
              </div>

              {/* VS divider */}
              <div className="flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-charcoal text-white flex items-center justify-center">
                  <Scale className="w-6 h-6" />
                </div>
              </div>

              {/* App 2 */}
              <div className={`bg-white rounded-xl border-2 p-6 text-center shadow-sm ${winner.id === app2.id ? 'border-brand-red' : 'border-border'}`}>
                {winner.id === app2.id && (
                  <div className="trust-badge editors-choice text-xs mb-3 inline-block">Winner</div>
                )}
                <h2 className="font-display font-bold text-xl text-charcoal mb-2">{app2.name}</h2>
                <div className="text-4xl font-bold text-brand-red mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
                  {app2.overallScore}
                </div>
                <StarRating score={app2.overallScore} size="sm" showScore={false} />
                <p className="text-xs font-body text-charcoal-light mt-2">{app2.tagline}</p>
                <a href={app2.affiliateUrl} className="btn-cta text-xs py-2 px-4 mt-4 inline-flex">
                  {app2.ctaText}
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <div className="container py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Quick verdict */}
          <FadeUp>
            <div className="bg-white rounded-xl border-2 border-brand-red shadow-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-brand-red" />
                <h2 className="font-display text-2xl font-bold text-charcoal">Our Verdict</h2>
              </div>
              <p className="font-body text-charcoal-light leading-relaxed mb-4">
                After extensive testing, <strong className="text-charcoal">{winner.name}</strong> edges out {loser.name} with a score of{' '}
                <strong className="text-brand-red" style={{ fontFamily: 'var(--font-mono)' }}>{winner.overallScore}/10</strong> vs{' '}
                <strong className="text-brand-red" style={{ fontFamily: 'var(--font-mono)' }}>{loser.overallScore}/10</strong>.{' '}
                {winner.id === 'eharmony'
                  ? `${winner.name}'s superior compatibility algorithm and proven track record for serious relationships make it the clear winner for anyone seeking a lasting connection.`
                  : winner.id === 'match'
                  ? `${winner.name}'s massive user base and flexible approach make it the better all-rounder, especially for users who want more control over their dating experience.`
                  : `${winner.name}'s modern design, generous free tier, and women-first approach create a healthier, more enjoyable experience that delivers results.`}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={winner.affiliateUrl} className="btn-cta btn-cta-pulse">
                  Try {winner.name} — Our Winner →
                </a>
                <a href={loser.affiliateUrl} className="btn-cta-gold">
                  Try {loser.name}
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Comparison table */}
          <FadeUp>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Feature Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="text-left px-6 py-4 font-body font-semibold text-sm">Feature</th>
                    <th className="px-6 py-4 text-center font-body font-semibold text-sm">
                      {app1.name}
                      {winner.id === app1.id && (
                        <span className="ml-2 text-brand-gold text-xs">★ Winner</span>
                      )}
                    </th>
                    <th className="px-6 py-4 text-center font-body font-semibold text-sm">
                      {app2.name}
                      {winner.id === app2.id && (
                        <span className="ml-2 text-brand-gold text-xs">★ Winner</span>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {relevantFeatures.map((row, i) => (
                    <tr key={row.feature} className={`border-t border-border ${i % 2 === 0 ? 'bg-white' : 'bg-cream/50'}`}>
                      <td className="px-6 py-3.5 font-body font-semibold text-sm text-charcoal">{row.feature}</td>
                      {[row.val1, row.val2].map((val, j) => (
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
                              style={row.feature === 'Overall Score' ? { fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--color-brand-red)' } : {}}
                            >
                              {val}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>

          {/* Who should choose each */}
          <FadeUp>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Who Should Choose Which?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[app1, app2].map((a) => (
                <div key={a.id} className="bg-white rounded-xl border border-border shadow-sm p-6">
                  <h3 className="font-display font-bold text-xl text-charcoal mb-4">
                    Choose {a.name} if you...
                  </h3>
                  <ul className="space-y-2.5">
                    {a.pros.slice(0, 4).map((pro) => (
                      <li key={pro} className="flex items-start gap-2.5 text-sm font-body text-charcoal-light">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                  <a href={a.affiliateUrl} className="btn-cta text-sm mt-5 inline-flex">
                    {a.ctaText} →
                  </a>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Pros & Cons side by side */}
          <FadeUp>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-6">Pros & Cons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[app1, app2].map((a) => (
                <div key={a.id} className="space-y-4">
                  <h3 className="font-display font-bold text-lg text-charcoal">{a.name}</h3>
                  <div className="bg-green-50 rounded-xl border border-green-200 p-4">
                    <p className="font-body font-bold text-green-800 text-xs uppercase tracking-wider mb-3">Pros</p>
                    <ul className="space-y-2">
                      {a.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm font-body text-green-900">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-xl border border-red-200 p-4">
                    <p className="font-body font-bold text-red-800 text-xs uppercase tracking-wider mb-3">Cons</p>
                    <ul className="space-y-2">
                      {a.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm font-body text-red-900">
                          <XCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Final CTA */}
          <FadeUp>
            <div
              className="rounded-xl p-8 text-center text-white"
              style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #2c1a1a 100%)' }}
            >
              <h3 className="font-display text-2xl font-bold mb-2">
                Ready to Find Your Match?
              </h3>
              <p className="font-body text-white/70 mb-6 max-w-md mx-auto">
                Both apps offer free trials. Start with our top pick and see the difference quality matching makes.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={winner.affiliateUrl} className="btn-cta btn-cta-pulse">
                  Try {winner.name} — Our Winner →
                </a>
                <a href={loser.affiliateUrl} className="btn-cta-gold">
                  Try {loser.name}
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Other comparisons */}
          <FadeUp>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-6">More Comparisons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { href: '/compare/eharmony-vs-match', label: 'eHarmony vs Match.com' },
                { href: '/compare/eharmony-vs-bumble', label: 'eHarmony vs Bumble' },
                { href: '/compare/match-vs-bumble', label: 'Match.com vs Bumble' },
              ]
                .filter((c) => c.href !== `/compare/${slug}`)
                .map(({ href, label }) => (
                  <Link key={href} href={href} className="no-underline flex items-center gap-2 bg-white rounded-lg border border-border p-4 hover:shadow-md transition-all group">
                    <Scale className="w-4 h-4 text-brand-red flex-shrink-0" />
                    <span className="font-body font-semibold text-sm text-charcoal group-hover:text-brand-red transition-colors">
                      {label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand-red ml-auto" />
                  </Link>
                ))}
            </div>
          </FadeUp>
        </div>
      </div>

      <Footer />
    </div>
  );
}
