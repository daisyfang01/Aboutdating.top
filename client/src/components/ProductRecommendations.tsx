// LoveMatch Reviews — Product Recommendations Component
// Displays relevant product suggestions within articles

import { ShoppingBag, ExternalLink } from 'lucide-react';
import { ProductRecommendation } from '@/lib/product-recommendations';

interface ProductRecommendationsProps {
  products: ProductRecommendation[];
  title?: string;
}

export default function ProductRecommendations({ products, title = 'Recommended Products' }: ProductRecommendationsProps) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="my-8 rounded-xl border border-brand-gold/30 bg-gradient-to-br from-brand-gold/5 to-transparent p-6">
      {/* Header */}
      <div className="mb-6 flex items-center gap-2">
        <ShoppingBag className="w-5 h-5 text-brand-red" />
        <h3 className="font-display text-xl font-bold text-charcoal">{title}</h3>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg bg-white p-4 border border-border hover:shadow-md transition-shadow">
            {/* Category Badge */}
            <div className="mb-2">
              <span className="text-xs font-body font-semibold text-brand-red uppercase tracking-wide">
                {product.category}
              </span>
            </div>

            {/* Product Name */}
            <h4 className="font-display font-bold text-charcoal mb-2 text-sm leading-snug">
              {product.name}
            </h4>

            {/* Description */}
            <p className="font-body text-xs text-charcoal-light mb-3 line-clamp-2">
              {product.description}
            </p>

            {/* Price & CTA */}
            <div className="flex items-center justify-between">
              <span className="font-body font-semibold text-charcoal text-sm">
                {product.price}
              </span>
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-red text-white rounded-lg font-body font-semibold text-xs hover:bg-brand-red-light transition-colors"
              >
                Check Price
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="font-body text-xs text-charcoal-light italic">
          💡 <strong>Affiliate Disclosure:</strong> LoveMatch Reviews recommends products we genuinely believe will enhance your dating experience. We may earn a small commission if you purchase through our links, at no extra cost to you.
        </p>
      </div>
    </div>
  );
}
