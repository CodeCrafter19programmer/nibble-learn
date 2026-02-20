"use client"

import React, { useState } from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { CreditCard, Star, Download, Sparkles, Check, X } from "lucide-react"
import { useStudentTheme } from "@/components/student/StudentThemeContext"
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
        description: "Get started with essential AI tools. Perfect for exploring what NibbleLearn can do.",
        monthlyPrice: 0,
        annualPrice: 0,
        annualBilled: 0,
        badge: "Active",
        theme: "light",
        cta: "Current Plan",
        features: [
            { text: "Access to 40+ student tools", included: true },
            { text: "Basic Jarvis AI assistant", included: true },
            { text: "Join Student Rooms", included: true },
            { text: "Limited AI generations", included: true },
            { text: "Unlimited AI generations", included: false },
            { text: "Full output history", included: false },
            { text: "Pro Study Guides & Flashcards", included: false }
        ]
    },
    {
        id: "plus",
        name: "Plus",
        description: "Unlock unlimited generations, full history, and advanced study features.",
        monthlyPrice: 9.99,
        annualPrice: 6.99,
        annualBilled: 83.88,
        badge: "Save 30%",
        popular: true,
        theme: "dark",
        cta: "Upgrade to Plus",
        features: [
            { text: "All Free plan features", included: true },
            { text: "Unlimited AI generations", included: true, highlight: true },
            { text: "Full output history", included: true, highlight: true },
            { text: "Advanced Jarvis AI math tutor", included: true },
            { text: "Pro Study Guides & Flashcards", included: true, highlight: true },
            { text: "Continue threads with Jarvis", included: true },
            { text: "Priority support", included: true }
        ]
    }
]

