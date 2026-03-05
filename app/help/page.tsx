"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HelpCircle, MessageCircle, BookOpen, Mail } from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  return (
    <div className="relative min-h-screen">
      <div className="landing-background">
        <div className="noise-overlay" />
        <div className="gold-grid-overlay" />
      </div>

      <Header />

      <main className="relative z-10 bg-black/90 min-h-screen">
        <section className="relative py-20 sm:py-28">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-balance leading-tight bg-gradient-to-r from-white to-[#ffe38a] bg-clip-text text-transparent mb-6">
                Help Center
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
                Find answers to common questions and get support for TAWF services.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-16 bg-black/75">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
            <div className="mx-auto max-w-4xl space-y-16">
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FFC700]/20 flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Getting Started
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      Learn how to connect your wallet, navigate the platform, and start using TAWF services.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Zakat & Donations
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      Understand how to calculate zakat, make donations, and track your charitable giving.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Shariah Compliance
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      Learn about our Shariah compliance framework and how we ensure Islamic principles.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Security & Privacy
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      Understand how we protect your data and ensure transaction security with ZK proofs.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Governance
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      Learn how to participate in governance, submit proposals, and vote on decisions.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Technical Support
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      Troubleshoot common issues with wallet connections, transactions, and platform features.
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-foreground/60 text-sm">
                    Detailed FAQ content coming soon
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FFC700]/20 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                    Documentation
                  </h2>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                  <p className="text-foreground/70 mb-6">
                    For detailed technical documentation, integration guides, and API references, visit our documentation portal.
                  </p>
                  <Link
                    href="/docs"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFC700] text-black font-semibold rounded-lg hover:bg-[#FFC700]/90 transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    View Documentation
                  </Link>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FFC700]/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                    Contact Support
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <Mail className="w-8 h-8 text-[#FFC700] mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Email Support
                    </h3>
                    <p className="text-foreground/60 text-sm mb-4">
                      Get help via email. We typically respond within 24-48 hours.
                    </p>
                    <a
                      href="mailto:support@tawf.xyz"
                      className="text-[#FFC700] hover:underline"
                    >
                      support@tawf.xyz
                    </a>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <MessageCircle className="w-8 h-8 text-[#FFC700] mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Community Support
                    </h3>
                    <p className="text-foreground/60 text-sm mb-4">
                      Join our Discord or Telegram for community help and discussions.
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://discord.gg/s7K59wE4qc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFC700] hover:underline"
                      >
                        Discord
                      </a>
                      <a
                        href="https://t.me/tawf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFC700] hover:underline"
                      >
                        Telegram
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FFC700]/10 to-transparent border border-[#FFC700]/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Can't Find What You're Looking For?
                </h3>
                <p className="text-foreground/70 mb-4">
                  Our help center is continuously growing. If you can't find the answer to your question, please reach out to our support team directly.
                </p>
                <a
                  href="mailto:support@tawf.xyz"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-foreground rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Contact Support
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
