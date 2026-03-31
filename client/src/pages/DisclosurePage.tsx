// LoveMatch Reviews — Affiliate Disclosure Page
// Design: Editorial Trust — clean, transparent disclosure page
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DollarSign, Scale, Link2, Megaphone, CheckCircle } from 'lucide-react';

export default function DisclosurePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-body font-semibold uppercase tracking-widest text-white/60">Legal</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            Affiliate Disclosure
          </h1>
          <p className="text-white/50 text-sm">Last updated: March 2026</p>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mt-4">
            LoveMatchReviews participates in affiliate marketing programs. We believe in full transparency about how we operate and how we earn revenue.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="container max-w-3xl space-y-12">

          {/* What This Means */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">What This Means</h2>
            </div>
            <p className="text-[#4A4A4A] leading-relaxed mb-6">
              Some links on this site are affiliate links. When you click on these links and take an action (such as signing up for a dating app), we may receive a commission from the platform. Here's what you need to know:
            </p>
            <div className="space-y-4">
              {[
                { icon: CheckCircle, text: 'Some links on this site are affiliate links', color: 'text-green-600', bg: 'bg-green-50 border-green-200' },
                { icon: CheckCircle, text: 'We may receive compensation if you take action through those links', color: 'text-green-600', bg: 'bg-green-50 border-green-200' },
                { icon: CheckCircle, text: 'There is no additional cost to you — affiliate commissions are paid by the platform, not by you', color: 'text-green-600', bg: 'bg-green-50 border-green-200' },
              ].map(({ icon: Icon, text, color, bg }) => (
                <div key={text} className={`flex items-start gap-4 p-4 rounded-xl border ${bg}`}>
                  <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${color}`} />
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Commitment */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <Scale className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">Our Commitment</h2>
            </div>
            <div className="bg-charcoal text-white rounded-2xl p-8">
              <p className="text-white/80 leading-relaxed mb-6">
                Our recommendations are based on independent research and evaluation. We do not accept payment in exchange for positive reviews or rankings. Our goal is to provide honest, useful, and unbiased information.
              </p>
              <div className="space-y-3">
                {[
                  'Rankings are determined solely by our evaluation criteria — not by affiliate relationships',
                  'We apply the same scoring framework to every platform, regardless of commission rates',
                  'A platform cannot pay to improve its score or ranking on our site',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Third-Party Responsibility */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <Link2 className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">Third-Party Responsibility</h2>
            </div>
            <div className="p-5 bg-white rounded-xl border border-[#E8E4DC] shadow-sm">
              <p className="text-[#4A4A4A] leading-relaxed">
                When you click on an affiliate link, you will be redirected to a third-party website. We are not responsible for the services, policies, pricing, or content of those platforms. We encourage you to review each platform's own terms of service and privacy policy before signing up.
              </p>
            </div>
          </section>

          {/* Transparency */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <Megaphone className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">Transparency</h2>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                We believe in full transparency and aim to clearly disclose our affiliate relationships to maintain trust with our users. This disclosure is provided in accordance with the FTC's guidelines on endorsements and testimonials.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed">
                If you have any questions about our affiliate relationships or how we earn revenue, please don't hesitate to contact us at{' '}
                <a href="mailto:contact@aboutdating.top" className="text-brand-red font-semibold hover:underline">
                  contact@aboutdating.top
                </a>.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