export default function StudentBillingPage() {
    const { theme } = useStudentTheme()
    const variant = theme === 'light' ? 'default' : 'glass'
    const isLight = theme === 'light'

    // Simulating user state
    const [billingPeriod, setBillingPeriod] = useState<"annual" | "monthly">("annual")
    const isPro = true;
    const creditsUsedPercentage = 68;

    // Styles for high contrast light mode
    const lightCardStyles = "bg-white border-2 border-slate-300 shadow-md"
    const lightTextSecondary = "text-slate-800"

    return (
        <div className="space-y-12 pb-12 max-w-5xl mx-auto">
            <div>
                <h1 className={cn("text-3xl font-extrabold mb-2", isLight ? "text-slate-900" : "text-white")}>Billing & Plan</h1>
                <p className={cn("font-medium", isLight ? "text-slate-600" : "text-blue-200/80")}>Manage your student plan, usage limits, and payment methods.</p>
            </div>

            {/* Current Usage Progress Card */}
            <SettingsCard variant={variant} className={cn(isLight && lightCardStyles)}>
                <SettingsCardContent className="p-6 md:p-8 space-y-8">
                    <div>
                        <h2 className={cn("text-2xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>
                            {isPro ? "Pro Student Plan" : "Free Plan"}
                        </h2>
                        <p className={isLight ? "text-slate-500" : "text-white/60"}>
                            {isPro
                                ? "You have access to all premium tools, unlimited hints, and advanced AI tutor help."
                                : "You are currently on the Free plan. Upgrade to unlock unlimited AI and premium tools."}
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-end">
                            <span className={cn("text-sm font-semibold tracking-wide", isLight ? "text-slate-700" : "text-white/80")}>Credits Usage</span>
                            <span className={cn("text-sm font-bold", creditsUsedPercentage >= 80 ? "text-red-500" : "text-blue-500")}>
                                {creditsUsedPercentage}% Used
                            </span>
                        </div>
                        <div className={cn("w-full h-3 rounded-full overflow-hidden border", isLight ? "bg-slate-100 border-slate-200" : "bg-black/40 border-white/10")}>
                            <div
                                className={cn("h-full rounded-full transition-all duration-1000", creditsUsedPercentage >= 80 ? "bg-red-500" : "bg-gradient-to-r from-blue-500 to-indigo-500")}
                                style={{ width: `${creditsUsedPercentage}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className={cn("flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-4", isLight ? "border-slate-200" : "border-white/10")}>
                        <div className={cn("text-sm w-full md:w-auto text-left", isLight ? "text-slate-500" : "text-white/60")}>
                            <span className="hidden md:inline">Monthly limit resets in </span>
                            <span className="inline md:hidden">Resets in </span>
                            <span className={cn("font-semibold", isLight ? "text-slate-900" : "text-white")}>12 days</span>
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            {(creditsUsedPercentage >= 80 || isPro) && (
                                <Button variant="outline" className={cn(
                                    "flex-1 md:flex-none font-semibold",
                                    isLight ? "text-blue-700 border-blue-200 hover:bg-blue-50" : "text-blue-400 border-blue-500/30 hover:bg-blue-500/20"
                                )}>
                                    <Sparkles className="w-4 h-4 mr-2" /> Top Up Credits
                                </Button>
                            )}
                            {!isPro && (
                                <Button className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20">
                                    Upgrade Plan
                                </Button>
                            )}
                        </div>
                    </div>
                </SettingsCardContent>
            </SettingsCard>

            {/* Pricing / Plans Section */}
            <div>
                <div className="flex justify-center mb-10">
                    <div className={cn("relative rounded-full p-1 shadow-sm border", isLight ? "bg-white border-slate-200" : "bg-black/20 border-white/10 backdrop-blur-md")}>
                        <div className="flex relative z-10">
                            <button
                                onClick={() => setBillingPeriod("annual")}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300",
                                    billingPeriod === "annual"
                                        ? "text-white"
                                        : (isLight ? "text-slate-600 hover:text-slate-900" : "text-white/60 hover:text-white")
                                )}
                            >
                                Annual
                            </button>
                            <button
                                onClick={() => setBillingPeriod("monthly")}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300",
                                    billingPeriod === "monthly"
                                        ? "text-white"
                                        : (isLight ? "text-slate-600 hover:text-slate-900" : "text-white/60 hover:text-white")
                                )}
                            >
                                Monthly
                            </button>
                        </div>
                        <motion.div
                            className="absolute top-1 bottom-1 bg-blue-600 rounded-full z-0 shadow-md"
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
                            className="ml-4 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold flex items-center gap-1 shadow-sm border border-amber-200/50"
                        >
                            <Star className="w-3 h-3 fill-current" />
                            Save 30%
                        </motion.div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {plans.map((plan) => {
                        const isCurrentPlan = (plan.id === "plus" && isPro) || (plan.id === "free" && !isPro);

                        return (
                            <div
                                key={plan.id}
                                className={cn(
                                    "relative rounded-3xl p-8 transition-all duration-300",
                                    plan.theme === "dark"
                                        ? "bg-slate-900 text-white border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20"
                                        : (isLight ? "bg-white text-slate-900 border-2 border-slate-200 shadow-md" : "bg-white/5 text-white border-2 border-white/10 backdrop-blur-md shadow-lg")
                                )}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 right-6 px-4 py-1 rounded-full text-xs font-bold bg-blue-500 text-white shadow-md shadow-blue-500/30">
                                        {plan.badge}
                                    </div>
                                )}
                                {!plan.popular && isCurrentPlan && (
                                    <div className={cn(
                                        "absolute -top-3 right-6 px-4 py-1 rounded-full text-xs font-bold border",
                                        isLight ? "bg-slate-100 text-slate-700 border-slate-200" : "bg-black/50 text-white/80 border-white/20"
                                    )}>
                                        Active Plan
                                    </div>
                                )}

                                <div className="flex items-center gap-3 mb-4">
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl flex items-center justify-center shadow-inner",
                                        plan.theme === "dark" ? "bg-white/10" : (isLight ? "bg-blue-50" : "bg-blue-500/20")
                                    )}>
                                        <Sparkles className={cn("w-5 h-5", plan.theme === "dark" ? "text-blue-400" : "text-blue-500")} />
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
                                                        plan.theme === "dark" ? "text-slate-500" : (isLight ? "text-slate-400" : "text-white/40")
                                                    )}>
                                                        ${plan.monthlyPrice}
                                                    </span>
                                                )}
                                                <span className="text-5xl font-extrabold">
                                                    ${billingPeriod === "annual" ? plan.annualPrice : plan.monthlyPrice}
                                                </span>
                                                <span className={cn(
                                                    "text-base font-medium",
                                                    plan.theme === "dark" ? "text-slate-400" : (isLight ? "text-slate-500" : "text-white/50")
                                                )}>
                                                    /month
                                                </span>
                                            </div>
                                            {billingPeriod === "annual" && plan.annualBilled && plan.annualBilled > 0 && (
                                                <p className={cn(
                                                    "text-sm mt-1 font-medium",
                                                    plan.theme === "dark" ? "text-blue-400" : (isLight ? "text-blue-600" : "text-blue-300")
                                                )}>
                                                    ${plan.annualBilled} billed yearly
                                                </p>
                                            )}
                                        </>
                                    ) : null}
                                </div>

                                <p className={cn(
                                    "text-sm leading-relaxed mb-6 min-h-[40px] font-medium",
                                    plan.theme === "dark" ? "text-slate-300" : (isLight ? "text-slate-600" : "text-white/70")
                                )}>
                                    {plan.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className={cn(
                                                "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                                feature.included
                                                    ? "bg-blue-500 text-white shadow-sm shadow-blue-500/20"
                                                    : (plan.theme === "dark" ? "bg-slate-700/50" : (isLight ? "bg-slate-100" : "bg-white/10"))
                                            )}>
                                                {feature.included
                                                    ? <Check className="w-3 h-3 stroke-[3]" />
                                                    : <X className={cn("w-3 h-3", plan.theme === "dark" ? "text-slate-500" : (isLight ? "text-slate-400" : "text-white/40"))} />
                                                }
                                            </div>
                                            <span className={cn(
                                                "text-sm",
                                                !feature.included && (plan.theme === "dark" ? "text-slate-500" : (isLight ? "text-slate-400" : "text-white/40")),
                                                feature.highlight && "font-bold text-blue-500 dark:text-blue-400"
                                            )}>
                                                {feature.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    disabled={isCurrentPlan}
                                    className={cn(
                                        "w-full h-12 rounded-xl text-base font-bold transition-all",
                                        isCurrentPlan && "opacity-50 cursor-not-allowed",
                                        plan.theme === "dark"
                                            ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20"
                                            : (isLight ? "bg-slate-100 text-slate-700 hover:bg-slate-200" : "bg-white/10 text-white hover:bg-white/20")
                                    )}
                                >
                                    {isCurrentPlan ? "Current Plan" : plan.cta}
                                </Button>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Payment & History Section */}
            {isPro && (
                <div className="space-y-8 mt-16 pt-8 border-t border-slate-200 dark:border-white/10">
                    <h2 className={cn("text-2xl font-bold px-1", isLight ? "text-slate-900" : "text-white")}>Payment Details</h2>

                    <SettingsSection title="Payment Method" variant={variant}>
                        <SettingsCard variant={variant} className={cn(isLight && lightCardStyles)}>
                            <SettingsCardContent className="flex items-center justify-between p-6">
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center border-2",
                                        isLight ? "bg-slate-50 border-slate-200" : "bg-black/20 border-white/10 shadow-inner"
                                    )}>
                                        <CreditCard className={cn("w-6 h-6", isLight ? "text-slate-700" : "text-white/80")} />
                                    </div>
                                    <div>
                                        <h3 className={cn("font-bold text-lg", isLight ? "text-slate-900" : "text-white")}>Visa ending in 4242</h3>
                                        <p className={cn("text-sm font-medium", isLight ? lightTextSecondary : "text-white/50")}>Expires 12/28</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <Button variant="outline" className={cn("font-semibold", isLight ? "border-slate-300 text-slate-700 hover:bg-slate-50" : "border-white/20 text-white hover:bg-white/10")}>Edit</Button>
                                </div>
                            </SettingsCardContent>
                            <div className={cn("px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 border-t", isLight ? "bg-slate-50 border-slate-200" : "bg-black/20 border-white/5")}>
                                <div className="text-sm">
                                    <span className={isLight ? "text-slate-500" : "text-white/60"}>Next billing date: </span>
                                    <span className={cn("font-bold", isLight ? "text-slate-900" : "text-white")}>May 21, 2026</span>
                                </div>
                                <Button variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 font-medium">Cancel Subscription</Button>
                            </div>
                        </SettingsCard>
                    </SettingsSection>

                    <SettingsSection title="Billing History" variant={variant}>
                        <SettingsCard variant={variant} className={cn(isLight && lightCardStyles)}>
                            <SettingsCardContent>
                                <table className={cn("w-full text-left text-sm", isLight ? "text-slate-800" : "text-white/70")}>
                                    <thead>
                                        <tr className={isLight ? "border-b-2 border-slate-200" : "border-b border-white/10"}>
                                            <th className={cn("pb-3 font-bold text-base", isLight ? "text-slate-900" : "text-white")}>Date</th>
                                            <th className={cn("pb-3 font-bold text-base", isLight ? "text-slate-900" : "text-white")}>Description</th>
                                            <th className={cn("pb-3 font-bold text-base", isLight ? "text-slate-900" : "text-white")}>Amount</th>
                                            <th className={cn("pb-3 font-bold text-base", isLight ? "text-slate-900" : "text-white")}>Invoice</th>
                                        </tr>
                                    </thead>
                                    <tbody className={isLight ? "divide-y divide-slate-200" : "divide-y divide-white/5"}>
                                        {[
                                            { date: "Apr 21, 2026", desc: "Pro Student - Monthly", amount: "$9.00" },
                                            { date: "Mar 21, 2026", desc: "Pro Student - Monthly", amount: "$9.00" },
                                            { date: "Feb 21, 2026", desc: "Pro Student - Monthly", amount: "$9.00" },
                                        ].map((row, i) => (
                                            <tr key={i} className={cn("transition-colors", isLight ? "hover:bg-slate-50" : "hover:bg-white/5")}>
                                                <td className="py-4 font-medium">{row.date}</td>
                                                <td className={cn("py-4 font-bold", isLight ? "text-slate-900" : "text-white")}>{row.desc}</td>
                                                <td className="py-4 font-medium">{row.amount}</td>
                                                <td className="py-4">
                                                    <div className={cn("flex items-center gap-2 font-bold cursor-pointer hover:underline", isLight ? "text-blue-600" : "text-blue-400 hover:text-blue-300")}>
                                                        <Download className="w-4 h-4" /> Download
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </SettingsCardContent>
                        </SettingsCard>
                    </SettingsSection>
                </div>
            )}
        </div>
    )
}
