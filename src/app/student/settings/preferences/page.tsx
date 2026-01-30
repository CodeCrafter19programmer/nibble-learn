"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Check, Moon, Sun, Smartphone } from "lucide-react"
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
                <p className={isLight ? "text-slate-500" : "text-white/60"}>Customize your NibbleLearn experience.</p>
            </div>

            <SettingsSection title="Appearance" variant={variant}>
                <SettingsCard variant={variant}>
                    <SettingsCardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { id: "light", label: "Light", icon: Sun, active: isLight },
                            { id: "dark", label: "Dark", icon: Moon, active: !isLight },
                            // { id: "system", label: "System", icon: Smartphone, active: false },
                        ].map((t) => (
                            <button
                                key={t.id}
                                onClick={() => handleThemeSelect(t.id as 'light' | 'dark')}
                                className={cn(
                                    "relative flex flex-col items-center justify-center p-4 rounded-xl border transition-all",
                                    isLight
                                        ? t.active
                                            ? "bg-blue-50 border-blue-500 shadow-sm"
                                            : "bg-white border-slate-200 hover:border-blue-200 hover:bg-slate-50"
                                        : t.active
                                            ? "bg-violet-600/20 border-violet-500/50"
                                            : "bg-white/5 border-white/10 hover:bg-white/10"
                                )}
                            >
                                <t.icon className={cn(
                                    "w-8 h-8 mb-3",
                                    isLight
                                        ? t.active ? "text-blue-600" : "text-slate-400"
                                        : t.active ? "text-violet-300" : "text-white/60"
                                )} />
                                <span className={cn("font-medium", isLight ? "text-slate-900" : "text-white")}>{t.label}</span>
                                {t.active && (
                                    <div className={cn(
                                        "absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center",
                                        isLight ? "bg-blue-600" : "bg-violet-500"
                                    )}>
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                )}
                            </button>
                        ))}
                    </SettingsCardContent>
                </SettingsCard>
            </SettingsSection>

            <SettingsSection title="Accessibility" variant={variant}>
                <SettingsCard variant={variant}>
                    <SettingsCardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className={cn("text-base", isLight ? "text-slate-900" : "text-white")}>Reduce Motion</Label>
                                <p className={cn("text-sm", isLight ? "text-slate-500" : "text-white/50")}>Minimize animations and transitions.</p>
                            </div>
                            <Switch className={isLight ? "data-[state=checked]:bg-blue-600" : ""} />
                        </div>
                        <div className={cn("flex items-center justify-between border-t pt-6", isLight ? "border-slate-100" : "border-white/5")}>
                            <div className="space-y-0.5">
                                <Label className={cn("text-base", isLight ? "text-slate-900" : "text-white")}>High Contrast</Label>
                                <p className={cn("text-sm", isLight ? "text-slate-500" : "text-white/50")}>Increase contrast for better visibility.</p>
                            </div>
                            <Switch className={isLight ? "data-[state=checked]:bg-blue-600" : ""} />
                        </div>
                    </SettingsCardContent>
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
