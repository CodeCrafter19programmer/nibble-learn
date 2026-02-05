"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    Check,
    X,
    Cpu,
    Users,
    Shield
} from "lucide-react"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"
import Link from "next/link"

const plans = [
    {
        name: "Basic",
        price: "$199",
        period: "/month",
        description: "Essential tools for small schools.",
        features: [
            "Up to 500 Students",
            "Up to 20 Teachers",
            "Basic AI Features (10k tokens)",
            "Standard Support",
            "Basic Analytics"
        ],
        missing: ["Advanced AI Grading", "API Access"],
        color: "blue",
        popular: false
    },
    {
        name: "Standard",
        price: "$499",
        period: "/month",
        description: "Perfect for growing institutions.",
        features: [
            "Up to 2,000 Students",
            "Up to 100 Teachers",
            "Advanced AI (60k tokens)",
            "Priority Support",
            "Advanced Analytics",
            "AI Grading Assistant"
        ],
        missing: ["API Access", "Custom Integrations"],
        color: "indigo",
        popular: true
    },
    {
        name: "Premium",
        price: "$999",
        period: "/month",
        description: "For large schools needing full power.",
        features: [
            "Unlimited Students",
            "Unlimited Teachers",
            "Unlimited AI Usage",
            "24/7 Dedicated Support",
            "Custom API Access",
            "White-glove Onboarding",
            "SLA Guarantee"
        ],
        missing: [],
        color: "purple",
        popular: false
    }
]

export default function PlanSelection() {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <div className="space-y-8 max-w-6xl mx-auto py-8">
            <div className="text-center space-y-4">
                <h1 className={cn("text-3xl font-bold", isLight ? "text-slate-900" : "text-white")}>Choose the Right Plan for Your School</h1>
                <p className={cn("text-lg max-w-2xl mx-auto", isLight ? "text-slate-600" : "text-slate-400")}>
                    Scalable solutions for schools of all sizes. Upgrade or downgrade at any time.
                </p>

                {/* Toggle Monthly/Yearly (Mock) */}
                <div className="flex items-center justify-center gap-4 mt-6">
                    <span className={cn("text-sm font-medium", isLight ? "text-slate-900" : "text-white")}>Monthly</span>
                    <div className="w-12 h-6 rounded-full bg-slate-200 dark:bg-slate-700 relative cursor-pointer">
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all" />
                    </div>
                    <span className={cn("text-sm font-medium opacity-50", isLight ? "text-slate-900" : "text-white")}>Yearly (-20%)</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                {plans.map((plan, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={cn(
                            "relative border rounded-2xl p-8 flex flex-col h-full transition-all hover:-translate-y-2",
                            isLight
                                ? "bg-white border-slate-200 shadow-sm hover:shadow-xl"
                                : "bg-slate-900 border-slate-800 hover:border-slate-700",
                            plan.popular && (isLight ? "border-indigo-500 ring-1 ring-indigo-500 shadow-indigo-100" : "border-indigo-500 ring-1 ring-indigo-900")
                        )}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className={cn("text-lg font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>{plan.name}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className={cn("text-4xl font-bold", isLight ? "text-slate-900" : "text-white")}>{plan.price}</span>
                                <span className="text-slate-500">{plan.period}</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-2">{plan.description}</p>
                        </div>

                        <div className="flex-1 space-y-4 mb-8">
                            {plan.features.map((feature, j) => (
                                <div key={j} className="flex items-start gap-3">
                                    <div className={cn(
                                        "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                        isLight ? "bg-green-100 text-green-600" : "bg-green-900/30 text-green-400"
                                    )}>
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <span className={cn("text-sm", isLight ? "text-slate-700" : "text-slate-300")}>{feature}</span>
                                </div>
                            ))}
                            {plan.missing.map((feature, j) => (
                                <div key={j} className="flex items-start gap-3 opacity-50">
                                    <div className={cn(
                                        "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                        isLight ? "bg-slate-100 text-slate-400" : "bg-slate-800 text-slate-500"
                                    )}>
                                        <X className="w-3 h-3" />
                                    </div>
                                    <span className={cn("text-sm", isLight ? "text-slate-500" : "text-slate-500")}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link href={`/school/billing/confirmation?plan=${plan.name}`}>
                            <button className={cn(
                                "w-full py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-95",
                                plan.popular
                                    ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/20"
                                    : isLight
                                        ? "bg-slate-100 text-slate-900 hover:bg-slate-200"
                                        : "bg-slate-800 text-white hover:bg-slate-700"
                            )}>
                                Select {plan.name}
                            </button>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
