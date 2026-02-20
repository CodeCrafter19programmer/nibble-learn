"use client"

import React, { useState } from "react"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useStudentTheme } from "@/components/student/StudentThemeContext"
import { cn } from "@/lib/utils"

export default function StudentContactSupportPage() {
    const { theme } = useStudentTheme()
    const variant = theme === 'light' ? 'default' : 'glass'
    const isLight = theme === 'light'

    const [contactMethod, setContactMethod] = useState<"email" | "whatsapp" | "call">("email")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (contactMethod === "call") {
            window.location.href = "tel:+18001234567"
            return
        }

        if (!subject || !message) return

        setIsSubmitting(true)

        if (contactMethod === "whatsapp") {
            const text = encodeURIComponent(`Student Subject: ${subject}\n\n${message}`)
            window.open(`https://wa.me/15550198234?text=${text}`, "_blank")
            setIsSubmitting(false)
            setIsSuccess(true)
            setSubject("")
            setMessage("")
            setTimeout(() => {
                setIsSuccess(false)
            }, 5000)
            return
        }

        // Mock submission for email/ticket
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSuccess(true)
            setSubject("")
            setMessage("")

            setTimeout(() => {
                setIsSuccess(false)
            }, 5000)
        }, 1500)
    }

    return (
        <div className="space-y-8 max-w-5xl pb-12">
            <div>
                <Link href="/student/settings/help" className={cn("inline-flex items-center text-sm font-medium transition-colors mb-6", isLight ? "text-slate-500 hover:text-slate-900" : "text-white/60 hover:text-white")}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Help Center
                </Link>
                <div className="flex items-center gap-3 mb-2">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", isLight ? "bg-blue-100" : "bg-blue-500/20")}>
                        <Mail className={cn("w-5 h-5", isLight ? "text-blue-600" : "text-blue-400")} />
                    </div>
                    <h1 className={cn("text-3xl font-bold", isLight ? "text-slate-900" : "text-white")}>Contact Support</h1>
                </div>
                <p className={isLight ? "text-slate-500 font-medium" : "text-blue-200/80 font-medium"}>Reach out directly to our student success team or submit a ticket here.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Contact Information Sidebar */}
                <div className="md:col-span-1 space-y-4">
                    <div onClick={() => setContactMethod("email")}>
                        <SettingsCard variant={variant} className={cn(
                            "cursor-pointer transition-all border-2",
                            contactMethod === "email" ? "border-blue-500 shadow-md shadow-blue-500/20" : (isLight ? "border-slate-200 hover:border-slate-300 bg-white" : "border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-md")
                        )}>
                            <SettingsCardContent className="p-6 text-center space-y-3">
                                <div className={cn("w-10 h-10 rounded-full mx-auto flex items-center justify-center", isLight ? "bg-blue-100 text-blue-600" : "bg-blue-500/20 text-blue-400")}>
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className={cn("font-bold", isLight ? "text-slate-900" : "text-white")}>Email Ticket</h3>
                                    <p className={cn("text-sm font-medium mt-1", isLight ? "text-slate-500" : "text-white/60")}>Direct support</p>
                                </div>
                            </SettingsCardContent>
                        </SettingsCard>
                    </div>

                    <div onClick={() => setContactMethod("whatsapp")}>
                        <SettingsCard variant={variant} className={cn(
                            "cursor-pointer transition-all border-2",
                            contactMethod === "whatsapp" ? "border-green-500 shadow-md shadow-green-500/20" : (isLight ? "border-slate-200 hover:border-slate-300 bg-white" : "border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-md")
                        )}>
                            <SettingsCardContent className="p-6 text-center space-y-3">
                                <div className={cn("w-10 h-10 rounded-full mx-auto flex items-center justify-center", isLight ? "bg-green-100 text-green-600" : "bg-green-500/20 text-green-400")}>
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className={cn("font-bold", isLight ? "text-slate-900" : "text-white")}>WhatsApp</h3>
                                    <p className={cn("text-sm font-medium mt-1", isLight ? "text-slate-500" : "text-white/60")}>Fast chat assistance</p>
                                </div>
                            </SettingsCardContent>
                        </SettingsCard>
                    </div>

                    <div onClick={() => setContactMethod("call")}>
                        <SettingsCard variant={variant} className={cn(
                            "cursor-pointer transition-all border-2",
                            contactMethod === "call" ? "border-violet-500 shadow-md shadow-violet-500/20" : (isLight ? "border-slate-200 hover:border-slate-300 bg-white" : "border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-md")
                        )}>
                            <SettingsCardContent className="p-6 text-center space-y-3">
                                <div className={cn("w-10 h-10 rounded-full mx-auto flex items-center justify-center", isLight ? "bg-violet-100 text-violet-600" : "bg-violet-500/20 text-violet-400")}>
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className={cn("font-bold", isLight ? "text-slate-900" : "text-white")}>Call Center</h3>
                                    <p className={cn("text-sm font-medium mt-1", isLight ? "text-slate-500" : "text-white/60")}>+1 (800) 123-4567</p>
                                </div>
                            </SettingsCardContent>
                        </SettingsCard>
                    </div>
                </div>

                {/* Direct Issue Form */}
                <div className="md:col-span-2">
                    <SettingsCard variant={variant} className={cn(isLight && "bg-white border-2 border-slate-300 shadow-md")}>
                        <SettingsCardContent className="p-8">
                            <h2 className={cn("text-2xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>
                                {contactMethod === 'email' && "Submit a Ticket"}
                                {contactMethod === 'whatsapp' && "Message via WhatsApp"}
                                {contactMethod === 'call' && "Call our Team"}
                            </h2>
                            <p className={cn("mb-8 font-medium", isLight ? "text-slate-500" : "text-white/60")}>
                                {contactMethod === 'email' && "Describe your issue, bug report, or feature suggestion below and our team will get back to your student email directly."}
                                {contactMethod === 'whatsapp' && "Pre-fill your message below. We will securely transfer you to WhatsApp to connect with an agent."}
                                {contactMethod === 'call' && "Prefer talking to a real instructor or support agent? Connect instantly via our student-help line."}
                            </p>

                            {isSuccess && (
                                <div className={cn("mb-6 p-4 rounded-xl flex items-center gap-3 border transition-all slide-in-from-top-2", isLight ? "bg-green-50 text-green-700 border-green-200" : "bg-green-500/10 text-green-400 border-green-500/20")}>
                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                    <p className="font-bold">
                                        {contactMethod === 'whatsapp' ? "Opening WhatsApp..." : "Message sent successfully! We'll be in touch soon."}
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {contactMethod !== "call" && (
                                    <>
                                        <div>
                                            <label className={cn("block text-sm font-bold mb-2", isLight ? "text-slate-700" : "text-white")}>
                                                Subject / Category
                                            </label>
                                            <select
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                                className={cn(
                                                    "w-full rounded-xl px-4 py-3 focus:outline-none focus:ring-2 font-medium transition-colors",
                                                    isLight ? "bg-white border border-slate-300 text-slate-900 focus:ring-blue-500" : "bg-black/20 border border-white/20 text-white focus:ring-blue-500 target:bg-slate-900"
                                                )}
                                                required
                                            >
                                                <option value="" disabled className={isLight ? "" : "text-slate-900"}>Select a topic...</option>
                                                <option value="billing" className={isLight ? "" : "text-slate-900"}>Student Plan Options</option>
                                                <option value="bug" className={isLight ? "" : "text-slate-900"}>Report a Tool Bug</option>
                                                <option value="feature" className={isLight ? "" : "text-slate-900"}>Suggest to Add a Subject</option>
                                                <option value="account" className={isLight ? "" : "text-slate-900"}>Account Recovery</option>
                                                <option value="other" className={isLight ? "" : "text-slate-900"}>Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className={cn("block text-sm font-bold mb-2", isLight ? "text-slate-700" : "text-white")}>
                                                Message Details
                                            </label>
                                            <textarea
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Please briefly explain what you need help with..."
                                                className={cn(
                                                    "w-full rounded-xl px-4 py-3 focus:outline-none focus:ring-2 resize-none h-40 font-medium transition-colors",
                                                    isLight ? "bg-white border border-slate-300 text-slate-900 focus:ring-blue-500 placeholder:text-slate-400" : "bg-black/20 border border-white/20 text-white focus:ring-blue-500 placeholder:text-white/40"
                                                )}
                                                required
                                            />
                                        </div>
                                    </>
                                )}

                                {contactMethod === "call" && (
                                    <div className={cn("py-12 text-center rounded-2xl border", isLight ? "bg-slate-50 border-slate-200" : "bg-black/20 border-white/10")}>
                                        <Phone className={cn("w-12 h-12 mx-auto mb-4", isLight ? "text-slate-300" : "text-white/20")} />
                                        <h3 className={cn("text-xl font-extrabold mb-2", isLight ? "text-slate-900" : "text-white")}>1-800-123-4567</h3>
                                        <p className={cn("text-sm font-medium", isLight ? "text-slate-500" : "text-white/60")}>Available Mon-Fri, 9am - 5pm EST</p>
                                    </div>
                                )}

                                <div className={cn("pt-4 border-t flex justify-end", isLight ? "border-slate-200" : "border-white/10")}>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={cn(
                                            "text-white shadow-md px-8 h-12 rounded-xl text-base font-bold transition-all w-full md:w-auto hover:scale-[1.02]",
                                            contactMethod === "whatsapp" ? "bg-green-600 hover:bg-green-700 shadow-green-500/20" :
                                                contactMethod === "call" ? (isLight ? "bg-slate-900 hover:bg-slate-800" : "bg-white text-slate-900 hover:bg-slate-100") :
                                                    "bg-blue-600 hover:bg-blue-700 shadow-blue-500/20"
                                        )}
                                    >
                                        {isSubmitting ? (
                                            <>Processing...</>
                                        ) : contactMethod === "whatsapp" ? (
                                            <><MessageCircle className="w-5 h-5 mr-2" /> Send via WhatsApp</>
                                        ) : contactMethod === "call" ? (
                                            <><Phone className="w-4 h-4 mr-2" /> Call Help Desk</>
                                        ) : (
                                            <><Send className="w-4 h-4 mr-2" /> Submit Ticket</>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </SettingsCardContent>
                    </SettingsCard>
                </div>

            </div>
        </div>
    )
}
