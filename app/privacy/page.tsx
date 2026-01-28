import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | StockPick26',
  description: 'Privacy policy for StockPick26 - Stock Market Glossary for Beginners',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#1F1F23] bg-[#0A0A0B]/90 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-[#10b981] transition-colors">
            StockPick26
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/glossary" className="text-sm text-[#8B8B90] hover:text-white transition-colors">
              Glossary
            </Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-[#ADADB0]">
            <p className="text-[#8B8B90]">Last updated: January 2026</p>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
              <p>
                StockPick26 (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects minimal information to provide our stock market glossary service. We may collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Usage data (pages visited, time spent on site)</li>
                <li>Device information (browser type, operating system)</li>
                <li>IP address (anonymized for analytics)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Improve our website and content</li>
                <li>Analyze usage patterns</li>
                <li>Ensure website security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies for analytics and advertising purposes.
                Third-party services like Google Analytics and Google AdSense may place cookies on your device.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Third-Party Services</h2>
              <p>We use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Google Analytics</strong> - for website analytics</li>
                <li><strong>Google AdSense</strong> - for displaying advertisements</li>
              </ul>
              <p className="mt-4">
                These services have their own privacy policies. We encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your information.
                However, no internet transmission is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access your personal data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of cookies through your browser settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time.
                We will notify you of any changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mt-8 mb-4">8. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us through our website.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-[#1F1F23]">
            <Link
              href="/"
              className="text-[#10b981] hover:text-[#34d399] text-sm font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1F1F23] bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#6B6B70] text-[11px]">
            <p>StockPick26 - Stock Market Glossary for Beginners</p>
            <div className="flex items-center gap-4">
              <Link href="/glossary" className="hover:text-[#10b981] transition-colors">Glossary</Link>
              <Link href="/privacy" className="hover:text-[#10b981] transition-colors">Privacy Policy</Link>
              <Link href="/about" className="hover:text-[#10b981] transition-colors">About</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
