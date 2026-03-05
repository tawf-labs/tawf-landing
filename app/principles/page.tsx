"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, Scale, Users, GitBranch } from "lucide-react"
import Link from "next/link"

export default function PrinciplesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Textures */}
      <div className="landing-background">
        <div className="noise-overlay" />
        <div className="gold-grid-overlay" />
      </div>

      <Header />

      <main className="relative z-10 bg-black/90 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-balance leading-tight bg-gradient-to-r from-white to-[#ffe38a] bg-clip-text text-transparent mb-6">
                Principles
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
                The Islamic economic foundations that inform our approach to building value-aligned decentralized systems.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  href="/#about"
                  className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-foreground transition-colors text-sm"
                >
                  ← Back to About
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="relative py-16 bg-black/75">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-6">
                Why Islamic Economic Principles?
              </h2>
              <div className="space-y-4 text-foreground/70 text-base sm:text-lg leading-relaxed">
                <p>
                  Islamic economics offers a sophisticated framework for value-aligned financial systems, one that has evolved over 1,400 years of scholarship and practice. Its core concerns, risk-sharing, asset-backing, wealth circulation, and ethical governance, align naturally with the ideals of the broader Web3 movement.
                </p>
                <p>
                  At TAWF, we don't merely draw inspiration. We formalize these principles into programmable infrastructure, creating systems that can be verifiably compliant while remaining accessible to anyone seeking ethical alternatives to extractive financial models.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Maqasid Section */}
        <section className="relative py-16 bg-black/75">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#FFC700]/20 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[#FFC700]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                  Maqasid al-Shariah
                </h2>
              </div>
              <p className="text-foreground/60 text-sm mb-6">The Higher Objectives of Islamic Law</p>

              <div className="space-y-6">
                <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">
                  The <em>Maqasid</em> (higher objectives) provide the teleological framework for Islamic ethics. They articulate what Islamic law seeks to preserve: faith, life, intellect, lineage, and, critically for our work, <strong>property and wealth</strong>.
                </p>

                <div className="bg-gradient-to-br from-[#FFC700]/10 to-transparent border border-[#FFC700]/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Preservation of Wealth (Hifz al-Mal)</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    Unlike systems that treat wealth as an end in itself, Islamic economics views wealth as a means, a resource to be circulated for social benefit. The preservation of wealth means:
                  </p>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFC700] mt-1">•</span>
                      <span><strong>Protection from erosion:</strong> Wealth should not be depleted through interest (riba), gambling (maysir), or excessive risk (gharar)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFC700] mt-1">•</span>
                      <span><strong>Circulation over concentration:</strong> Wealth must flow through the economy, not accumulate in stagnant pools (Qur'an 59:7)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#FFC700] mt-1">•</span>
                      <span><strong>Rights of others:</strong> Wealth carries obligations, including zakat (mandatory almsgiving) and the rights of the poor</span>
                    </li>
                  </ul>
                </div>

                <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">
                  Our infrastructure encodes these objectives: asset-backed contracts prevent fictitious value, zakat protocols enable obligatory distribution, and governance mechanisms ensure community oversight.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Economic Principles Section */}
        <section className="relative py-16 bg-black/75">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#FFC700]/20 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-[#FFC700]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                  Economic Principles
                </h2>
              </div>
              <p className="text-foreground/60 text-sm mb-6">From Classical Concepts to Smart Contracts</p>

              <div className="space-y-8">
                {/* Risk-Sharing */}
                <div className="border-l-2 border-[#FFC700] pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Risk-Sharing (Mudarabah)</h3>
                  <p className="text-foreground/70 text-base leading-relaxed mb-3">
                    Islamic finance prohibits interest-based exploitation in favor of risk-sharing partnerships. Investors provide capital; entrepreneurs provide effort. Profits are shared by agreement; losses are borne by the capital provider (unless due to negligence).
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 text-sm">
                    <span className="text-[#FFC700] font-semibold">On-chain implementation:</span> Revenue-sharing smart contracts that distribute returns proportionally without fixed interest obligations.
                  </div>
                </div>

                {/* Asset-Backing */}
                <div className="border-l-2 border-[#FFC700] pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Asset-Backing (Real Economic Activity)</h3>
                  <p className="text-foreground/70 text-base leading-relaxed mb-3">
                    Financial transactions must be tethered to real economic assets. Speculation on standalone financial instruments, detached from underlying value, is discouraged. Money is a medium of exchange, not a commodity to be traded for profit.
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 text-sm">
                    <span className="text-[#FFC700] font-semibold">On-chain implementation:</span> Asset verification protocols (e.g., qrbn.tawf.xyz) that tether digital transactions to physical assets via auditable proofs.
                  </div>
                </div>

                {/* Prohibition of Riba */}
                <div className="border-l-2 border-[#FFC700] pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Prohibition of Riba (Usury/Interest)</h3>
                  <p className="text-foreground/70 text-base leading-relaxed mb-3">
                    Riba refers to any predetermined, guaranteed return on a loan. It creates asymmetry: the lender profits regardless of outcome, while the borrower bears all risk. This leads to wealth concentration and systemic fragility.
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 text-sm">
                    <span className="text-[#FFC700] font-semibold">On-chain implementation:</span> Interest-free lending protocols with collateralization and late fees instead of compounding interest.
                  </div>
                </div>

                {/* Wealth Circulation */}
                <div className="border-l-2 border-[#FFC700] pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Wealth Circulation (Zakat)</h3>
                  <p className="text-foreground/70 text-base leading-relaxed mb-3">
                    Zakat is the obligatory 2.5% annual wealth tax on eligible assets. It is not charity, it is a right of the poor and a mechanism for redistributive justice. The Qur'an explicitly connects prayer (preservation of faith) with zakat (preservation of wealth).
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 text-sm">
                    <span className="text-[#FFC700] font-semibold">On-chain implementation:</span> zkt.tawf.xyz enables calculation, verification, and distribution of zakat with privacy-preserving proofs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governance Tradition Section */}
        <section className="relative py-16 bg-black/75">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#FFC700]/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#FFC700]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                  Governance Tradition
                </h2>
              </div>
              <p className="text-foreground/60 text-sm mb-6">Shura, Hisbah, and Institutional Oversight</p>

              <div className="space-y-8">
                {/* Shura */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Shura (Consultative Governance)</h3>
                  <p className="text-foreground/70 text-base leading-relaxed mb-4">
                    <em>Shura</em> denotes consultative decision-making, the idea that those affected by decisions should have a voice in shaping them. The Qur'an advises believers to conduct their affairs "through consultation among themselves" (42:38).
                  </p>
                  <p className="text-foreground/70 text-base leading-relaxed">
                    Our Community DAO operationalizes shura: open proposal viewing, transparent voting, and DID-based credentials ensure inclusive governance.
                  </p>
                </div>

                {/* Hisbah */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Hisbah (Accountability Oversight)</h3>
                  <p className="text-foreground/70 text-base leading-relaxed mb-4">
                    <em>Hisbah</em> is the Islamic institution of public accountability, a mechanism to "enforce good and forbid wrong" (amr bil-ma'ruf wa nahy anil-munkar). Historically, hisbah officials inspected markets, verified standards, and ensured compliance with Islamic norms.
                  </p>
                  <p className="text-foreground/70 text-base leading-relaxed">
                    Our Independent Sharia Council functions as a modern hisbah layer: scholars review governance outcomes for Sharia compliance, with zero-knowledge proofs protecting their identities.
                  </p>
                </div>

                {/* Balance */}
                <div className="bg-gradient-to-br from-[#FFC700]/10 to-transparent border border-[#FFC700]/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Transparency + Privacy</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Islamic governance values both transparency (public accountability) and privacy (protection from harm). Our dual-layer system balances these: community governance is fully transparent, while jurisprudential oversight uses zero-knowledge proofs to protect scholars who may face retaliation for unpopular but principled positions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* From Principles to Protocol Section */}
        <section className="relative py-16 bg-black/75">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#FFC700]/20 flex items-center justify-center">
                  <GitBranch className="w-6 h-6 text-[#FFC700]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                  From Principles to Protocol
                </h2>
              </div>
              <p className="text-foreground/60 text-sm mb-6">How Classical Concepts Become Programmable Systems</p>

              <div className="space-y-6">
                <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">
                  Formalizing Islamic economic principles in code requires translating legal concepts into computational constraints. This is not automated, it requires jurisprudential review at each step.
                </p>

                <div className="space-y-4">
                  <div className="bg-black/50 rounded-lg p-5 border border-white/10">
                    <h4 className="font-semibold text-foreground mb-2">1. Jurisprudential Analysis</h4>
                    <p className="text-foreground/60 text-sm">
                      Islamic scholars analyze the economic principle and identify the essential constraints (e.g., what makes a transaction Sharia-compliant?)
                    </p>
                  </div>

                  <div className="bg-black/50 rounded-lg p-5 border border-white/10">
                    <h4 className="font-semibold text-foreground mb-2">2. Computational Formalization</h4>
                    <p className="text-foreground/60 text-sm">
                      Engineers and scholars collaborate to encode these constraints as smart contract logic (e.g., asset verification, distribution formulas)
                    </p>
                  </div>

                  <div className="bg-black/50 rounded-lg p-5 border border-white/10">
                    <h4 className="font-semibold text-foreground mb-2">3. Zero-Knowledge Attestation</h4>
                    <p className="text-foreground/60 text-sm">
                      Privacy-preserving proofs allow users to demonstrate compliance without revealing sensitive financial data
                    </p>
                  </div>

                  <div className="bg-black/50 rounded-lg p-5 border border-white/10">
                    <h4 className="font-semibold text-foreground mb-2">4. Ongoing Governance</h4>
                    <p className="text-foreground/60 text-sm">
                      The Independent Sharia Council can veto decisions that violate encoded principles, ensuring the system remains aligned as it evolves
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-[#FFC700]/10 to-transparent border border-[#FFC700]/20">
                  <p className="text-sm text-foreground/70 italic">
                    "Our approach is not to automate Islamic law, that would reduce centuries of scholarship to rigid code. Rather, we create infrastructure that <strong>enables</strong> Islamic law to be practiced in a digital context, with human jurists at the center of the governance loop."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 bg-black/75">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-6">
                Explore Our Applications
              </h2>
              <p className="text-foreground/70 text-base sm:text-lg mb-8">
                See how these principles translate into working decentralized systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#dapps"
                  className="px-6 py-3 rounded-full bg-[#FFC700] text-black font-semibold hover:bg-[#ffe38a] transition-colors"
                >
                  View Applications
                </Link>
                <Link
                  href="/#governance"
                  className="px-6 py-3 rounded-full border border-white/20 text-foreground hover:bg-white/10 transition-colors"
                >
                  Learn About Governance
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
