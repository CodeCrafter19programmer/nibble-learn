"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Check, Moon, Sun } from "lucide-react"
import { useStudentTheme } from "@/components/student/StudentThemeContext"
import { cn } from "@/lib/utils"

export default function StudentPreferencesPage() {
    const { theme, toggleTheme } = useStudentTheme()
    const isLight = theme === 'light'
    const variant = isLight ? 'default' : 'glass'

    const handleThemeSelect = (selected: 'light' | 'dark') => {
        if (theme !== selected) {
            toggleTheme()
        }
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Preferences</h1>
                <p className={cn("font-medium", isLight ? "text-slate-500" : "text-blue-200/80")}>Customize your NibbleLearn experience.</p>
            </div>

            <SettingsSection title="Appearance" variant={variant}>
                <SettingsCard variant={variant} className={cn(isLight && "bg-white border-2 border-slate-300 shadow-md")}>
                    <SettingsCardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { id: "light", label: "Light", icon: Sun, active: isLight, desc: "A clean, bright learning environment." },
                            { id: "dark", label: "Dark", icon: Moon, active: !isLight, desc: "Easier on eyes during late-night study sessions." },
                        ].map((t) => (
                            <button
                                key={t.id}
                                onClick={() => handleThemeSelect(t.id as 'light' | 'dark')}
                                className={cn(
                                    "relative flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 text-left items-start",
                                    isLight
                                        ? t.active
                                            ? "bg-blue-50 border-2 border-blue-500 shadow-sm"
                                            : "bg-white border-2 border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                                        : t.active
                                            ? "bg-blue-600/20 border-2 border-blue-500 shadow-lg shadow-blue-500/10"
                                            : "bg-black/20 border-2 border-white/10 hover:bg-white/10 hover:border-white/30"
                                )}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                                        isLight
                                            ? t.active ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"
                                            : t.active ? "bg-blue-500 text-white" : "bg-white/10 text-white/50"
                                    )}>
                                        <t.icon className="w-5 h-5" />
                                    </div>
                                    <span className={cn("text-xl font-bold", isLight ? "text-slate-900" : "text-white")}>{t.label}</span>
                                </div>
                                <p className={cn("text-sm font-medium mt-1", isLight ? "text-slate-500" : "text-white/60")}>
                                    {t.desc}
                                </p>
                                {t.active && (
                                    <div className={cn(
                                        "absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center shadow-md slide-in-from-bottom-1",
                                        isLight ? "bg-blue-600" : "bg-blue-500"
                                    )}>
                                        <Check className="w-4 h-4 text-white stroke-[3]" />
                                    </div>
                                )}
                            </button>
                        ))}
                    </SettingsCardContent>
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
