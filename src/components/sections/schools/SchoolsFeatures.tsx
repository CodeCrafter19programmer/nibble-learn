"use client"

import React from "react"
import { motion } from "framer-motion"
import { Shield, BarChart, Settings, GraduationCap, Users, Layout } from "lucide-react"

const features = [
    {
        title: "Enterprise-grade Security",
        description: "SOC 2 Type II certified, FERPA & COPPA compliant. We protect student data with the highest industry standards.",
        icon: <Shield className="w-8 h-8 text-blue-600" />,
        color: "bg-blue-100"
    },
    {
        title: "Advanced Data Dashboards",
        description: "Gain usage insights across your district. Track adoption, most used tools, and time saved in real-time.",
        icon: <BarChart className="w-8 h-8 text-violet-600" />,
        color: "bg-violet-100"
    },
    {
        title: "District-Customized Tools",
        description: "Create and deploy custom AI tools that align with your specific curriculum, standards, and strategic goals.",
        icon: <Settings className="w-8 h-8 text-amber-600" />,
        color: "bg-amber-100"
    },
    {
        title: "Structured Rollout & PD",
        description: "We provide certification courses, webinar trainings, and resources to ensure a successful implementation.",
        icon: <GraduationCap className="w-8 h-8 text-green-600" />,
        color: "bg-green-100"
    },
    {
        title: "Centralized Management",
        description: "Easily manage licenses, user access, and permissions from a single admin portal.",
        icon: <Users className="w-8 h-8 text-pink-600" />,
        color: "bg-pink-100"
    },
    {
        title: "LMS Integrations",
        description: "Seamlessly integrate with Google Classroom, Canvas, Schoology, and Clever for effortless onboarding.",
        icon: <Layout className="w-8 h-8 text-cyan-600" />,
        color: "bg-cyan-100"
    }
]

export function SchoolsFeatures() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Everything your district needs to succeed
                    </h2>
                    <p className="text-xl text-slate-600">
                        A comprehensive platform built to help you lead the AI transformation in your schools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
