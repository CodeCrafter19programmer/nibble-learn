"use client"

import React from "react"
import { SettingsCard } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Mail, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useStudentTheme } from "@/components/student/StudentThemeContext"
import { cn } from "@/lib/utils"

export default function StudentHelpPage() {
    const { theme } = useStudentTheme()
    const variant = theme === 'light' ? 'default' : 'glass'
    const isLight = theme === 'light'

    return (
        <div className="space-y-8 max-w-5xl">
            <div>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Help Center</h1>
                <p className={cn("font-medium", isLight ? "text-slate-500" : "text-blue-200/80")}>Resources and support for students.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                <SettingsCard variant={variant} className={cn("p-8 text-left space-y-6 flex flex-col justify-between", isLight ? "bg-white border-2 border-slate-300 shadow-md" : "bg-white/5 border-white/10 backdrop-blur-md shadow-lg")}>
                    <div>
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", isLight ? "bg-blue-100" : "bg-blue-500/20")}>
                            <FileText className={cn("w-6 h-6", isLight ? "text-blue-600" : "text-blue-400")} />
                        </div>
                        <h3 className={cn("text-xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Student Guides</h3>
                        <p className={cn("font-medium text-sm", isLight ? "text-slate-600" : "text-white/60")}>Read step-by-step guides, FAQs, and learn how to get the most out of your AI learning tools.</p>
                    </div>
                    <Link href="/student/settings/help/docs" className="block w-full mt-auto">
                        <Button className={cn("w-full font-semibold h-12 transition-all shadow-md group", isLight ? "bg-slate-900 hover:bg-slate-800 text-white" : "bg-white hover:bg-slate-100 text-slate-900")}>
                            Browse Guides <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </SettingsCard>

                <SettingsCard variant={variant} className={cn("p-8 text-left space-y-6 flex flex-col justify-between", isLight ? "bg-white border-2 border-slate-300 shadow-md" : "bg-white/5 border-white/10 backdrop-blur-md shadow-lg")}>
                    <div>
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6", isLight ? "bg-violet-100" : "bg-violet-500/20")}>
                            <Mail className={cn("w-6 h-6", isLight ? "text-violet-600" : "text-violet-400")} />
                        </div>
                        <h3 className={cn("text-xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Contact Support</h3>
                        <p className={cn("font-medium text-sm", isLight ? "text-slate-600" : "text-white/60")}>Need extra help? Ask Jarvis directly or reach out to our team via Email.</p>
                    </div>
                    <Link href="/student/settings/help/contact" className="block w-full mt-auto">
                        <Button className={cn("w-full font-semibold h-12 transition-all shadow-lg group", isLight ? "bg-violet-600 hover:bg-violet-700 text-white" : "bg-violet-500 hover:bg-violet-600 text-white shadow-violet-500/20")}>
                            Contact Us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </SettingsCard>
            </div>
        </div>
    )
}
