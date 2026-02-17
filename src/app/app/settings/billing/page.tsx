"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap } from "lucide-react"

export default function TeacherBillingPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Billing & Plans</h1>
                <p className="text-slate-500 dark:text-slate-400">Manage your subscription and usage limits.</p>
            </div>

            {/* Current Plan Card - Keep dark/vibrant as it is a specific card style */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 p-8 text-white shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Zap className="w-64 h-64 rotate-12" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                            <Star className="w-3 h-3 fill-current" />
                            MagicSchool Plus
                        </div>
                        <h2 className="text-3xl font-bold mb-2">Unlimited Access</h2>
                        <p className="text-white/80 max-w-md">
                            You are on the Plus plan. Enjoy unlimited generations, priority support, and exclusive access to new tools.
                        </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-4">
                        <div className="text-right">
                            <div className="text-sm text-white/60">Renews on</div>
                            <div className="font-mono font-medium">June 15, 2026</div>
                        </div>
                        <Button className="bg-white text-violet-700 hover:bg-white/90 font-bold shadow-lg">
                            Manage Subscription
                        </Button>
                    </div>
                </div>
            </div>

            <SettingsSection title="Usage Statistics" variant="slate">
                <SettingsCard variant="slate">
                    <SettingsCardContent className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: "Generations", value: "Unlimited", sub: "245 used this month", color: "text-green-500 dark:text-green-400" },
                            { label: "Output History", value: "Forever", sub: "Never deleted", color: "text-blue-500 dark:text-blue-400" },
                            { label: "Student Rooms", value: "Active", sub: "12 rooms open", color: "text-purple-500 dark:text-purple-400" },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</h4>
                                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                                <p className="text-xs text-slate-500 dark:text-slate-500">{stat.sub}</p>
                            </div>
                        ))}
                    </SettingsCardContent>
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
