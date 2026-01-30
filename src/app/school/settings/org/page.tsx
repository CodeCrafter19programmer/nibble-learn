"use client"

import React from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2, Upload } from "lucide-react"

export default function SchoolOrganizationPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2">Organization Settings</h1>
                <p className="text-slate-400">Manage your district profile and branding.</p>
            </div>

            <SettingsSection title="District Information" variant="slate">
                <SettingsCard variant="slate">
                    <SettingsCardContent className="space-y-6">
                        <div className="flex items-center gap-6">
                            <div className="w-24 h-24 rounded-lg bg-indigo-900/20 border border-indigo-500/30 flex items-center justify-center border-dashed">
                                <Building2 className="w-8 h-8 text-indigo-400" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium text-white">District Logo</h3>
                                <p className="text-sm text-slate-400">Upload a PNG or SVG for your branded portal.</p>
                                <Button variant="outline" size="sm" className="border-slate-700 text-slate-300">
                                    <Upload className="w-4 h-4 mr-2" /> Upload Logo
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-slate-300">Organization Name</Label>
                                <Input defaultValue="Lincoln Unified School District" className="bg-slate-950 border-slate-800 text-white" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-slate-300">District ID</Label>
                                <Input defaultValue="DIST-88291" readOnly className="bg-slate-900/50 border-slate-800 text-slate-500" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <Label className="text-slate-300">Address</Label>
                                <Input defaultValue="123 Education Blvd, Denver, CO 80203" className="bg-slate-950 border-slate-800 text-white" />
                            </div>
                        </div>
                    </SettingsCardContent>
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
