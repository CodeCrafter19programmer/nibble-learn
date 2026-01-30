"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Lock, Laptop, ChevronDown, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const trustItems = [
    {
        id: "security",
        title: "Rigorous security to protect your data",
        description: "SOC 2–certified and FERPA/COPPA-compliant, our infrastructure meets and exceeds district-level privacy standards.",
        icon: <Shield className="w-5 h-5" />,
        imageColor: "bg-red-100"
    },
    {
        id: "privacy",
        title: "Data privacy you can depend on",
        description: "We don't use student or teacher data to train AI. Your information remains private, protected, and securely managed.",
        icon: <Lock className="w-5 h-5" />,
        imageColor: "bg-green-100"
    },
    {
        id: "responsible",
        title: "Responsible AI for education",
        description: "Every feature includes built-in safeguards and is designed to help schools innovate confidently and responsibly.",
        icon: <Laptop className="w-5 h-5" />,
        imageColor: "bg-blue-100"
    }
]

const badges = ["SOC 2 Type II", "FERPA", "COPPA", "GDPR", "EdTech Certified", "Privacy Shield"]

export function TrustSection() {
    const [activeItem, setActiveItem] = useState(trustItems[0].id)

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-bold text-violet-600 tracking-wide uppercase text-sm">
                        Trust and safety
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">
                        Safe, secure AI for schools
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left: Accordions */}
                    <div className="space-y-4">
                        {trustItems.map((item) => (
                            <div
                                key={item.id}
                                className={cn(
                                    "border rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer",
                                    activeItem === item.id
                                        ? "border-violet-200 bg-violet-50/50 shadow-md"
                                        : "border-slate-200 bg-white hover:border-violet-100"
                                )}
                                onClick={() => setActiveItem(item.id)}
                            >
                                <div className="flex items-center justify-between p-6">
                                    <div className="flex items-center gap-4">
                                        <div className={cn(
                                            "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                                            activeItem === item.id ? "bg-violet-600 text-white" : "bg-slate-100 text-slate-500"
                                        )}>
                                            {item.icon}
                                        </div>
                                        <h3 className={cn(
                                            "font-bold text-lg transition-colors",
                                            activeItem === item.id ? "text-violet-900" : "text-slate-700"
                                        )}>
                                            {item.title}
                                        </h3>
                                    </div>
                                    <ChevronDown className={cn(
                                        "w-5 h-5 text-slate-400 transition-transform duration-300",
                                        activeItem === item.id && "rotate-180 text-violet-600"
                                    )} />
                                </div>

                                <AnimatePresence>
                                    {activeItem === item.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 pt-0 pl-[4.5rem]">
                                                <p className="text-slate-600 leading-relaxed">
                                                    {item.description}
                                                </p>
                                                <div className="mt-4 flex items-center text-violet-600 font-semibold text-sm hover:underline cursor-pointer">
                                                    Learn more about our {item.id}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Right: Dynamic Image Placeholder */}
                    <div className="relative h-[400px] lg:h-[500px] w-full bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {trustItems.map((item) => (
                                activeItem === item.id && (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                        className={cn("absolute inset-0 flex items-center justify-center", item.imageColor)}
                                    >
                                        {/* Abstract Illustration Placeholder */}
                                        <div className="text-center p-8">
                                            <div className="w-32 h-32 mx-auto text-slate-900/10 mb-6 flex items-center justify-center">
                                                {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-full h-full" })}
                                            </div>
                                            <h4 className="text-2xl font-bold text-slate-900/20">{item.title}</h4>
                                            <div className="mt-8 bg-white p-4 rounded-xl shadow-lg max-w-xs mx-auto">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    <div className="h-2 w-20 bg-slate-200 rounded" />
                                                </div>
                                                <div className="h-2 w-full bg-slate-100 rounded mb-2" />
                                                <div className="h-2 w-2/3 bg-slate-100 rounded" />
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Badges Carousel */}
                <div className="mt-20 border-t border-slate-100 pt-10">
                    <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-wider mb-6">
                        Trusted compliance & certifications
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {badges.map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg">
                                <Shield className="w-4 h-4 text-slate-400" />
                                <span className="font-bold text-slate-700">{badge}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
