"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent, SettingsCardFooter } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserCircle, Camera } from "lucide-react"
import { useStudentTheme } from "@/components/student/StudentThemeContext"

export default function StudentProfileSettings() {
    const { theme } = useStudentTheme()
    const variant = theme === 'light' ? 'default' : 'glass'
    const isLight = theme === 'light'

    return (
        <div className="space-y-8">
            <div>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>My Profile</h1>
                <p className={isLight ? "text-slate-500" : "text-white/60"}>Manage your personal information and how you appear to others.</p>
            </div>

            <SettingsSection title="Public Avatar" description="Your teacher and classmates will see this photo." variant={variant}>
                <SettingsCard variant={variant} className="flex items-center p-6 gap-6">
                    <div className="relative group">
                        <div className={cn(
                            "w-24 h-24 rounded-full flex items-center justify-center border-2 border-dashed",
                            isLight ? "bg-slate-100 border-slate-300" : "bg-white/10 border-white/20"
                        )}>
                            <UserCircle className={cn("w-12 h-12", isLight ? "text-slate-400" : "text-white/50")} />
                        </div>
                        <button className="absolute bottom-0 right-0 p-2 bg-violet-600 rounded-full hover:bg-violet-500 transition-colors shadow-lg">
                            <Camera className="w-4 h-4 text-white" />
                        </button>
                    </div>

                    <div className="space-y-2">
                        <h3 className={cn("font-medium", isLight ? "text-slate-900" : "text-white")}>Upload a new photo</h3>
                        <p className={cn("text-sm max-w-sm", isLight ? "text-slate-500" : "text-white/50")}>
                            Recommended: Square JPG or PNG, at least 400x400px. All photos are moderated.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <Button variant="secondary" size="sm" className={cn("border-0", isLight ? "bg-slate-200 text-slate-900 hover:bg-slate-300" : "bg-white/10 hover:bg-white/20 text-white")}>
                                Upload Photo
                            </Button>
                            <Button variant="ghost" size="sm" className={cn("text-red-500 hover:bg-red-50", !isLight && "text-red-300 hover:text-red-200 hover:bg-red-500/10")}>
                                Remove
                            </Button>
                        </div>
                    </div>
                </SettingsCard>
            </SettingsSection>

            <SettingsSection title="Personal Information" variant={variant}>
                <SettingsCard variant={variant}>
                    <SettingsCardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className={isLight ? "text-slate-900" : "text-white"}>Display Name</Label>
                                <Input
                                    defaultValue="Student Alex"
                                    className={isLight ? "" : "bg-black/20 border-white/10 text-white placeholder:text-white/30"}
                                />
                                <p className={cn("text-xs", isLight ? "text-slate-400" : "text-white/40")}>This is how your name appears in class.</p>
                            </div>

                            <div className="space-y-2">
                                <Label className={isLight ? "text-slate-900" : "text-white"}>Grade Level</Label>
                                <Input
                                    defaultValue="5th Grade"
                                    readOnly
                                    disabled
                                    className={isLight ? "bg-slate-100 text-slate-500" : "bg-black/40 border-white/5 text-white/50 cursor-not-allowed"}
                                />
                                <p className={cn("text-xs", isLight ? "text-slate-400" : "text-white/40")}>Managed by your teacher.</p>
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <Label className={isLight ? "text-slate-900" : "text-white"}>Email Address</Label>
                                <Input
                                    defaultValue="alex.student@school.edu"
                                    readOnly
                                    disabled
                                    className={cn("md:w-1/2", isLight ? "bg-slate-100 text-slate-500" : "bg-black/40 border-white/5 text-white/50")}
                                />
                            </div>
                        </div>
                    </SettingsCardContent>
                    <SettingsCardFooter variant={variant} className="flex justify-end gap-3">
                        <Button variant="ghost" className={isLight ? "text-slate-600 hover:bg-slate-100" : "text-white/60 hover:text-white hover:bg-white/10"}>Cancel</Button>
                        <Button className="bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/20">
                            Save Changes
                        </Button>
                    </SettingsCardFooter>
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ')
}
