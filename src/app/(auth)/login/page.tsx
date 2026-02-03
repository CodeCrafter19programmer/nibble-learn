"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, LogIn, Loader2, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function LoginPage() {
    const [loginMode, setLoginMode] = useState<"student" | "teacher" | "school">("student")
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        schoolEmail: "",
        studentCode: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsLoading(false)

        // Routing Logic based on Selected Mode
        if (loginMode === "student") {
            window.location.href = "/student/dashboard"
        } else if (loginMode === "teacher") {
            window.location.href = "/app/dashboard"
        } else {
            window.location.href = "/school/dashboard"
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                    Welcome back
                </h1>
                <p className="text-white/60 text-sm">
                    Select your login type to continue.
                </p>
            </div>

            {/* Mode Selector */}
            <div className="grid grid-cols-3 gap-1 p-1 bg-white/5 rounded-xl border border-white/10">
                {(["student", "teacher", "school"] as const).map((mode) => (
                    <button
                        key={mode}
                        type="button"
                        onClick={() => setLoginMode(mode)}
                        className={cn(
                            "py-2 text-xs font-bold uppercase tracking-wide rounded-lg transition-all",
                            loginMode === mode
                                ? "bg-violet-600 text-white shadow-lg"
                                : "text-white/50 hover:text-white hover:bg-white/5"
                        )}
                    >
                        {mode === "school" ? "Join School" : mode}
                    </button>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {loginMode === "school" ? (
                    // Join School Form Fields
                    <>
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-white/80 uppercase tracking-wider ml-1">
                                School Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                <input
                                    name="schoolEmail"
                                    type="email"
                                    required
                                    value={formData.schoolEmail}
                                    onChange={handleChange}
                                    placeholder="admin@school.edu"
                                    className="w-full h-12 pl-12 pr-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all font-medium"
                                />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-white/80 uppercase tracking-wider ml-1">
                                Student Code
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                <input
                                    name="studentCode"
                                    type="text"
                                    required
                                    value={formData.studentCode}
                                    onChange={handleChange}
                                    placeholder="Enter 6-digit code"
                                    className="w-full h-12 pl-12 pr-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all font-medium"
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    // Student / Teacher Form Fields
                    <>
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-white/80 uppercase tracking-wider ml-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@school.edu"
                                    className="w-full h-12 pl-12 pr-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all font-medium"
                                />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                                    Password
                                </label>
                                <Link href="/forgot-password" className="text-xs text-violet-300 hover:text-white transition-colors">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full h-12 pl-12 pr-12 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all font-medium"
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
                    </>
                )}

                <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 rounded-xl text-base font-bold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25 border-0 mt-4"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            {loginMode === "school" ? "Joining School..." : "Signing in..."}
                        </>
                    ) : (
                        <>
                            {loginMode === "school" ? "Join School" : "Sign In"}
                            <LogIn className="w-5 h-5 ml-2" />
                        </>
                    )}
                </Button>
            </form>

            {loginMode !== "school" && (
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-transparent px-2 text-white/40 font-medium">Or continue with</span>
                    </div>
                </div>
            )}

            {loginMode !== "school" && (
                <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-medium text-white text-sm group">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Google
                    </button>
                    <button className="flex items-center justify-center gap-2 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-medium text-white text-sm">
                        <span className="font-bold font-serif text-lg">C</span>
                        Clever
                    </button>
                </div>
            )}

            <p className="text-center text-sm text-white/60">
                Don't have an account?{" "}
                <Link href="/signup" className="text-violet-300 hover:text-white font-semibold transition-colors">
                    Sign up free
                </Link>
            </p>
        </div>
    )
}
