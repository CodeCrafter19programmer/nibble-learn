"use client"

import React, { useState } from "react"
import { Eye, EyeOff, KeyRound, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ChangePasswordPage() {
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

    const inputClass = "w-full h-12 px-4 pr-12 rounded-xl border focus:ring-4 outline-none transition-all text-slate-900 placeholder:text-slate-400"

    return (
        <div className="max-w-md mx-auto p-6">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <KeyRound className="w-5 h-5 text-blue-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Change Password
                    </h1>
                </div>
                <p className="text-slate-500">
                    Update your password to keep your account secure.
                </p>
            </div>

            {/* Success Message */}
            {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-700 font-medium">Password updated successfully!</p>
                </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Old Password */}
                <div>
                    <label htmlFor="old_password" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Current Password
                    </label>
                    <div className="relative">
                        <input
                            id="old_password"
                            name="old_password"
                            type={showOldPassword ? "text" : "password"}
                            required
                            value={formData.old_password}
                            onChange={handleChange}
                            placeholder="Enter your current password"
                            className={cn(
                                inputClass,
                                errors.old_password
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                            )}
                        />
                        <button
                            type="button"
                            onClick={() => setShowOldPassword(!showOldPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                            {showOldPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    {errors.old_password && (
                        <p className="mt-1.5 text-sm text-red-500">{errors.old_password}</p>
                    )}
                </div>

                {/* New Password */}
                <div>
                    <label htmlFor="new_password" className="block text-sm font-medium text-slate-700 mb-1.5">
                        New Password
                    </label>
                    <div className="relative">
                        <input
                            id="new_password"
                            name="new_password"
                            type={showNewPassword ? "text" : "password"}
                            required
                            value={formData.new_password}
                            onChange={handleChange}
                            placeholder="Create a new password"
                            className={cn(
                                inputClass,
                                errors.new_password
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                            )}
                        />
                        <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                            {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    {errors.new_password && (
                        <p className="mt-1.5 text-sm text-red-500">{errors.new_password}</p>
                    )}
                    <p className="mt-1.5 text-xs text-slate-400">
                        Must be at least 8 characters with a mix of letters and numbers.
                    </p>
                </div>

                {/* Confirm New Password */}
                <div>
                    <label htmlFor="new_password_confirm" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Confirm New Password
                    </label>
                    <div className="relative">
                        <input
                            id="new_password_confirm"
                            name="new_password_confirm"
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            value={formData.new_password_confirm}
                            onChange={handleChange}
                            placeholder="Confirm your new password"
                            className={cn(
                                inputClass,
                                errors.new_password_confirm
                                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/10"
                                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/10"
                            )}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    {errors.new_password_confirm && (
                        <p className="mt-1.5 text-sm text-red-500">{errors.new_password_confirm}</p>
                    )}
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 rounded-xl text-base font-semibold bg-blue-600 hover:bg-blue-700"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Updating...
                        </>
                    ) : (
                        "Update Password"
                    )}
                </Button>
            </form>
        </div>
    )
}
