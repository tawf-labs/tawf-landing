"use client"

import { motion } from "framer-motion"
import { Card } from "../ui/card"

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background/30 via-background/80 to-background" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-[#FFC700] to-[#ffe38a] bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="font-sans text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Tawf advances financial inclusion for the Ummah by delivering transparent, privacy-preserving Web3
              applications. We apply zero-knowledge cryptography to uphold Sharia compliance while enabling global
              participation in digital giving and governance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-background/50 backdrop-blur-sm border-border/20 hover:border-[#FFC700]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,199,0,0.1)]">
                <div className="w-12 h-12 rounded-full bg-[#FFC700]/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFC700]">
                    <path d="M12 2v4" />
                    <path d="m16 6 3 3" />
                    <path d="M18 12h4" />
                    <path d="m16 18 3-3" />
                    <path d="M12 22v-4" />
                    <path d="m8 18-3 3" />
                    <path d="M6 12H2" />
                    <path d="m8 6-3-3" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sharia-Compliant</h3>
                <p className="text-foreground/70">Our platform adheres to Islamic financial principles, ensuring all transactions are halal and ethical.</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-background/50 backdrop-blur-sm border-border/20 hover:border-[#FFC700]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,199,0,0.1)]">
                <div className="w-12 h-12 rounded-full bg-[#FFC700]/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFC700]">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure by Design</h3>
                <p className="text-foreground/70">Leveraging zero-knowledge proofs for maximum privacy and security in all transactions.</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-background/50 backdrop-blur-sm border-border/20 hover:border-[#FFC700]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,199,0,0.1)]">
                <div className="w-12 h-12 rounded-full bg-[#FFC700]/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFC700]">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                <p className="text-foreground/70">Empowering the Ummah through decentralized governance and collective decision-making.</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
