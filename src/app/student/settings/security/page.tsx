"use client"

import React, { useState, useRef } from "react"
import { Eye, EyeOff, Loader2, CheckCircle2, Mail, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { SettingsSection } from "@/components/settings/SettingsSection"
import { SettingsCard, SettingsCardContent, SettingsCardFooter } from "@/components/settings/SettingsCard"
import { useStudentTheme } from "@/components/student/StudentThemeContext"

type SecurityStep = "email" | "verify" | "update"

export default function StudentSecurityPage() {
    const { theme } = useStudentTheme()
    const isLight = theme === 'light'
    const variant = isLight ? 'default' : 'glass'

    const [step, setStep] = useState<SecurityStep>("email")
    const [email, setEmail] = useState("")
    const [code, setCode] = useState<string[]>(Array(6).fill(""))
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleCodeChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return;

        const newCode = [...code];
        if (value.length > 1) {
            const pastedDigits = value.slice(0, 6).split('');
            for (let i = 0; i < pastedDigits.length; i++) {
                if (index + i < 6) {
                    newCode[index + i] = pastedDigits[i];
                }
            }
            setCode(newCode);
            const nextIndex = Math.min(index + pastedDigits.length, 5);
            inputRefs.current[nextIndex]?.focus();
        } else {
            newCode[index] = value;
            setCode(newCode);
            setErrors({});
            if (value && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    }

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
        if (code.join("").length < 6) {
            setErrors({ code: "Please enter a valid 6-digit code" })
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
            setCode(Array(6).fill(""))
        }, 3000)
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>Security</h1>
                <p className={isLight ? "text-slate-500" : "text-blue-200/80"}>Manage your password and account security settings.</p>
            </div>

            <SettingsSection title="Change Password" variant={variant}>
                <SettingsCard variant={variant}>
                    {step === "email" && (
                        <form onSubmit={handleEmailSubmit}>
                            <SettingsCardContent className="space-y-6">
                                <div>
                                    <Label htmlFor="email" className={isLight ? "text-slate-900" : "text-white"}>Verify Email Address</Label>
                                    <p className={cn("text-sm mb-4 mt-1", isLight ? "text-slate-500" : "text-white/60")}>
                                        To change your password, please first confirm your email address. We will send a verification code to this email.
                                    </p>
                                    <div className="relative mt-2">
                                        <Mail className={cn("absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4", isLight ? "text-slate-400" : "text-white/40")} />
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
                                                "pl-10",
                                                isLight ? "bg-white border-slate-200 focus-visible:ring-[#2563EB]" : "bg-black/20 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-blue-500",
                                                errors.email && "border-red-500 focus-visible:ring-red-500"
                                            )}
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-1.5 text-sm text-red-500 fade-in">{errors.email}</p>
                                    )}
                                </div>
                            </SettingsCardContent>
                            <SettingsCardFooter variant={variant} className="flex justify-end pt-4 mt-4">
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className={cn(
                                        "shadow-lg transition-all hover:scale-[1.02]",
                                        isLight ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20" : "bg-blue-500 hover:bg-blue-600 shadow-blue-500/20"
                                    )}
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
                        <form onSubmit={handleVerifySubmit} className="fade-in duration-300">
                            <SettingsCardContent className="space-y-6">
                                <div className={cn(
                                    "p-4 rounded-xl flex items-start gap-3",
                                    isLight ? "bg-blue-50/50 border border-blue-100" : "bg-blue-500/10 border border-blue-500/20"
                                )}>
                                    <ShieldAlert className={cn("w-5 h-5 flex-shrink-0 mt-0.5", isLight ? "text-blue-600" : "text-blue-400")} />
                                    <div>
                                        <p className={cn("font-medium", isLight ? "text-blue-900" : "text-blue-200")}>Verification Code Sent</p>
                                        <p className={cn("text-sm mt-1", isLight ? "text-blue-700/80" : "text-blue-300/80")}>A code has been sent to your email. Please enter it below.</p>
                                    </div>
                                </div>
                                <div>
                                    <Label className={isLight ? "text-slate-900" : "text-white"}>Enter 6-Digit Code</Label>
                                    <div className="flex gap-2 sm:gap-4 mt-4 justify-center">
                                        {code.map((digit, index) => (
                                            <Input
                                                key={index}
                                                ref={(el) => { inputRefs.current[index] = el; }}
                                                type="text"
                                                inputMode="numeric"
                                                maxLength={6}
                                                value={digit}
                                                onChange={(e) => handleCodeChange(index, e.target.value)}
                                                onKeyDown={(e) => handleKeyDown(index, e)}
                                                className={cn(
                                                    "w-12 h-14 sm:w-14 sm:h-16 text-center text-xl sm:text-2xl font-bold transition-all",
                                                    isLight ? "bg-white border-slate-200 text-slate-900 focus-visible:ring-[#2563EB]" : "bg-black/20 border-white/10 text-white focus-visible:ring-blue-500",
                                                    errors.code && "border-red-500 focus-visible:ring-red-500"
                                                )}
                                            />
                                        ))}
                                    </div>
                                    {errors.code && (
                                        <p className="mt-3 text-sm text-red-500 text-center fade-in">{errors.code}</p>
                                    )}
                                </div>
                            </SettingsCardContent>
                            <SettingsCardFooter variant={variant} className="flex justify-between pt-4 mt-6">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={() => setStep("email")}
                                    className={isLight ? "text-slate-500 hover:text-slate-900 hover:bg-slate-100" : "text-white/50 hover:text-white hover:bg-white/10"}
                                >
                                    Back
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className={cn(
                                        "shadow-lg transition-all hover:scale-[1.02]",
                                        isLight ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20" : "bg-blue-500 hover:bg-blue-600 shadow-blue-500/20"
                                    )}
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
                        <form onSubmit={handleUpdateSubmit} className="fade-in duration-300">
                            <SettingsCardContent className="space-y-6">
                                {isSuccess && (
                                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 slide-in-from-top-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <p className="text-green-500 font-medium">Password updated successfully!</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="newPassword" className={isLight ? "text-slate-900" : "text-white"}>New Password</Label>
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
                                                    "pr-10",
                                                    isLight ? "bg-white border-slate-200 focus-visible:ring-[#2563EB]" : "bg-black/20 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-blue-500",
                                                    errors.newPassword && "border-red-500 focus-visible:ring-red-500"
                                                )}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                                            >
                                                {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                        {errors.newPassword && (
                                            <p className="mt-1.5 text-sm text-red-500">{errors.newPassword}</p>
                                        )}
                                        <p className={cn("mt-1.5 text-xs", isLight ? "text-slate-500" : "text-white/40")}>
                                            Must be at least 8 characters.
                                        </p>
                                    </div>

                                    <div>
                                        <Label htmlFor="confirmPassword" className={isLight ? "text-slate-900" : "text-white"}>Confirm New Password</Label>
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
                                                    "pr-10",
                                                    isLight ? "bg-white border-slate-200 focus-visible:ring-[#2563EB]" : "bg-black/20 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-blue-500",
                                                    errors.confirmPassword && "border-red-500 focus-visible:ring-red-500"
                                                )}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
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
                            <SettingsCardFooter variant={variant} className="flex justify-end pt-4 mt-6">
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className={cn(
                                        "shadow-lg transition-all hover:scale-[1.02]",
                                        isLight ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20" : "bg-blue-500 hover:bg-blue-600 shadow-blue-500/20"
                                    )}
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
