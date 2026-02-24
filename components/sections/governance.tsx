"use client";

import { Layers } from "lucide-react";
import Link from "next/link";

// 3D Crystal Illustration for Community DAO
function Crystal3D() {
  return (
    <div className="crystal-glow">
      <div className="crystal-3d">
        {/* Back layers for depth */}
        <div className="crystal-layer crystal-layer-3" />
        <div className="crystal-layer crystal-layer-2" />
        {/* Main crystal layer */}
        <div className="crystal-layer crystal-layer-1" />
        {/* Glass highlight */}
        <div className="crystal-highlight" />
        {/* Glowing base */}
        <div className="crystal-base" />
      </div>
    </div>
  );
}

// 3D Scales Illustration for ZK Sharia Council
function Scales3D() {
  return (
    <div className="scales-glow">
      <div className="scales-3d">
        {/* Vertical stand */}
        <div className="scales-stand" />
        {/* Base platform */}
        <div className="scales-base" />
        {/* Center pivot jewel */}
        <div className="scales-jewel" />
        {/* Swaying beam assembly */}
        <div className="scales-beam-assembly">
          {/* Horizontal beam */}
          <div className="scales-beam" />
          {/* Left side: chains + pan */}
          <div className="scales-left">
            <div className="scales-chain scales-chain-1" />
            <div className="scales-chain scales-chain-2" />
            <div className="scales-pan" />
          </div>
          {/* Right side: chains + pan */}
          <div className="scales-right">
            <div className="scales-chain scales-chain-1" />
            <div className="scales-chain scales-chain-2" />
            <div className="scales-pan" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function GovernanceSection() {
  return (
    <section id="governance" className="relative py-16 sm:py-20 md:py-28">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-12">
            <h2 className="bg-clip-text bg-gradient-to-r from-[#FFC700] to-[#ffe38a] font-display text-transparent text-3xl sm:text-4xl md:text-5xl">
              Governance Guided by Islamic Principles
            </h2>
            <Layers className="w-12 h-12 text-foreground/80 icon-float" />
          </div>

          <p className="text-foreground/70 text-lg mb-12 max-w-4xl">
            TAWF operates a two-part governance system guided by Islamic legal principles, balancing open community participation (shura - Islamic consultative decision-making) with values-aligned oversight (hisbah - Islamic accountability oversight) through transparent governance and zero-knowledge validation.
          </p>

          {/* Bento Box Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Community DAO Card */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 p-8 transition-all duration-300">
              <div className="flex items-center gap-5 mb-6">
                <Crystal3D />
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Community DAO</h3>
                  <p className="text-sm text-foreground/60">Transparent & Community-Governed</p>
                </div>
              </div>

              <ul className="space-y-4 list-minimal list-minimal-emerald">
                <li>Fully transparent governance recorded on the blockchain with open proposal viewing</li>
                <li>Open secure credential-based voting using TAWF DID credentials for all community members</li>
                <li>Community-driven decision making for ecosystem upgrades and community fund management</li>
              </ul>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-foreground/50">
                  Empowering the community with transparent governance grounded in the Islamic tradition of shura (consultative decision-making)
                </p>
              </div>
            </div>

            {/* ZK Sharia Council Card */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 p-8 transition-all duration-300">
              <div className="flex items-center gap-5 mb-6">
                <Scales3D />
                <div className="flex-1 pt-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Independent Sharia Council</h3>
                  <p className="text-sm text-foreground/60">Private & Verifiable</p>
                </div>
              </div>

              <ul className="space-y-4 list-minimal list-minimal-gold">
                <li>Zero-knowledge technology keeps reviewers private while maintaining transparency and verifiability</li>
                <li>Qualified Islamic scholars with TAWF DID credentials provide religious and ethical review of proposals and outcomes</li>
                <li>Veto power on non-compliant decisions while protecting scholar identities</li>
              </ul>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-foreground/50">
                  Ensuring alignment with Islamic principles through institutional oversight grounded in the Islamic tradition of hisbah (accountability)
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Summary */}
          <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
            <p className="text-center text-sm text-foreground/70">
              <span className="font-semibold text-foreground">DID-Based Governance:</span> Both the Community DAO and Independent Sharia Council use TAWF DID (NFT credentials) for voting rights, no tokens required. This two-part system ensures decisions remain community-driven while applications, upgrades, and standards can be verifiably aligned with Islamic principles.
            </p>
          </div>

          {/* Link to Principles page for deeper explanation */}
          <div className="mt-6 text-center">
            <Link
              href="/principles"
              className="text-sm text-[#FFC700] hover:text-[#ffe38a] transition-colors underline underline-offset-4"
            >
              Learn more about our governance traditions (shura, hisbah) →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
