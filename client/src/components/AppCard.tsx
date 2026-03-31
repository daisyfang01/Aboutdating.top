// AppCard — Editorial Trust design
// Displays a dating app with rank badge, scores, pros, and CTA

import { Link } from 'wouter';
import { CheckCircle, XCircle, ArrowRight, Award, TrendingUp, DollarSign } from 'lucide-react';
import StarRating from './StarRating';
import type { DatingApp } from '@/lib/data';

interface AppCardProps {
  app: DatingApp;
  featured?: boolean;
}

export default function AppCard({ app, featured = false }: AppCardProps) {
  const badgeColors: Record<string, string> = {
    'editors-choice': 'trust-badge editors-choice',
    'best-value': 'trust-badge best-value',
    'most-popular': 'trust-badge most-popular',
  };

  return (
    <div
      className={`bg-white rounded-lg border transition-all duration-300 hover:shadow-xl ${
        featured
          ? 'border-2 border-brand-red shadow-lg relative'
          : 'border-border shadow-sm hover:-translate-y-0.5'
      }`}
    >
      {/* Featured ribbon */}
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="trust-badge editors-choice text-xs px-3 py-1 shadow-sm">
            ★ #1 Recommended
          </span>
        </div>
      )}

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start gap-4 mb-5">
          {/* Rank badge */}
          <div className={`rank-badge ${app.rank === 1 ? 'gold' : ''} mt-0.5`}>
            {app.rank}
          </div>

          {/* App info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-display font-bold text-xl text-charcoal">{app.name}</h3>
              {app.badge && (
                <span className={badgeColors[app.badge]}>
                  {app.badgeLabel}
                </span>
              )}
            </div>
            <p className="text-sm text-charcoal-light font-body">{app.tagline}</p>
            <p className="text-xs text-charcoal-light mt-1 font-body">
              Best for: <strong className="text-charcoal">{app.bestFor}</strong>
            </p>
          </div>

          {/* Score */}
          <div className="text-right flex-shrink-0">
            <div
              className="text-3xl font-bold text-brand-red"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {app.overallScore}
            </div>
            <div className="text-xs text-charcoal-light font-body">out of 10</div>
            <div className="mt-1">
              <StarRating score={app.overallScore} size="sm" showScore={false} />
            </div>
          </div>
        </div>

        {/* Score bars */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-5">
          {[
            { label: 'Match Quality', score: app.scores.matchQuality },
            { label: 'Ease of Use', score: app.scores.easeOfUse },
            { label: 'Value', score: app.scores.valueForMoney },
            { label: 'Success Rate', score: app.scores.successRate },
          ].map(({ label, score }) => (
            <div key={label}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-body text-charcoal-light">{label}</span>
                <span
                  className="text-xs font-bold text-charcoal"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {score}
                </span>
              </div>
              <div className="rating-bar-track">
                <div
                  className="rating-bar-fill"
                  style={{ width: `${(score / 10) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap gap-3 mb-5 py-4 border-t border-b border-border">
          <div className="flex items-center gap-1.5 text-xs font-body text-charcoal-light">
            <TrendingUp className="w-3.5 h-3.5 text-brand-gold" />
            <span>{app.memberCount} members</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-body text-charcoal-light">
            <DollarSign className="w-3.5 h-3.5 text-brand-gold" />
            <span>From {app.pricing.annual || app.pricing.sixMonth}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-body text-charcoal-light">
            <Award className="w-3.5 h-3.5 text-brand-gold" />
            <span>Ages {app.ageRange}</span>
          </div>
        </div>

        {/* Pros & Cons (top 3 each) */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <p className="text-xs font-bold font-body text-charcoal uppercase tracking-wider mb-2">Pros</p>
            <ul className="space-y-1.5">
              {app.pros.slice(0, 3).map((pro) => (
                <li key={pro} className="flex items-start gap-1.5 text-xs font-body text-charcoal-light">
                  <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold font-body text-charcoal uppercase tracking-wider mb-2">Cons</p>
            <ul className="space-y-1.5">
              {app.cons.slice(0, 3).map((con) => (
                <li key={con} className="flex items-start gap-1.5 text-xs font-body text-charcoal-light">
                  <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Urgency text */}
        {app.urgencyText && (
          <div className="bg-amber-50 border border-amber-200 rounded px-3 py-2 mb-4">
            <p className="text-xs font-body font-semibold text-amber-800 text-center">
              🔥 {app.urgencyText}
            </p>
          </div>
        )}

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={app.affiliateUrl}
            className={`btn-cta flex-1 text-center text-sm ${featured ? 'btn-cta-pulse' : ''}`}
          >
            {app.ctaText} →
          </a>
          <Link
            href={`/reviews/${app.id}`}
            className="flex items-center justify-center gap-1.5 text-sm font-semibold font-body text-brand-red border border-brand-red rounded px-4 py-2.5 hover:bg-red-50 transition-colors no-underline"
          >
            Full Review <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
