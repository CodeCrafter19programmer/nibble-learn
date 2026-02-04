"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Mail, ArrowRight, Loader2, ArrowLeft, KeyRound, CheckCircle2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function ForgotPasswordPage() {
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1) // 1: Email, 2: OTP, 3: Password, 4: Success
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState(["", "", "", "", "", ""])
    const [timer, setTimer] = useState(60)
    const [canResend, setCanResend] = useState(false)

    // OTP Refs
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    // Timer Logic
    useEffect(() => {
        let interval: NodeJS.Timeout
        if (step === 2 && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1)
            }, 1000)
        } else if (timer === 0) {
            setCanResend(true)
        }
        return () => clearInterval(interval)
    }, [step, timer])

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsLoading(false)
        setStep(2)
        setTimer(60)
        setCanResend(false)
    }

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) value = value[0] // Allow only 1 char
        if (!/^\d*$/.test(value)) return // Allow only numbers

        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)

        // Move to next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handleOtpSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate Verification
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsLoading(false)
        setStep(3)
    }

    const handleResend = async () => {
        setTimer(60)
        setCanResend(false)
        // Simulate Resend
        await new Promise(resolve => setTimeout(resolve, 1000))
    }

    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate Password Reset
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsLoading(false)
        setStep(4)
    }

    // --- RENDER STEPS ---

    // STEP 1: EMAIL FORM
    if (step === 1) {
        return (
            <div className="space-y-6">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-2">Reset Password</h1>
                    <p className="text-white/60 text-sm">
                        Enter your email address and we'll send you a code to reset your password.
                    </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                        <Label className="text-xs font-semibold text-white/80 uppercase tracking-wider ml-1">
                            Email Address
                        </Label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <Input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@school.edu"
                                className="pl-12 h-12 bg-black/20 border-white/10 text-white placeholder:text-white/30"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold"
                    >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Code"}
                    </Button>
                </form>

                <Link href="/login" className="flex items-center justify-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Login
                </Link>
            </div>
        )
    }

    // STEP 2: OTP FORM
    if (step === 2) {
        return (
            <div className="space-y-6">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-2">Check your email</h1>
                    <p className="text-white/60 text-sm">
                        We sent a 6-digit code to <span className="text-white font-medium">{email}</span>.
                    </p>
                </div>

                <form onSubmit={handleOtpSubmit} className="space-y-6">
                    <div className="flex gap-2 justify-center">
                        {otp.map((digit, i) => (
                            <input
                                key={i}
                                ref={(el: any) => (inputRefs.current[i] = el)}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleOtpChange(i, e.target.value)}
                                onKeyDown={(e) => handleOtpKeyDown(i, e)}
                                className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold bg-black/20 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                            />
                        ))}
                    </div>

                    <div className="text-center">
                        {canResend ? (
                            <button
                                type="button"
                                onClick={handleResend}
                                className="text-sm font-medium text-violet-400 hover:text-violet-300 flex items-center justify-center gap-2 mx-auto"
                            >
                                <RefreshCw className="w-4 h-4" /> Resend Code
                            </button>
                        ) : (
                            <p className="text-sm text-white/40">
                                Resend code in <span className="text-white font-medium">{timer}s</span>
                            </p>
                        )}
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading || otp.some(d => !d)}
                        className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold"
                    >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify Code"}
                    </Button>
                </form>

                <button
                    onClick={() => setStep(1)}
                    className="flex w-full items-center justify-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Change Email
                </button>
            </div>
        )
    }

    // STEP 3: NEW PASSWORD
    if (step === 3) {
        return (
            <div className="space-y-6">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-2">Set New Password</h1>
                    <p className="text-white/60 text-sm">
                        Create a strong password for your account.
                    </p>
                </div>

                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                        <Label className="text-xs font-semibold text-white/80 uppercase tracking-wider ml-1">
                            New Password
                        </Label>
                        <div className="relative">
                            <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <Input
                                type="password"
                                required
                                placeholder="••••••••"
                                className="pl-12 h-12 bg-black/20 border-white/10 text-white placeholder:text-white/30"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <Label className="text-xs font-semibold text-white/80 uppercase tracking-wider ml-1">
                            Confirm Password
                        </Label>
                        <div className="relative">
                            <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <Input
                                type="password"
                                required
                                placeholder="••••••••"
                                className="pl-12 h-12 bg-black/20 border-white/10 text-white placeholder:text-white/30"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold"
                    >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Reset Password"}
                    </Button>
                </form>
            </div>
        )
    }

    // STEP 4: SUCCESS
    return (
        <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto ring-4 ring-green-500/5">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-white mb-2">Password Reset!</h1>
                <p className="text-white/60 text-sm max-w-xs mx-auto">
                    Your password has been successfully updated. You can now login with your new credentials.
                </p>
            </div>
            <Link href="/login">
                <Button className="w-full h-11 bg-white text-slate-900 hover:bg-white/90 font-semibold gap-2">
                    Back to Login <ArrowRight className="w-4 h-4" />
                </Button>
            </Link>
        </div>
    )
}
