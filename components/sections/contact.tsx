"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg border border-border/60 bg-black/30 p-6 sm:p-8 md:p-10 backdrop-blur">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">Start Building & Integrate TAWF into Your App</h3>
            <p className="font-sans text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8 max-w-2xl text-soft-glow leading-relaxed">
              Ready to build your ethical, value-driven application? Explore our SDK documentation to get started.
            </p>
            <Link
              href="/docs"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC700]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md inline-block"
            >
              <Button aria-label="View TAWF SDK documentation">[View SDK Docs]</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
