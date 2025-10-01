"use client"

import Link from "next/link"
import { GL } from "./gl"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState } from "react"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col h-svh justify-between">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">TAWF LABS</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Bridging the Ummah <br />
          <i className="font-light">to Web3</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[560px] mx-auto">
          We build halal-first zk dapps: blockchain-based zakat at zkt.app, Tawf Sharia governance using zero-knowledge
          proofs, and blockchain-based qurbani at qrbn.app.
        </p>

        <Link className="contents max-sm:hidden" href="/#dapps">
          <Button className="mt-14" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            [Explore Dapps]
          </Button>
        </Link>
        <Link className="contents sm:hidden" href="/#dapps">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Explore Dapps]
          </Button>
        </Link>
      </div>
    </div>
  )
}
