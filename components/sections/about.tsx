"use client"

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-[#FFC700] to-[#ffe38a] bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="font-sans text-base sm:text-lg text-foreground/80 max-w-3xl leading-relaxed text-soft-glow">
            Tawf Labs advances financial inclusion for the Ummah by delivering transparent, privacy-preserving Web3
            applications. We apply zero-knowledge cryptography to uphold Sharia compliance while enabling global
            participation in digital giving and governance.
          </p>
        </div>
      </div>
    </section>
  )
}
