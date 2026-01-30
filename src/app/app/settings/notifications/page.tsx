"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function TeacherNotificationsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2">Notification Preferences</h1>
                <p className="text-slate-400">Decide how you want to be notified.</p>
            </div>

            <SettingsSection title="Email Alerts" variant="slate">
                <SettingsCard variant="slate">
                    <SettingsCardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base text-white">Product Updates</Label>
                                <p className="text-sm text-slate-500">New features and tools.</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between border-t border-slate-800 pt-6">
                            <div className="space-y-0.5">
                                <Label className="text-base text-white">Tips & Tricks</Label>
                                <p className="text-sm text-slate-500">Weekly advice on using AI in class.</p>
                            </div>
                            <Switch />
                        </div>
                    </SettingsCardContent>
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
