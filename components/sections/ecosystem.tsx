"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"

const partners = [
  {
    name: "HAQQ Network",
    logo: "https://placehold.co/400x200/1a1a1a/FFC700/png?text=HAQQ",
    url: "https://haqq.network"
  },
  {
    name: "Ethereum",
    logo: "https://placehold.co/400x200/1a1a1a/8A92B2/png?text=ETH",
    url: "https://ethereum.org"
  },
  {
    name: "Polygon",
    logo: "https://placehold.co/400x200/1a1a1a/8247E5/png?text=MATIC",
    url: "https://polygon.technology"
  },
  {
    name: "zkSync",
    logo: "https://placehold.co/400x200/1a1a1a/4E529A/png?text=zkSync",
    url: "https://zksync.io"
  },
  {
    name: "Starknet",
    logo: "https://placehold.co/400x200/1a1a1a/FF4C3B/png?text=STARK",
    url: "https://starknet.io"
  },
  {
    name: "Arbitrum",
    logo: "https://placehold.co/400x200/1a1a1a/2D374B/png?text=ARB",
    url: "https://arbitrum.io"
  },
]

const ITEMS_PER_VIEW = 4

export function EcosystemSection() {
  const controls = useAnimation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 })
  const totalGroups = Math.ceil(partners.length / ITEMS_PER_VIEW)

  // Animation variants for the carousel items
  const variants = {
    hidden: (custom: number) => ({
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        delay: custom * 0.1
      }
    }),
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.1
      }
    })
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, isInView])

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start("hidden").then(() => {
        setCurrentIndex((prev) => (prev + 1) % totalGroups)
        // Small delay to allow the state to update before starting the next animation
        setTimeout(() => controls.start("visible"), 50)
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [controls, totalGroups])

  // Create infinite loop array with unique keys
  const extendedPartners = [...partners, ...partners]
  const startIndex = currentIndex * ITEMS_PER_VIEW
  const visiblePartners = extendedPartners.slice(startIndex, startIndex + ITEMS_PER_VIEW)

  return (
    <section id="ecosystem" className="relative py-16 sm:py-20 md:py-28 w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background/30 via-background/80 to-background" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-[100vw]">
        <div className="max-w-4xl mx-auto text-center mb-12 px-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-r from-[#FFC700] to-[#ffe38a] bg-clip-text text-transparent">
            Our Ecosystem
          </h2>
          <div className="inline-block px-4 py-2 rounded-lg bg-background/20 backdrop-blur-sm">
            <p className="font-sans text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed text-soft-glow">
              Tawf is built on a foundation of leading blockchain networks, with HAQQ Network as our primary chain.
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={ref}
            className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 py-4 w-full"
            style={{
              width: 'fit-content',
              margin: '0 auto',
              overflow: 'hidden',
              maxWidth: '100%'
            }}
          >
            {visiblePartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}-${currentIndex}`}
                className="flex-shrink-0 mx-1"
                custom={index}
                initial="hidden"
                animate={controls}
                variants={variants}
              >
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 p-3 md:p-4 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/20 hover:border-[#FFC700]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,199,0,0.2)]"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain object-center p-1"
                      sizes="(max-width: 640px) 80px, 100px"
                    />
                  </div>
                  <span className="absolute -bottom-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm text-foreground/70 whitespace-nowrap">
                    {partner.name}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 sm:mt-12 gap-2">
          {Array.from({ length: totalGroups }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === i
                  ? 'bg-[#FFC700] w-8' 
                  : 'bg-foreground/20 w-3 hover:bg-foreground/40'
              }`}
              aria-label={`Go to partner group ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}