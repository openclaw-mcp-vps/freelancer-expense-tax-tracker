export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For Freelancers &amp; Consultants
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Expenses &amp; Maximize Your{" "}
          <span className="text-[#58a6ff]">Tax Deductions</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically categorize freelancer expenses, surface every deduction you qualify for, and get quarterly tax payment reminders — so you keep more of what you earn.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Free Trial — $19/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-medium px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <p className="mt-4 text-xs text-[#8b949e]">No credit card required for trial. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Auto-Categorize</div>
            <p className="text-sm text-[#8b949e]">Rule-based logic sorts every expense into the right tax category instantly.</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Deduction Alerts</div>
            <p className="text-sm text-[#8b949e]">Get notified of deductions you may have missed before filing season.</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Quarterly Reminders</div>
            <p className="text-sm text-[#8b949e]">Never miss an estimated tax deadline with smart calendar reminders.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple, Transparent Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-3">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited expense tracking",
              "Automated tax categorization",
              "Receipt uploads & storage",
              "Quarterly tax reminders",
              "Dashboard analytics",
              "Deduction optimization reports",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does automatic tax categorization work?</h3>
            <p className="text-[#8b949e] text-sm">Our rule-based engine maps each expense to IRS Schedule C categories using merchant names, amounts, and descriptions. You can review and override any categorization at any time.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I upload receipts and invoices?</h3>
            <p className="text-[#8b949e] text-sm">Yes. You can securely upload photos or PDFs of receipts directly to each expense entry. Files are stored encrypted and linked to the relevant transaction for audit-ready records.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">When will I receive quarterly tax reminders?</h3>
            <p className="text-[#8b949e] text-sm">You'll get email reminders 2 weeks and 3 days before each IRS estimated tax deadline (April 15, June 15, September 15, January 15), along with a suggested payment amount based on your tracked income.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        <p>&copy; {new Date().getFullYear()} FreelanceTax. All rights reserved.</p>
      </footer>
    </main>
  );
}
