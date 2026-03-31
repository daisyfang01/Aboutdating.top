// LoveMatch Reviews — Footer
// Design: Editorial Trust — clean, minimal footer with disclaimer

import { Link } from 'wouter';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-red">
                <Heart className="w-3.5 h-3.5 text-white fill-white" />
              </div>
              <span className="font-display font-bold text-lg">
                LoveMatch<span className="text-brand-red">Reviews</span>
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Independent reviews and comparisons of the best dating apps. We help you find love faster.
            </p>
          </div>

          {/* Reviews */}
          <div>
            <h4 className="font-body font-bold text-sm uppercase tracking-wider text-white/80 mb-4">Reviews</h4>
            <ul className="space-y-2">
              {[
                { href: '/reviews/eharmony', label: 'eHarmony Review' },
                { href: '/reviews/match', label: 'Match.com Review' },
                { href: '/reviews/bumble', label: 'Bumble Review' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Comparisons */}
          <div>
            <h4 className="font-body font-bold text-sm uppercase tracking-wider text-white/80 mb-4">Comparisons</h4>
            <ul className="space-y-2">
              {[
                { href: '/compare/eharmony-vs-match', label: 'eHarmony vs Match.com' },
                { href: '/compare/eharmony-vs-bumble', label: 'eHarmony vs Bumble' },
                { href: '/compare/match-vs-bumble', label: 'Match.com vs Bumble' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-body font-bold text-sm uppercase tracking-wider text-white/80 mb-4">About</h4>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/methodology', label: 'Our Methodology' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/disclosure', label: 'Affiliate Disclosure' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-white/40 leading-relaxed max-w-3xl">
            <strong className="text-white/60">Affiliate Disclosure:</strong> LoveMatchReviews.com is an independent review site. We may earn a commission when you click links to dating services on our site. This does not affect our editorial independence or the objectivity of our reviews. Our recommendations are based on genuine testing and analysis.
          </p>
          <p className="text-xs text-white/30 mt-3">
            © {new Date().getFullYear()} LoveMatchReviews.com · All rights reserved · Not affiliated with any dating service
          </p>
        </div>
      </div>
    </footer>
  );
}
