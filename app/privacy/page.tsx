"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PrivacyPage() {
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
                Privacy Policy
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
                  1. Information We Collect
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    We collect information that you provide directly to us, including when you create an account, use our services, participate in governance, or communicate with us. This may include your wallet address, transaction history, and any information you choose to provide.
                  </p>
                  <p>
                    We automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, and usage patterns.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    We use the information we collect to provide, maintain, and improve our services, process transactions, verify compliance with Shariah principles, communicate with you, and protect against fraud and abuse.
                  </p>
                  <p>
                    Your information helps us develop new features, understand how our services are used, and ensure the security and integrity of our platform.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  3. Cookies and Tracking Technologies
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    We use cookies and similar tracking technologies to collect information about your browsing activities and to provide personalized experiences. You can control cookies through your browser settings.
                  </p>
                  <p>
                    For more details, please see our <Link href="/cookies" className="text-[#FFC700] hover:underline">Cookie Policy</Link>.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  4. Data Security
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                  <p>
                    We use encryption, secure protocols, and regular security audits to safeguard your data.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  5. Third-Party Services
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, and customer support. These providers are contractually obligated to protect your information.
                  </p>
                  <p>
                    We do not sell your personal information to third parties.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  6. Your Rights
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us using the information below.
                  </p>
                  <p>
                    Depending on your location, you may have additional rights under applicable data protection laws.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  7. Changes to This Policy
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  8. Contact Us
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <p className="text-[#FFC700]">
                    Email: <a href="mailto:privacy@tawf.xyz" className="hover:underline">privacy@tawf.xyz</a>
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
