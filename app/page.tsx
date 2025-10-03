"use client"

import { Hero } from "@/components/hero"
import { Leva } from "leva"
import { AboutSection } from "@/components/sections/about"
import { DappsSection } from "@/components/sections/dapps"
import { GovernanceSection } from "@/components/sections/governance"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <div className="relative z-10 bg-background">
        <AboutSection />
        <DappsSection />
        <GovernanceSection />
        <ContactSection />
      </div>
      <Leva hidden />
    </main>
  )
}
