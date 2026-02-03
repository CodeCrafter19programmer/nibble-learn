"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StudentsHero() {
    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background Decor - Amber/Yellow Theme */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-amber-200/30 rounded-full blur-[100px] opacity-60" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-yellow-200/20 rounded-full blur-[80px] opacity-60" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 font-semibold text-sm mb-8 tracking-wide uppercase border border-amber-200">
                            <GraduationCap className="w-4 h-4" />
                            AI for Students
                        </span>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                            Build AI skills. <br />
                            <span className="text-amber-500">Prepare for the future.</span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            A safe, guided way to learn with AI. Get help with tutoring, translating text, and brainstorming ideas—all in a space built just for you.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-xl bg-amber-500 hover:bg-amber-600 shadow-xl shadow-amber-200 text-white border-0 active:scale-95 transition-all" asChild>
                                <Link href="/login" className="flex items-center gap-2">
                                    Start learning
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Interactive Element - "Student Hub Preview" */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative max-w-5xl mx-auto"
                >
                    <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-900">
                        {/* Browser Title Bar */}
                        <div className="bg-slate-800 h-12 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                            <div className="ml-4 bg-slate-700 rounded-full h-6 w-1/2" />
                        </div>

                        {/* Content */}
                        <div className="bg-slate-50 min-h-[400px] p-8 relative">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Left: Chat Interface */}
                                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col h-[300px]">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                                            <Sparkles className="w-4 h-4 text-amber-600" />
                                        </div>
                                        <span className="font-bold text-slate-700">TutorBot</span>
                                    </div>
                                    <div className="flex-1 space-y-4 overflow-hidden">
                                        <div className="bg-slate-100 rounded-xl rounded-tl-none p-3 max-w-[80%] text-sm text-slate-600">
                                            Hi! I can help you study for your biology test. What topic are you working on?
                                        </div>
                                        <div className="bg-amber-500 text-white rounded-xl rounded-tr-none p-3 max-w-[80%] ml-auto text-sm">
                                            We're learning about photosynthesis!
                                        </div>
                                        <div className="bg-slate-100 rounded-xl rounded-tl-none p-3 max-w-[80%] text-sm text-slate-600">
                                            Awesome! Photosynthesis is how plants make their own food. Do you know what three things plants need for this?
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-slate-100">
                                        <div className="h-10 bg-slate-100 rounded-full w-full" />
                                    </div>
                                </div>

                                {/* Right: Tools Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { name: "Debate Partner", color: "bg-blue-100", icon: "🗣️" },
                                        { name: "Writing Coach", color: "bg-green-100", icon: "✍️" },
                                        { name: "Code Helper", color: "bg-purple-100", icon: "💻" },
                                        { name: "Translator", color: "bg-pink-100", icon: "🌐" }
                                    ].map((tool, i) => (
                                        <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-center text-center gap-3">
                                            <div className={`w-12 h-12 rounded-full ${tool.color} flex items-center justify-center text-2xl`}>
                                                {tool.icon}
                                            </div>
                                            <span className="font-bold text-slate-700 text-sm">{tool.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
