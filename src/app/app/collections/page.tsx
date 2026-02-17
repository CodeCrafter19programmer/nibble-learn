"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FolderHeart, MoreVertical, Plus, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/providers/ThemeContext"

const collections = [
    { id: 1, name: "Science Unit: Ecosystems", count: 12, color: "bg-emerald-500", date: "Updated 2 days ago" },
    { id: 2, name: "Math: Fractions", count: 8, color: "bg-blue-500", date: "Updated 1 week ago" },
    { id: 3, name: "Sub Plans", count: 5, color: "bg-amber-500", date: "Updated 3 weeks ago" },
    { id: 4, name: "Essay Rubrics", count: 4, color: "bg-purple-500", date: "Updated 1 month ago" },
    { id: 5, name: "Parent Communication", count: 15, color: "bg-indigo-500", date: "Updated 2 months ago" },
]

export default function CollectionsPage() {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <div className="space-y-8">
            <div className={cn("flex justify-between items-end border-b pb-8", isLight ? "border-slate-200" : "border-slate-800")}>
                <div>
                    <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>My Collections</h1>
                    <p className={cn("text-lg", isLight ? "text-slate-600 font-medium" : "text-slate-400")}>
                        Organize your generated resources into folders.
                    </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors shadow-lg shadow-violet-500/25">
                    <Plus className="w-4 h-4" />
                    <span className="font-medium">New Collection</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {collections.map((col, index) => (
                    <motion.div
                        key={col.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className={cn(
                            "group relative p-6 rounded-2xl border transition-all hover:-translate-y-1 cursor-pointer",
                            isLight
                                ? "bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-violet-200"
                                : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                        )}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className={cn(
                                "w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:rotate-3 transition-transform",
                                col.color
                            )}>
                                <FolderHeart className="w-7 h-7" />
                            </div>
                            <button className={cn("p-2 rounded-lg transition-colors", isLight ? "hover:bg-slate-100 text-slate-400" : "hover:bg-white/10 text-slate-500")}>
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        <h3 className={cn("text-lg font-bold mb-1 truncate", isLight ? "text-slate-900" : "text-white")}>
                            {col.name}
                        </h3>
                        <p className={cn("text-sm mb-4", isLight ? "text-slate-500" : "text-slate-400")}>
                            {col.date}
                        </p>

                        <div className={cn("flex items-center gap-2 text-sm font-medium pt-4 border-t", isLight ? "border-slate-100 text-slate-600" : "border-white/10 text-slate-300")}>
                            <FileText className="w-4 h-4" />
                            {col.count} Resources
                        </div>
                    </motion.div>
                ))}

                {/* Create New Placeholder Card */}
                <button className={cn(
                    "flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed transition-all group",
                    isLight
                        ? "border-slate-200 hover:border-violet-400 hover:bg-violet-50/50"
                        : "border-slate-800 hover:border-violet-500/50 hover:bg-violet-500/10"
                )}>
                    <div className={cn(
                        "w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors",
                        isLight ? "bg-slate-100 text-slate-400 group-hover:bg-violet-100 group-hover:text-violet-600" : "bg-slate-800 text-slate-500 group-hover:bg-violet-500/20 group-hover:text-violet-200"
                    )}>
                        <Plus className="w-6 h-6" />
                    </div>
                    <span className={cn("font-bold", isLight ? "text-slate-600 group-hover:text-violet-700" : "text-slate-400 group-hover:text-violet-300")}>Create Collection</span>
                </button>
            </div>
        </div>
    )
}
