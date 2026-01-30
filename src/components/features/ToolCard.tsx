"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ToolCardProps {
    title: string
    description: string
    icon?: React.ReactNode
    badgeColor?: "purple" | "orange" | "gradient" | "blue"
    hoverImage?: string // URL for the hover state image
    isNew?: boolean
    className?: string
}

const badgeStyles = {
    purple: "bg-violet-100 text-violet-700",
    orange: "bg-orange-100 text-orange-700",
    blue: "bg-blue-100 text-blue-700",
    gradient: "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-0",
}

export function ToolCard({
    title,
    description,
    icon,
    badgeColor = "purple",
    hoverImage,
    isNew,
    className
}: ToolCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            initial="rest"
            animate="rest"
            whileTap="pressed"
            className={cn(
                "group relative bg-white rounded-2xl border border-slate-200 p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:border-violet-200 overflow-hidden cursor-pointer",
                className
            )}
        >
            {/* Hover Image Background Reveal */}
            <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0" />

            {/* Icon / Badge Area */}
            <div className="flex items-start justify-between mb-4 relative z-10">
                <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center border border-slate-100 shadow-sm transition-transform group-hover:scale-110",
                    badgeColor === 'gradient' ? badgeStyles.gradient : "bg-white"
                )}>
                    {icon || <Sparkles className="w-5 h-5 text-violet-600" />}
                </div>

                {isNew && (
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-sm">
                        New
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1">
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-violet-700 transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed dark:text-slate-400 group-hover:text-slate-600">
                    {description}
                </p>
            </div>

            {/* Footer / CTA */}
            <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between group-hover:border-violet-100 transition-colors">
                <span className="text-xs font-semibold text-slate-400 group-hover:text-violet-600 transition-colors">
                    Try tool
                </span>
                <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-violet-600" />
                </div>
            </div>

            {/* Optional: Hover Image Overlay (if we had real images) */}
            {/* This would be an absolute positioned image that fades in */}
        </motion.div>
    )
}
