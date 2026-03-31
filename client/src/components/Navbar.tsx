// LoveMatch Reviews — Navbar
// Design: Editorial Trust — clean top nav with logo, dropdown for reviews, and CTA button

import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';

const reviewLinks = [
  { href: '/reviews/eharmony', label: 'eHarmony Review', emoji: '💑' },
  { href: '/reviews/match', label: 'Match.com Review', emoji: '❤️' },
  { href: '/reviews/bumble', label: 'Bumble Review', emoji: '🐝' },
  { href: '/reviews/hinge', label: 'Hinge Review', emoji: '🎯' },
  { href: '/reviews/tinder', label: 'Tinder Review', emoji: '🔥' },
  { href: '/reviews/okcupid', label: 'OkCupid Review', emoji: '💬' },
  { href: '/reviews/zoosk', label: 'Zoosk Review', emoji: '🚀' },
  { href: '/reviews/coffeemeetsbagel', label: 'Coffee Meets Bagel Review', emoji: '☕' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);
  const [mobileReviewsOpen, setMobileReviewsOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setReviewsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isReviewActive = reviewLinks.some((r) => location === r.href);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-red">
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
            <span
              className="font-display font-bold text-xl text-charcoal"
              style={{ letterSpacing: '-0.02em' }}
            >
              LoveMatch<span className="text-brand-red">Reviews</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={`font-body text-sm font-semibold transition-colors no-underline ${
                location === '/' ? 'text-brand-red' : 'text-charcoal-light hover:text-brand-red'
              }`}
            >
              Home
            </Link>

            {/* Dating Site Reviews dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className={`flex items-center gap-1 font-body text-sm font-semibold transition-colors ${
                  isReviewActive ? 'text-brand-red' : 'text-charcoal-light hover:text-brand-red'
                }`}
                onClick={() => setReviewsOpen((o) => !o)}
                onMouseEnter={() => setReviewsOpen(true)}
              >
                Dating Site Reviews
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${reviewsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {reviewsOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-border rounded-xl shadow-lg py-1.5 z-50"
                  onMouseLeave={() => setReviewsOpen(false)}
                >
                  {reviewLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium no-underline transition-colors ${
                        location === link.href
                          ? 'text-brand-red bg-red-50'
                          : 'text-charcoal hover:text-brand-red hover:bg-red-50'
                      }`}
                      onClick={() => setReviewsOpen(false)}
                    >
                      <span className="text-base leading-none">{link.emoji}</span>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/compare/eharmony-vs-match"
              className={`font-body text-sm font-semibold transition-colors no-underline ${
                location.startsWith('/compare') ? 'text-brand-red' : 'text-charcoal-light hover:text-brand-red'
              }`}
            >
              Comparisons
            </Link>

            <Link
              href="/blog"
              className={`font-body text-sm font-semibold transition-colors no-underline ${
                location.startsWith('/blog') ? 'text-brand-red' : 'text-charcoal-light hover:text-brand-red'
              }`}
            >
              Blog
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a href="#top-picks" className="btn-cta text-sm py-2.5 px-5">
              Find Your Match →
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="container py-4 flex flex-col gap-1">
            <Link
              href="/"
              className={`font-body text-sm font-semibold py-2.5 no-underline ${
                location === '/' ? 'text-brand-red' : 'text-charcoal'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Reviews accordion */}
            <button
              className={`flex items-center justify-between w-full font-body text-sm font-semibold py-2.5 text-left ${
                isReviewActive ? 'text-brand-red' : 'text-charcoal'
              }`}
              onClick={() => setMobileReviewsOpen((o) => !o)}
            >
              Dating Site Reviews
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileReviewsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileReviewsOpen && (
              <div className="pl-3 flex flex-col gap-0.5 border-l-2 border-red-100 ml-1 mb-1">
                {reviewLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2 font-body text-sm py-2 no-underline ${
                      location === link.href ? 'text-brand-red font-semibold' : 'text-charcoal-light'
                    }`}
                    onClick={() => { setMobileOpen(false); setMobileReviewsOpen(false); }}
                  >
                    <span>{link.emoji}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/compare/eharmony-vs-match"
              className={`font-body text-sm font-semibold py-2.5 no-underline ${
                location.startsWith('/compare') ? 'text-brand-red' : 'text-charcoal'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Comparisons
            </Link>

            <Link
              href="/blog"
              className={`font-body text-sm font-semibold py-2.5 no-underline ${
                location.startsWith('/blog') ? 'text-brand-red' : 'text-charcoal'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>

            <a
              href="#top-picks"
              className="btn-cta text-sm mt-2 text-center"
              onClick={() => setMobileOpen(false)}
            >
              Find Your Match →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
