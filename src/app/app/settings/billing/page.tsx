"use client"

import React, { useState } from "react"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Check, X, Sparkles, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface PlanFeature {
    text: string;
    included: boolean;
    highlight?: boolean;
}

interface Plan {
    id: string;
    name: string;
    description: string;
    monthlyPrice: number;
    annualPrice: number;
    annualBilled: number;
    badge: string;
    theme: string;
    cta: string;
    popular?: boolean;
    features: PlanFeature[];
}

const plans: Plan[] = [
    {
        id: "free",
        name: "Free",
        description: "Get started with essential AI tools for teaching. Perfect for exploring what NibbleLearn can do.",
        monthlyPrice: 0,
        annualPrice: 0,
        annualBilled: 0,
        badge: "Active",
        theme: "cream",
        cta: "Current Plan",
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
        cta: "Upgrade to Plus",
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
    }
]

export default function TeacherBillingPage() {
    const [billingPeriod, setBillingPeriod] = useState<"annual" | "monthly">("annual")

    return (
        <div className="space-y-12 pb-12">
            <div>
                <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Billing & Plans</h1>
                <p className="text-slate-500 dark:text-slate-400">Manage your subscription and usage limits.</p>
            </div>

            {/* Usage Progress Card */}
            <SettingsCard variant="slate">
                <SettingsCardContent className="p-6 md:p-8 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Free Plan</h2>
                        <p className="text-slate-500 dark:text-slate-400">
                            Get started with essential AI tools for teaching. Perfect for exploring what NibbleLearn can do.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-end">
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-wide">Credits Usage</span>
                            <span className="text-sm font-bold text-violet-600 dark:text-violet-400">45% Used</span>
                        </div>
                        <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
                            <div className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800 gap-4">
                        <div className="text-sm text-slate-500 dark:text-slate-400 w-full md:w-auto text-left">
                            <span className="hidden md:inline">Monthly limit resets in </span>
                            <span className="inline md:hidden">Resets in </span>
                            <span className="font-semibold text-slate-900 dark:text-white">12 days</span>
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            <Button variant="outline" className="flex-1 md:flex-none text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-800 hover:bg-violet-50 dark:hover:bg-violet-900/30">
                                <Sparkles className="w-4 h-4 mr-2" /> Top Up Credits
                            </Button>
                            <Button className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                                Upgrade Plan
                            </Button>
                        </div>
                    </div>
                </SettingsCardContent>
            </SettingsCard>

            {/* Pricing Cards Section */}
            <div>
                <div className="flex justify-center mb-10">
                    <div className="relative bg-white dark:bg-slate-900 rounded-full p-1 shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="flex">
                            <button
                                onClick={() => setBillingPeriod("annual")}
                                className={cn(
                                    "relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-colors",
                                    billingPeriod === "annual"
                                        ? "text-white"
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                )}
                            >
                                Annual
                            </button>
                            <button
                                onClick={() => setBillingPeriod("monthly")}
                                className={cn(
                                    "relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-colors",
                                    billingPeriod === "monthly"
                                        ? "text-white"
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                )}
                            >
                                Monthly
                            </button>
                        </div>
                        <motion.div
                            className="absolute top-1 bottom-1 bg-slate-900 dark:bg-slate-700 rounded-full"
                            initial={false}
                            animate={{
                                x: billingPeriod === "annual" ? 0 : "100%",
                                width: "50%"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{ left: 4 }}
                        />
                    </div>
                    {billingPeriod === "annual" && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="ml-4 px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 rounded-full text-sm font-bold flex items-center gap-1"
                        >
                            <Star className="w-3 h-3 fill-current" />
                            Save 27%
                        </motion.div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={cn(
                                "relative rounded-3xl p-8 transition-all duration-300",
                                plan.theme === "dark"
                                    ? "bg-slate-900 text-white border-2 border-amber-400 shadow-2xl shadow-amber-500/10"
                                    : "bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-2 border-transparent shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.02)] ring-1 ring-slate-200 dark:ring-slate-800"
                            )}
                        >
                            {plan.badge && (
                                <div className={cn(
                                    "absolute -top-3 right-6 px-4 py-1 rounded-full text-xs font-bold",
                                    plan.popular
                                        ? "bg-amber-400 text-slate-900"
                                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                                )}>
                                    {plan.badge}
                                </div>
                            )}

                            <div className="flex items-center gap-3 mb-4">
                                <div className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center",
                                    plan.theme === "dark" ? "bg-white/10" : "bg-violet-100 dark:bg-violet-900/30"
                                )}>
                                    <Sparkles className={cn("w-5 h-5", plan.theme === "dark" ? "text-amber-400" : "text-violet-600 dark:text-violet-400")} />
                                </div>
                                <h3 className="text-2xl font-bold">{plan.name}</h3>
                            </div>

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
                                ) : null}
                            </div>

                            <p className={cn(
                                "text-sm leading-relaxed mb-6 h-auto md:h-10",
                                plan.theme === "dark" ? "text-slate-300" : "text-slate-600 dark:text-slate-400"
                            )}>
                                {plan.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={cn(
                                            "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                            feature.included
                                                ? "bg-green-500 text-white"
                                                : plan.theme === "dark" ? "bg-slate-700" : "bg-slate-100 dark:bg-slate-800"
                                        )}>
                                            {feature.included
                                                ? <Check className="w-3 h-3" />
                                                : <X className={cn("w-3 h-3", plan.theme === "dark" ? "text-slate-500" : "text-slate-400")} />
                                            }
                                        </div>
                                        <span className={cn(
                                            "text-sm",
                                            !feature.included && (plan.theme === "dark" ? "text-slate-500" : "text-slate-500"),
                                            feature.highlight && "font-semibold"
                                        )}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={cn(
                                    "w-full h-12 rounded-xl text-base font-semibold transition-all",
                                    plan.theme === "dark"
                                        ? "bg-white text-slate-900 hover:bg-slate-100"
                                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                                )}
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
