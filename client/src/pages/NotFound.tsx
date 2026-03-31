// LoveMatch Reviews — 404 Not Found
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-brand-red" />
          </div>
          <h1 className="font-display text-4xl font-bold text-charcoal mb-4">
            Page Not Found
          </h1>
          <p className="font-body text-charcoal-light mb-8 leading-relaxed">
            The page you're looking for doesn't exist. But your perfect match is still out there — let us help you find them.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="btn-cta">
              Back to Home →
            </Link>
            <Link href="/reviews/eharmony" className="btn-cta-gold">
              See Top Picks
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
