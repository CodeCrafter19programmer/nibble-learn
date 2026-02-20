"use client"

import React, { useState, useRef } from "react"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent, SettingsCardFooter } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserCircle, Camera, Pencil, Save, X } from "lucide-react"
import { useStudentTheme } from "@/components/student/StudentThemeContext"
import { useStudentProfile } from "@/components/student/StudentProfileContext"
import { cn } from "@/lib/utils"

export default function StudentProfileSettings() {
    const { theme } = useStudentTheme()
    const variant = theme === 'light' ? 'default' : 'glass'
    const isLight = theme === 'light'

    const { profile, updateProfile } = useStudentProfile()
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Form states
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        firstName: profile.firstName,
        lastName: profile.lastName,
        displayName: profile.displayName
    })

    const handleImageClick = () => {
        fileInputRef.current?.click()
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                updateProfile({ avatar: reader.result as string })
            }
            reader.readAsDataURL(file)
        }
    }

    const handleRemoveImage = () => {
        updateProfile({ avatar: "" })
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSaveProfile = () => {
        updateProfile(formData)
        setIsEditing(false)
    }

    const handleCancelEdit = () => {
        setFormData({
            firstName: profile.firstName,
            lastName: profile.lastName,
            displayName: profile.displayName
        })
        setIsEditing(false)
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>My Profile</h1>
                <p className={isLight ? "text-slate-500" : "text-white/60"}>Manage your personal information and how you appear to others.</p>
            </div>

            <SettingsSection title="Public Avatar" description="Your teacher and classmates will see this photo." variant={variant}>
                <SettingsCard variant={variant} className="flex items-center p-6 gap-6">
                    <div className="relative group">
                        <div
                            className={cn(
                                "w-24 h-24 rounded-full flex items-center justify-center border-2 border-dashed overflow-hidden cursor-pointer transition-colors",
                                isLight ? "bg-slate-100 border-slate-300 hover:border-violet-400" : "bg-white/10 border-white/20 hover:border-violet-500"
                            )}
                            onClick={handleImageClick}
                        >
                            {profile.avatar ? (
                                <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover" />
                            ) : (
                                <UserCircle className={cn("w-12 h-12", isLight ? "text-slate-400" : "text-white/50")} />
                            )}
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            accept="image/*"
                            className="hidden"
                        />
                        <button
                            onClick={handleImageClick}
                            className="absolute bottom-0 right-0 p-2 bg-violet-600 rounded-full hover:bg-violet-500 transition-colors shadow-lg"
                        >
                            <Camera className="w-4 h-4 text-white" />
                        </button>
                    </div>

                    <div className="space-y-2">
                        <h3 className={cn("font-medium", isLight ? "text-slate-900" : "text-white")}>Upload a new photo</h3>
                        <p className={cn("text-sm max-w-sm", isLight ? "text-slate-500" : "text-white/50")}>
                            Recommended: Square JPG or PNG, at least 400x400px. All photos are moderated.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={handleImageClick}
                                className={cn("border-0", isLight ? "bg-slate-200 text-slate-900 hover:bg-slate-300" : "bg-white/10 hover:bg-white/20 text-white")}
                            >
                                Upload Photo
                            </Button>
                            {profile.avatar && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleRemoveImage}
                                    className={cn("text-red-500 hover:bg-red-50", !isLight && "text-red-300 hover:text-red-200 hover:bg-red-500/10")}
                                >
                                    Remove
                                </Button>
                            )}
                        </div>
                    </div>
                </SettingsCard>
            </SettingsSection>

            <SettingsSection title="Personal Information" variant={variant}>
                <SettingsCard variant={variant}>
                    <div className="flex justify-end p-4 pb-0">
                        {!isEditing ? (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsEditing(true)}
                                className={cn("flex items-center gap-2", isLight ? "text-violet-600 hover:bg-violet-50" : "text-violet-400 hover:bg-violet-500/10")}
                            >
                                <Pencil className="w-4 h-4" />
                                Edit Info
                            </Button>
                        ) : (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleCancelEdit}
                                className={cn("flex items-center gap-2", isLight ? "text-slate-500 hover:bg-slate-100" : "text-slate-400 hover:bg-white/10")}
                            >
                                <X className="w-4 h-4" />
                                Cancel
                            </Button>
                        )}
                    </div>
                    <SettingsCardContent className="space-y-6 pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className={isLight ? "text-slate-900" : "text-white"}>First Name</Label>
                                <Input
                                    name="firstName"
                                    value={isEditing ? formData.firstName : profile.firstName}
                                    onChange={handleTextChange}
                                    readOnly={!isEditing}
                                    className={cn(
                                        !isEditing && (isLight ? "bg-slate-50 border-transparent text-slate-700 font-medium" : "bg-black/20 border-transparent text-white/80"),
                                        isEditing && (isLight ? "" : "bg-black/40 border-white/20 text-white")
                                    )}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className={isLight ? "text-slate-900" : "text-white"}>Last Name</Label>
                                <Input
                                    name="lastName"
                                    value={isEditing ? formData.lastName : profile.lastName}
                                    onChange={handleTextChange}
                                    readOnly={!isEditing}
                                    className={cn(
                                        !isEditing && (isLight ? "bg-slate-50 border-transparent text-slate-700 font-medium" : "bg-black/20 border-transparent text-white/80"),
                                        isEditing && (isLight ? "" : "bg-black/40 border-white/20 text-white")
                                    )}
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <Label className={isLight ? "text-slate-900" : "text-white"}>Display Name</Label>
                                <Input
                                    name="displayName"
                                    value={isEditing ? formData.displayName : profile.displayName}
                                    onChange={handleTextChange}
                                    readOnly={!isEditing}
                                    className={cn(
                                        !isEditing && (isLight ? "bg-slate-50 border-transparent text-slate-700 font-medium" : "bg-black/20 border-transparent text-white/80"),
                                        isEditing && (isLight ? "" : "bg-black/40 border-white/20 text-white")
                                    )}
                                />
                                <p className={cn("text-xs", isLight ? "text-slate-500" : "text-white/40")}>This is how your name appears in class and across tools.</p>
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <Label className={isLight ? "text-slate-900" : "text-white"}>Email Address</Label>
                                <Input
                                    defaultValue={profile.email}
                                    readOnly
                                    disabled
                                    className={cn("md:w-1/2", isLight ? "bg-slate-100/50 text-slate-500 border-dashed" : "bg-black/40 border-white/5 border-dashed text-white/50")}
                                />
                                <p className={cn("text-xs", isLight ? "text-slate-400" : "text-white/40")}>Email is managed by your teacher / institution.</p>
                            </div>
                        </div>
                    </SettingsCardContent>

                    {isEditing && (
                        <SettingsCardFooter variant={variant} className="flex justify-end gap-3 fade-in slide-in-from-bottom-2 duration-200">
                            <Button
                                variant="ghost"
                                onClick={handleCancelEdit}
                                className={isLight ? "text-slate-600 hover:bg-slate-100" : "text-white/60 hover:text-white hover:bg-white/10"}
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleSaveProfile}
                                className="bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/20 flex items-center gap-2"
                            >
                                <Save className="w-4 h-4" />
                                Save Changes
                            </Button>
                        </SettingsCardFooter>
                    )}
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
