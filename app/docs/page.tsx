"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Github, Code2, BookOpen, Zap, Wrench, FileText, Users, MessageCircle, Copy, Check, Package, Shield, Building2, Globe, Landmark, TrendingUp, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface DocSection {
  title: string
  description: string
  icon: React.ElementType
  status: "coming-soon" | "available"
  href?: string
}

interface SCSStandard {
  number: string
  name: string
  description: string
  features: string[]
  layer: "capital" | "infrastructure" | "governance"
}

interface UseCase {
  title: string
  description: string
  icon: React.ElementType
}

const CodeBlock = ({ code, language = "bash" }: { code: string; language?: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <pre className="bg-black/60 border border-white/10 rounded-xl p-5 overflow-x-auto backdrop-blur-sm">
        <code className="text-sm text-foreground/90 font-mono leading-relaxed">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 opacity-0 group-hover:opacity-100"
        aria-label={copied ? "Copied" : "Copy code"}
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-400" />
        ) : (
          <Copy className="w-4 h-4 text-foreground/60" />
        )}
      </button>
    </div>
  )
}

export default function DocsPage() {
  const scsStandards: SCSStandard[] = [
    {
      number: "SCS-1",
      name: "Mudarabah",
      description: "Manager-investor profit-sharing partnership where capital provider (Rabb al-Mal) provides capital and manager (Mudarib) manages investments.",
      features: ["Profit sharing by pre-agreed ratio", "Loss borne by capital provider", "Manager liability for misconduct", "ERC-20 compatible"],
      layer: "capital"
    },
    {
      number: "SCS-2",
      name: "Musharakah",
      description: "Joint venture capital model where all partners contribute capital and share profits and losses.",
      features: ["Flexible profit ratios", "Loss ratio equals capital ratio", "Multi-partner support", "AAOIFI Standard #12 compliant"],
      layer: "capital"
    },
    {
      number: "SCS-3",
      name: "Vault Engine",
      description: "ERC-4626 compliant vault with epoch-based accounting and NAV calculation for profit-sharing pools.",
      features: ["Epoch-based accounting", "NAV calculation", "Strategy management", "ERC-4626 standard"],
      layer: "infrastructure"
    },
    {
      number: "SCS-4",
      name: "Enforcement Layer",
      description: "Protocol-level enforcement ensuring Sharia compliance by prohibiting guaranteed returns and fixed-yield structures.",
      features: ["No guaranteed returns", "Profit-sharing validation", "Fixed-yield prevention", "Compliance checks"],
      layer: "infrastructure"
    },
    {
      number: "SCS-5",
      name: "AAOIFI Governance",
      description: "Governance framework implementing AAOIFI Governance Standard #3 with Sharia Supervisory Board oversight.",
      features: ["SSB oversight", "Multi-signature approval", "Prohibited asset screening", "Financial ratio validation"],
      layer: "governance"
    }
  ]

  const useCases: UseCase[] = [
    {
      title: "Islamic Fintech Startups",
      description: "Build Sharia-compliant DeFi products with production-ready primitives for halal capital formation.",
      icon: TrendingUp
    },
    {
      title: "Web3 Protocols (MENA/SEA)",
      description: "Integrate Islamic finance capabilities to serve Muslim-majority markets with compliant infrastructure.",
      icon: Globe
    },
    {
      title: "DAOs Structuring Halal Capital",
      description: "Implement transparent, on-chain governance with Sharia Supervisory Board oversight mechanisms.",
      icon: Users
    },
    {
      title: "Institutional Sharia-Compliant Funds",
      description: "Deploy auditable, AAOIFI-compliant investment vehicles with built-in compliance enforcement.",
      icon: Landmark
    }
  ]

  const docSections: DocSection[] = [
    {
      title: "Getting Started",
      description: "Quick start guide to begin building with TAWF. Learn about installation, configuration, and your first values-aligned dApp.",
      icon: BookOpen,
      status: "coming-soon",
    },
    {
      title: "API Reference",
      description: "Complete API documentation for TAWF-SDK. Detailed reference for all methods, types, and interfaces.",
      icon: Code2,
      status: "coming-soon",
    },
    {
      title: "Tutorials & Guides",
      description: "Step-by-step tutorials for building common use cases. From simple zakat trackers to complex waqf systems.",
      icon: FileText,
      status: "coming-soon",
    },
    {
      title: "Examples",
      description: "Code samples and example projects to help you understand best practices and common patterns.",
      icon: Wrench,
      status: "coming-soon",
    },
  ]

  const communityLinks = [
    {
      title: "GitHub Repository",
      description: "Explore the Sharia Capital Standard codebase, contribute to development, and report issues.",
      icon: Github,
      href: "https://github.com/tawf-labs/Sharia-Capital-Standard",
      color: "text-white hover:text-[#FFC700]",
    },
    {
      title: "npm Package",
      description: "Install the SDK via npm and integrate Sharia-compliant primitives into your project.",
      icon: Package,
      href: "https://www.npmjs.com/package/@tawf-labs/sharia-capital-standard",
      color: "text-white hover:text-[#FFC700]",
    },
    {
      title: "Join Development",
      description: "Connect with our team and community of developers building the future of Islamic Web3.",
      icon: Users,
      href: "https://discord.gg/s7K59wE4qc",
      color: "text-white hover:text-[#FFC700]",
    },
  ]

  return (
    <main className="relative min-h-screen">
      <Header />

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-black -z-10" />

      <div className="relative z-10 bg-black/95">
        <section className="relative py-32 sm:py-36 md:py-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="mb-12 sm:mb-16">
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-[#FFC700] to-[#ebb800] bg-clip-text text-transparent">
                  Documentation
                </h1>
                <p className="font-sans text-lg sm:text-xl text-foreground/80 max-w-3xl leading-relaxed">
                  Building the future of value-aligned decentralized systems. Resources, guides, and tools for developers.
                </p>
              </div>

              {/* SDK Status Hero Card */}
              <Card className="border-border/60 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 backdrop-blur mb-12">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                        <Code2 className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="font-display text-2xl sm:text-3xl text-foreground">
                          Sharia Capital Standard
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Available
                          </Badge>
                          <Badge variant="outline" className="text-foreground/70">
                            v0.1.2 (Latest)
                          </Badge>
                          <Badge variant="outline" className="text-foreground/70">
                            MIT License
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href="https://github.com/tawf-labs/Sharia-Capital-Standard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors text-sm"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </Link>
                      <Link
                        href="https://www.npmjs.com/package/@tawf-labs/sharia-capital-standard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors text-sm"
                      >
                        <Package className="w-4 h-4" />
                        npm
                      </Link>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col gap-6">
                  {/* Why SCS? */}
                  <div className="p-6 rounded-lg bg-gradient-to-br from-[#FFC700]/5 to-transparent border border-[#FFC700]/20">
                    <h3 className="font-display text-base font-semibold text-[#FFC700] mb-3 uppercase tracking-wide">
                      Why Sharia Capital Standard?
                    </h3>
                    <p className="font-sans text-base text-foreground/90 leading-relaxed">
                      Most DeFi primitives assume interest-based yield or implicit guarantees. Sharia Capital Standard provides composable smart contract primitives aligned with AAOIFI standards, enabling halal capital formation natively on-chain.
                    </p>
                  </div>

                  {/* Supported Environments */}
                  <div>
                    <h4 className="font-display text-sm font-semibold text-foreground/70 mb-3">Supported Environments</h4>
                    <div className="flex flex-wrap gap-2">
                      {["EVM", "Solidity", "Foundry", "Hardhat", "Solana", "Anchor"].map((env) => (
                        <Badge key={env} variant="outline" className="text-foreground/80">
                          {env}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Layered Architecture - SCS Standards */}
              <div className="mb-12">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-8">
                  Standards Architecture
                </h2>

                {/* Capital Primitives Layer */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FFC700]/30 to-transparent" />
                    <h3 className="font-display text-lg text-[#FFC700] uppercase tracking-wider">Capital Primitives</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FFC700]/30 to-transparent" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {scsStandards.filter(s => s.layer === "capital").map((standard) => (
                      <Card key={standard.number} className="border-border/60 bg-black/30 backdrop-blur hover:bg-black/40 transition-colors">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <Badge className="bg-[#FFC700]/20 text-[#FFC700] border-[#FFC700]/30">
                              {standard.number}
                            </Badge>
                          </div>
                          <CardTitle className="font-display text-xl text-foreground">
                            {standard.name}
                          </CardTitle>
                          <CardDescription className="font-sans text-sm text-foreground/70 leading-relaxed">
                            {standard.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {standard.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-foreground/60">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Infrastructure Layer */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
                    <h3 className="font-display text-lg text-blue-400 uppercase tracking-wider">Infrastructure Layer</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {scsStandards.filter(s => s.layer === "infrastructure").map((standard) => (
                      <Card key={standard.number} className="border-border/60 bg-black/30 backdrop-blur hover:bg-black/40 transition-colors">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <Badge className="bg-blue-400/20 text-blue-400 border-blue-400/30">
                              {standard.number}
                            </Badge>
                          </div>
                          <CardTitle className="font-display text-xl text-foreground">
                            {standard.name}
                          </CardTitle>
                          <CardDescription className="font-sans text-sm text-foreground/70 leading-relaxed">
                            {standard.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {standard.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-foreground/60">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Governance Layer */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
                    <h3 className="font-display text-lg text-purple-400 uppercase tracking-wider">Governance Layer</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    {scsStandards.filter(s => s.layer === "governance").map((standard) => (
                      <Card key={standard.number} className="border-border/60 bg-black/30 backdrop-blur hover:bg-black/40 transition-colors">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <Badge className="bg-purple-400/20 text-purple-400 border-purple-400/30">
                              {standard.number}
                            </Badge>
                          </div>
                          <CardTitle className="font-display text-xl text-foreground">
                            {standard.name}
                          </CardTitle>
                          <CardDescription className="font-sans text-sm text-foreground/70 leading-relaxed">
                            {standard.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {standard.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-foreground/60">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Architecture Diagram */}
              <div className="mb-12">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-6">
                  Architecture Overview
                </h2>
                <Card className="border-border/60 bg-black/30 backdrop-blur overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col gap-6">
                      {/* Flow Diagram */}
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center">
                        <div className="flex-1">
                          <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#FFC700]/20 to-[#ebb800]/10 border border-[#FFC700]/30 flex items-center justify-center mb-4 shadow-lg shadow-[#FFC700]/10">
                            <Users className="w-12 h-12 text-[#FFC700]" />
                          </div>
                          <p className="font-display text-sm font-semibold text-foreground">Users</p>
                          <p className="text-xs text-foreground/50 mt-1">Capital Providers</p>
                        </div>
                        <div className="flex items-center">
                          <ArrowRight className="w-8 h-8 text-[#FFC700]/40 rotate-90 md:rotate-0" />
                        </div>
                        <div className="flex-1">
                          <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/30 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/10">
                            <Code2 className="w-12 h-12 text-blue-400" />
                          </div>
                          <p className="font-display text-sm font-semibold text-foreground">Vault Engine</p>
                          <p className="text-xs text-foreground/50 mt-1">SCS-3</p>
                        </div>
                        <div className="flex items-center">
                          <ArrowRight className="w-8 h-8 text-[#FFC700]/40 rotate-90 md:rotate-0" />
                        </div>
                        <div className="flex-1">
                          <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-[#FFC700]/20 to-[#ebb800]/10 border border-[#FFC700]/30 flex items-center justify-center mb-4 shadow-lg shadow-[#FFC700]/10">
                            <TrendingUp className="w-12 h-12 text-[#FFC700]" />
                          </div>
                          <p className="font-display text-sm font-semibold text-foreground">Capital Modules</p>
                          <p className="text-xs text-foreground/50 mt-1">SCS-1, SCS-2</p>
                        </div>
                        <div className="flex items-center">
                          <ArrowRight className="w-8 h-8 text-[#FFC700]/40 rotate-90 md:rotate-0" />
                        </div>
                        <div className="flex-1">
                          <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/30 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/10">
                            <Shield className="w-12 h-12 text-blue-400" />
                          </div>
                          <p className="font-display text-sm font-semibold text-foreground">Enforcement</p>
                          <p className="text-xs text-foreground/50 mt-1">SCS-4</p>
                        </div>
                        <div className="flex items-center">
                          <ArrowRight className="w-8 h-8 text-[#FFC700]/40 rotate-90 md:rotate-0" />
                        </div>
                        <div className="flex-1">
                          <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/30 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/10">
                            <Landmark className="w-12 h-12 text-purple-400" />
                          </div>
                          <p className="font-display text-sm font-semibold text-foreground">SSB Governance</p>
                          <p className="text-xs text-foreground/50 mt-1">SCS-5</p>
                        </div>
                      </div>

                      {/* AAOIFI Compliance Flow */}
                      <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                          </div>
                          <div>
                            <h4 className="font-display text-base font-semibold text-foreground mb-2">AAOIFI Compliance Validation</h4>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                              Every transaction flows through the enforcement layer (SCS-4) which validates against AAOIFI standards before execution. 
                              The SSB Governance layer (SCS-5) provides ongoing oversight and can update compliance rules through multi-signature approval.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Installation Section */}
              <div className="mb-12">
                <div className="mb-8">
                  <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-3">
                    Installation
                  </h2>
                  <p className="font-sans text-base text-foreground/70">
                    Choose your preferred development environment and get started in minutes
                  </p>
                </div>
                <Card className="border-border/60 bg-black/30 backdrop-blur">
                  <CardContent className="p-8">
                    <Tabs defaultValue="foundry" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
                        <TabsTrigger value="foundry" className="text-base">Foundry</TabsTrigger>
                        <TabsTrigger value="hardhat" className="text-base">Hardhat</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="foundry" className="space-y-6">
                        <div>
                          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wide text-foreground/70">Step 1: Install Dependency</h4>
                          <CodeBlock code="forge install tawf-labs/Sharia-Capital-Standard" />
                        </div>
                        
                        <div>
                          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wide text-foreground/70">Step 2: Configure Remappings</h4>
                          <CodeBlock code="@sharia-capital/=lib/Sharia-Capital-Standard/evm/src/" />
                        </div>
                        
                        <div>
                          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wide text-foreground/70">Step 3: Import Contracts</h4>
                          <CodeBlock 
                            language="solidity"
                            code={`import "@sharia-capital/SCS1/MudarabahPool.sol";
import "@sharia-capital/SCS2/MusharakahPool.sol";
import "@sharia-capital/SCS3/VaultEngine.sol";
import "@sharia-capital/SCS4/SCSEnforcement.sol";
import "@sharia-capital/SCS5/AAOIFIGovernance.sol";`}
                          />
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="hardhat" className="space-y-6">
                        <div>
                          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wide text-foreground/70">Step 1: Install Package</h4>
                          <CodeBlock code="npm install @tawf-labs/sharia-capital-standard" />
                        </div>
                        
                        <div>
                          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wide text-foreground/70">Step 2: Import Contracts</h4>
                          <CodeBlock 
                            language="solidity"
                            code={`import "@tawf-labs/sharia-capital-standard/SCS1/MudarabahPool.sol";
import "@tawf-labs/sharia-capital-standard/interfaces/ISCS1.sol";`}
                          />
                        </div>
                        
                        <div>
                          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wide text-foreground/70">Step 3: Access ABIs (JavaScript/TypeScript)</h4>
                          <CodeBlock 
                            language="javascript"
                            code={`const MudarabahPoolABI = require('@tawf-labs/sharia-capital-standard/evm/out/MudarabahPool.sol/MudarabahPool.json');`}
                          />
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>

              {/* Usage Examples */}
              <div className="mb-12">
                <div className="mb-8">
                  <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-3">
                    Usage Examples
                  </h2>
                  <p className="font-sans text-base text-foreground/70">
                    Production-ready code examples for each standard
                  </p>
                </div>
                <Tabs defaultValue="scs1" className="w-full">
                  <TabsList className="grid w-full grid-cols-5 mb-8 h-12">
                    <TabsTrigger value="scs1">SCS-1</TabsTrigger>
                    <TabsTrigger value="scs2">SCS-2</TabsTrigger>
                    <TabsTrigger value="scs3">SCS-3</TabsTrigger>
                    <TabsTrigger value="scs4">SCS-4</TabsTrigger>
                    <TabsTrigger value="scs5">SCS-5</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="scs1">
                    <Card className="border-border/60 bg-black/30 backdrop-blur">
                      <CardHeader>
                        <CardTitle className="font-display text-xl">Mudarabah Pool</CardTitle>
                        <CardDescription>Create a profit-sharing partnership pool</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CodeBlock 
                          language="solidity"
                          code={`// Create Mudarabah pool
MudarabahFactory factory = new MudarabahFactory(enforcementAddress);

address pool = factory.createPool(
    usdcAddress,
    managerAddress,
    capitalProviderAddress,
    2000, // 20% manager share (basis points)
    8000, // 80% provider share (basis points)
    "USDC Mudarabah Pool",
    "MDP-USDC"
);

// Deposit capital
MudarabahPool mudarabah = MudarabahPool(pool);
usdc.approve(pool, 1000e6);
mudarabah.deposit(1000e6);

// Deploy to strategy
mudarabah.deployCapital(strategyAddress, 500e6);`}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="scs2">
                    <Card className="border-border/60 bg-black/30 backdrop-blur">
                      <CardHeader>
                        <CardTitle className="font-display text-xl">Musharakah Partnership</CardTitle>
                        <CardDescription>Set up a joint venture capital pool</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CodeBlock 
                          language="solidity"
                          code={`// Create Musharakah pool
MusharakahFactory factory = new MusharakahFactory(enforcementAddress);

address[] memory partners = new address[](3);
partners[0] = partner1;
partners[1] = partner2;
partners[2] = partner3;

uint256[] memory capitalRatios = new uint256[](3);
capitalRatios[0] = 5000; // 50%
capitalRatios[1] = 3000; // 30%
capitalRatios[2] = 2000; // 20%

uint256[] memory profitRatios = new uint256[](3);
profitRatios[0] = 4000; // 40%
profitRatios[1] = 3500; // 35%
profitRatios[2] = 2500; // 25%

address pool = factory.createPool(
    usdcAddress,
    partners,
    capitalRatios,
    profitRatios,
    "USDC Musharakah",
    "MSH-USDC"
);`}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="scs3">
                    <Card className="border-border/60 bg-black/30 backdrop-blur">
                      <CardHeader>
                        <CardTitle className="font-display text-xl">Vault Engine</CardTitle>
                        <CardDescription>Deploy an ERC-4626 compliant vault with epochs</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CodeBlock 
                          language="solidity"
                          code={`// Deploy Vault Engine
VaultEngine vault = new VaultEngine(
    usdcAddress,
    enforcementAddress,
    "Halal Yield Vault",
    "HYV"
);

// Set epoch duration (7 days)
vault.setEpochDuration(7 days);

// Add strategy
vault.addStrategy(strategyAddress, 5000); // 50% allocation

// Users deposit
usdc.approve(address(vault), 1000e6);
vault.deposit(1000e6, msg.sender);

// End epoch and distribute profits
vault.endEpoch();`}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="scs4">
                    <Card className="border-border/60 bg-black/30 backdrop-blur">
                      <CardHeader>
                        <CardTitle className="font-display text-xl">Enforcement Layer</CardTitle>
                        <CardDescription>Integrate compliance validation</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CodeBlock 
                          language="solidity"
                          code={`// Deploy Enforcement Layer
SCSEnforcement enforcement = new SCSEnforcement();

// Validate profit-sharing ratios
enforcement.validateProfitSharing(
    managerShare,
    providerShare
); // Reverts if guaranteed returns detected

// Check strategy compliance
bool isCompliant = enforcement.isStrategyCompliant(
    strategyAddress
);

// Your pool integrates enforcement
contract MyPool {
    SCSEnforcement public enforcement;
    
    function deployCapital(address strategy, uint256 amount) external {
        require(
            enforcement.isStrategyCompliant(strategy),
            "Strategy not Sharia-compliant"
        );
        // Deploy capital...
    }
}`}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="scs5">
                    <Card className="border-border/60 bg-black/30 backdrop-blur">
                      <CardHeader>
                        <CardTitle className="font-display text-xl">AAOIFI Governance</CardTitle>
                        <CardDescription>Implement SSB oversight</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CodeBlock 
                          language="solidity"
                          code={`// Deploy AAOIFI Governance
address[] memory ssbMembers = new address[](3);
ssbMembers[0] = scholar1;
ssbMembers[1] = scholar2;
ssbMembers[2] = scholar3;

AAOIFIGovernance governance = new AAOIFIGovernance(
    ssbMembers,
    2 // 2 of 3 multisig
);

// Add prohibited asset
governance.proposeProhibitedAsset(assetAddress);
governance.approveProposal(proposalId, scholar1);
governance.approveProposal(proposalId, scholar2);
governance.executeProposal(proposalId);

// Validate investment
bool isPermitted = governance.isAssetPermitted(assetAddress);`}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* AAOIFI Compliance & Security */}
              <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* AAOIFI Compliance */}
                <Card className="border-border/60 bg-gradient-to-br from-emerald-500/5 to-transparent backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                      </div>
                      <CardTitle className="font-display text-xl">AAOIFI Compliance</CardTitle>
                    </div>
                    <CardDescription className="text-sm">
                      Implementing standards from the Accounting and Auditing Organization for Islamic Financial Institutions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-black/20 border border-emerald-500/10">
                        <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 flex-shrink-0">Standard #8</Badge>
                        <span className="text-sm text-foreground/80">Mudarabah (profit-sharing partnership)</span>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-black/20 border border-emerald-500/10">
                        <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 flex-shrink-0">Standard #12</Badge>
                        <span className="text-sm text-foreground/80">Musharakah (joint venture)</span>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-black/20 border border-emerald-500/10">
                        <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 flex-shrink-0">Standard #17</Badge>
                        <span className="text-sm text-foreground/80">Investment Agencies</span>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-black/20 border border-emerald-500/10">
                        <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 flex-shrink-0">Governance #3</Badge>
                        <span className="text-sm text-foreground/80">Internal Sharia Review</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-200/90 leading-relaxed">
                          No capital guarantee mechanisms exist at protocol level in accordance with AAOIFI standards.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Security */}
                <Card className="border-border/60 bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-blue-400" />
                      </div>
                      <CardTitle className="font-display text-xl">Security Features</CardTitle>
                    </div>
                    <CardDescription className="text-sm">
                      Production-grade security measures and best practices
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>100% test coverage with comprehensive test suite</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Fuzz testing with 256+ iterations per function</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>ReentrancyGuard protection on all state changes</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Role-based access control (RBAC) implementation</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Aderyn static analysis in continuous integration</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-200/90 leading-relaxed">
                          External audit recommended before production deployment. Obtain SSB approval and conduct independent Sharia review.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Who Should Use This */}
              <div className="mb-12">
                <div className="text-center mb-8">
                  <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-3">
                    Who Should Use This?
                  </h2>
                  <p className="font-sans text-base text-foreground/70 max-w-2xl mx-auto">
                    Sharia Capital Standard is designed for organizations and developers building Sharia-compliant financial infrastructure
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {useCases.map((useCase) => {
                    const Icon = useCase.icon
                    return (
                      <Card key={useCase.title} className="border-border/60 bg-black/30 backdrop-blur hover:border-[#FFC700]/30 transition-all duration-300 group">
                        <CardContent className="flex items-start gap-4 p-6">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFC700]/20 to-[#ebb800]/10 border border-[#FFC700]/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#FFC700]/40 transition-colors">
                            <Icon className="w-7 h-7 text-[#FFC700]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-display text-base font-semibold text-foreground mb-2">
                              {useCase.title}
                            </h3>
                            <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                              {useCase.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-6">
                  Documentation Sections
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {docSections.map((section) => {
                    const Icon = section.icon
                    return (
                      <Card
                        key={section.title}
                        className="border-border/60 bg-black/30 backdrop-blur hover:bg-black/40 transition-colors duration-300"
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FFC700]/20 to-[#ebb800]/10 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-[#FFC700]" />
                            </div>
                            {section.status === "coming-soon" && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-foreground/60 border border-white/10">
                                Coming Soon
                              </span>
                            )}
                          </div>
                          <CardTitle className="font-display text-xl text-foreground mt-4">
                            {section.title}
                          </CardTitle>
                          <CardDescription className="font-sans text-sm text-foreground/60">
                            {section.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* Community & Resources Section */}
              <div className="mt-16 sm:mt-20">
                <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-6 text-center">
                  Resources & Community
                </h2>
                <p className="font-sans text-base sm:text-lg text-foreground/70 mb-8 max-w-2xl mx-auto text-center">
                  Access the SDK, explore the codebase, and connect with developers building Sharia-compliant DeFi infrastructure.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {communityLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <Link
                        key={link.title}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group"
                      >
                        <Card className="border-border/60 bg-black/30 backdrop-blur hover:bg-black/40 transition-colors duration-300 h-full">
                          <CardContent className="flex flex-col items-center text-center p-6">
                            <div className={`w-14 h-14 rounded-full bg-white/5 group-hover:bg-[#FFC700]/10 flex items-center justify-center mb-4 transition-colors duration-200`}>
                              <Icon className={`w-7 h-7 ${link.color} transition-colors duration-200`} />
                            </div>
                            <h3 className="font-display text-base font-semibold text-foreground mb-2">
                              {link.title}
                            </h3>
                            <p className="font-sans text-sm text-foreground/60">
                              {link.description}
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-20 text-center">
                <div className="max-w-2xl mx-auto mb-8">
                  <h3 className="font-display text-2xl text-foreground mb-3">
                    Start Building Today
                  </h3>
                  <p className="font-sans text-base text-foreground/70">
                    Production-ready smart contracts for Sharia-compliant capital formation. Install via npm or explore the source code on GitHub.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="https://github.com/tawf-labs/Sharia-Capital-Standard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FFC700] to-[#ebb800] text-black font-sans font-semibold rounded-xl hover:shadow-lg hover:shadow-[#FFC700]/20 transition-all duration-200"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </Link>
                  <Link
                    href="https://www.npmjs.com/package/@tawf-labs/sharia-capital-standard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-foreground font-sans font-semibold rounded-xl transition-all duration-200"
                  >
                    <Package className="w-5 h-5" />
                    Install from npm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
