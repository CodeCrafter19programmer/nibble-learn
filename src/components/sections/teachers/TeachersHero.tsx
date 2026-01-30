"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Wand2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TeachersHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] bg-violet-100/50 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-fuchsia-100/50 rounded-full blur-3xl opacity-60" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 font-semibold text-sm mb-8 tracking-wide uppercase">
                        <Wand2 className="w-4 h-4" />
                        AI for Teachers
                    </span>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                        Save time. Spark creativity. <br />
                        <span className="text-violet-600">Personalize learning.</span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join over 2 million educators using NibbleLearn to plan lessons, differentiate instruction, and communicate with families in seconds.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all" asChild>
                            <Link href="/signup">
                                Sign up free
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2" asChild>
                            <Link href="/tools">
                                Explore 80+ tools
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Floating Tool Examples */}
                <div className="mt-20 relative h-[300px] md:h-[400px] max-w-6xl mx-auto hidden md:block">
                    {/* Card 1: Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute left-0 top-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-sm rotate-[-6deg]"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Lesson Generator</h4>
                                <p className="text-xs text-slate-500">History • 8th Grade</p>
                            </div>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded mb-2" />
                        <div className="h-2 w-3/4 bg-slate-100 rounded mb-2" />
                        <div className="h-2 w-5/6 bg-slate-100 rounded" />
                    </motion.div>

                    {/* Card 2: Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute right-0 top-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-sm rotate-[6deg]"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Rubric Maker</h4>
                                <p className="text-xs text-slate-500">Narrative Writing</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs text-slate-400">
                                <span>Criteria</span>
                                <span>Points</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded" />
                            <div className="h-2 w-full bg-slate-100 rounded" />
                        </div>
                    </motion.div>

                    {/* Card 3: Center Bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white p-6 rounded-2xl shadow-2xl border border-violet-100 max-w-md w-full z-20"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Generating...</span>
                        </div>
                        <p className="text-slate-800 font-medium leading-relaxed">
                            "Here is a differentiated lesson plan on the American Revolution, including a role-play activity for visual learners and a primary source analysis for advanced readers..."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
