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
    <section id="dapps" className="relative py-20 md:py-28">
      <div className="container">
        <h2 className="font-sentient text-3xl md:text-5xl mb-10 bg-gradient-to-r from-[#FFC700] to-[#ffe38a] bg-clip-text text-transparent">
          Dapps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {apps.map((app) => (
            <Card key={app.name} className="border-border/60 bg-black/30 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl">{app.title}</CardTitle>
                <CardDescription className="text-foreground/80">{app.name}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-sm text-foreground/80 leading-relaxed text-soft-glow">{app.desc}</p>
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
    </section>
  )
}
