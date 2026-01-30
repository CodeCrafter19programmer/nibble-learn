"use client"

import React from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight, School, User, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const solutionsData = [
    {
        type: "SCHOOLS",
        title: "Lead with vision.",
        description: "Adopy AI safely and scale responsibly across your district.",
        icon: <School className="w-6 h-6" />,
        features: [
            "Enterprise-grade security",
            "Advanced data dashboards",
            "District-customized tools",
            "Structured rollout and PD"
        ],
        ctaText: "District solutions",
        ctaLink: "/for-schools",
        stats: [
            { value: "28%", label: "improvement in students meeting literacy grade-level expectations" },
            { value: "7-10", label: "hours time saved per week on average" }
        ],
        theme: "violet"
    },
    {
        type: "TEACHERS",
        title: "Save time. Spark creativity.",
        description: "Personalize learning for every student in your classroom.",
        icon: <User className="w-6 h-6" />,
        features: [
            "80+ teacher tools",
            "Student learning insights",
            "Tool exemplars",
            "AI instructional coach"
        ],
        ctaText: "Teacher solutions",
        ctaLink: "/for-teachers",
        theme: "blue"
    },
    {
        type: "STUDENTS",
        title: "Learn confidently.",
        description: "Think critically and build the future with safe AI tools.",
        icon: <GraduationCap className="w-6 h-6" />,
        features: [
            "Teacher-led activities",
            "50+ student tools",
            "Safe settings for students",
            "Designed to build AI skills"
        ],
        ctaText: "Student solutions",
        ctaLink: "/for-students",
        stats: [
            { value: "88%", label: "of teachers say it helps them reach every learner" }
        ],
        theme: "amber"
    }
]

export function SolutionsComparison() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {solutionsData.map((card, index) => (
                        <motion.div
                            key={card.type}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group flex flex-col h-full bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-violet-200 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Header */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className={cn(
                                        "text-xs font-bold tracking-widest uppercase",
                                        index === 0 ? "text-violet-600" : index === 1 ? "text-blue-600" : "text-amber-600"
                                    )}>
                                        AI FOR {card.type}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                                    {card.title}
                                </h3>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-4 mb-8 flex-1">
                                {card.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={cn(
                                            "mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                                            "bg-violet-100 text-violet-600"
                                        )}>
                                            <Check className="w-3 h-3 stroke-[3]" />
                                        </div>
                                        <span className="text-slate-600 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Stats (if any) */}
                            {card.stats && (
                                <div className="mb-8 pt-6 border-t border-slate-200 space-y-4">
                                    {card.stats.map((stat, i) => (
                                        <div key={i}>
                                            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                                            <p className="text-sm text-slate-500 leading-snug">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Spacing filler if no stats to align buttons */}
                            {!card.stats && <div className="mb-8 pt-6 border-t border-transparent space-y-4 flex-1"></div>}

                            {/* CTA */}
                            <Button
                                variant={index === 0 ? "default" : "outline"}
                                className={cn(
                                    "w-full justify-between group-hover:bg-violet-600 group-hover:text-white transition-all",
                                    index !== 0 && "group-hover:border-violet-600"
                                )}
                                asChild
                            >
                                <a href={card.ctaLink}>
                                    {card.ctaText}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
