"use client"

import React from "react"
import { motion } from "framer-motion"
import { Clock, Sliders, Heart, Sparkles } from "lucide-react"

const benefits = [
    {
        title: "Reclaim your weekends",
        description: "Automate routine tasks like lesson planning, email writing, and rubric generation. Save 10+ hours a week.",
        icon: <Clock className="w-6 h-6 text-violet-600" />
    },
    {
        title: "Differentiate instantly",
        description: "Adapt any text or assignment for reading level, language, or length with a single click.",
        icon: <Sliders className="w-6 h-6 text-pink-600" />
    },
    {
        title: "Focus on connection",
        description: "Spend less time on paperwork and more time building relationships with your students.",
        icon: <Heart className="w-6 h-6 text-red-600" />
    },
    {
        title: "Spark student creativity",
        description: "Use our student-facing tools to build AI literacy and engage learners in new ways.",
        icon: <Sparkles className="w-6 h-6 text-amber-600" />
    }
]

export function TeachersBenefits() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                                {b.icon}
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 mb-3">{b.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {b.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
