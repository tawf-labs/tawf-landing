"use client"

export function GovernanceSection() {
  return (
    <section id="governance" className="relative py-20 md:py-28">
      <div className="container">
        <h2 className="font-sentient text-3xl md:text-5xl mb-6 bg-gradient-to-r from-[#FFC700] to-[#ffe38a] bg-clip-text text-transparent">
          Sharia Governance with ZK
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <p className="md:col-span-2 font-mono text-foreground/70 leading-relaxed">
            We design governance primitives that preserve individual privacy while guaranteeing collective integrity.
            With zero-knowledge attestations, participants can prove eligibility, compliance, and voting rights without
            revealing sensitive data—delivering transparent and Sharia-aligned decision-making.
          </p>
          <ul className="list-disc pl-5 text-sm text-foreground/70 space-y-2">
            <li>Privacy-preserving eligibility proofs</li>
            <li>Transparent tallying and audit trails</li>
            <li>Community-first, halal-by-design</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
