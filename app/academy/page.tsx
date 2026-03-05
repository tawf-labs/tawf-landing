"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraduationCap, BookOpen, Video, FileText, Award } from "lucide-react"

export default function AcademyPage() {
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
                TAWF Academy
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
                Learn about Islamic finance, Web3 technology, and building Shariah-compliant decentralized systems.
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
                    <GraduationCap className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                    Learning Paths
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Islamic Finance Fundamentals
                    </h3>
                    <p className="text-foreground/60 text-sm mb-4">
                      Understand the core principles of Islamic economics, including riba, gharar, maysir, and asset-backed financing.
                    </p>
                    <span className="text-[#FFC700] text-sm">Coming Soon</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Web3 for Beginners
                    </h3>
                    <p className="text-foreground/60 text-sm mb-4">
                      Learn blockchain basics, smart contracts, wallets, and how decentralized systems work.
                    </p>
                    <span className="text-[#FFC700] text-sm">Coming Soon</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Shariah-Compliant DeFi
                    </h3>
                    <p className="text-foreground/60 text-sm mb-4">
                      Explore how to build and use decentralized finance applications that align with Islamic principles.
                    </p>
                    <span className="text-[#FFC700] text-sm">Coming Soon</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Zero-Knowledge Proofs
                    </h3>
                    <p className="text-foreground/60 text-sm mb-4">
                      Deep dive into ZK technology for privacy-preserving verification and compliance.
                    </p>
                    <span className="text-[#FFC700] text-sm">Coming Soon</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FFC700]/20 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                    Course Formats
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                    <Video className="w-10 h-10 text-[#FFC700] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Video Tutorials
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      Step-by-step video lessons with practical examples
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                    <FileText className="w-10 h-10 text-[#FFC700] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Written Guides
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      Comprehensive articles and documentation
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                    <Award className="w-10 h-10 text-[#FFC700] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Certifications
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      Earn certificates upon course completion
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FFC700]/20 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                    Featured Topics
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Understanding Zakat in the Digital Age
                    </h3>
                    <p className="text-foreground/60 text-sm mb-3">
                      Learn how to calculate zakat on cryptocurrency holdings and use blockchain for transparent distribution.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-foreground/50">
                      <span>📚 Beginner</span>
                      <span>⏱️ 30 min</span>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Smart Contracts and Shariah Compliance
                    </h3>
                    <p className="text-foreground/60 text-sm mb-3">
                      Explore how smart contracts can enforce Islamic principles and ensure automated compliance.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-foreground/50">
                      <span>📚 Intermediate</span>
                      <span>⏱️ 45 min</span>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Building Privacy-Preserving Islamic Finance Apps
                    </h3>
                    <p className="text-foreground/60 text-sm mb-3">
                      Technical guide to implementing zero-knowledge proofs for private yet verifiable transactions.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-foreground/50">
                      <span>📚 Advanced</span>
                      <span>⏱️ 90 min</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FFC700]/10 to-transparent border border-[#FFC700]/20 rounded-xl p-12 text-center">
                <GraduationCap className="w-20 h-20 text-[#FFC700] mx-auto mb-6" />
                <h2 className="text-3xl font-display font-semibold text-foreground mb-4">
                  Launching Soon
                </h2>
                <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
                  We're developing comprehensive educational content to help you understand and build with TAWF's Shariah-compliant infrastructure.
                </p>
                <div className="bg-black/50 border border-white/10 rounded-lg p-6 max-w-md mx-auto">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Get Early Access
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4">
                    Be notified when courses launch and get exclusive early access.
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
                      Notify Me
                    </button>
                  </div>
                  <p className="text-foreground/40 text-xs mt-3">
                    Notification feature coming soon
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
