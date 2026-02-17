"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { PlayCircle, MessageCircle, HelpCircle, ExternalLink } from "lucide-react"
import { useStudentTheme } from "@/components/student/StudentThemeContext"
import { cn } from "@/lib/utils"

export default function StudentHelpPage() {
    const { theme } = useStudentTheme()
    const variant = theme === 'light' ? 'default' : 'glass'
    const isLight = theme === 'light'

    return (
        <div className="space-y-8">
            <div>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Help & Support</h1>
                <p className={isLight ? "text-slate-500" : "text-white/60"}>Get help with using NibbleLearn.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SettingsCard variant={variant} className="md:col-span-2 bg-gradient-to-br from-blue-600 to-violet-600 border-0">
                    <SettingsCardContent className="flex items-center justify-between p-8 text-white">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">New to NibbleLearn?</h2>
                            <p className="text-blue-100 mb-4 max-w-md">Watch our quick start video to learn all the cool things you can do.</p>
                            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-white/90 border-0 gap-2">
                                <PlayCircle className="w-4 h-4" /> Watch Tutorial
                            </Button>
                        </div>
                        <div className="hidden md:block opacity-80">
                            <PlayCircle className="w-24 h-24 text-white/20" />
                        </div>
                    </SettingsCardContent>
                </SettingsCard>

                <SettingsCard variant={variant}>
                    <SettingsCardContent className="h-full space-y-4">
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", isLight ? "bg-teal-100" : "bg-teal-500/20")}>
                            <MessageCircle className={cn("w-5 h-5", isLight ? "text-teal-600" : "text-teal-300")} />
                        </div>
                        <div>
                            <h3 className={cn("font-bold mb-1", isLight ? "text-slate-900" : "text-white")}>Ask Jarvis</h3>
                            <p className={cn("text-sm mb-4", isLight ? "text-slate-500" : "text-white/60")}>Our AI tutor can help you figure out how to use tools.</p>
                            <Button variant="outline" className={isLight ? "" : "border-white/20 text-white hover:bg-white/10"}>Chat with Jarvis</Button>
                        </div>
                    </SettingsCardContent>
                </SettingsCard>

                <SettingsCard variant={variant}>
                    <SettingsCardContent className="h-full space-y-4">
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", isLight ? "bg-purple-100" : "bg-purple-500/20")}>
                            <HelpCircle className={cn("w-5 h-5", isLight ? "text-purple-600" : "text-purple-300")} />
                        </div>
                        <div>
                            <h3 className={cn("font-bold mb-1", isLight ? "text-slate-900" : "text-white")}>Help Center</h3>
                            <p className={cn("text-sm mb-4", isLight ? "text-slate-500" : "text-white/60")}>Read guides and frequently asked questions.</p>
                            <Button variant="outline" className={isLight ? "" : "border-white/20 text-white hover:bg-white/10 gap-2"}>
                                Visit Help Center <ExternalLink className="w-3 h-3" />
                            </Button>
                        </div>
                    </SettingsCardContent>
                </SettingsCard>
            </div>
        </div>
    )
}
