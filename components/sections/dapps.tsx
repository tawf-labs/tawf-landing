"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DappsSection() {
  const apps = [
    {
      name: "zkt.app",
      title: "Zakat on-chain",
      desc: "Calculate, verify, and distribute zakat with auditability and privacy via ZK proofs.",
      href: "https://zkt.app",
    },
    {
      name: "Tawf Sharia Governance",
      title: "ZK Governance",
      desc: "Sharia-compliant governance with zero-knowledge attestations and transparent outcomes.",
      href: "#governance",
    },
    {
      name: "qrbn.app",
      title: "Qurbani on-chain",
      desc: "End-to-end qurbani procurement and proof-of-fulfillment using blockchain.",
      href: "https://qrbn.app",
    },
  ]

  return (
    <section id="dapps" className="relative py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10 bg-gradient-to-r from-[#FFC700] to-[#ffe38a] bg-clip-text text-transparent">
            Dapps
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <Card key={app.name} className="border-border/60 bg-black/30 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-display text-xl">{app.title}</CardTitle>
                <CardDescription className="font-mono text-foreground/80">{app.name}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="font-sans text-sm text-foreground/80 leading-relaxed text-soft-glow">{app.desc}</p>
                <div>
                  <Link
                    href={app.href}
                    target={app.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <Button>[Open]</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
