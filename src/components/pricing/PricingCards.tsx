"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X, Sparkles, Building2, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PlanFeature {
    text: string
    included: boolean
    highlight?: boolean
}

interface PricingPlan {
    id: string
    name: string
    description: string
    monthlyPrice: number | null
    annualPrice: number | null
    annualBilled: number | null
    features: PlanFeature[]
    cta: string
    ctaLink: string
    popular?: boolean
    badge?: string
    theme: "light" | "dark" | "cream"
}

const plans: PricingPlan[] = [
    {
        id: "free",
        name: "Free",
        description: "Get started with essential AI tools for teaching. Perfect for exploring what NibbleLearn can do.",
        monthlyPrice: 0,
        annualPrice: 0,
        annualBilled: 0,
        badge: "Active",
        theme: "cream",
        cta: "Get Started Free",
        ctaLink: "/signup",
        features: [
            { text: "Access to 80+ teacher tools", included: true },
            { text: "Access to 40+ student tools", included: true },
            { text: "Lesson planning tools", included: true },
            { text: "Quiz & worksheet generators", included: true },
            { text: "Basic Jarvis AI assistant", included: true },
            { text: "Student Rooms for AI literacy", included: true },
            { text: "Unlimited AI generations", included: false },
            { text: "Full output history", included: false },
            { text: "1-click Google/Microsoft exports", included: false },
            { text: "NibbleLearn Labs (early access)", included: false },
        ]
    },
    {
        id: "plus",
        name: "Plus",
        description: "Unlock unlimited generations, full history, and early access to new tools with NibbleLearn Labs.",
        monthlyPrice: 11.99,
        annualPrice: 8.33,
        annualBilled: 99.96,
        badge: "Save 27%",
        popular: true,
        theme: "dark",
        cta: "Start 7-day Free Trial",
        ctaLink: "/signup?plan=plus",
        features: [
            { text: "All Free plan features", included: true },
            { text: "Unlimited AI generations", included: true, highlight: true },
            { text: "Full output history", included: true, highlight: true },
            { text: "1-click exports to Google Docs, Slides", included: true },
            { text: "1-click exports to Microsoft Word, PPT", included: true },
            { text: "NibbleLearn Labs (early access)", included: true, highlight: true },
            { text: "Unlimited AI Slides generation", included: true },
            { text: "Continue threads with Jarvis", included: true },
            { text: "Priority email support", included: true },
            { text: "Advanced moderation (Enterprise)", included: false },
        ]
    },
    {
        id: "enterprise",
        name: "Enterprise",
        description: "Full district control with custom data privacy, SSO, advanced analytics, and dedicated support.",
        monthlyPrice: null,
        annualPrice: null,
        annualBilled: null,
        badge: "Popular",
        theme: "cream",
        cta: "Book a Demo",
        ctaLink: "/demo",
        features: [
            { text: "All Plus plan features", included: true },
            { text: "Custom data privacy agreements", included: true, highlight: true },
            { text: "Single Sign-On (SSO)", included: true, highlight: true },
            { text: "Advanced moderation & monitoring", included: true },
            { text: "PII detection & smart alerts", included: true },
            { text: "Custom tool creation for district", included: true },
            { text: "District-level analytics dashboard", included: true },
            { text: "LMS Integration (Canvas, Schoology)", included: true },
            { text: "Dedicated success manager", included: true, highlight: true },
            { text: "Onboarding & implementation support", included: true },
        ]
    }
]

