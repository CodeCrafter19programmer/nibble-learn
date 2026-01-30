"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, PlayCircle } from "lucide-react"

const ROTATING_TEXTS = ["Schools", "Teachers", "Students"]

export function Hero() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ROTATING_TEXTS.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-violet-50 via-white to-white">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-violet-700 text-xs font-bold tracking-wide uppercase mb-6">
                        The #1 AI Platform
                    </span>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        The AI platform for <br className="md:hidden" />
                        <span className="relative inline-block min-w-[200px] text-violet-600">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={ROTATING_TEXTS[index]}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute left-0 right-0"
                                >
                                    {ROTATING_TEXTS[index]}
                                </motion.span>
                            </AnimatePresence>
                            {/* Invisible placeholder to keep width */}
                            <span className="invisible">{ROTATING_TEXTS[0]}</span>
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
                        Safe, district-aligned AI for schools that provides support, sparks creativity, and improves student learning outcomes.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                            <Link href="/signup">
                                Try it free
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2" asChild>
                            <Link href="/demo">
                                <PlayCircle className="mr-2 w-5 h-5" />
                                Book a demo
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Hero Image / Video Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-16 md:mt-24 relative mx-auto max-w-5xl"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 aspect-video flex items-center justify-center group">
                        {/* This would be the image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 to-blue-900/20 z-10 pointer-events-none" />
                        <span className="text-white/50 text-xl font-medium z-0">
                            Play Platform Walkthrough
                        </span>

                        {/* Mock UI to make it look real if image missing */}
                        <div className="absolute inset-0 bg-slate-50 opacity-10"></div>

                        {/* Floating elements example */}
                        <div className="absolute -left-12 bottom-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow hidden md:flex">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                <span className="font-bold text-lg">A+</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-900">Grade Level</p>
                                <p className="text-xs text-slate-500">Improved by 28%</p>
                            </div>
                        </div>

                        <div className="absolute -right-8 top-12 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow-delay hidden md:flex">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <span className="font-bold">⏰</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-900">Time Saved</p>
                                <p className="text-xs text-slate-500">10 hrs/week</p>
                            </div>
                        </div>

                    </div>

                    {/* Background Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 opacity-20 blur-2xl -z-10 rounded-3xl" />
                </motion.div>
            </div>
        </section>
    )
}
