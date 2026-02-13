"use client"

import React, { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Lock, Eye, EyeOff, Loader2, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { Suspense } from "react"

function InviteAcceptContent() {
    const searchParams = useSearchParams()
    const router = useRouter()

    // Get email from URL if available, otherwise generic
    const email = searchParams.get("email") || "teacher@school.edu"

    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState("")

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        // Clear error when user types
        if (error) setError("")
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters long")
            return
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match")
            return
        }

        setIsLoading(true)

        // Simulate API call to set password and activate account
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsLoading(false)

        // Redirect to dashboard or login
        router.push("/app/dashboard")
    }

    return (
        <div className="space-y-6">
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/20 text-violet-300 mb-4 border border-violet-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                    Accept Invitation
                </h1>
                <p className="text-white/60 text-sm">
                    Set up your account for <span className="text-white font-medium">{email}</span>
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Password Field */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-white/80 uppercase tracking-wider ml-1">
                            Create Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Min. 8 characters"
                                className={cn(
                                    "w-full h-12 pl-12 pr-12 bg-black/20 border rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all font-medium",
                                    error ? "border-red-500/50 focus:border-red-500" : "border-white/10"
                                )}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-white/80 uppercase tracking-wider ml-1">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <input
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Re-enter password"
                                className={cn(
                                    "w-full h-12 pl-12 pr-12 bg-black/20 border rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all font-medium",
                                    error ? "border-red-500/50 focus:border-red-500" : "border-white/10"
                                )}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                            >
                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="text-red-400 text-xs font-medium text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20"
                        >
                            {error}
                        </motion.div>
                    )}

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 rounded-xl text-base font-bold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25 border-0 mt-4"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                Setting up account...
                            </>
                        ) : (
                            <>
                                Complete Setup
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </>
                        )}
                    </Button>
                </form>
            </motion.div>

            <p className="text-center text-sm text-white/40">
                By tapping "Complete Setup", you agree to our <br />
                <a href="#" className="text-white/60 hover:text-white underline underline-offset-2 decoration-white/20">Terms</a> and <a href="#" className="text-white/60 hover:text-white underline underline-offset-2 decoration-white/20">Privacy Policy</a>
            </p>
        </div>
    )
}

export default function InviteAcceptPage() {
    return (
        <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
            <InviteAcceptContent />
        </Suspense>
    )
}
