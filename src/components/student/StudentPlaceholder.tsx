"use client"

import React from "react"
import { Construction } from "lucide-react"
import { useStudentTheme } from "@/components/student/StudentThemeContext"
import { cn } from "@/lib/utils"

export function StudentPlaceholder({ title }: { title: string }) {
    const { theme } = useStudentTheme()
    const isLight = theme === 'light'

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 space-y-6 animate-in fade-in duration-500">
            <div className={cn(
                "w-20 h-20 backdrop-blur-md border rounded-3xl flex items-center justify-center shadow-2xl transition-colors",
                isLight ? "bg-white border-slate-200 shadow-slate-200" : "bg-white/10 border-white/20"
            )}>
                <Construction className={cn("w-10 h-10", isLight ? "text-slate-500" : "text-white/70")} />
            </div>
            <div>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-black" : "text-white")}>{title}</h1>
                <p className={cn("max-w-md mx-auto text-lg font-medium", isLight ? "text-slate-600" : "text-white/60")}>
                    We're hard at work building this feature. <br />Check back soon for updates!
                </p>
            </div>
        </div>
    )
}
