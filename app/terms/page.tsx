"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function TermsPage() {
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
                Terms of Service
              </h1>
              <p className="text-lg text-foreground/70">
                Last Updated: March 5, 2026
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-16 bg-black/75">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
            <div className="mx-auto max-w-4xl space-y-12">
              
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    By accessing or using TAWF's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                  </p>
                  <p>
                    These terms apply to all users of the platform, including browsers, vendors, customers, merchants, and contributors of content.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  2. Description of Services
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    TAWF provides Shariah-compliant Web3 infrastructure for verified faith-based actions, including but not limited to zakat calculation and distribution, qurban services, waqf management, and decentralized governance tools.
                  </p>
                  <p>
                    Our services are built on blockchain technology and follow Islamic economic principles. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  3. User Obligations
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    You are responsible for maintaining the security of your wallet and private keys. You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our platform.
                  </p>
                  <p>
                    You must provide accurate information and comply with all applicable laws and regulations, including those related to cryptocurrency transactions and charitable giving.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  4. Intellectual Property
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    The content, features, and functionality of TAWF's services are owned by TAWF Labs and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, or create derivative works of our content without express written permission.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  5. Disclaimers
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
                  </p>
                  <p>
                    While we strive to ensure Shariah compliance, users should conduct their own due diligence and consult with qualified Islamic scholars regarding their specific circumstances.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  6. Limitation of Liability
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    To the maximum extent permitted by law, TAWF Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                  </p>
                  <p>
                    This includes but is not limited to loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  7. Governing Law
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes shall be resolved through binding arbitration in accordance with Islamic principles of dispute resolution.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  8. Changes to Terms
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on this page with a new "Last Updated" date.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  9. Contact Information
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    For questions about these Terms of Service, please contact us at:
                  </p>
                  <p className="text-[#FFC700]">
                    Email: <a href="mailto:legal@tawf.xyz" className="hover:underline">legal@tawf.xyz</a>
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
