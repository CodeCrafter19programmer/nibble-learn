"use client"

import React, { useState } from "react"
import { Eye, EyeOff, Loader2, CheckCircle2, Mail, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent, SettingsCardFooter } from "@/components/settings/SettingsCard"

type SecurityStep = "email" | "verify" | "update"

export default function SecurityPage() {
    const [step, setStep] = useState<SecurityStep>("email")
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) {
            setErrors({ email: "Email is required" })
            return
        }
        setErrors({})
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsLoading(false)
        setStep("verify")
    }

    const handleVerifySubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (code.length < 5) {
            setErrors({ code: "Please enter a valid code" })
            return
        }
        setErrors({})
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsLoading(false)
        setStep("update")
    }

    const handleUpdateSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrors({})

        if (newPassword !== confirmPassword) {
            setErrors({ confirmPassword: "Passwords do not match" })
            return
        }
        if (newPassword.length < 8) {
            setErrors({ newPassword: "Password must be at least 8 characters" })
            return
        }

        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsLoading(false)
        setIsSuccess(true)

        setNewPassword("")
        setConfirmPassword("")

        setTimeout(() => {
            setIsSuccess(false)
            setStep("email")
            setEmail("")
            setCode("")
        }, 3000)
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Security</h1>
                <p className="text-slate-500 dark:text-slate-400">Manage your password and account security settings.</p>
            </div>

            <SettingsSection title="Change Password" variant="slate">
                <SettingsCard variant="slate">
                    {step === "email" && (
                        <form onSubmit={handleEmailSubmit}>
                            <SettingsCardContent className="space-y-6">
                                <div>
                                    <Label htmlFor="email">Verify Email Address</Label>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 mt-1">
                                        To change your password, please first confirm your email address. We will send a verification code to this email.
                                    </p>
                                    <div className="relative mt-2">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                                setErrors({})
                                            }}
                                            placeholder="Enter your email address"
                                            className={cn(
                                                "pl-10 bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus-visible:ring-violet-500",
                                                errors.email && "border-red-500 focus-visible:ring-red-500"
                                            )}
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
                                    )}
                                </div>
                            </SettingsCardContent>
                            <SettingsCardFooter variant="slate" className="flex justify-end border-t border-slate-200 dark:border-slate-800 pt-4 mt-4">
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-violet-600 hover:bg-violet-500 text-white font-medium px-6 shadow-md shadow-violet-500/20 transition-all hover:scale-[1.02]"
                                >
                                    {isLoading ? (
                                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>
                                    ) : (
                                        "Send Code"
                                    )}
                                </Button>
                            </SettingsCardFooter>
                        </form>
                    )}

                    {step === "verify" && (
                        <form onSubmit={handleVerifySubmit}>
                            <SettingsCardContent className="space-y-6">
                                <div className="p-4 bg-violet-500/10 border border-violet-500/20 rounded-xl flex items-start gap-3">
                                    <ShieldAlert className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-violet-800 dark:text-violet-300 font-medium">Verification Code Sent</p>
                                        <p className="text-sm text-violet-600/80 dark:text-violet-400/80 mt-1">A code has been sent to your email. Please enter it below.</p>
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="code">Enter Code</Label>
                                    <div className="relative mt-2">
                                        <Input
                                            id="code"
                                            name="code"
                                            type="text"
                                            required
                                            value={code}
                                            onChange={(e) => {
                                                setCode(e.target.value)
                                                setErrors({})
                                            }}
                                            placeholder="e.g. 123456"
                                            className={cn(
                                                "bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus-visible:ring-violet-500 text-center tracking-widest font-mono text-lg",
                                                errors.code && "border-red-500 focus-visible:ring-red-500"
                                            )}
                                        />
                                    </div>
                                    {errors.code && (
                                        <p className="mt-1.5 text-sm text-red-500">{errors.code}</p>
                                    )}
                                </div>
                            </SettingsCardContent>
                            <SettingsCardFooter variant="slate" className="flex justify-between border-t border-slate-200 dark:border-slate-800 pt-4 mt-4">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={() => setStep("email")}
                                    className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                >
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-violet-600 hover:bg-violet-500 text-white font-medium px-6 shadow-md shadow-violet-500/20 transition-all hover:scale-[1.02]"
                                >
                                    {isLoading ? (
                                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Verifying...</>
                                    ) : (
                                        "Verify Code"
                                    )}
                                </Button>
                            </SettingsCardFooter>
                        </form>
                    )}

                    {step === "update" && (
                        <form onSubmit={handleUpdateSubmit}>
                            <SettingsCardContent className="space-y-6">
                                {isSuccess && (
                                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <p className="text-green-500 font-medium">Password updated successfully!</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="newPassword">New Password</Label>
                                        <div className="relative mt-2">
                                            <Input
                                                id="newPassword"
                                                name="newPassword"
                                                type={showNewPassword ? "text" : "password"}
                                                required
                                                value={newPassword}
                                                onChange={(e) => {
                                                    setNewPassword(e.target.value)
                                                    setErrors({})
                                                }}
                                                placeholder="Create a new password"
                                                className={cn(
                                                    "bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white pr-10 placeholder:text-slate-400 focus-visible:ring-violet-500",
                                                    errors.newPassword && "border-red-500 focus-visible:ring-red-500"
                                                )}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                                            >
                                                {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                        {errors.newPassword && (
                                            <p className="mt-1.5 text-sm text-red-500">{errors.newPassword}</p>
                                        )}
                                        <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                                            Must be at least 8 characters.
                                        </p>
                                    </div>

                                    <div>
                                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                        <div className="relative mt-2">
                                            <Input
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type={showConfirmPassword ? "text" : "password"}
                                                required
                                                value={confirmPassword}
                                                onChange={(e) => {
                                                    setConfirmPassword(e.target.value)
                                                    setErrors({})
                                                }}
                                                placeholder="Confirm your new password"
                                                className={cn(
                                                    "bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white pr-10 placeholder:text-slate-400 focus-visible:ring-violet-500",
                                                    errors.confirmPassword && "border-red-500 focus-visible:ring-red-500"
                                                )}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                                            >
                                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                        {errors.confirmPassword && (
                                            <p className="mt-1.5 text-sm text-red-500">{errors.confirmPassword}</p>
                                        )}
                                    </div>
                                </div>
                            </SettingsCardContent>
                            <SettingsCardFooter variant="slate" className="flex justify-end border-t border-slate-200 dark:border-slate-800 pt-4 mt-4">
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-violet-600 hover:bg-violet-500 text-white font-medium px-6 shadow-md shadow-violet-500/20 transition-all hover:scale-[1.02]"
                                >
                                    {isLoading ? (
                                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Updating...</>
                                    ) : (
                                        "Update Password"
                                    )}
                                </Button>
                            </SettingsCardFooter>
                        </form>
                    )}
                </SettingsCard>
            </SettingsSection>
        </div>
    )
}
