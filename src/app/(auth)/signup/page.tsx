"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, User, GraduationCap, School, Loader2, Mail, Lock, UserCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SignupPage() {
    const [step, setStep] = useState(0)
    const [role, setRole] = useState<"student" | "teacher" | "school" | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleRoleSelect = (selected: "student" | "teacher" | "school") => {
        setRole(selected)
        setStep(1)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsLoading(false)
        window.location.href = role === 'student' ? '/student/dashboard' : role === 'teacher' ? '/app/dashboard' : '/school/dashboard'
    }

    return (
        <div className="space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                    Create Account
                </h1>
                <p className="text-white/60 text-sm">
                    {step === 0 ? "Choose your role to get started." : `Sign up as a ${role?.charAt(0).toUpperCase() + role?.slice(1)!}`}
                </p>
            </div>

            <AnimatePresence mode="wait">
                {step === 0 ? (
                    <motion.div
                        key="step0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-3"
                    >
                        {[
                            { id: "teacher", label: "Teacher", icon: User, desc: "For educators & assistants" },
                            { id: "student", label: "Student", icon: GraduationCap, desc: "For learners in class" },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleRoleSelect(item.id as any)}
                                className="w-full flex items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/50 transition-all group group-hover:scale-[1.02]"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-violet-500 transition-colors">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div className="text-left ml-4 flex-1">
                                    <h3 className="text-base font-bold text-white">{item.label}</h3>
                                    <p className="text-xs text-white/50">{item.desc}</p>
                                </div>
                                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
                            </button>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-white/80 uppercase tracking-wider ml-1">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full h-12 pl-12 pr-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                    />
                                </div>
                            </div>

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
                                        className="w-full h-12 pl-12 pr-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-white/80 uppercase tracking-wider ml-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                                    <input
                                        type="password"
                                        required
                                        placeholder="Week123!?"
                                        className="w-full h-12 pl-12 pr-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-12 rounded-xl text-base font-bold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/25 border-0 mt-2"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Creating Account...
                                    </>
                                ) : (
                                    <>
                                        Sign Up
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </>
                                )}
                            </Button>

                            <button
                                type="button"
                                onClick={() => setStep(0)}
                                className="w-full py-2 text-sm text-white/50 hover:text-white transition-colors"
                            >
                                ← Go Back
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <p className="text-center text-sm text-white/60">
                Already have an account?{" "}
                <Link href="/login" className="text-violet-300 hover:text-white font-semibold transition-colors">
                    Sign in
                </Link>
            </p>
        </div>
    )
}
