// StarRating component — Editorial Trust design
// Renders filled/half/empty stars with optional score label

interface StarRatingProps {
  score: number; // 0–10
  maxScore?: number;
  size?: 'sm' | 'md' | 'lg';
  showScore?: boolean;
  showOutOf?: boolean;
}

export default function StarRating({
  score,
  maxScore = 10,
  size = 'md',
  showScore = true,
  showOutOf = false,
}: StarRatingProps) {
  // Convert score to 5-star scale
  const stars = (score / maxScore) * 5;
  const fullStars = Math.floor(stars);
  const hasHalf = stars - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  const scoreClasses = {
    sm: 'text-sm font-bold',
    md: 'text-base font-bold',
    lg: 'text-xl font-bold',
  };

  return (
    <div className="flex items-center gap-1.5">
      <div className={`flex items-center gap-0.5 ${sizeClasses[size]}`}>
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`full-${i}`} className="star-filled">★</span>
        ))}
        {hasHalf && <span className="star-filled opacity-60">★</span>}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`empty-${i}`} className="star-empty">★</span>
        ))}
      </div>
      {showScore && (
        <span
          className={`${scoreClasses[size]} text-charcoal font-mono`}
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {score.toFixed(1)}
          {showOutOf && <span className="text-charcoal-light font-normal text-sm">/10</span>}
        </span>
      )}
    </div>
  );
}
