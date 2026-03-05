"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, Calendar } from "lucide-react"

export default function BlogPage() {
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
                Blog
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
                Insights on Islamic finance, Web3 technology, and building value-aligned decentralized systems.
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-16 bg-black/75">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
            <div className="mx-auto max-w-4xl">
              
              <div className="bg-gradient-to-br from-[#FFC700]/10 to-transparent border border-[#FFC700]/20 rounded-xl p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-[#FFC700]/20 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-[#FFC700]" />
                </div>
                <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
                  Coming Soon
                </h2>
                <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
                  We're preparing thoughtful content on Islamic economic principles, zero-knowledge proofs, Shariah-compliant DeFi, and the future of faith-aligned technology.
                </p>
                
                <div className="bg-black/50 border border-white/10 rounded-lg p-6 max-w-md mx-auto">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Get Notified
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4">
                    Subscribe to receive updates when we publish new articles.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-[#FFC700]/50"
                      disabled
                    />
                    <button
                      className="px-6 py-2 bg-[#FFC700] text-black font-semibold rounded-lg hover:bg-[#FFC700]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-foreground/40 text-xs mt-3">
                    Subscription feature coming soon
                  </p>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <Calendar className="w-8 h-8 text-[#FFC700] mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Regular Updates
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    Weekly articles on Islamic finance and Web3 innovation
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <BookOpen className="w-8 h-8 text-[#FFC700] mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Deep Dives
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    Technical explorations of ZK proofs and smart contracts
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <BookOpen className="w-8 h-8 text-[#FFC700] mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Case Studies
                  </h3>
                  <p className="text-foreground/60 text-sm">
                    Real-world applications of Shariah-compliant systems
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
