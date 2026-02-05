"use client"

import React, { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import {
    CheckCircle2,
    XCircle,
    ArrowRight,
    Home
} from "lucide-react"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"
import Link from "next/link"

function ResultContent() {
    const { theme } = useTheme()
    const isLight = theme === 'light'
    const searchParams = useSearchParams()

    // Simulate query param check from payment gateway
    const status = searchParams.get('status') === 'success' ? 'success' : 'failed'

    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className={cn(
                "max-w-md w-full p-8 rounded-2xl border text-center space-y-6",
                isLight ? "bg-white border-slate-200 shadow-xl" : "bg-slate-900 border-slate-800"
            )}>
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={cn(
                        "w-20 h-20 rounded-full mx-auto flex items-center justify-center",
                        status === 'success'
                            ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                    )}
                >
                    {status === 'success' ? <CheckCircle2 className="w-10 h-10" /> : <XCircle className="w-10 h-10" />}
                </motion.div>

                <div>
                    <h1 className={cn("text-2xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>
                        {status === 'success' ? "Payment Successful!" : "Payment Failed"}
                    </h1>
                    <p className={cn("text-sm", isLight ? "text-slate-600" : "text-slate-400")}>
                        {status === 'success'
                            ? "Your plan has been upgraded successfully. You now have access to all new features."
                            : "Something went wrong with your transaction. Please try again or contact support."}
                    </p>
                </div>

                {status === 'success' && (
                    <div className={cn(
                        "p-4 rounded-xl text-sm text-left space-y-2",
                        isLight ? "bg-slate-50 border border-slate-100" : "bg-slate-800/50 border border-slate-800"
                    )}>
                        <div className="flex justify-between">
                            <span className="text-slate-500">Transaction ID</span>
                            <span className="font-mono font-medium">TXN-883920</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-500">Amount Paid</span>
                            <span className="font-medium">$499.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-500">Next Billing</span>
                            <span className="font-medium">March 5, 2026</span>
                        </div>
                    </div>
                )}

                <div className="flex flex-col gap-3 pt-4">
                    {status === 'success' ? (
                        <Link href="/school/billing" className="w-full">
                            <button className="w-full py-3 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all active:scale-95">
                                Return to Dashboard
                            </button>
                        </Link>
                    ) : (
                        <>
                            <Link href="/school/billing/confirmation" className="w-full">
                                <button className="w-full py-3 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all active:scale-95">
                                    Retry Payment
                                </button>
                            </Link>
                            <Link href="/school/billing" className="w-full">
                                <button className={cn(
                                    "w-full py-3 rounded-xl font-medium transition-colors",
                                    isLight ? "text-slate-600 hover:bg-slate-50" : "text-slate-400 hover:bg-slate-800"
                                )}>
                                    Cancel
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function PaymentResult() {
    return (
        <Suspense fallback={<div>Processing...</div>}>
            <ResultContent />
        </Suspense>
    )
}
