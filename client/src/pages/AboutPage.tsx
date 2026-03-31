// LoveMatch Reviews — About Us Page
// Design: Editorial Trust — clean, readable content page with brand accents
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, Search, DollarSign, Shield, Star, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-red">
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-sm font-body font-semibold uppercase tracking-widest text-white/60">About Us</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            We're here to solve one simple problem:<br />
            <span className="text-brand-red italic">finding a dating app that actually works.</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            In a world flooded with swipe fatigue, fake profiles, and endless subscriptions, choosing the right platform can feel overwhelming. That's why we built this site — to cut through the noise and help you make smarter, faster decisions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="container max-w-3xl">

          {/* What We Do */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <Search className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">What We Do</h2>
            </div>
            <p className="text-[#4A4A4A] leading-relaxed mb-6 text-base">
              We research, compare, and recommend the best dating apps based on what actually matters to real users. Every app featured on our platform is evaluated using a consistent scoring system, so you can quickly see what fits your goals — whether you're looking for something serious, casual, or somewhere in between.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Star, label: 'Real user experience', desc: 'Hands-on testing and genuine user feedback' },
                { icon: Target, label: 'Match quality & success rates', desc: 'How well the algorithm actually works' },
                { icon: DollarSign, label: 'Pricing and value', desc: 'What you get for what you pay' },
                { icon: Shield, label: 'Safety and privacy standards', desc: 'Data protection and moderation quality' },
                { icon: Search, label: 'Unique features that matter', desc: 'Tools that genuinely improve your experience' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#E8E4DC] shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-brand-red" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-charcoal text-sm">{label}</p>
                    <p className="text-xs text-[#6B6B6B] mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How We Make Money */}
          <section className="mb-16">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💡</span>
                <h2 className="font-display text-2xl font-bold text-charcoal">How We Make Money (Transparency First)</h2>
              </div>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                We're an independent recommendation platform. Some links on this site are affiliate links, which means we may earn a commission if you choose to sign up — at no extra cost to you.
              </p>
              <div className="bg-white rounded-xl border border-amber-200 p-5 mb-4">
                <p className="font-display font-bold text-charcoal text-lg mb-3">👉 Our rankings are not for sale.</p>
                <p className="text-sm text-[#4A4A4A] mb-3">We prioritize:</p>
                <ul className="space-y-2">
                  {['Honest comparisons', 'User-first recommendations', 'Long-term trust over short-term profit'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Why This Matters */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">❤️</span>
              <h2 className="font-display text-2xl font-bold text-charcoal">Why This Matters</h2>
            </div>
            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              Dating today shouldn't feel like a gamble. We believe:
            </p>
            <div className="space-y-4">
              {[
                'The right platform can change your experience completely',
                'Better choices lead to better matches',
                'And better matches lead to real connections',
              ].map((belief, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[#E8E4DC] shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-[#4A4A4A] leading-relaxed pt-1">{belief}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[#4A4A4A] leading-relaxed">
              That's why everything we build is focused on helping you skip the frustration and find what actually works.
            </p>
          </section>

          {/* Our Mission */}
          <section>
            <div className="bg-charcoal text-white rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🚀</span>
                <h2 className="font-display text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">To help millions of people:</p>
              <ul className="space-y-4">
                {[
                  'Avoid wasting time on the wrong apps',
                  'Discover platforms that fit their needs',
                  'And ultimately… find meaningful connections faster',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="w-2.5 h-2.5 text-white fill-white" />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
