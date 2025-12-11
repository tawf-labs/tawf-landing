"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

interface TeamMember {
  name: string
  role: string
  bio: string
  initials: string
  image?: string
  socials?: {
    github?: string
    twitter?: string
    linkedin?: string
    email?: string
  }
}

export default function LabsPage() {
  const teamMembers: TeamMember[] = [
    {
      name: "Muhammad Zidan Fatonie",
      role: "Founder & CEO",
      bio: "Cryptography researcher specializing in zero-knowledge proofs and privacy-preserving protocols for Islamic finance.",
      initials: "AH",
      socials: {
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com/in/mzidanfatonie",
      },
    },
    {
      name: "Fatima Al-Rashid",
      role: "Head of Sharia Compliance",
      bio: "Islamic scholar and blockchain consultant ensuring all protocols align with Sharia principles and contemporary fiqh.",
      initials: "FR",
      socials: {
        linkedin: "https://linkedin.com",
        email: "mailto:fatima@tawf.app",
      },
    },
    {
      name: "Omar Khan",
      role: "Lead Protocol Engineer",
      bio: "Full-stack blockchain developer building secure, scalable infrastructure for decentralized Islamic applications.",
      initials: "OK",
      socials: {
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Zainab Ibrahim",
      role: "Smart Contract Developer",
      bio: "Solidity expert focused on developing auditable and transparent smart contracts for zakat and qurbani distribution.",
      initials: "ZI",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Yusuf Martinez",
      role: "ZK Circuit Designer",
      bio: "Specialized in designing efficient zero-knowledge circuits for private wealth verification and compliance attestations.",
      initials: "YM",
      socials: {
        github: "https://github.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Aisha Osman",
      role: "Community & Governance Lead",
      bio: "Building inclusive governance systems that empower the Ummah to participate in protocol decisions transparently.",
      initials: "AO",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "mailto:aisha@tawf.app",
      },
    },
  ]

  return (
    <main className="relative min-h-screen">
      <Header />
      
      {/* Background gradient effect similar to hero */}
      <div className="absolute inset-0 bg-black -z-10" />
      
      <div className="relative z-10 bg-black/95">
        <section className="relative py-32 sm:py-36 md:py-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="mb-12 sm:mb-16">
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-[#FFC700] to-[#ffe38a] bg-clip-text text-transparent">
                  Tawf Labs
                </h1>
                <p className="font-sans text-lg sm:text-xl text-foreground/80 max-w-3xl leading-relaxed">
                  Meet the team advancing financial inclusion and religious obligation for the Ummah through privacy-preserving Web3 technology and Sharia-compliant innovation.
                </p>
              </div>

              {/* Team Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                  <Card key={member.name} className="border-border/60 bg-black/30 backdrop-blur hover:bg-black/40 transition-colors duration-300">
                    <CardHeader>
                      {/* Avatar with initials */}
                      <div className="mb-4">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFC700] to-[#ebb800] flex items-center justify-center">
                          <span className="font-display text-2xl font-bold text-black">
                            {member.initials}
                          </span>
                        </div>
                      </div>
                      
                      <CardTitle className="font-display text-xl sm:text-2xl text-foreground">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="font-mono text-sm text-[#FFC700]/90">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex flex-col gap-4">
                      <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                        {member.bio}
                      </p>
                      
                      {/* Social Links */}
                      {member.socials && (
                        <div className="flex gap-3 pt-2">
                          {member.socials.github && (
                            <Link
                              href={member.socials.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground/60 hover:text-[#FFC700] transition-colors duration-200"
                            >
                              <Github className="w-5 h-5" />
                            </Link>
                          )}
                          {member.socials.twitter && (
                            <Link
                              href={member.socials.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground/60 hover:text-[#FFC700] transition-colors duration-200"
                            >
                              <Twitter className="w-5 h-5" />
                            </Link>
                          )}
                          {member.socials.linkedin && (
                            <Link
                              href={member.socials.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground/60 hover:text-[#FFC700] transition-colors duration-200"
                            >
                              <Linkedin className="w-5 h-5" />
                            </Link>
                          )}
                          {member.socials.email && (
                            <Link
                              href={member.socials.email}
                              className="text-foreground/60 hover:text-[#FFC700] transition-colors duration-200"
                            >
                              <Mail className="w-5 h-5" />
                            </Link>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-16 sm:mt-20 text-center">
                <h3 className="font-display text-2xl sm:text-3xl mb-4 text-foreground">
                  Join Our Mission
                </h3>
                <p className="font-sans text-base sm:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                  We're always looking for talented individuals passionate about building the future of Islamic Web3.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-[#FFC700] to-[#ebb800] text-black font-sans font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
