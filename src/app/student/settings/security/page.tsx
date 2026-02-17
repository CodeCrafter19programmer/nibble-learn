"use client"

import React, { useState } from "react"
import { Eye, EyeOff, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent, SettingsCardFooter } from "@/components/settings/SettingsCard"

export default function StudentSecurityPage() {
    const [showOldPassword, setShowOldPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const [formData, setFormData] = useState({
        old_password: "",
        new_password: "",
        new_password_confirm: ""
    })

    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrors({})

        // Validate passwords match
        if (formData.new_password !== formData.new_password_confirm) {
            setErrors({ new_password_confirm: "Passwords do not match" })
            return
        }

        // Validate password strength (at least 8 chars)
        if (formData.new_password.length < 8) {
            setErrors({ new_password: "Password must be at least 8 characters" })
            return
        }

        setIsLoading(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log("Change password data:", formData)
        setIsLoading(false)
        setIsSuccess(true)

        // Reset form after success
        setFormData({
            old_password: "",
            new_password: "",
            new_password_confirm: ""
        })

        // Clear success message after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        // Clear error when user types
        if (errors[e.target.name]) {
            setErrors(prev => {
                const newErrors = { ...prev }
                delete newErrors[e.target.name]
                return newErrors
            })
        }
    }

    // Determine variant based on theme preference - using consistent style with other student pages
    // For student section, we'll use "glass" style for dark mode to match student aesthetic, and "default" for light mode

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Security</h1>
                <p className="text-slate-500 dark:text-blue-200">Manage your password and account security settings.</p>
            </div>

            <SettingsSection title="Change Password" variant="glass">
                {/* We use glass variant which handles responsiveness internally now for dark/light */}
                <SettingsCard variant="glass" className="bg-white dark:bg-white/10 dark:backdrop-blur-md dark:border-white/20">
                    <form onSubmit={handleSubmit}>
                        <SettingsCardContent className="space-y-6">
                            {isSuccess && (
                                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <p className="text-green-500 font-medium">Password updated successfully!</p>
                                </div>
                            )}

                            <div>
                                <Label htmlFor="old_password">Current Password</Label>
                                <div className="relative mt-2">
                                    <Input
                                        id="old_password"
                                        name="old_password"
                                        type={showOldPassword ? "text" : "password"}
                                        required
                                        value={formData.old_password}
                                        onChange={handleChange}
                                        placeholder="Enter your current password"
                                        className={cn(
                                            "bg-white dark:bg-black/20 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white pr-10 placeholder:text-slate-400 dark:placeholder:text-white/40",
                                            errors.old_password && "border-red-500 focus-visible:ring-red-500"
                                        )}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowOldPassword(!showOldPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:text-white/60 dark:hover:text-white"
                                    >
                                        {showOldPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                                {errors.old_password && (
                                    <p className="mt-1.5 text-sm text-red-500">{errors.old_password}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <Label htmlFor="new_password">New Password</Label>
                                    <div className="relative mt-2">
                                        <Input
                                            id="new_password"
                                            name="new_password"
                                            type={showNewPassword ? "text" : "password"}
                                            required
                                            value={formData.new_password}
                                            onChange={handleChange}
                                            placeholder="Create a new password"
                                            className={cn(
                                                "bg-white dark:bg-black/20 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white pr-10 placeholder:text-slate-400 dark:placeholder:text-white/40",
                                                errors.new_password && "border-red-500 focus-visible:ring-red-500"
                                            )}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:text-white/60 dark:hover:text-white"
                                        >
                                            {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                    {errors.new_password && (
                                        <p className="mt-1.5 text-sm text-red-500">{errors.new_password}</p>
                                    )}
                                    <p className="mt-1.5 text-xs text-slate-500 dark:text-blue-200/60">
                                        Must be at least 8 characters.
                                    </p>
                                </div>

                                <div>
                                    <Label htmlFor="new_password_confirm">Confirm New Password</Label>
                                    <div className="relative mt-2">
                                        <Input
                                            id="new_password_confirm"
                                            name="new_password_confirm"
                                            type={showConfirmPassword ? "text" : "password"}
                                            required
                                            value={formData.new_password_confirm}
                                            onChange={handleChange}
                                            placeholder="Confirm your new password"
                                            className={cn(
                                                "bg-white dark:bg-black/20 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white pr-10 placeholder:text-slate-400 dark:placeholder:text-white/40",
                                                errors.new_password_confirm && "border-red-500 focus-visible:ring-red-500"
                                            )}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:text-white/60 dark:hover:text-white"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                    {errors.new_password_confirm && (
                                        <p className="mt-1.5 text-sm text-red-500">{errors.new_password_confirm}</p>
                                    )}
                                </div>
                            </div>
                        </SettingsCardContent>
                        <SettingsCardFooter variant="glass" className="flex justify-end bg-slate-50 dark:bg-black/20">
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Updating...
                                    </>
                                ) : (
                                    "Update Password"
                                )}
                            </Button>
                        </SettingsCardFooter>
                    </form>
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
