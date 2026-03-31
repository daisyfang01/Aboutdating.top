// LoveMatch Reviews — Product Recommendations
// Lifestyle and dating-related products for affiliate monetization

export interface ProductRecommendation {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  affiliateUrl: string;
  image?: string;
  relevantArticles: string[]; // Article slugs where this product should appear
}

export const productRecommendations: ProductRecommendation[] = [
  // First Date Outfits & Fashion
  {
    id: 'mens-casual-blazer',
    name: 'Premium Casual Blazer for Men',
    category: 'First Date Fashion',
    description: 'A versatile navy blazer that works for casual dates or upscale restaurants. Pairs well with jeans or chinos.',
    price: '$89-149',
    affiliateUrl: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=Premium+Casual+Blazer+for+Men',
    relevantArticles: ['first-date-location-ideas', 'dating-tips-first-date', 'first-date-tips-to-impress'],
  },
  {
    id: 'womens-date-dress',
    name: 'Elegant Date Night Dress',
    category: 'First Date Fashion',
    description: 'A flattering, comfortable dress perfect for first dates. Available in multiple colors and sizes.',
    price: '$59-99',
    affiliateUrl: 'https://www.amazon.com/s?k=Elegant+Date+Night+Dress&ref=nb_sb_noss',
    relevantArticles: ['first-date-location-ideas', 'dating-tips-first-date', 'first-date-tips-to-impress'],
  },
  {
    id: 'white-sneakers',
    name: 'Premium White Leather Sneakers',
    category: 'First Date Fashion',
    description: 'Clean, minimalist white sneakers that work for casual coffee dates or outdoor activities.',
    price: '$79-129',
    affiliateUrl: 'https://www.amazon.com/s?k=Premium+White+Leather+Sneakers&ref=nb_sb_noss',
    relevantArticles: ['first-date-location-ideas', 'dating-tips-first-date'],
  },
  {
    id: 'womens-ankle-boots',
    name: 'Stylish Ankle Boots',
    category: 'First Date Fashion',
    description: 'Versatile ankle boots that elevate any casual outfit for a first date.',
    price: '$69-119',
    affiliateUrl: 'https://www.amazon.com/s?k=Stylish+Ankle+Boots&ref=nb_sb_noss',
    relevantArticles: ['first-date-location-ideas', 'dating-tips-first-date'],
  },

  // Fragrances & Grooming
  {
    id: 'mens-cologne-fresh',
    name: 'Fresh Citrus Men\'s Cologne',
    category: 'Fragrances & Grooming',
    description: 'A light, fresh cologne perfect for first dates. Long-lasting and not overpowering.',
    price: '$49-79',
    affiliateUrl: 'https://www.amazon.com/s?k=Fresh+Citrus+Men%27s+Cologne&ref=nb_sb_noss',
    relevantArticles: ['dating-tips-first-date', 'first-date-tips-to-impress', 'dating-profile-optimization-2025'],
  },
  {
    id: 'womens-perfume-floral',
    name: 'Elegant Floral Perfume',
    category: 'Fragrances & Grooming',
    description: 'A sophisticated floral perfume that leaves a lasting impression. Perfect for date night.',
    price: '$59-89',
    affiliateUrl: 'https://www.amazon.com/s?k=Elegant+Floral+Perfume&ref=nb_sb_noss',
    relevantArticles: ['dating-tips-first-date', 'first-date-tips-to-impress'],
  },
  {
    id: 'beard-care-kit',
    name: 'Complete Beard Care Kit',
    category: 'Fragrances & Grooming',
    description: 'Everything you need for a well-groomed beard: oil, balm, and brush. Great for first dates.',
    price: '$39-59',
    affiliateUrl: '#',
    relevantArticles: ['dating-profile-optimization-2025', 'dating-tips-first-date', 'dating-app-photo-tips'],
  },
  {
    id: 'skincare-routine',
    name: 'Men\'s Skincare Routine Set',
    category: 'Fragrances & Grooming',
    description: 'A simple 3-step skincare routine for clear, healthy skin. Perfect before dates.',
    price: '$34-54',
    affiliateUrl: '#',
    relevantArticles: ['dating-profile-optimization-2025', 'dating-app-photo-tips', 'how-to-take-dating-profile-photos'],
  },
  {
    id: 'womens-skincare-set',
    name: 'Women\'s Skincare Essentials',
    category: 'Fragrances & Grooming',
    description: 'A complete skincare set for radiant, glowing skin. Perfect for date preparation.',
    price: '$44-74',
    affiliateUrl: '#',
    relevantArticles: ['dating-profile-optimization-2025', 'dating-app-photo-tips', 'how-to-take-dating-profile-photos'],
  },
  {
    id: 'hair-styling-kit',
    name: 'Professional Hair Styling Kit',
    category: 'Fragrances & Grooming',
    description: 'Everything for perfect hair: pomade, clay, and styling tools. Look your best on dates.',
    price: '$29-49',
    affiliateUrl: '#',
    relevantArticles: ['dating-profile-optimization-2025', 'dating-app-photo-tips', 'dating-tips-first-date'],
  },

  // Gift Ideas for Partners
  {
    id: 'luxury-candle',
    name: 'Luxury Scented Candle',
    category: 'Gift Ideas',
    description: 'A premium scented candle perfect for creating ambiance. Great gift for a new partner.',
    price: '$34-54',
    affiliateUrl: '#',
    relevantArticles: ['first-date-location-ideas', 'dating-tips-first-date', 'dating-after-bad-breakup'],
  },
  {
    id: 'silk-pillowcase',
    name: 'Luxury Silk Pillowcase',
    category: 'Gift Ideas',
    description: 'A premium silk pillowcase for better sleep and skin. A thoughtful gift for someone special.',
    price: '$39-69',
    affiliateUrl: '#',
    relevantArticles: ['dating-tips-first-date', 'dating-after-bad-breakup', 'dating-tips-online-dating'],
  },
  {
    id: 'luxury-bath-set',
    name: 'Luxury Bath & Body Set',
    category: 'Gift Ideas',
    description: 'A beautiful set of bath products. Perfect for pampering your new partner.',
    price: '$44-74',
    affiliateUrl: '#',
    relevantArticles: ['dating-tips-first-date', 'dating-after-bad-breakup'],
  },
  {
    id: 'personalized-jewelry',
    name: 'Personalized Jewelry Box',
    category: 'Gift Ideas',
    description: 'A beautiful personalized jewelry box. A meaningful gift for someone you care about.',
    price: '$49-99',
    affiliateUrl: '#',
    relevantArticles: ['dating-tips-first-date', 'dating-after-bad-breakup', 'dating-tips-online-dating'],
  },
  {
    id: 'luxury-watch',
    name: 'Elegant Minimalist Watch',
    category: 'Gift Ideas',
    description: 'A timeless minimalist watch that works for any occasion. Perfect for a meaningful gift.',
    price: '$99-199',
    affiliateUrl: '#',
    relevantArticles: ['dating-tips-first-date', 'dating-after-bad-breakup'],
  },
  {
    id: 'leather-wallet',
    name: 'Premium Leather Wallet',
    category: 'Gift Ideas',
    description: 'A high-quality leather wallet that lasts. A practical and thoughtful gift.',
    price: '$59-99',
    affiliateUrl: '#',
    relevantArticles: ['dating-tips-first-date', 'dating-after-bad-breakup'],
  },

  // Dating Preparation Products
  {
    id: 'teeth-whitening-kit',
    name: 'Professional Teeth Whitening Kit',
    category: 'Dating Preparation',
    description: 'Get a bright, confident smile before your date. Professional results at home.',
    price: '$29-49',
    affiliateUrl: '#',
    relevantArticles: ['dating-profile-optimization-2025', 'dating-tips-first-date', 'dating-app-photo-tips'],
  },
  {
    id: 'confidence-cologne',
    name: 'Confidence-Boosting Cologne',
    category: 'Dating Preparation',
    description: 'A signature scent that makes you feel confident. Perfect for date preparation.',
    price: '$44-74',
    affiliateUrl: '#',
    relevantArticles: ['dating-tips-first-date', 'dating-profile-optimization-2025'],
  },
  {
    id: 'date-night-planner',
    name: 'Date Night Planner & Journal',
    category: 'Dating Preparation',
    description: 'A beautiful planner to organize your dating life and track your progress.',
    price: '$24-39',
    affiliateUrl: '#',
    relevantArticles: ['dating-tips-first-date', 'first-date-location-ideas', 'dating-tips-online-dating'],
  },
  {
    id: 'conversation-cards',
    name: 'Conversation Starter Cards',
    category: 'Dating Preparation',
    description: 'Fun conversation starter cards to prepare for first dates. Never run out of things to say.',
    price: '$14-24',
    affiliateUrl: '#',
    relevantArticles: ['first-message-dating-apps', 'conversation-starters-dating', 'dating-tips-first-date'],
  },
  {
    id: 'dating-confidence-book',
    name: 'The Dating Confidence Guide',
    category: 'Dating Preparation',
    description: 'A practical guide to building confidence in dating. Backed by psychology and real stories.',
    price: '$16-24',
    affiliateUrl: '#',
    relevantArticles: ['dating-tips-online-dating', 'dating-shy-people', 'dating-introverts-guide'],
  },
  {
    id: 'phone-camera-lens',
    name: 'Professional Phone Camera Lens',
    category: 'Dating Preparation',
    description: 'Take better dating profile photos with a professional phone camera lens.',
    price: '$29-49',
    affiliateUrl: '#',
    relevantArticles: ['dating-app-photo-tips', 'how-to-take-dating-profile-photos', 'dating-profile-optimization-2025'],
  },
  {
    id: 'ring-light',
    name: 'Portable Ring Light for Photos',
    category: 'Dating Preparation',
    description: 'Perfect lighting for flattering dating profile photos. Portable and easy to use.',
    price: '$24-44',
    affiliateUrl: '#',
    relevantArticles: ['dating-app-photo-tips', 'how-to-take-dating-profile-photos', 'dating-profile-optimization-2025'],
  },

  // Relationship & Self-Improvement
  {
    id: 'couples-journal',
    name: 'Couples Connection Journal',
    category: 'Relationship Building',
    description: 'A beautiful journal for couples to deepen their connection. Perfect for new relationships.',
    price: '$24-39',
    affiliateUrl: '#',
    relevantArticles: ['dating-after-bad-breakup', 'dating-tips-online-dating', 'dating-tips-first-date'],
  },
  {
    id: 'relationship-book',
    name: 'The New Rules of Love & Dating',
    category: 'Relationship Building',
    description: 'A modern guide to building healthy, lasting relationships. Based on psychology and real stories.',
    price: '$16-24',
    affiliateUrl: '#',
    relevantArticles: ['dating-tips-online-dating', 'dating-after-bad-breakup', 'red-flags-dating'],
  },
  {
    id: 'meditation-app',
    name: 'Premium Meditation & Mindfulness App',
    category: 'Relationship Building',
    description: 'Reduce dating anxiety and build confidence with guided meditation. Perfect for nervous daters.',
    price: '$9.99/month',
    affiliateUrl: '#',
    relevantArticles: ['dating-with-anxiety', 'dating-shy-people', 'dating-tips-online-dating'],
  },
  {
    id: 'fitness-app',
    name: 'Premium Fitness & Wellness App',
    category: 'Relationship Building',
    description: 'Build confidence through fitness. Feel great before your dates with personalized workouts.',
    price: '$12.99/month',
    affiliateUrl: '#',
    relevantArticles: ['dating-profile-optimization-2025', 'dating-tips-first-date', 'dating-busy-professionals'],
  },

  // Accessories & Lifestyle
  {
    id: 'luxury-sunglasses',
    name: 'Luxury Sunglasses',
    category: 'Accessories',
    description: 'Stylish sunglasses that make you look confident. Perfect for outdoor dates.',
    price: '$79-149',
    affiliateUrl: '#',
    relevantArticles: ['dating-profile-optimization-2025', 'dating-tips-first-date', 'first-date-location-ideas'],
  },
  {
    id: 'leather-messenger-bag',
    name: 'Premium Leather Messenger Bag',
    category: 'Accessories',
    description: 'A versatile leather bag that works for dates or everyday use. Timeless style.',
    price: '$99-199',
    affiliateUrl: '#',
    relevantArticles: ['dating-profile-optimization-2025', 'dating-tips-first-date', 'dating-busy-professionals'],
  },
  {
    id: 'silk-scarf',
    name: 'Luxury Silk Scarf',
    category: 'Accessories',
    description: 'A versatile silk scarf that adds elegance to any outfit. Perfect for date night.',
    price: '$49-89',
    affiliateUrl: '#',
    relevantArticles: ['dating-profile-optimization-2025', 'dating-tips-first-date', 'first-date-location-ideas'],
  },
  {
    id: 'luxury-pen',
    name: 'Premium Fountain Pen',
    category: 'Accessories',
    description: 'A beautiful fountain pen. Perfect for writing love notes or journaling about your dating journey.',
    price: '$39-99',
    affiliateUrl: '#',
    relevantArticles: ['dating-tips-online-dating', 'first-message-dating-apps', 'dating-tips-first-date'],
  },
];

// Helper function to get products for a specific article
export function getProductsForArticle(articleSlug: string): ProductRecommendation[] {
  return productRecommendations.filter((product) =>
    product.relevantArticles.includes(articleSlug)
  );
}
