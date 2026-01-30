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
                <h1 className="text-3xl font-bold mb-2">Account & Profile</h1>
                <p className="text-slate-400">Manage your teaching profile and account security.</p>
            </div>

            <SettingsSection title="Profile Information" variant="slate">
                <SettingsCard variant="slate">
                    <SettingsCardContent className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                                    <User className="w-10 h-10 text-slate-500" />
                                </div>
                                <Button variant="link" className="text-slate-400 hover:text-white mt-1 w-full h-auto p-0 text-xs">
                                    Change Photo
                                </Button>
                            </div>

                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-slate-300">Full Name</Label>
                                    <Input defaultValue="Sarah Teacher" className="bg-slate-950 border-slate-800 text-white" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-slate-300">Display Name</Label>
                                    <Input defaultValue="Ms. Sarah" className="bg-slate-950 border-slate-800 text-white" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label className="text-slate-300">Bio / About Me</Label>
                                    <Textarea
                                        placeholder="Tell us about your teaching style..."
                                        className="bg-slate-950 border-slate-800 text-white min-h-[100px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </SettingsCardContent>
                    <SettingsCardFooter variant="slate" className="flex justify-end">
                        <Button className="bg-violet-600 hover:bg-violet-500">Save Profile</Button>
                    </SettingsCardFooter>
                </SettingsCard>
            </SettingsSection>

            <SettingsSection title="Security" variant="slate">
                <SettingsCard variant="slate">
                    <SettingsCardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label className="text-slate-300">Email Address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <Input defaultValue="sarah@school.edu" disabled className="pl-10 bg-slate-950/50 border-slate-800 text-slate-500" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-green-500" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Two-Factor Authentication</h4>
                                    <p className="text-sm text-slate-400">Add an extra layer of security to your account.</p>
                                </div>
                            </div>
                            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">Enable</Button>
                        </div>
                    </SettingsCardContent>
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
