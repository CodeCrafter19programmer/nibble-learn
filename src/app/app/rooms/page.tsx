"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Users, MoreHorizontal, Plus, School, GraduationCap, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/providers/ThemeContext"

const rooms = [
    { id: 1, name: "5th Grade Homeroom", students: 24, code: "HMR-501", color: "bg-violet-500" },
    { id: 2, name: "Science Period 3", students: 28, code: "SCI-3A", color: "bg-emerald-500" },
    { id: 3, name: "Math Remediation", students: 6, code: "MTH-REM", color: "bg-blue-500" },
    { id: 4, name: "Advanced Reading Group", students: 12, code: "ELA-ADV", color: "bg-rose-500" },
]

export default function RoomsPage() {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <div className="space-y-8">
            <div className={cn("flex justify-between items-end border-b pb-8", isLight ? "border-slate-200" : "border-slate-800")}>
                <div>
                    <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Student Rooms</h1>
                    <p className={cn("text-lg", isLight ? "text-slate-600 font-medium" : "text-slate-400")}>
                        Manage your classes and student rosters.
                    </p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors shadow-lg shadow-violet-500/25">
                    <Plus className="w-4 h-4" />
                    <span className="font-medium">New Room</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {rooms.map((room, index) => (
                    <motion.div
                        key={room.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={cn(
                            "group p-6 rounded-2xl border transition-all relative overflow-hidden",
                            isLight
                                ? "bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-violet-200"
                                : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                        )}
                    >
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className={cn(
                                    "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg",
                                    room.color
                                )}>
                                    <School className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className={cn("text-xl font-bold transition-colors", isLight ? "text-slate-900" : "text-white")}>{room.name}</h3>
                                    <p className={cn("text-sm", isLight ? "text-slate-500" : "text-slate-400")}>Code: <span className="font-mono">{room.code}</span></p>
                                </div>
                            </div>
                            <button className={cn("p-2 rounded-lg transition-colors", isLight ? "hover:bg-slate-100 text-slate-400" : "hover:bg-white/10 text-slate-500")}>
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>

                        <div className={cn("grid grid-cols-2 gap-4 mb-6 relative z-10", isLight ? "text-slate-600" : "text-slate-300")}>
                            <div className={cn("p-3 rounded-xl border flex items-center gap-3", isLight ? "bg-slate-50 border-slate-100" : "bg-white/5 border-white/5")}>
                                <Users className="w-4 h-4 text-violet-500" />
                                <span className="font-medium">{room.students} Students</span>
                            </div>
                            <div className={cn("p-3 rounded-xl border flex items-center gap-3", isLight ? "bg-slate-50 border-slate-100" : "bg-white/5 border-white/5")}>
                                <GraduationCap className="w-4 h-4 text-emerald-500" />
                                <span className="font-medium">Active</span>
                            </div>
                        </div>

                        <div className="flex justify-end relative z-10">
                            <button className={cn("text-sm font-bold flex items-center gap-1 transition-colors", isLight ? "text-violet-600 hover:text-violet-800" : "text-violet-400 hover:text-white")}>
                                View Roster <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Background Decoration */}
                        <div className={cn("absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 pointer-events-none transition-opacity group-hover:opacity-20", room.color)} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