export function PricingCards() {
    const [billingPeriod, setBillingPeriod] = useState<"annual" | "monthly">("annual")

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-sm font-bold text-violet-600 uppercase tracking-wider">
                        Pricing
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
                        Find the perfect plan for your needs
                    </h1>
                    <p className="text-xl text-slate-600">
                        Every educator uses AI differently. Our plans meet you where you are and scale with your goals.
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center mb-16">
                    <div className="relative bg-white rounded-full p-1 shadow-sm border border-slate-200">
                        <div className="flex">
                            <button
                                onClick={() => setBillingPeriod("annual")}
                                className={cn(
                                    "relative z-10 px-6 py-3 rounded-full text-sm font-semibold transition-colors",
                                    billingPeriod === "annual"
                                        ? "text-white"
                                        : "text-slate-600 hover:text-slate-900"
                                )}
                            >
                                Annual
                            </button>
                            <button
                                onClick={() => setBillingPeriod("monthly")}
                                className={cn(
                                    "relative z-10 px-6 py-3 rounded-full text-sm font-semibold transition-colors",
                                    billingPeriod === "monthly"
                                        ? "text-white"
                                        : "text-slate-600 hover:text-slate-900"
                                )}
                            >
                                Monthly
                            </button>
                        </div>
                        {/* Sliding Background */}
                        <motion.div
                            className="absolute top-1 bottom-1 bg-slate-900 rounded-full"
                            initial={false}
                            animate={{
                                x: billingPeriod === "annual" ? 0 : "100%",
                                width: billingPeriod === "annual" ? "50%" : "50%"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{ left: 4 }}
                        />
                    </div>
                    {billingPeriod === "annual" && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="ml-4 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold flex items-center gap-1"
                        >
                            <Star className="w-3 h-3 fill-current" />
                            Save 27%
                        </motion.div>
                    )}
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={cn(
                                "relative rounded-3xl p-8 transition-all duration-300",
                                plan.theme === "dark"
                                    ? "bg-slate-900 text-white border-2 border-amber-400 shadow-2xl shadow-amber-500/10"
                                    : "bg-amber-50/50 text-slate-900 border-2 border-slate-200 shadow-xl",
                                plan.popular && "lg:scale-105 z-10"
                            )}
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <div className={cn(
                                    "absolute -top-3 right-6 px-4 py-1 rounded-full text-xs font-bold",
                                    plan.popular
                                        ? "bg-amber-400 text-slate-900"
                                        : "bg-slate-200 text-slate-700"
                                )}>
                                    {plan.badge}
                                </div>
                            )}

                            {/* Plan Name */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center",
                                    plan.theme === "dark" ? "bg-white/10" : "bg-violet-100"
                                )}>
                                    {plan.id === "enterprise"
                                        ? <Building2 className={cn("w-5 h-5", plan.theme === "dark" ? "text-white" : "text-violet-600")} />
                                        : <Sparkles className={cn("w-5 h-5", plan.theme === "dark" ? "text-amber-400" : "text-violet-600")} />
                                    }
                                </div>
                                <h3 className="text-2xl font-bold">{plan.name}</h3>
                            </div>

                            {/* Pricing */}
                            <div className="mb-4">
                                {plan.monthlyPrice !== null ? (
                                    <>
                                        <div className="flex items-baseline gap-2">
                                            {billingPeriod === "annual" && plan.monthlyPrice > 0 && (
                                                <span className={cn(
                                                    "text-2xl line-through",
                                                    plan.theme === "dark" ? "text-slate-500" : "text-slate-400"
                                                )}>
                                                    ${plan.monthlyPrice}
                                                </span>
                                            )}
                                            <span className="text-5xl font-extrabold">
                                                ${billingPeriod === "annual" ? plan.annualPrice : plan.monthlyPrice}
                                            </span>
                                            <span className={cn(
                                                "text-base",
                                                plan.theme === "dark" ? "text-slate-400" : "text-slate-500"
                                            )}>
                                                /month (USD)
                                            </span>
                                        </div>
                                        {billingPeriod === "annual" && plan.annualBilled && plan.annualBilled > 0 && (
                                            <p className={cn(
                                                "text-sm mt-1",
                                                plan.theme === "dark" ? "text-slate-400" : "text-slate-500"
                                            )}>
                                                ${plan.annualBilled} billed yearly
                                            </p>
                                        )}
                                    </>
                                ) : (
                                    <div>
                                        <span className="text-4xl font-extrabold">Custom</span>
                                        <p className={cn(
                                            "text-sm mt-1",
                                            plan.theme === "dark" ? "text-slate-400" : "text-slate-500"
                                        )}>
                                            $3-4 per student annually
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <p className={cn(
                                "text-sm leading-relaxed mb-6",
                                plan.theme === "dark" ? "text-slate-300" : "text-slate-600"
                            )}>
                                {plan.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={cn(
                                            "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                            feature.included
                                                ? "bg-green-500 text-white"
                                                : plan.theme === "dark" ? "bg-slate-700" : "bg-slate-200"
                                        )}>
                                            {feature.included
                                                ? <Check className="w-3 h-3" />
                                                : <X className={cn("w-3 h-3", plan.theme === "dark" ? "text-slate-500" : "text-slate-400")} />
                                            }
                                        </div>
                                        <span className={cn(
                                            "text-sm",
                                            !feature.included && (plan.theme === "dark" ? "text-slate-500" : "text-slate-400"),
                                            feature.highlight && "font-semibold"
                                        )}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link href={plan.ctaLink} className="block">
                                <Button
                                    className={cn(
                                        "w-full h-12 rounded-xl text-base font-semibold transition-all",
                                        plan.theme === "dark"
                                            ? "bg-white text-slate-900 hover:bg-slate-100"
                                            : plan.id === "enterprise"
                                                ? "bg-violet-600 text-white hover:bg-violet-700"
                                                : "bg-transparent border-2 border-slate-300 text-slate-700 hover:bg-slate-100"
                                    )}
                                >
                                    {plan.cta}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
