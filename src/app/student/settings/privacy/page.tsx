"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Shield, Eye, Lock } from "lucide-react"
import { useStudentTheme } from "@/components/student/StudentThemeContext"
import { cn } from "@/lib/utils"

export default function StudentPrivacyPage() {
    const { theme } = useStudentTheme()
    const variant = theme === 'light' ? 'default' : 'glass'
    const isLight = theme === 'light'

    const infoCards = [
        {
            icon: Eye,
            title: "Who can see my work?",
            description: "Your teacher can see all your work. Your classmates can only see work you choose to share or present."
        },
        {
            icon: Lock,
            title: "Data Protection",
            description: "Your data is encrypted and safe. We never sell your personal information to advertisers."
        },
        {
            icon: Shield,
            title: "Safe AI",
            description: "Our AI is trained to be safe and educational. Inappropriate content is automatically blocked and reported."
        }
    ]

    return (
        <div className="space-y-8">
            <div>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Privacy & Safety</h1>
                <p className={isLight ? "text-slate-500" : "text-white/60"}>How we protect your data and keep you safe.</p>
            </div>

            <div className="grid gap-6">
                {infoCards.map((card, i) => (
                    <SettingsCard key={i} variant={variant}>
                        <SettingsCardContent className="flex gap-4">
                            <div className={cn(
                                "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
                                isLight ? "bg-blue-100/50" : "bg-white/10"
                            )}>
                                <card.icon className={cn("w-5 h-5", isLight ? "text-blue-600" : "text-white")} />
                            </div>
                            <div>
                                <h3 className={cn("font-bold mb-1", isLight ? "text-slate-900" : "text-white")}>{card.title}</h3>
                                <p className={cn("text-sm leading-relaxed", isLight ? "text-slate-600" : "text-white/70")}>{card.description}</p>
                            </div>
                        </SettingsCardContent>
                    </SettingsCard>
                ))}
            </div>
        </div>
    )
}
