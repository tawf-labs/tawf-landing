"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, MessageCircle, Github, Twitter, Send, Heart } from "lucide-react"

export default function CommunityPage() {
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
                Community
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
                Join a global community building the future of value-aligned decentralized systems.
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
                    <Users className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                    Join Our Community
                  </h2>
                </div>
                <p className="text-foreground/70 text-lg mb-8">
                  Connect with developers, researchers, Islamic scholars, and community members who share a vision for ethical, Shariah-compliant Web3 infrastructure.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://discord.gg/s7K59wE4qc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors group"
                  >
                    <MessageCircle className="w-10 h-10 text-[#FFC700] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Discord
                    </h3>
                    <p className="text-foreground/60 text-sm mb-4">
                      Join our Discord server for real-time discussions, support, and community events.
                    </p>
                    <span className="text-[#FFC700] text-sm font-semibold">
                      Join Discord →
                    </span>
                  </a>

                  <a
                    href="https://t.me/tawf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors group"
                  >
                    <Send className="w-10 h-10 text-[#FFC700] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Telegram
                    </h3>
                    <p className="text-foreground/60 text-sm mb-4">
                      Connect with the community on Telegram for announcements and quick discussions.
                    </p>
                    <span className="text-[#FFC700] text-sm font-semibold">
                      Join Telegram →
                    </span>
                  </a>

                  <a
                    href="https://x.com/tawfprotocol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors group"
                  >
                    <Twitter className="w-10 h-10 text-[#FFC700] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Twitter / X
                    </h3>
                    <p className="text-foreground/60 text-sm mb-4">
                      Follow us for updates, announcements, and insights on Islamic finance and Web3.
                    </p>
                    <span className="text-[#FFC700] text-sm font-semibold">
                      Follow on X →
                    </span>
                  </a>

                  <a
                    href="https://github.com/tawf-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors group"
                  >
                    <Github className="w-10 h-10 text-[#FFC700] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      GitHub
                    </h3>
                    <p className="text-foreground/60 text-sm mb-4">
                      Contribute to our open-source projects and explore our technical implementations.
                    </p>
                    <span className="text-[#FFC700] text-sm font-semibold">
                      View on GitHub →
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FFC700]/20 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
                    Community Guidelines
                  </h2>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-8 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Be Respectful
                    </h3>
                    <p className="text-foreground/60">
                      Treat all community members with respect and kindness. We welcome diverse perspectives and encourage constructive dialogue.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Stay On Topic
                    </h3>
                    <p className="text-foreground/60">
                      Keep discussions relevant to TAWF, Islamic finance, Web3 technology, and related topics. Use appropriate channels for different subjects.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      No Spam or Self-Promotion
                    </h3>
                    <p className="text-foreground/60">
                      Avoid excessive self-promotion, spam, or unsolicited advertising. Share valuable content that benefits the community.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Uphold Islamic Values
                    </h3>
                    <p className="text-foreground/60">
                      Our community is built on Islamic principles. Please be mindful of these values in all interactions and discussions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Help Others
                    </h3>
                    <p className="text-foreground/60">
                      Share your knowledge, answer questions, and support fellow community members. We grow stronger together.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FFC700]/10 to-transparent border border-[#FFC700]/20 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Want to Contribute?
                </h3>
                <p className="text-foreground/70 mb-6">
                  We welcome contributions from developers, designers, writers, and community organizers. Whether you want to contribute code, documentation, or help grow the community, there's a place for you.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/tawf-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#FFC700] text-black font-semibold rounded-lg hover:bg-[#FFC700]/90 transition-colors"
                  >
                    Contribute on GitHub
                  </a>
                  <a
                    href="https://discord.gg/s7K59wE4qc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-foreground rounded-lg transition-colors"
                  >
                    Join Discord
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
