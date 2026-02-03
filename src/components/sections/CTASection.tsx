"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
    return (
        <section className="relative py-32 bg-slate-900 overflow-hidden text-center">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[50%] -left-[20%] w-[1000px] h-[1000px] bg-violet-600/30 rounded-full blur-[100px]" />
                <div className="absolute top-[20%] -right-[20%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-200 text-sm font-medium mb-8">
                        <Sparkles className="w-4 h-4" />
                        <span>Ready to transform your classroom?</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Get started with NibbleLearn
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Let's make teaching more joyful and learning more fun for every classroom in every district.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="h-16 px-8 text-lg rounded-xl shadow-xl bg-white text-violet-900 hover:bg-slate-200 active:scale-95 transition-all duration-200 min-w-[200px]" asChild>
                            <Link href="/signup" className="flex items-center justify-center gap-2">
                                Try it free
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-16 px-8 text-lg rounded-xl border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white hover:border-white active:scale-95 transition-all duration-200 min-w-[200px]" asChild>
                            <Link href="/quote-request" className="flex items-center justify-center gap-2">
                                <PlayCircle className="w-5 h-5" />
                                Book a demo
                            </Link>
                        </Button>
                    </div>

                    <p className="mt-8 text-slate-500 text-sm">
                        No credit card required for teacher accounts.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
