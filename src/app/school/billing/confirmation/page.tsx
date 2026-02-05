"use client"

import React, { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import {
    CheckCircle2,
    ShieldCheck,
    ArrowRight,
    ArrowLeft
} from "lucide-react"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"
import Link from "next/link"

function ConfirmationContent() {
    const { theme } = useTheme()
    const isLight = theme === 'light'
    const searchParams = useSearchParams()

    const planName = searchParams.get('plan') || "Standard"
    // Mock price logic
    const price = planName === "Basic" ? 199 : planName === "Premium" ? 999 : 499

    return (
        <div className="max-w-2xl mx-auto py-12">
            <div className={cn(
                "rounded-2xl border overflow-hidden p-8 space-y-8",
                isLight ? "bg-white border-slate-200 shadow-xl" : "bg-slate-900 border-slate-800"
            )}>
                <div className="text-center">
                    <h1 className={cn("text-2xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Confirm Subscription</h1>
                    <p className="text-slate-500">Review your plan details before proceeding to payment.</p>
                </div>

                <div className={cn(
                    "p-6 rounded-xl border flex justify-between items-center",
                    isLight ? "bg-slate-50 border-slate-200" : "bg-slate-800/50 border-slate-700"
                )}>
                    <div>
                        <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">Selected Plan</p>
                        <h3 className={cn("text-xl font-bold", isLight ? "text-slate-900" : "text-white")}>{planName} Plan</h3>
                        <p className="text-sm text-slate-500">Billed Monthly</p>
                    </div>
                    <div className="text-right">
                        <span className={cn("text-3xl font-bold", isLight ? "text-slate-900" : "text-white")}>${price}</span>
                        <span className="text-slate-500">/mo</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-slate-100 dark:border-slate-800">
                        <span className={isLight ? "text-slate-600" : "text-slate-400"}>Subtotal</span>
                        <span className={cn("font-medium", isLight ? "text-slate-900" : "text-white")}>${price}.00</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-slate-100 dark:border-slate-800">
                        <span className={isLight ? "text-slate-600" : "text-slate-400"}>Tax (Estimated)</span>
                        <span className={cn("font-medium", isLight ? "text-slate-900" : "text-white")}>$0.00</span>
                    </div>
                    <div className="flex justify-between py-3">
                        <span className={cn("text-lg font-bold", isLight ? "text-slate-900" : "text-white")}>Total Due</span>
                        <span className={cn("text-lg font-bold text-blue-600")}>${price}.00</span>
                    </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex gap-3 items-start">
                    <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                        You will be redirected to our secure payment partner, Pesapal, to complete your transaction. No card details are stored on our servers.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <Link href="/school/billing/result?status=success" className="w-full">
                        {/* In a real app, this would be an API call to init payment, then redirect */}
                        <button className="w-full py-4 rounded-xl font-bold text-lg bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                            Proceed to Payment <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                    <Link href="/school/billing/plans" className="w-full">
                        <button className={cn(
                            "w-full py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2",
                            isLight ? "text-slate-600 hover:bg-slate-50" : "text-slate-400 hover:bg-slate-800"
                        )}>
                            <ArrowLeft className="w-4 h-4" /> Go Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function PlanConfirmation() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ConfirmationContent />
        </Suspense>
    )
}
