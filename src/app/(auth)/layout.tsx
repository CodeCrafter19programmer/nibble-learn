"use client"

import React from "react"
import { AuthBackground } from "@/components/auth/AuthBackground"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans selection:bg-violet-500/30">
            {/* Dynamic Background */}
            <AuthBackground />

            {/* Glass Card Container */}
            <div className="relative z-20 w-full max-w-md mx-4">
                {/* Brand Logo - Floating above card */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center mb-8"
                >
                    <Link href="/" className="flex items-center gap-3 group">
                        <Logo className="w-10 h-10 rounded-xl shadow-xl shadow-violet-500/20 group-hover:scale-105 transition-transform" />
                        <span className="font-bold text-2xl tracking-tight text-white drop-shadow-md">
                            NibbleLearn
                        </span>
                    </Link>
                </motion.div>

                {/* The Glass Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden"
                >
                    {/* Inner Content */}
                    <div className="p-8 md:p-10">
                        {children}
                    </div>

                    {/* Decorative Glass Reflection */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                </motion.div>

                {/* Footer Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-center"
                >
                    <p className="text-sm text-white/50">
                        © 2026 NibbleLearn Inc.
                        <Link href="#" className="hover:text-white ml-2 transition-colors">Privacy</Link> •
                        <Link href="#" className="hover:text-white ml-2 transition-colors">Terms</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
