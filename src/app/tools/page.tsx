"use client"

import React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { motion } from "framer-motion"
import { Star, Sparkles, FileText, Zap, Presentation, PenTool, Calendar, ShieldCheck, Ticket, Users, FileMinus, ListChecks } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const tools = [
    { id: "lesson-plan", name: "Lesson Plan Generator", category: "planning", icon: FileText, color: "bg-blue-500", desc: "Generate a lesson plan for a topic or objective you're teaching.", new: false, plus: false },
    { id: "unit-plan", name: "Unit Plan Generator", category: "planning", icon: Calendar, color: "bg-purple-500", desc: "Create a multi-lesson unit plan on any topic.", new: false, plus: true },
    { id: "5e-model-science", name: "5E Model Science Lesson", category: "planning", icon: Zap, color: "bg-emerald-500", desc: "Design a science lesson using the 5E instructional model.", new: false, plus: false },
    { id: "presentation-generator", name: "Presentation Generator", category: "planning", icon: Presentation, color: "bg-orange-500", desc: "Generate exportable slides based on any topic.", new: true, plus: true },
    { id: "multiple-choice-quiz", name: "Multiple Choice Quiz", category: "assessment", icon: ListChecks, color: "bg-blue-500", desc: "Create a multiple choice assessment based on any topic.", new: false, plus: true },
    { id: "report-card-comments", name: "Report Card Comments", category: "communication", icon: ShieldCheck, color: "bg-orange-500", desc: "Generate report card comments with student's strengths and growth areas.", new: false, plus: true },
    { id: "text-leveler", name: "Text Leveler", category: "planning", icon: PenTool, color: "bg-rose-500", desc: "Rewrite any text at different reading levels.", new: false, plus: false },
    { id: "exit-ticket", name: "Exit Ticket Generator", category: "assessment", icon: Ticket, color: "bg-red-500", desc: "Create quick formative assessments to check understanding.", new: false, plus: true },
    { id: "accommodation-suggestions", name: "Accommodation Suggestions", category: "planning", icon: Users, color: "bg-teal-500", desc: "Get ideas for accommodating students with diverse needs.", new: false, plus: false },
    { id: "iep-generator", name: "IEP Generator", category: "support", icon: FileMinus, color: "bg-orange-600", desc: "Generate a draft of an IEP customized to a student's needs.", new: false, plus: true },
]

export default function ToolsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Tools Header */}
            <div className="pt-32 pb-10 bg-background border-b border-gray-200">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Most Popular AI Tools
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Explore our top 10 most used tools designed to help you save time and differentiate instruction.
                    </p>
                </div>
            </div>

            {/* Tools Grid Section */}
            <div className="py-12 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {tools.map((tool, index) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                key={tool.id}
                            >
                                <Link
                                    href={`/app/tool/${tool.id}`}
                                    className="group relative rounded-2xl p-5 hover:-translate-y-1 transition-all duration-200 cursor-pointer block bg-white border-2 border-gray-100 shadow-sm hover:border-violet-300 hover:shadow-lg h-full"
                                >
                                    {/* Top Row */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={cn(
                                            "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110",
                                            tool.color
                                        )}>
                                            <tool.icon className="w-6 h-6" />
                                        </div>
                                        <div className="text-gray-300 group-hover:text-amber-500 transition-colors">
                                            <Star className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-violet-700 transition-colors">
                                        {tool.name}
                                    </h3>
                                    <p className="text-sm leading-relaxed mb-8 text-gray-600 font-medium line-clamp-3">
                                        {tool.desc}
                                    </p>

                                    {/* Badges */}
                                    <div className="absolute bottom-5 left-5 flex gap-2">
                                        {tool.new && (
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border bg-emerald-50 text-emerald-600 border-emerald-200">
                                                New
                                            </span>
                                        )}
                                        {tool.plus && (
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border flex items-center gap-1 bg-amber-50 text-amber-600 border-amber-200">
                                                <Sparkles className="w-3 h-3" /> Plus
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
