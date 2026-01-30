"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Mail, ArrowRight, Loader2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ForgotPasswordPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsLoading(false)
        setIsSent(true)
    }

    if (isSent) {
        return (
            <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto ring-4 ring-white/5">
                    <Mail className="w-8 h-8 text-violet-300" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-white mb-2">Check your inbox</h1>
                    <p className="text-white/60 text-sm max-w-xs mx-auto">
                        We've sent a password reset link to <span className="text-white font-medium">email@example.com</span>.
                    </p>
                </div>
                <div className="space-y-3">
                    <Button
                        onClick={() => window.open('https://gmail.com', '_blank')}
                        className="w-full h-11 bg-white text-slate-900 hover:bg-white/90 font-semibold"
                    >
                        Open Email App
                    </Button>
                    <Link href="/login" className="block text-sm text-white/50 hover:text-white transition-colors">
                        Skip, I'll confirm later
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-white mb-2">
                    Reset Password
                </h1>
                <p className="text-white/60 text-sm">
                    Enter your email address and we'll send you a link to reset your password.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/80 uppercase tracking-wider ml-1">
                        Email Address
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <input
                            type="email"
                            required
                            placeholder="you@school.edu"
                            className="w-full h-12 pl-12 pr-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all font-medium"
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 rounded-xl text-base font-bold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25 border-0"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending Link...
                        </>
                    ) : (
                        <>
                            Send Reset Link
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                    )}
                </Button>
            </form>

            <Link href="/login" className="flex items-center justify-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Login
            </Link>
        </div>
    )
}
