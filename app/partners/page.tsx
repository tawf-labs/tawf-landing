"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Handshake, Building2, Target, Mail } from "lucide-react"

export default function PartnersPage() {
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
                Partners
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
                Collaborating with organizations to build ethical, Shariah-compliant Web3 infrastructure.
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
                    <Building2 className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                    Our Partners
                  </h2>
                </div>
                <div className="bg-gradient-to-br from-[#FFC700]/10 to-transparent border border-[#FFC700]/20 rounded-xl p-12 text-center">
                  <Handshake className="w-16 h-16 text-[#FFC700] mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                    Building Partnerships
                  </h3>
                  <p className="text-foreground/70 max-w-2xl mx-auto">
                    We're actively establishing partnerships with Islamic organizations, masjids, NGOs, Shariah scholars, and Web3 projects. Check back soon to see our growing network of collaborators.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FFC700]/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                    Partnership Opportunities
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Islamic Organizations
                    </h3>
                    <p className="text-foreground/60">
                      Partner with us to bring transparent, on-chain zakat and sadaqah distribution to your community.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Shariah Scholars
                    </h3>
                    <p className="text-foreground/60">
                      Join our Shariah advisory board to ensure our infrastructure aligns with Islamic principles.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Web3 Projects
                    </h3>
                    <p className="text-foreground/60">
                      Integrate TAWF's Shariah-compliant infrastructure into your blockchain applications.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      NGOs & Charities
                    </h3>
                    <p className="text-foreground/60">
                      Leverage our transparent fund tracking and distribution systems for your charitable work.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FFC700]/20 flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                    Partnership Benefits
                  </h2>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-8 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Technical Integration Support
                    </h3>
                    <p className="text-foreground/60">
                      Access our APIs, SDKs, and technical documentation with dedicated integration support from our team.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Co-Marketing Opportunities
                    </h3>
                    <p className="text-foreground/60">
                      Collaborate on joint marketing initiatives, case studies, and community events to reach wider audiences.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Shariah Compliance Framework
                    </h3>
                    <p className="text-foreground/60">
                      Benefit from our established Shariah compliance processes and advisory board expertise.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Community Access
                    </h3>
                    <p className="text-foreground/60">
                      Connect with our growing community of developers, scholars, and users seeking ethical Web3 solutions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Governance Participation
                    </h3>
                    <p className="text-foreground/60">
                      Strategic partners can participate in ecosystem governance and help shape the future of TAWF.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FFC700]/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                    Become a Partner
                  </h2>
                </div>
                <div className="bg-gradient-to-br from-[#FFC700]/10 to-transparent border border-[#FFC700]/20 rounded-xl p-8">
                  <p className="text-foreground/70 mb-6">
                    We're looking for partners who share our vision of building ethical, transparent, and Shariah-compliant Web3 infrastructure. If you're interested in collaborating, we'd love to hear from you.
                  </p>
                  <div className="space-y-4 text-foreground/70 mb-8">
                    <p>
                      <strong className="text-foreground">Partnership Inquiries:</strong>{" "}
                      <a href="mailto:partnerships@tawf.xyz" className="text-[#FFC700] hover:underline">
                        partnerships@tawf.xyz
                      </a>
                    </p>
                    <p>
                      <strong className="text-foreground">What to include:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Your organization's background and mission</li>
                      <li>Type of partnership you're interested in</li>
                      <li>How you envision collaborating with TAWF</li>
                      <li>Any specific goals or outcomes you'd like to achieve</li>
                    </ul>
                  </div>
                  <a
                    href="mailto:partnerships@tawf.xyz"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFC700] text-black font-semibold rounded-lg hover:bg-[#FFC700]/90 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Us
                  </a>
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
