"use client"

import { Hero } from "@/components/hero"
import { Leva } from "leva"
import { AboutSection } from "@/components/sections/about"
import { DappsSection } from "@/components/sections/dapps"
import { GovernanceSection } from "@/components/sections/governance"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <DappsSection />
      <GovernanceSection />
      <ContactSection />
      <Leva hidden />
    </>
  )
}
