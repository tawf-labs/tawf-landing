"use client"

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container">
        <h2 className="font-sentient text-3xl md:text-5xl mb-6 bg-gradient-to-r from-[#FFC700] to-[#ffe38a] bg-clip-text text-transparent">
          Our Mission
        </h2>
        <p className="font-mono text-foreground/70 max-w-2xl leading-relaxed">
          Tawf Labs advances financial inclusion for the Ummah by delivering transparent, privacy-preserving Web3
          applications. We apply zero-knowledge cryptography to uphold Sharia compliance while enabling global
          participation in digital giving and governance.
        </p>
      </div>
    </section>
  )
}
