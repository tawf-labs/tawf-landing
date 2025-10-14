"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useState } from "react"

export default function PortalPage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [connected, setConnected] = useState(false)
  const [account, setAccount] = useState<string | null>(null)

  // Buy mock state
  const [buyAmount, setBuyAmount] = useState('')
  const [buyMessage, setBuyMessage] = useState<string | null>(null)

  // Bridge mock state
  const [bridgeFrom, setBridgeFrom] = useState('Ethereum')
  const [bridgeTo, setBridgeTo] = useState('Haqq')
  const [bridgeAmount, setBridgeAmount] = useState('')
  const [bridgeMessage, setBridgeMessage] = useState<string | null>(null)

  const toggleConnect = () => {
    if (!connected) {
      // mock connect
      const mock = '0xDEADbeefC0FFEE123456'
      setAccount(mock)
      setConnected(true)
    } else {
      setAccount(null)
      setConnected(false)
    }
  }

  const handleBuy = () => {
    if (!buyAmount || Number(buyAmount) <= 0) {
      setBuyMessage('Enter a valid amount')
      return
    }
    setBuyMessage(`Purchased ${buyAmount} TWF (mock) 👍`)
    setBuyAmount('')
    // auto hide after a bit
    setTimeout(() => setBuyMessage(null), 3000)
  }

  const handleBridge = () => {
    if (!bridgeAmount || Number(bridgeAmount) <= 0) {
      setBridgeMessage('Enter a valid amount')
      return
    }
    setBridgeMessage(`Bridged ${bridgeAmount} from ${bridgeFrom} → ${bridgeTo} (mock)`)
    setBridgeAmount('')
    setTimeout(() => setBridgeMessage(null), 3000)
  }
  const stakingPools = [
    {
      name: "Haqq Network",
      apy: "12.5%",
      tvl: "$4.2M",
      chain: "Haqq",
      halal: true,
      link: "https://haqq.network"
    },
    {
      name: "Base Network",
      apy: "8.9%",
      tvl: "$12.7M",
      chain: "Base",
      halal: true,
      link: "https://base.org"
    },
    {
      name: "Inshallah Finance",
      apy: "15.2%",
      tvl: "$6.8M",
      chain: "Ethereum",
      halal: true,
      link: "https://inshallah.fi"
    },
    {
      name: "Islamic Coin Staking",
      apy: "10.3%",
      tvl: "$8.5M",
      chain: "Haqq",
      halal: true,
      link: "https://islamiccoin.net"
    },
  ]

  // Simple client-side anchor navigation helper
  const navigateTo = (hash: string) => {
    if (typeof window !== 'undefined') {
      // ensure the hash starts with #
      const h = hash.startsWith('#') ? hash : `#${hash}`
      window.location.hash = h
    }
  }

  return (
    <div className="min-h-screen bg-black/95 text-white">
      {/* Navigation Bar */}
  <nav className="bg-gradient-to-r from-black/95 via-black/90 to-black/80 backdrop-blur-md border-b border-amber-900/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/20 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-amber-100 font-bold text-lg">T</span>
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
                  TAWF PORTAL
                </span>
              </Link>
              <div className="hidden md:ml-10 md:flex md:items-center md:space-x-8">
                <Link href="/" className="relative px-3 py-2 text-sm font-medium text-amber-100 hover:text-white group">
                  <span>Home</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </Link>
                <div className="relative group">
                  <button className="px-3 py-2 text-sm font-medium text-amber-100 hover:text-white flex items-center group">
                    <span>Dapps</span>
                    <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 border border-gray-800 hidden group-hover:block z-50">
                    <div className="p-2">
                      <a href="https://zkt.app" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md hover:text-white flex items-center">
                        zkt.app <ExternalLink className="w-3 h-3 ml-2" />
                      </a>
                      <a href="https://qrbn.app" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded-md hover:text-white flex items-center">
                        qrbn.app <ExternalLink className="w-3 h-3 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
                <Link href="#staking" className="text-gray-300 hover:text-white transition-colors">Staking</Link>
                <Link href="#swap" className="text-gray-300 hover:text-white transition-colors">Swap</Link>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {/* Mobile menu button (shows on small screens) */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-expanded={mobileOpen}
                  aria-label="Toggle menu"
                  className="inline-flex items-center justify-center text-amber-100 bg-transparent border border-transparent p-1.5 rounded-md hover:bg-gray-800/50 text-sm h-9 w-9"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>
              </div>

              {/* Desktop buttons (hidden on small screens) */}
              <div className="hidden md:flex items-center space-x-3">
                <Button onClick={toggleConnect} variant="outline" className="bg-transparent border-gray-700 hover:bg-gray-800 text-white text-sm px-3 py-1 h-9">
                  {connected ? `${account?.slice(0,6)}...` : 'Connect'}
                </Button>
                <Button onClick={() => navigateTo('#buy')} className="bg-gradient-to-r from-[#FFC700] to-[#ffe38a] text-black hover:opacity-90 font-medium text-sm px-3 py-1 h-9 rounded-md">
                  Buy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-b border-gray-800">
          <div className="px-4 py-3 space-y-2">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:text-white">Home</Link>
            <button className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:text-white">Dapps</button>
            <Link href="#staking" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Staking</Link>
            <Link href="#swap" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Swap</Link>
            <div className="flex space-x-3 pt-2">
              <Button variant="outline" className="flex-1 bg-transparent border-gray-700 hover:bg-gray-800 text-white text-sm px-3 py-2 h-9">
                Connect
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-[#FFC700] to-[#ffe38a] text-black hover:opacity-90 font-medium text-sm px-3 py-2 h-9 rounded-md">
                Buy
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Buy panel */}
      <div id="buy" className="container mx-auto px-4 py-6">
        <div className="max-w-2xl mx-auto bg-black/95 border border-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Buy TWF (mock)</h3>
          <div className="flex items-center space-x-2">
            <input
              value={buyAmount}
              onChange={(e) => setBuyAmount(e.target.value)}
              placeholder="Amount"
              className="w-full bg-gray-900/60 border border-gray-800 rounded-md px-3 py-2 text-white"
            />
            <Button onClick={handleBuy} className="bg-gradient-to-r from-[#FFC700] to-[#ffe38a] text-black">Buy</Button>
          </div>
          {buyMessage && <div className="mt-3 text-sm text-amber-300">{buyMessage}</div>}
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="bg-black/95 border border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Portfolio Value</CardTitle>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#FFC700] to-[#ffe38a] bg-clip-text text-transparent">$0.00</div>
                <div className="text-sm text-gray-400">0.00 TWF</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={() => navigateTo('#swap')} className="w-full bg-gradient-to-r from-[#FFC700] to-[#ffe38a] text-black hover:opacity-90 font-medium">
                  Deposit
                </Button>
                <Button onClick={() => navigateTo('#swap')} variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
                  Withdraw
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/95 border border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">Your Assets</CardTitle>
                  <span className="text-xs text-gray-400">Value in USD</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { asset: 'TWF', balance: '0.00', value: '0.00' },
                    { asset: 'USDC', balance: '0.00', value: '0.00' },
                    { asset: 'ETH', balance: '0.00', value: '0.00' },
                    { asset: 'ISLM', balance: '0.00', value: '0.00' },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-800/50 rounded-lg transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          item.asset === 'TWF' ? 'bg-gradient-to-r from-[#FFC700] to-[#ffe38a]' : 
                          item.asset === 'USDC' ? 'bg-gray-400' : 
                          item.asset === 'ETH' ? 'bg-gray-600' : 'bg-[#FFC700]'
                        }`}>
                          <span className="text-xs font-bold text-black">{item.asset}</span>
                        </div>
                        <div>
                          <div className="font-medium">{item.asset}</div>
                          <div className="text-xs text-gray-400">${item.value}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{item.balance}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6 space-y-6">
            <Tabs defaultValue="swap" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-900/50 p-1 rounded-lg border border-gray-800">
                <TabsTrigger 
                  value="swap" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FFC700]/20 data-[state=active]:to-[#ffe38a]/10 data-[state=active]:text-white data-[state=active]:border data-[state=active]:border-[#FFC700]/30"
                >
                  Swap
                </TabsTrigger>
                <TabsTrigger 
                  value="pools" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FFC700]/20 data-[state=active]:to-[#ffe38a]/10 data-[state=active]:text-white data-[state=active]:border data-[state=active]:border-[#FFC700]/30"
                >
                  Pools
                </TabsTrigger>
                <TabsTrigger 
                  value="bridge" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#FFC700]/20 data-[state=active]:to-[#ffe38a]/10 data-[state=active]:text-white data-[state=active]:border data-[state=active]:border-[#FFC700]/30"
                >
                  Bridge
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="swap" className="mt-6">
                <Card className="bg-black/95 border border-gray-800">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <Label className="text-gray-300">From</Label>
                          <span className="text-sm text-gray-400">Balance: 0.00</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                          <Input 
                            type="number" 
                            placeholder="0.0" 
                            className="border-0 bg-transparent text-2xl p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-gray-600 h-auto"
                          />
                          <Button variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700 h-10">
                            <span className="mr-2 font-medium">ETH</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                          </Button>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 px-1">
                          <span>≈ $0.00</span>
                          <button className="text-[#FFC700] hover:text-[#ffe38a] transition-colors">Max</button>
                        </div>
                      </div>

                      <div className="flex justify-center -my-2">
                        <Button variant="outline" size="icon" className="rounded-full border-gray-700 bg-gray-900 hover:bg-gray-800 h-10 w-10">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFC700]">
                            <path d="m3 16 4 4 4-4"/>
                            <path d="M7 4v16"/>
                            <path d="m21 8-4-4-4 4"/>
                            <path d="M17 4v16"/>
                          </svg>
                        </Button>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <Label className="text-gray-300">To</Label>
                          <span className="text-sm text-gray-400">Balance: 0.00</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                          <Input 
                            type="number" 
                            placeholder="0.0" 
                            className="border-0 bg-transparent text-2xl p-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-gray-600 h-auto"
                          />
                          <Button variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700 h-10">
                            <span className="mr-2 font-medium">TWF</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                          </Button>
                        </div>
                        <div className="text-xs text-gray-500 px-1">
                          ≈ $0.00
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>Price</span>
                          <span>1 ETH = 2,500 TWF</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>Price Impact</span>
                          <span className="text-green-400">0.05%</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>Network Fee</span>
                          <span>$1.23</span>
                        </div>
                      </div>

                      <Button onClick={() => navigateTo('#swap')} className="w-full h-14 bg-gradient-to-r from-[#FFC700] to-[#ffe38a] text-black hover:opacity-90 text-lg font-semibold rounded-xl mt-4">
                              Connect Wallet
                            </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="bridge" className="mt-6">
                <Card className="bg-black/95 border border-gray-800">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <Label className="text-gray-300">From</Label>
                          <select value={bridgeFrom} onChange={(e) => setBridgeFrom(e.target.value)} className="w-full bg-gray-900/60 border border-gray-800 rounded-md px-3 py-2 text-white">
                            <option>Ethereum</option>
                            <option>Base</option>
                            <option>Haqq</option>
                          </select>
                        </div>
                        <div className="flex-1">
                          <Label className="text-gray-300">To</Label>
                          <select value={bridgeTo} onChange={(e) => setBridgeTo(e.target.value)} className="w-full bg-gray-900/60 border border-gray-800 rounded-md px-3 py-2 text-white">
                            <option>Haqq</option>
                            <option>Base</option>
                            <option>Ethereum</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label className="text-gray-300">Amount</Label>
                        <Input value={bridgeAmount} onChange={(e) => setBridgeAmount(e.target.value)} placeholder="0.0" type="number" className="bg-gray-900/60 border border-gray-800" />
                      </div>

                      <div className="flex items-center space-x-3">
                        <Button onClick={handleBridge} className="bg-gradient-to-r from-[#FFC700] to-[#ffe38a] text-black">Bridge (mock)</Button>
                        <Button variant="outline" onClick={() => { setBridgeAmount(''); setBridgeMessage(null) }} className="border-gray-700 text-gray-300">Reset</Button>
                      </div>

                      {bridgeMessage && <div className="text-amber-300">{bridgeMessage}</div>}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Market Data */}
            <Card className="bg-black/95 border border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Market Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-400 text-sm">
                        <th className="pb-4 font-medium">Asset</th>
                        <th className="pb-4 text-right font-medium">Price</th>
                        <th className="pb-4 text-right font-medium">24h Change</th>
                        <th className="pb-4 text-right font-medium">TVL</th>
                        <th className="pb-4 text-right font-medium">Volume (24h)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {[
                        { asset: 'TWF/ETH', price: '0.00042', change: '+2.4%', tvl: '$1.2M', volume: '$420K' },
                        { asset: 'TWF/USDC', price: '1.42', change: '-0.8%', tvl: '$890K', volume: '$210K' },
                        { asset: 'TWF/ISLM', price: '0.85', change: '+0.5%', tvl: '$750K', volume: '$180K' },
                        { asset: 'ETH/USDC', price: '3,400.12', change: '+1.2%', tvl: '$2.1M', volume: '$1.5M' },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-gray-800/50 cursor-pointer group">
                          <td className="py-4 font-medium">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FFC700] to-[#ffe38a] flex items-center justify-center text-xs font-bold text-black">
                                {row.asset.split('/')[0]}
                              </div>
                              <span>{row.asset}</span>
                            </div>
                          </td>
                          <td className="py-4 text-right font-mono">{row.price}</td>
                          <td className={`py-4 text-right font-mono ${row.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                            {row.change}
                          </td>
                          <td className="py-4 text-right font-mono">{row.tvl}</td>
                          <td className="py-4 text-right font-mono">{row.volume}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Staking Pools Section */}
            <div id="staking" className="pt-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FFC700] to-[#ffe38a] bg-clip-text text-transparent">Halal Staking Pools</h2>
                <Button onClick={() => navigateTo('#staking')} variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  View All Pools
                </Button>
              </div>
              
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stakingPools.map((pool, index) => (
                  <Card key={index} className="bg-black/95 border border-gray-800 hover:border-[#FFC700]/30 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-semibold">{pool.name}</h3>
                            {pool.halal && (
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">Halal Certified</Badge>
                            )}
                          </div>
                          <div className="flex items-center mt-1 text-sm text-gray-400">
                            <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                            {pool.chain}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold bg-gradient-to-r from-[#FFC700] to-[#ffe38a] bg-clip-text text-transparent">
                            {pool.apy} APY
                          </div>
                          <div className="text-xs text-gray-400">TVL: {pool.tvl}</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-800">
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>Your Stake</span>
                          <span>0.00 TWF</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2.5">
                          <div 
                            className="bg-gradient-to-r from-[#FFC700] to-[#ffe38a] h-2.5 rounded-full" 
                            style={{ width: '0%' }}
                          ></div>
                        </div>
                        <div className="flex justify-between mt-3">
                          <Button onClick={() => navigateTo('#staking')} variant="outline" size="sm" className="text-xs border-gray-700 hover:bg-gray-800">
                            Stake
                          </Button>
                          <a 
                            href={pool.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-xs flex items-center text-[#FFC700] hover:text-[#ffe38a] transition-colors"
                          >
                            View Pool <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">Looking for more staking options?</p>
                <Button onClick={() => navigateTo('#staking')} variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  Explore All Pools
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <nav className="bg-black/95 text-white flex justify-between p-4">
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-[#FFC700] transition-colors">Home</a>
          <a href="#" className="hover:text-[#FFC700] transition-colors">About</a>
          <a href="#" className="hover:text-[#FFC700] transition-colors">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-[#FFC700] transition-colors">Twitter</a>
          <a href="#" className="hover:text-[#FFC700] transition-colors">Discord</a>
        </div>
      </nav>
    </div>
  )
}
