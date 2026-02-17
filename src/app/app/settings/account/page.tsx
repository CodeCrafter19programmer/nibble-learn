"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent, SettingsCardFooter } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { User, Mail, Shield } from "lucide-react"

export default function TeacherAccountPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Account & Profile</h1>
                <p className="text-slate-500 dark:text-slate-400">Manage your teaching profile and account security.</p>
            </div>

            <SettingsSection title="Profile Information" variant="slate">
                <SettingsCard variant="slate">
                    <SettingsCardContent className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                                    <User className="w-10 h-10 text-slate-400 dark:text-slate-500" />
                                </div>
                                <Button variant="link" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white mt-1 w-full h-auto p-0 text-xs">
                                    Change Photo
                                </Button>
                            </div>

                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-slate-700 dark:text-slate-300">Full Name</Label>
                                    <Input defaultValue="Sarah Teacher" className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-slate-700 dark:text-slate-300">Display Name</Label>
                                    <Input defaultValue="Ms. Sarah" className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label className="text-slate-700 dark:text-slate-300">Bio / About Me</Label>
                                    <Textarea
                                        placeholder="Tell us about your teaching style..."
                                        className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white min-h-[100px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </SettingsCardContent>
                    <SettingsCardFooter variant="slate" className="flex justify-end">
                        <Button className="bg-violet-600 hover:bg-violet-500 text-white">Save Profile</Button>
                    </SettingsCardFooter>
                </SettingsCard>
            </SettingsSection>

            <SettingsSection title="Security" variant="slate">
                <SettingsCard variant="slate">
                    <SettingsCardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label className="text-slate-700 dark:text-slate-300">Email Address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                                <Input defaultValue="sarah@school.edu" disabled className="pl-10 bg-slate-50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 text-slate-500" />
                            </div>
                        </div>
                    </SettingsCardContent>
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
