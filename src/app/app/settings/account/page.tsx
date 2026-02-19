"use client"

import React, { useState, useEffect, useRef } from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent, SettingsCardFooter } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { User, Mail, Shield } from "lucide-react"

export default function TeacherAccountPage() {
    const [profile, setProfile] = useState({
        firstName: "Sarah",
        lastName: "Teacher",
        displayName: "Ms. Sarah",
        email: "sarah@school.edu",
        bio: "",
        avatar: ""
    })

    useEffect(() => {
        const saved = localStorage.getItem("userProfile")
        if (saved) {
            try {
                const parsed = JSON.parse(saved)
                setProfile(prev => ({ ...prev, ...parsed }))
            } catch (e) { }
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProfile(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSave = () => {
        localStorage.setItem("userProfile", JSON.stringify(profile))
        window.dispatchEvent(new Event('profileUpdated'))
        alert("Profile saved successfully!")
    }

    const fileInputRef = useRef<HTMLInputElement>(null)
    const handleImageClick = () => {
        fileInputRef.current?.click()
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfile(prev => ({ ...prev, avatar: reader.result as string }))
            }
            reader.readAsDataURL(file)
        }
    }

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
                            <div className="flex-shrink-0 flex flex-col items-center">
                                <div
                                    className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-slate-300 dark:border-slate-600 overflow-hidden cursor-pointer hover:border-violet-500 transition-colors"
                                    onClick={handleImageClick}
                                >
                                    {profile.avatar ? (
                                        <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover" />
                                    ) : (
                                        <User className="w-10 h-10 text-slate-400 dark:text-slate-500" />
                                    )}
                                </div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleImageUpload}
                                    accept="image/*"
                                    className="hidden"
                                />
                                <Button
                                    variant="link"
                                    onClick={handleImageClick}
                                    className="text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 mt-2 w-full h-auto p-0 text-xs font-semibold"
                                >
                                    Change Photo
                                </Button>
                            </div>

                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-slate-700 dark:text-slate-300">First Name</Label>
                                    <Input name="firstName" value={profile.firstName} onChange={handleChange} className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus-visible:ring-violet-500" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-slate-700 dark:text-slate-300">Last Name</Label>
                                    <Input name="lastName" value={profile.lastName} onChange={handleChange} className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus-visible:ring-violet-500" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label className="text-slate-700 dark:text-slate-300">Display Name</Label>
                                    <Input name="displayName" value={profile.displayName} onChange={handleChange} className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus-visible:ring-violet-500" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label className="text-slate-700 dark:text-slate-300">Bio / About Me</Label>
                                    <Textarea
                                        name="bio"
                                        value={profile.bio}
                                        onChange={handleChange}
                                        placeholder="Tell us about your teaching style..."
                                        className="bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white min-h-[100px] focus-visible:ring-violet-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </SettingsCardContent>
                    <SettingsCardFooter variant="slate" className="flex justify-end border-t border-slate-200 dark:border-slate-800 pt-4 mt-4">
                        <Button onClick={handleSave} className="bg-violet-600 hover:bg-violet-500 text-white font-medium px-6 shadow-md shadow-violet-500/20 transition-all hover:scale-[1.02]">Save Profile</Button>
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
                                <Input value={profile.email} disabled className="pl-10 bg-slate-50 dark:bg-slate-950/50 border-slate-300 dark:border-slate-800 text-slate-500 cursor-not-allowed opacity-70" />
                            </div>
                        </div>
                    </SettingsCardContent>
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
