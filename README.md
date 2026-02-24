<h1 align="center">TAWF.xyz</h1>

<p align="center">
  Shariah-compliant Web3 infrastructure for verified faith-based actions, bringing Islamic finance, philanthropy, and governance on-chain with transparency, auditability, and privacy-preservation.
</p>

<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  </a>
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js">
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/License-TBD-lightgrey?style=flat-square" alt="License">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Status-Early%20Stage-orange?style=flat-square" alt="Status">
  </a>
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> |
  <a href="#ecosystem">Ecosystem</a> |
  <a href="#architecture">Architecture</a> |
  <a href="#development">Development</a>
</p>

---

## Overview

TAWF.xyz is **not a single app**, but an **ecosystem of interoperable decentralized applications (dApps)** that follow **Islamic (Shariah) principles**, enabling Muslims to participate in blockchain without compromising their faith.

## Core Principles

| Principle | Description |
|-----------|-------------|
| 🚫 No Riba | Zero interest-based mechanisms |
| 📜 Asset-Backed | Purpose-driven, real-world backed funds |
| 🔍 Radical Transparency | All donations and funds traceable on-chain |
| 🔒 Privacy by Design | ZK proofs for sensitive data without public exposure |
| ⚖️ Ethical Governance | Trust (amanah) and Shariah oversight built-in |

## Features

| Feature | Description |
|---------|-------------|
| 🕌 Shariah-Compliant | Built from ground up following Islamic finance principles |
| 🔐 Zero-Knowledge Proofs | Prove eligibility, compliance, and solvency privately |
| 🌐 Multi-Chain Ready | Base Sepolia, Lisk Sepolia, and more chains supported |
| 💎 Web3 Native | Wallet integration via Xellar Kit and Wagmi |
| 🎨 Modern UI/UX | 3D particle systems, dark theme, responsive design |
| ⚡ Decentralized Governance | DAO-like governance with Shariah constraints |

## Ecosystem

### 1. ZKT (Zakat / Infaq / Sadaqah / Waqf)

| Aspect | Details |
|--------|---------|
| Purpose | On-chain charitable giving with transparent fund flows |
| Features | Proof of distribution, optional ZK proofs |
| ZK Capabilities | Eligibility, Compliance, Solvency verification |
| Focus | **Trust + accountability in donations** |

### 2. QRBN.app (Qurban & Farm Financing)

| Aspect | Details |
|--------|---------|
| Purpose | On-chain qurban marketplace |
| Features | Shariah-compliant farm financing, NFT proofs |
| Verification | Animal existence, slaughter fulfillment, distribution |
| Focus | **From intention (niyyah) to verified sacrifice** |

### 3. Waqf Infrastructure

| Aspect | Details |
|--------|---------|
| Purpose | Perpetual charity with on-chain guarantees |
| Features | Non-custodial waqf pools, smart contract locked funds |
| Rules | Clear purpose and usage rules enforced |
| Focus | **Long-term, sustainable impact** |

### 4. Shariah Governance Layer

| Aspect | Details |
|--------|---------|
| Purpose | DAO-like governance with Islamic oversight |
| Features | Multisig safety, Shariah council protocol layer |
| Future | ZK-based compliance proofs |
| Focus | **Decentralization without losing Islamic oversight** |

### 5. Proof Layer (ZK & NFTs)

| Proof Type | Description |
|------------|-------------|
| Soulbound NFTs | Non-transferable proofs for donations, qurban, participation |
| IPFS Storage | Documents, reports, and evidence |
| ZK Proofs | Shariah compliance, solvency, eligibility |
| Focus | **"Don't trust, verify, without exposing private data"** |

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      User / Wallet                          │
│   • Xellar Kit integration                                  │
│   • Wagmi wallet connection                                 │
│   • Multi-chain support (Base, Lisk)                        │
└─────────────────────────┬───────────────────────────────────┘
                          │ User Actions
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                     Frontend Layer                          │
│   • Next.js 16 App Router                                   │
│   • React 19 with Server Components                         │
│   • Three.js 3D particle system                             │
│   • Radix UI + Tailwind CSS                                 │
└─────────────────────────┬───────────────────────────────────┘
                          │ API / RPC Calls
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                   dApp Modules                              │
│   • Dashboard: Portfolio, Staking, Swap, Bridge             │
│   • Governance: Proposals, Voting, DID, Shariah Council     │
│   • Transparency: Fund tracking, Impact verification        │
└─────────────────────────┬───────────────────────────────────┘
                          │ On-Chain Interactions
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                   Privacy Layer                             │
│   • Zero-Knowledge proofs for sensitive data                │
│   • Soulbound NFTs for non-transferable proofs              │
│   • IPFS for decentralized document storage                 │
└─────────────────────────┬───────────────────────────────────┘
                          │ Verified Actions
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                   Smart Contracts                           │
│   • Shariah-compliant fund management                       │
│   • Waqf pools with locked funds                            │
│   • Governance with Islamic oversight                       │
└─────────────────────────────────────────────────────────────┘
```

## Project Structure

```
Tawf_labs/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles
│   ├── providers.tsx           # Web3 providers wrapper
│   ├── dashboard/              # Dashboard interface
│   ├── governance/             # Governance portal
│   ├── team/                   # Team page
│   └── transparency/           # Transparency reports
│
├── components/
│   ├── dashboard/              # Dashboard components
│   │   ├── BridgePanel.tsx     # Cross-chain bridge
│   │   ├── PortfolioPanel.tsx  # Portfolio overview
│   │   ├── StakingPanel.tsx    # Staking interface
│   │   └── SwapPanel.tsx       # Token swap
│   │
│   ├── governance/             # Governance components
│   │   ├── ProposalCard.tsx    # Proposal display
│   │   ├── ShariaProposalCard.tsx  # Shariah proposals
│   │   └── GovernanceSidebar.tsx   # Navigation
│   │
│   ├── gl/                     # 3D graphics (Three.js)
│   │   ├── particles.tsx       # Particle system
│   │   └── shaders/            # Custom GLSL shaders
│   │
│   ├── sections/               # Landing page sections
│   │   ├── about.tsx
│   │   ├── ecosystem.tsx
│   │   └── governance.tsx
│   │
│   └── ui/                     # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
│
├── lib/
│   ├── governance.ts           # Governance utilities
│   └── utils.ts                # General utilities
│
└── public/
    └── logos/                  # Brand assets
