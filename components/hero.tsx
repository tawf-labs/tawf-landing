"use client"

import Link from "next/link"
import { GL } from "./gl"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState } from "react"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col h-svh justify-center items-center px-4">
      <GL hovering={hovering} />

      <div className="text-center relative z-10 w-full max-w-4xl mx-auto">
        {/* <Pill className="mb-6">TAWF LABS</Pill> */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-balance leading-tight bg-gradient-to-r from-white to-[#ffe38a] bg-clip-text text-transparent drop-shadow-2xl">
          Structuring Value <br />
          <i className="font-semibold">for Web3</i>
        </h1>
        {/* <p className="text-sm sm:text-base text-white mt-6 sm:mt-8 max-w-[640px] mx-auto">Infrastructure for an ethical web, grounded in Islamic economic principles.</p> */}
        {/* <p className="text-sm sm:text-base text-white mt-6 sm:mt-8 max-w-[640px] mx-auto">Grounded in Islamic economic principles. Open to all.</p> */}


        <p className="text-xs sm:text-sm text-white/90 mt-4 max-w-[560px] mx-auto">Implementing Islamic economic principles as programmable systems.</p>



        <div className="mt-8 sm:mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <Link className="max-sm:hidden" href="/principles">
            <Button onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
              [Explore Standards]
            </Button>
          </Link>
          <Link className="sm:hidden" href="/principles">
            <Button
              size="sm"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [Explore Standards]
            </Button>
          </Link>

          <Link className="max-sm:hidden" href="/#dapps">
            <Button variant="outline" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
              [View Applications]
            </Button>
          </Link>
          <Link className="sm:hidden" href="/#dapps">
            <Button
              size="sm"
              variant="outline"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [View Applications]
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
