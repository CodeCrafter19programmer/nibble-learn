"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2, Upload } from "lucide-react"
import { useTheme } from "@/components/providers/ThemeContext"
import { cn } from "@/lib/utils"

export default function SchoolOrganizationPage() {
    const { theme } = useTheme()
    const isLight = theme === 'light'

    return (
        <div className="space-y-8">
            <div>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Organization Settings</h1>
                <p className={isLight ? "text-slate-600" : "text-slate-400"}>Manage your district profile and branding.</p>
            </div>

            <SettingsSection title="District Information" variant={isLight ? "default" : "slate"}>
                <SettingsCard variant={isLight ? "default" : "slate"}>
                    <SettingsCardContent className="space-y-6">
                        <div className="flex items-center gap-6">
                            <div className={cn(
                                "w-24 h-24 rounded-lg flex items-center justify-center border-dashed border",
                                isLight
                                    ? "bg-indigo-50 border-indigo-200"
                                    : "bg-indigo-900/20 border-indigo-500/30"
                            )}>
                                <Building2 className="w-8 h-8 text-indigo-400" />
                            </div>
                            <div className="space-y-2">
                                <h3 className={cn("font-medium", isLight ? "text-slate-900" : "text-white")}>District Logo</h3>
                                <p className={isLight ? "text-slate-500" : "text-slate-400"}>Upload a PNG or SVG for your branded portal.</p>
                                <Button variant="outline" size="sm" className={cn(
                                    isLight
                                        ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                                        : "bg-transparent border-slate-700 text-white hover:bg-slate-800 hover:text-white"
                                )}>
                                    <Upload className="w-4 h-4 mr-2" /> Upload Logo
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className={isLight ? "text-slate-700" : "text-slate-300"}>Organization Name</Label>
                                <Input
                                    defaultValue="Lincoln Unified School District"
                                    className={cn(
                                        isLight
                                            ? "bg-white border-slate-200 text-slate-900"
                                            : "bg-slate-950 border-slate-800 text-white"
                                    )}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className={isLight ? "text-slate-700" : "text-slate-300"}>District ID</Label>
                                <Input
                                    defaultValue="DIST-88291"
                                    readOnly
                                    className={cn(
                                        isLight
                                            ? "bg-slate-50 border-slate-200 text-slate-600"
                                            : "bg-slate-900/50 border-slate-800 text-slate-500"
                                    )}
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <Label className={isLight ? "text-slate-700" : "text-slate-300"}>Address</Label>
                                <Input
                                    defaultValue="123 Education Blvd, Denver, CO 80203"
                                    className={cn(
                                        isLight
                                            ? "bg-white border-slate-200 text-slate-900"
                                            : "bg-slate-950 border-slate-800 text-white"
                                    )}
                                />
                            </div>
                        </div>
                    </SettingsCardContent>
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