```

## Quick Start

### Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | ≥ 18.0.0 |
| pnpm | Latest |

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/Tawf_labs.git
cd Tawf_labs

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Visit `http://localhost:3000` to view the application.

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

### Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 with App Router |
| Language | TypeScript 5.0 |
| UI Library | React 19 |
| Styling | Tailwind CSS 4.1 |
| Components | Radix UI Primitives |
| 3D Graphics | Three.js via React Three Fiber |
| Web3 | Wagmi 2.19 + Xellar Kit 2.5 |
| State | TanStack Query |
| Animations | Framer Motion |

### Web3 Configuration

| Chain | Network |
|-------|---------|
| Base | Sepolia Testnet |
| Lisk | Sepolia Testnet |

## Roadmap

| Status | Phase | Features |
|--------|-------|----------|
| ✅ | **Phase 1: Foundation** | Zakat calculation, ecosystem design, compliance validation |
| ⬜ | **Phase 2: Expansion** | Qurbani tracking, donation transparency, Sadaqah/Fidya/Kaffarah modules |
| ⬜ | **Phase 3: Governance** | Full Shariah governance framework, regional expansion, advanced ZK proofs |

### Feature Progress

| Status | Feature |
|--------|---------|
| ✅ | Landing page with 3D particle system |
| ✅ | Dashboard interface (Portfolio, Staking, Swap, Bridge) |
| ✅ | Governance portal with proposal system |
| ✅ | Wallet integration (Xellar Kit + Wagmi) |
| ✅ | Dark theme with responsive design |
| ⬜ | Smart contract deployment |
| ⬜ | ZK proof integration |
| ⬜ | Soulbound NFT minting |
| ⬜ | IPFS document storage |
| ⬜ | Production solver network |

## Why TAWF?

| Traditional Crypto | TAWF Approach |
|-------------------|---------------|
| Speculative | Purpose-driven |
| Lacks accountability | Fully transparent on-chain |
| Conflicts with Islamic finance | Shariah-compliant by design |
| Hype-focused | Impact-focused |

> **TAWF flips the narrative**: Purpose over speculation. Impact over hype. Faith-aligned design from day one.

## Community & Partners

TAWF Labs works closely with:

| Partner Type | Collaboration |
|--------------|---------------|
| 🕌 Islamic Organizations | Shariah validation and compliance |
| 🏛️ Masjids & NGOs | Real-world implementation |
| 📚 Shariah Scholars | Advisory and oversight |
| 🤝 Web3 Projects | Technical integration |

## Connect With Us

<p align="center">
  <a href="https://x.com/tawfprotocol">
    <img src="https://img.shields.io/badge/Twitter-@tawfecosystem-1DA1F2?style=flat-square&logo=twitter&logoColor=white" alt="Twitter">
  </a>
  <a href="https://linkedin.com/company/tawf-labs">
    <img src="https://img.shields.io/badge/LinkedIn-tawf--labs-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://instagram.com/tawflabs">
    <img src="https://img.shields.io/badge/Instagram-@tawflabs-E4405F?style=flat-square&logo=instagram&logoColor=white" alt="Instagram">
  </a>
</p>

## Contributing

Contributions are welcome! Formal contribution guidelines will be introduced as APIs and governance structures are finalized. For now, please:

1. Open an issue to discuss proposed changes
2. Fork the repository
3. Create a feature branch
4. Submit a pull request

## License

*License to be determined based on ecosystem maturity and partner requirements.*

## Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [Three.js](https://threejs.org/) for 3D graphics capabilities
- [Wagmi](https://wagmi.sh/) for Web3 React hooks
- [Xellar Kit](https://xellar.co/) for wallet integration
- Islamic finance scholars and advisors for Shariah guidance

---

<p align="center">
  <strong>Built with purpose. Verified by design. Aligned with faith.</strong>
</p>

<p align="center">
  بسم الله الرحمن الرحيم
</p>
