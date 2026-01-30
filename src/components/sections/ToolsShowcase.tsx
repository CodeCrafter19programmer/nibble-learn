"use client"

import React from "react"
import { motion } from "framer-motion"
import { ToolCard, ToolCardProps } from "@/components/features/ToolCard"
import {
    Presentation,
    BookOpen,
    PenTool,
    Lightbulb,
    FileCheck,
    ListChecks,
    BrainCircuit,
    RefreshCcw,
    TableProperties,
    FileText,
    Layers,
    Mail
} from "lucide-react"

const toolsData: (ToolCardProps & { id: string })[] = [
    // Row 1
    {
        id: "presentation",
        title: "Presentation Generator",
        description: "Generate exportable slides based on any topic, video, or text.",
        icon: <Presentation className="w-5 h-5 text-white" />,
        badgeColor: "gradient",
        isNew: true
    },
    {
        id: "lesson-plan",
        title: "Lesson Plan",
        description: "Generate a lesson plan for a topic or objective you're teaching.",
        icon: <BookOpen className="w-5 h-5 text-violet-600" />,
        badgeColor: "purple"
    },
    {
        id: "writing-feedback",
        title: "Writing Feedback",
        description: "Generate feedback on student writing based on custom criteria.",
        icon: <PenTool className="w-5 h-5 text-pink-500" />,
        badgeColor: "purple"
    },
    {
        id: "idea-generator",
        title: "Idea Generator",
        description: "Use AI as a thought partner to generate ideas on any topic.",
        icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
        badgeColor: "purple"
    },
    {
        id: "report-cards",
        title: "Report Card Comments",
        description: "Generate report card comments with strengths and growth areas.",
        icon: <FileCheck className="w-5 h-5 text-green-500" />,
        badgeColor: "purple"
    },
    {
        id: "quiz",
        title: "Multiple Choice Quiz",
        description: "Generate a custom multiple choice quiz for any assignment.",
        icon: <ListChecks className="w-5 h-5 text-blue-500" />,
        badgeColor: "purple"
    },

    // Row 2
    {
        id: "tutor",
        title: "AI Tutor",
        description: "Ask questions and get tutored on any topic you are learning.",
        icon: <BrainCircuit className="w-5 h-5 text-violet-500" />,
        badgeColor: "purple"
    },
    {
        id: "rewriter",
        title: "Text Rewriter",
        description: "Take any text and rewrite it with custom criteria.",
        icon: <RefreshCcw className="w-5 h-5 text-orange-500" />,
        badgeColor: "orange",
        isNew: true
    },
    {
        id: "rubric",
        title: "Rubric Generator",
        description: "Generate a custom rubric for any assignment.",
        icon: <TableProperties className="w-5 h-5 text-slate-500" />,
        badgeColor: "purple"
    },
    {
        id: "iep",
        title: "IEP Generator",
        description: "Generate a draft of an IEP customized to a students' needs.",
        icon: <FileText className="w-5 h-5 text-indigo-500" />,
        badgeColor: "purple"
    },
    {
        id: "multi-step",
        title: "Multi-Step Assignment",
        description: "Generate an assignment based on any topic with multiple steps.",
        icon: <Layers className="w-5 h-5 text-teal-500" />,
        badgeColor: "purple"
    },
    {
        id: "email",
        title: "Professional Email",
        description: "Generate a professional email communication.",
        icon: <Mail className="w-5 h-5 text-gray-500" />,
        badgeColor: "purple"
    }
]

export function ToolsShowcase() {
    return (
        <section className="py-24 bg-slate-50/50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        More than just a chatbot. <br />
                        <span className="text-violet-600">80+ tools built for educators.</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        From lesson planning to IEPs, we have a tool to help you save time and focus on what matters most—your students.
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {toolsData.map((tool, index) => (
                        <motion.div
                            key={tool.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <ToolCard {...tool} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
