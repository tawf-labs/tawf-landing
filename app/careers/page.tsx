"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Briefcase, Users, Rocket, Mail } from "lucide-react"

export default function CareersPage() {
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
                Careers
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
                Join us in building the future of value-aligned decentralized systems.
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
                    <Rocket className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                    Why Join TAWF?
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Purpose-Driven Work
                    </h3>
                    <p className="text-foreground/70">
                      Build technology that aligns with Islamic values and creates real-world impact for communities worldwide.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Cutting-Edge Technology
                    </h3>
                    <p className="text-foreground/70">
                      Work with zero-knowledge proofs, smart contracts, and decentralized systems at the forefront of Web3.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Global Impact
                    </h3>
                    <p className="text-foreground/70">
                      Contribute to infrastructure that serves millions of Muslims seeking ethical financial alternatives.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Collaborative Culture
                    </h3>
                    <p className="text-foreground/70">
                      Join a diverse team of engineers, researchers, and Islamic scholars working together.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FFC700]/20 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                    Open Positions
                  </h2>
                </div>
                <div className="bg-gradient-to-br from-[#FFC700]/10 to-transparent border border-[#FFC700]/20 rounded-xl p-12 text-center">
                  <Users className="w-16 h-16 text-[#FFC700] mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                    No Open Positions Yet
                  </h3>
                  <p className="text-foreground/70 max-w-2xl mx-auto">
                    We're currently building our core team. Check back soon for opportunities in engineering, research, design, and community management.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FFC700]/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                    How to Apply
                  </h2>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                  <p className="text-foreground/70 mb-6">
                    Even if there are no open positions that match your skills, we're always interested in hearing from talented individuals who are passionate about our mission.
                  </p>
                  <div className="space-y-4 text-foreground/70">
                    <p>
                      <strong className="text-foreground">For general inquiries:</strong> Send your resume and a brief introduction to{" "}
                      <a href="mailto:careers@tawf.xyz" className="text-[#FFC700] hover:underline">careers@tawf.xyz</a>
                    </p>
                    <p>
                      <strong className="text-foreground">What to include:</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Your resume or CV</li>
                      <li>A brief cover letter explaining your interest in TAWF</li>
                      <li>Links to your portfolio, GitHub, or relevant work</li>
                      <li>Any questions you have about working with us</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FFC700]/5 to-transparent border border-[#FFC700]/10 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Stay Updated
                </h3>
                <p className="text-foreground/70 mb-4">
                  Follow us on social media to be the first to know about new job openings and company updates.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/tawfprotocol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFC700] hover:underline"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com/company/tawf-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFC700] hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://discord.gg/s7K59wE4qc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFC700] hover:underline"
                  >
                    Discord
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
