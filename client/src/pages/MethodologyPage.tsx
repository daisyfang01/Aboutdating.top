// LoveMatch Reviews — Our Methodology Page
// Design: Editorial Trust — clean, structured methodology page
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, BarChart2, Scale, RefreshCw, User, Layers, DollarSign, Shield, Star } from 'lucide-react';

export default function MethodologyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center">
              <BarChart2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-body font-semibold uppercase tracking-widest text-white/60">Transparency</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Our Methodology
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            At LoveMatchReviews, our goal is to provide clear, honest, and useful recommendations to help users choose the right dating platforms. Here's exactly how we do it.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="container max-w-3xl space-y-14">

          {/* How We Evaluate */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <Search className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">How We Evaluate</h2>
            </div>
            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              We review dating apps and services based on several key factors that directly impact your experience and chances of finding a meaningful connection.
            </p>
            <div className="space-y-4">
              {[
                { icon: User, title: 'User Experience', desc: 'Ease of use, interface design, and overall usability — how intuitive and enjoyable the app is to navigate day-to-day.' },
                { icon: Star, title: 'Match Quality', desc: 'Relevance and accuracy of suggested matches — how well the algorithm understands what you\'re looking for and delivers compatible profiles.' },
                { icon: Layers, title: 'Features', desc: 'Unique tools, communication options, and functionality — what sets each platform apart and whether those features genuinely help users connect.' },
                { icon: DollarSign, title: 'Pricing & Value', desc: 'Subscription costs compared to features offered — whether the premium tier is worth the investment relative to the free experience.' },
                { icon: Shield, title: 'Safety & Privacy', desc: 'Data protection, moderation, and user safety measures — how seriously the platform takes the security and wellbeing of its users.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[#E8E4DC] shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="font-body font-bold text-charcoal mb-1">{title}</p>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Process */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <BarChart2 className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">Our Process</h2>
            </div>
            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              Our evaluation process is designed to be thorough, consistent, and reproducible. We apply the same framework to every platform we review.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { step: '01', label: 'Independent research and analysis', desc: 'We conduct our own testing and analysis without relying on platform-provided materials.' },
                { step: '02', label: 'Reviewing publicly available information', desc: 'We examine app store ratings, press coverage, and independent user reviews.' },
                { step: '03', label: 'Comparing features across platforms', desc: 'We benchmark each app against its direct competitors on every scoring dimension.' },
                { step: '04', label: 'Monitoring user feedback and industry trends', desc: 'We track ongoing user sentiment and update our assessments as platforms evolve.' },
              ].map(({ step, label, desc }) => (
                <div key={step} className="p-5 bg-white rounded-xl border border-[#E8E4DC] shadow-sm">
                  <div className="font-display text-3xl font-bold text-brand-red/20 mb-2">{step}</div>
                  <p className="font-body font-semibold text-charcoal text-sm mb-1">{label}</p>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#6B6B6B] italic bg-amber-50 border border-amber-200 rounded-xl p-4">
              We aim to keep our content up to date, but platforms may change their features, pricing, or policies over time. If you notice outdated information, please contact us.
            </p>
          </section>

          {/* Editorial Independence */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <Scale className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">Editorial Independence</h2>
            </div>
            <div className="bg-charcoal text-white rounded-2xl p-8">
              <p className="text-white/80 leading-relaxed mb-4">
                While we may earn commissions through affiliate partnerships, our reviews and rankings are <strong className="text-white">not influenced by compensation</strong>.
              </p>
              <p className="text-white/80 leading-relaxed">
                We prioritize accuracy, relevance, and user value in every recommendation we make. A platform cannot pay to improve its ranking — scores are determined solely by our evaluation criteria.
              </p>
            </div>
          </section>

          {/* Updates */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">Updates</h2>
            </div>
            <p className="text-[#4A4A4A] leading-relaxed">
              We regularly update our content to reflect the latest information and ensure our recommendations remain accurate and helpful. Major reviews are revisited at least quarterly, and we publish updates whenever a platform makes significant changes to its features, pricing, or policies.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
