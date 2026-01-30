"use client"

import React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, UserCheck, BrainCircuit, Lock } from "lucide-react"

const safetyFeatures = [
    {
        title: "Safe & Monitored",
        description: "Teachers are always in the loop. All AI interactions are viewable by your teacher to ensure a safe learning environment.",
        icon: <UserCheck className="w-8 h-8 text-amber-600" />,
        color: "bg-amber-100"
    },
    {
        title: "Age-Appropriate",
        description: "Our AI is specifically tuned for students, filtering out inappropriate content and keeping conversations focused on learning.",
        icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
        color: "bg-green-100"
    },
    {
        title: "Data Privacy First",
        description: "Your data belongs to you. We don't sell your personal information or use it to train public AI models.",
        icon: <Lock className="w-8 h-8 text-blue-600" />,
        color: "bg-blue-100"
    },
    {
        title: "Critical Thinking",
        description: "NibbleLearn helps you think, not just copy. Our tools are designed to be a thought partner, not a homework doer.",
        icon: <BrainCircuit className="w-8 h-8 text-purple-600" />,
        color: "bg-purple-100"
    }
]

export function StudentSafety() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Safe AI for every classroom
                    </h2>
                    <p className="text-xl text-slate-600">
                        We built NibbleLearn from the ground up to be the safest place for students to explore Artificial Intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {safetyFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
