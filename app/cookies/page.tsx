"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function CookiesPage() {
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
                Cookie Policy
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
                  1. What Are Cookies?
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our services.
                  </p>
                  <p>
                    Cookies can be "persistent" (remaining on your device until deleted) or "session" (deleted when you close your browser).
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  2. How We Use Cookies
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    We use cookies to enhance your experience, analyze site traffic, personalize content, and remember your preferences. This helps us improve our services and provide you with relevant information.
                  </p>
                  <p>
                    Cookies also help us understand which features are most popular and how users navigate our platform, allowing us to optimize the user experience.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  3. Types of Cookies We Use
                </h2>
                <div className="space-y-6 text-foreground/70 text-base leading-relaxed">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Essential Cookies</h3>
                    <p>
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Analytics Cookies</h3>
                    <p>
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Functional Cookies</h3>
                    <p>
                      These cookies enable enhanced functionality and personalization, such as remembering your wallet connection preferences and language settings.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Marketing Cookies</h3>
                    <p>
                      These cookies track your online activity to help us deliver more relevant advertising and measure the effectiveness of our campaigns.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  4. Managing Cookies
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    You can control and manage cookies through your browser settings. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites.
                  </p>
                  <p>
                    Please note that disabling cookies may affect the functionality of our website and limit your ability to use certain features.
                  </p>
                  <p>
                    For more information on how to manage cookies in popular browsers:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#FFC700] hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[#FFC700] hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#FFC700] hover:underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#FFC700] hover:underline">Microsoft Edge</a></li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  5. Third-Party Cookies
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    Some cookies on our site are set by third-party services that appear on our pages. We do not control these cookies, and you should check the third-party websites for more information about how they use cookies.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  6. Updates to This Policy
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
                  7. Contact Us
                </h2>
                <div className="space-y-4 text-foreground/70 text-base leading-relaxed">
                  <p>
                    If you have questions about our use of cookies, please contact us at:
                  </p>
                  <p className="text-[#FFC700]">
                    Email: <a href="mailto:privacy@tawf.xyz" className="hover:underline">privacy@tawf.xyz</a>
                  </p>
                  <p>
                    For more information about how we handle your data, please see our <Link href="/privacy" className="text-[#FFC700] hover:underline">Privacy Policy</Link>.
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
