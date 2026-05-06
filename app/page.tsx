export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Shopify Performance
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Find slow Shopify theme code{" "}
          <span className="text-[#58a6ff]">killing your conversions</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste your store URL and get a full performance audit in seconds — unused CSS/JS, render-blocking resources, and exact fixes ranked by impact.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Scanning — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No Shopify app install required.</p>

        {/* Social proof bar */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl p-6 text-center">
          <div>
            <p className="text-2xl font-bold text-white">2.4s</p>
            <p className="text-xs text-[#8b949e] mt-1">Avg LCP improvement</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">38%</p>
            <p className="text-xs text-[#8b949e] mt-1">Unused CSS removed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">+12%</p>
            <p className="text-xs text-[#8b949e] mt-1">Avg conversion lift</p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-xl font-bold text-white mb-6 text-center">What the scanner checks</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ["Lighthouse Audit", "Core Web Vitals, LCP, CLS, FID scored against Shopify benchmarks."],
            ["Unused CSS & JS", "Detects dead code bloating your theme and slowing parse time."],
            ["Render-Blocking Resources", "Flags scripts and stylesheets delaying first paint."],
            ["Image Optimization", "Finds uncompressed, oversized, or missing lazy-loaded images."],
            ["Third-Party Scripts", "Scores each app/pixel by its performance cost."],
            ["Fix Recommendations", "Prioritized action list with exact file names and line guidance."],
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <p className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</p>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-xl font-bold text-white mb-6 text-center">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              "Unlimited store scans",
              "Full Lighthouse + static analysis",
              "Unused CSS/JS detection",
              "Third-party script scoring",
              "Prioritized fix recommendations",
              "Scan history & diff reports",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-xl font-bold text-white mb-6 text-center">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Do I need to install a Shopify app?",
              "No. You just paste your store URL. The scanner runs externally using Lighthouse and public asset analysis — no app install or API keys needed to get started.",
            ],
            [
              "How is this different from Google PageSpeed Insights?",
              "We go beyond generic scores. The scanner identifies specific Shopify theme files, app scripts, and liquid-rendered elements responsible for slowdowns, with Shopify-specific fix guidance.",
            ],
            [
              "Can I scan competitor stores?",
              "Yes — any publicly accessible Shopify storefront can be scanned. Great for benchmarking your store against top performers in your niche.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white text-sm mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Shopify Theme Performance Scanner. All rights reserved.
      </footer>
    </main>
  );
}
