"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Building2, ShieldCheck, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SchoolsHero() {
    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-8 tracking-wide uppercase">
                            <Building2 className="w-4 h-4" />
                            AI for School Districts
                        </span>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                            Lead with vision. <br className="hidden md:block" />
                            <span className="text-blue-600">Scale AI responsibly.</span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            The compliant, secure, and turnkey AI platform designed for forward-thinking districts. Empower your teachers while protecting your students.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg text-white active:scale-95 transition-all" asChild>
                                <Link href="/quote-request" className="flex items-center gap-2">
                                    Explore Demo
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-xl border-2 hover:bg-blue-50 hover:border-blue-200 active:scale-95 transition-all" asChild>
                                <Link href="/pricing" className="flex items-center gap-2">
                                    View pricing
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative max-w-5xl mx-auto"
                >
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                        <div className="bg-slate-900 h-10 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="p-1 aspect-[16/9] bg-slate-50 relative">
                            {/* Mock Analytics Dashboard */}
                            <div className="absolute inset-4 grid grid-cols-3 gap-6">
                                {/* Stats Cards */}
                                <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">Active Teachers</p>
                                        <p className="text-3xl font-bold text-slate-900 mt-2">1,248</p>
                                    </div>
                                    <div className="flex gap-1 mt-4">
                                        {[1, 2, 3, 4, 5, 4, 3, 5, 6, 7].map((h, i) => (
                                            <div key={i} className="flex-1 bg-blue-100 rounded-sm" style={{ height: `${h * 10}%` }} />
                                        ))}
                                    </div>
                                </div>
                                <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">Hours Saved</p>
                                        <p className="text-3xl font-bold text-slate-900 mt-2">12.5k</p>
                                    </div>
                                    <div className="w-full bg-slate-100 h-2 rounded-full mt-4 overflow-hidden">
                                        <div className="bg-green-500 h-full w-[75%]" />
                                    </div>
                                </div>
                                <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium">Security Score</p>
                                        <p className="text-3xl font-bold text-slate-900 mt-2">A+</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-4 text-green-600 text-sm font-bold">
                                        <ShieldCheck className="w-4 h-4" />
                                        COPPA / FERPA
                                    </div>
                                </div>

                                {/* Main Chart Area */}
                                <div className="col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h4 className="font-bold text-slate-700">Adoption Trends</h4>
                                        <BarChart3 className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div className="h-32 flex items-end gap-2">
                                        {[40, 55, 45, 60, 75, 65, 80, 70, 85, 90, 85, 95].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                                className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm opacity-90 hover:opacity-100"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Side List */}
                                <div className="col-span-1 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                                    <h4 className="font-bold text-slate-700 mb-4">Top Tools</h4>
                                    <ul className="space-y-3">
                                        {["Lesson Planner", "Quiz Maker", "IEP Assistant", "Email Writer"].map((t, i) => (
                                            <li key={i} className="flex items-center justify-between text-sm">
                                                <span className="text-slate-600">{t}</span>
                                                <span className="font-mono text-xs text-slate-400">{(4 - i) * 10}%</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-white/0 to-violet-500/20 blur-3xl -z-10" />
                </motion.div>
            </div>
        </section>
    )
}
