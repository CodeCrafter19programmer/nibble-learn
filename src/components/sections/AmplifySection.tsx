"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star, Sparkles } from "lucide-react"
import Image from "next/image"

const features = [
    "Personalize learning with purpose",
    "Strengthen student outcomes",
    "Free up time for meaningful work"
]

export function AmplifySection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <div className="bg-violet-100 p-2 rounded-full">
                            <Sparkles className="w-5 h-5 text-violet-600" />
                        </div>
                        <span className="font-bold text-violet-600 tracking-wide uppercase text-sm">
                            BUILT for learning
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-8"
                    >
                        Amplify educator impact, <br className="hidden md:block" />
                        unlock student potential
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-6 md:gap-12"
                    >
                        {features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                <span className="font-medium text-slate-700 text-lg">{feature}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Platform Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative max-w-6xl mx-auto"
                >
                    {/* Decorative Stars Float */}
                    <div className="absolute -top-12 -left-12 text-yellow-300 animate-pulse">
                        <Star className="w-12 h-12 fill-current" />
                    </div>
                    <div className="absolute -bottom-12 -right-12 text-violet-300 animate-pulse delay-700">
                        <Star className="w-16 h-16 fill-current" />
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-2 md:p-4 shadow-2xl ring-1 ring-slate-900/5">
                        <div className="bg-slate-800 rounded-xl overflow-hidden aspect-[16/10] relative">
                            {/* Placeholder for platform screenshot */}
                            <div className="absolute inset-0 flex flex-col">
                                {/* Fake UI Header */}
                                <div className="h-12 bg-slate-900/50 border-b border-white/5 flex items-center px-4 gap-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="h-6 w-64 bg-white/10 rounded-full ml-4" />
                                </div>
                                {/* Fake UI Body */}
                                <div className="flex-1 p-8 grid grid-cols-4 gap-6">
                                    <div className="col-span-1 bg-white/5 rounded-lg h-full" />
                                    <div className="col-span-3 grid grid-cols-2 gap-6">
                                        <div className="bg-violet-500/20 border border-violet-500/30 rounded-xl p-6">
                                            <div className="w-10 h-10 bg-violet-500 rounded-lg mb-4" />
                                            <div className="h-4 w-32 bg-white/20 rounded mb-2" />
                                            <div className="h-3 w-full bg-white/10 rounded" />
                                        </div>
                                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                            <div className="w-10 h-10 bg-blue-500 rounded-lg mb-4" />
                                            <div className="h-4 w-32 bg-white/20 rounded mb-2" />
                                            <div className="h-3 w-full bg-white/10 rounded" />
                                        </div>
                                        {/* More fake cards */}
                                        {[1, 2, 3, 4].map(n => (
                                            <div key={n} className="bg-white/5 border border-white/10 rounded-xl p-6" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="text-white/20 font-bold text-4xl">Platform Interface Preview</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
