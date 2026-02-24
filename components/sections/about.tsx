"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-28">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-end gap-2 mb-12">
            <h2 className="bg-clip-text bg-gradient-to-r from-[#FFC700] to-[#ffe38a] mb-6 font-display text-transparent text-3xl sm:text-4xl md:text-5xl">
              Our Mission
            </h2>
            <Sparkles className="-mt-2 sm:-mt-4 md:-mt-6 mb-6 w-12 h-12 text-foreground/80 icon-float" />
          </div>

          <div className="space-y-6">
            <p className="max-w-3xl font-sans text-foreground/80 text-soft-glow text-base sm:text-lg leading-relaxed">
              TAWF is developing interoperable standards for value-aligned decentralized systems, a framework for implementing Islamic economic principles on-chain.
            </p>

            <p className="max-w-3xl font-sans text-foreground/80 text-soft-glow text-base sm:text-lg leading-relaxed">
              We formalize principles such as risk-sharing, asset-backing, and wealth circulation into programmable infrastructure others can adopt. Not just applications, a reference implementation for ethical decentralized systems.
            </p>

            <p className="max-w-3xl font-sans text-foreground/80 text-soft-glow text-base sm:text-lg leading-relaxed">
              Our work translates timeless economic frameworks into verifiable protocols: zero-knowledge proof systems for privacy-preserving compliance, decentralized identifier credentials for community governance, and asset-backed smart contracts for real-economy tethering.
            </p>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-[#FFC700]/10 to-transparent border border-[#FFC700]/20">
              <p className="text-sm font-semibold text-foreground mb-3">Core Economic Principles</p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC700] mt-0.5">•</span>
                  <span><strong>Risk-sharing:</strong> Shared risk/reward, not interest-based exploitation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC700] mt-0.5">•</span>
                  <span><strong>Asset-backed:</strong> Real economic value, not speculative instruments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC700] mt-0.5">•</span>
                  <span><strong>Wealth circulation:</strong> Systems that circulate, not concentrate wealth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFC700] mt-0.5">•</span>
                  <span><strong>Transparency + Privacy:</strong> Accountability with zero-knowledge protection</span>
                </li>
              </ul>
              <Link
                href="/principles"
                className="inline-block mt-4 text-sm text-[#FFC700] hover:text-[#ffe38a] transition-colors underline underline-offset-4"
              >
                Explore our principles in depth →
              </Link>
            </div>

            <p className="max-w-3xl font-sans text-foreground/70 text-soft-glow text-base leading-relaxed italic pt-4">
              Built for the Ummah. Designed for anyone seeking ethical alternatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
