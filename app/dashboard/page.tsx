"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Progress } from "../../components/ui/progress"
import { Separator } from "../../components/ui/separator"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FFC700] to-[#ffe38a] bg-clip-text text-transparent">
          Tawf Dashboard
        </h1>
        <div className="flex space-x-4">
          <Button variant="outline" className="bg-background/50 backdrop-blur-sm">
            Connect Wallet
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-background/50 backdrop-blur-sm">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="dex">DEX</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
          <TabsTrigger value="staking">Staking</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Value Locked</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,234,567</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Proposals</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">Active governance proposals</p>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Your Stake</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234 TWF</div>
                <p className="text-xs text-muted-foreground">+12% APY</p>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Your Voting Power</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5%</div>
                <p className="text-xs text-muted-foreground">Of total voting power</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-sm">TXN</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Swap ETH for TWF</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">+1,234 TWF</p>
                        <p className="text-xs text-muted-foreground">Completed</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3 bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Active Proposals</CardTitle>
                <CardDescription>Vote on active governance proposals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="space-y-2 p-4 rounded-lg border">
                      <h4 className="font-medium">Proposal #{i}: Protocol Upgrade</h4>
                      <Progress value={i === 1 ? 65 : 35} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>65% Yes</span>
                        <span>35% No</span>
                      </div>
                      <Button size="sm" className="w-full mt-2">
                        Vote Now
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="dex" className="space-y-4">
          <Card className="bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Swap Tokens</CardTitle>
              <CardDescription>Trade tokens with low slippage and competitive rates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="from">From</Label>
                  <div className="relative">
                    <Input id="from" placeholder="0.0" className="text-2xl h-16 pl-4 pr-24" />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Button variant="outline" className="gap-2">
                        <span className="h-4 w-4 rounded-full bg-blue-500"></span>
                        ETH
                      </Button>
                    </div>
                  </div>
                  <p className="text-right text-sm text-muted-foreground">Balance: 1.5 ETH</p>
                </div>
                
                <div className="flex justify-center">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="m7 15 5 5 5-5"/>
                      <path d="m7 9 5-5 5 5"/>
                    </svg>
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="to">To</Label>
                  <div className="relative">
                    <Input id="to" placeholder="0.0" className="text-2xl h-16 pl-4 pr-24" />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Button variant="outline" className="gap-2">
                        <span className="h-4 w-4 rounded-full bg-yellow-400"></span>
                        TWF
                      </Button>
                    </div>
                  </div>
                  <p className="text-right text-sm text-muted-foreground">Balance: 0 TWF</p>
                </div>
                
                <div className="space-y-4 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Price</span>
                    <span>1 ETH = 1,234 TWF</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Slippage</span>
                    <span>0.5%</span>
                  </div>
                  <Separator />
                  <Button className="w-full h-12 text-base">Swap</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="governance" className="space-y-4">
          <Card className="bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Governance</CardTitle>
                  <CardDescription>Participate in protocol governance</CardDescription>
                </div>
                <Button>Create Proposal</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 border rounded-lg space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">Proposal #{i}: Protocol Upgrade v1.{i}.0</h3>
                      <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">Active</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Upgrade the protocol to version 1.{i}.0 with new features and optimizations.
                    </p>
                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between text-sm">
                        <span>Yes: 65%</span>
                        <span>No: 35%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: '65%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1,234 votes</span>
                        <span>2 days left</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">Vote Yes</Button>
                      <Button variant="outline" size="sm" className="flex-1">Vote No</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="staking" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Stake TWF</CardTitle>
                <CardDescription>Stake your TWF tokens to earn rewards and participate in governance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="stake-amount">Amount to Stake</Label>
                      <span className="text-sm text-muted-foreground">Available: 5,000 TWF</span>
                    </div>
                    <div className="relative">
                      <Input id="stake-amount" placeholder="0.0" className="text-2xl h-16 pl-4 pr-24" />
                      <Button variant="outline" size="sm" className="absolute right-2 top-1/2 -translate-y-1/2">
                        MAX
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Staking APY</span>
                      <span className="text-sm font-medium">12.5%</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Your current stake</span>
                      <span>1,234 TWF</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Your rewards</span>
                      <span>123.45 TWF</span>
                    </div>
                  </div>
                  
                  <Button className="w-full h-12">Stake TWF</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Your Staking Position</CardTitle>
                <CardDescription>Manage your staked tokens and rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="text-sm text-muted-foreground">Total Staked</p>
                        <p className="text-2xl font-bold">1,234 TWF</p>
                      </div>
                      <div className="h-12 w-px bg-border"></div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">APY</p>
                        <p className="text-2xl font-bold text-green-500">12.5%</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Available to claim</span>
                        <span>123.45 TWF</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total rewards earned</span>
                        <span>456.78 TWF</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Next reward distribution</span>
                        <span>in 2 days</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">Claim Rewards</Button>
                    <Button variant="outline" className="w-full" disabled>
                      Unstake TWF (7 days cooldown)
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
