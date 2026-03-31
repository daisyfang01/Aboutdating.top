// LoveMatch Reviews — Privacy Policy Page
// Design: Editorial Trust — clean, legal-style content page
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Cookie, Link2, BarChart2, Lock, User, Mail } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Navbar />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-body font-semibold uppercase tracking-widest text-white/60">Legal</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm">Last updated: March 2026</p>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mt-4">
            At LoveMatchReviews (datingrev-rcwgtatc.manus.space), we respect your privacy and are committed to protecting your personal information.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="container max-w-3xl space-y-12">

          {/* Information We Collect */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <User className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">Information We Collect</h2>
            </div>
            <p className="text-[#4A4A4A] leading-relaxed mb-4">
              We may collect the following types of information when you visit our site:
            </p>
            <ul className="space-y-3 mb-4">
              {[
                'Basic usage data (such as pages visited, time spent on site)',
                'Device and browser information',
                'Cookies and tracking data',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#4A4A4A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-800">
                <strong>Important:</strong> We do <strong>not</strong> collect sensitive personal information unless you voluntarily provide it (e.g., contacting us via email).
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <Cookie className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">Cookies</h2>
            </div>
            <p className="text-[#4A4A4A] leading-relaxed mb-4">We use cookies to:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {[
                { label: 'Improve user experience', desc: 'Remember your preferences and settings' },
                { label: 'Analyze website performance', desc: 'Understand which content is most useful' },
                { label: 'Understand visitor behavior', desc: 'Identify how users navigate the site' },
              ].map(({ label, desc }) => (
                <div key={label} className="p-4 bg-white rounded-xl border border-[#E8E4DC] shadow-sm text-center">
                  <p className="font-body font-semibold text-charcoal text-sm mb-1">{label}</p>
                  <p className="text-xs text-[#6B6B6B]">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#6B6B6B] italic">
              You can disable cookies through your browser settings at any time. Note that some features of the site may not function properly if cookies are disabled.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <Link2 className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">Third-Party Links</h2>
            </div>
            <div className="p-5 bg-white rounded-xl border border-[#E8E4DC] shadow-sm">
              <p className="text-[#4A4A4A] leading-relaxed">
                Our website contains links to third-party websites (including dating platforms). We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policy of any third-party site you visit through a link on our platform.
              </p>
            </div>
          </section>

          {/* Analytics */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <BarChart2 className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">Analytics</h2>
            </div>
            <p className="text-[#4A4A4A] leading-relaxed">
              We may use analytics tools (such as traffic analysis services) to better understand how visitors interact with our site. This data is used in aggregate form and is not linked to individual identities. Analytics data helps us improve the quality and relevance of our content.
            </p>
          </section>

          {/* Data Protection */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">Data Protection</h2>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-[#4A4A4A] leading-relaxed">
                We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security, and we encourage you to take precautions when sharing personal information online.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <User className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">Your Rights</h2>
            </div>
            <p className="text-[#4A4A4A] leading-relaxed mb-4">
              Depending on your location, you may have rights regarding your personal data, including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { right: 'Access', desc: 'Request a copy of the data we hold about you' },
                { right: 'Correction', desc: 'Ask us to correct inaccurate information' },
                { right: 'Deletion', desc: 'Request that we delete your personal data' },
              ].map(({ right, desc }) => (
                <div key={right} className="p-4 bg-white rounded-xl border border-[#E8E4DC] shadow-sm text-center">
                  <p className="font-display font-bold text-brand-red text-lg mb-1">{right}</p>
                  <p className="text-xs text-[#6B6B6B]">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-brand-red" />
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal">Contact</h2>
            </div>
            <div className="bg-charcoal text-white rounded-2xl p-8">
              <p className="text-white/70 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your data rights, you can contact us at:
              </p>
              <a
                href="mailto:contact@aboutdating.top"
                className="inline-flex items-center gap-2 bg-brand-red text-white px-5 py-3 rounded-lg font-body font-semibold text-sm hover:bg-red-700 transition-colors no-underline"
              >
                <Mail className="w-4 h-4" />
                contact@aboutdating.top
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
