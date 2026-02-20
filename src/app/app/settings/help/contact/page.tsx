"use client"

import React, { useState } from "react"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function ContactSupportPage() {
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
            const text = encodeURIComponent(`Subject: ${subject}\n\n${message}`)
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
                <Link href="/app/settings/help" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Help Center
                </Link>
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Contact Support</h1>
                </div>
                <p className="text-slate-500 dark:text-slate-400">Get in touch with our customer service team or submit a direct ticket.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Contact Information Sidebar */}
                <div className="md:col-span-1 space-y-4">
                    <div onClick={() => setContactMethod("email")}>
                        <SettingsCard variant="slate" className={cn(
                            "cursor-pointer transition-all border-2",
                            contactMethod === "email" ? "border-violet-500 shadow-lg shadow-violet-500/10" : "border-transparent hover:border-slate-300 dark:hover:border-slate-700"
                        )}>
                            <SettingsCardContent className="p-6 text-center space-y-3">
                                <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 mx-auto flex items-center justify-center text-violet-600 dark:text-violet-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Email Ticket</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Direct dashboard support</p>
                                </div>
                            </SettingsCardContent>
                        </SettingsCard>
                    </div>

                    <div onClick={() => setContactMethod("whatsapp")}>
                        <SettingsCard variant="slate" className={cn(
                            "cursor-pointer transition-all border-2",
                            contactMethod === "whatsapp" ? "border-green-500 shadow-lg shadow-green-500/10" : "border-transparent hover:border-slate-300 dark:hover:border-slate-700"
                        )}>
                            <SettingsCardContent className="p-6 text-center space-y-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto flex items-center justify-center text-green-600 dark:text-green-400">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">WhatsApp</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Fast chat assistance</p>
                                </div>
                            </SettingsCardContent>
                        </SettingsCard>
                    </div>

                    <div onClick={() => setContactMethod("call")}>
                        <SettingsCard variant="slate" className={cn(
                            "cursor-pointer transition-all border-2",
                            contactMethod === "call" ? "border-blue-500 shadow-lg shadow-blue-500/10" : "border-transparent hover:border-slate-300 dark:hover:border-slate-700"
                        )}>
                            <SettingsCardContent className="p-6 text-center space-y-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 mx-auto flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Call Center</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">+1 (800) 123-4567</p>
                                </div>
                            </SettingsCardContent>
                        </SettingsCard>
                    </div>
                </div>

                {/* Direct Issue Form */}
                <div className="md:col-span-2">
                    <SettingsCard variant="slate">
                        <SettingsCardContent className="p-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                {contactMethod === 'email' && "Submit a Ticket"}
                                {contactMethod === 'whatsapp' && "Message via WhatsApp"}
                                {contactMethod === 'call' && "Call our Team"}
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 mb-8">
                                {contactMethod === 'email' && "Describe your issue, bug report, or feature suggestion below and our team will get back to you directly within your dashboard."}
                                {contactMethod === 'whatsapp' && "Pre-fill your message below. We will seamlessly transfer you to WhatsApp to connect with an agent."}
                                {contactMethod === 'call' && "Prefer talking to a real person? Connect instantly via our toll-free support line."}
                            </p>

                            {isSuccess && (
                                <div className="mb-6 bg-green-50 dark:bg-emerald-900/20 text-green-700 dark:text-emerald-400 p-4 rounded-xl flex items-center gap-3 border border-green-200 dark:border-emerald-800/50">
                                    <CheckCircle2 className="w-5 h-5" />
                                    <p className="font-medium">
                                        {contactMethod === 'whatsapp' ? "Opening WhatsApp..." : "Message sent successfully! We'll be in touch soon."}
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {contactMethod !== "call" && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                                Subject / Category
                                            </label>
                                            <select
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                                                required
                                            >
                                                <option value="" disabled>Select a topic...</option>
                                                <option value="billing">Billing & Plans</option>
                                                <option value="bug">Report a Bug</option>
                                                <option value="feature">Suggest a Feature</option>
                                                <option value="account">Account Access</option>
                                                <option value="other">Other / General Inquiry</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                                Message Details
                                            </label>
                                            <textarea
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Please provide as much context as possible..."
                                                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none h-40"
                                                required
                                            />
                                        </div>
                                    </>
                                )}

                                {contactMethod === "call" && (
                                    <div className="py-12 text-center bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl">
                                        <Phone className="w-12 h-12 mx-auto mb-4 text-slate-300 dark:text-slate-600" />
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">1-800-123-4567</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Available Mon-Fri, 9am - 5pm EST</p>
                                    </div>
                                )}

                                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={cn(
                                            "text-white shadow-md px-8 h-12 rounded-xl text-base font-medium transition-all w-full md:w-auto",
                                            contactMethod === "whatsapp" ? "bg-green-600 hover:bg-green-700 shadow-green-500/20" :
                                                contactMethod === "call" ? "bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900" :
                                                    "bg-violet-600 hover:bg-violet-700 shadow-violet-500/20"
                                        )}
                                    >
                                        {isSubmitting ? (
                                            <>Processing...</>
                                        ) : contactMethod === "whatsapp" ? (
                                            <><MessageCircle className="w-4 h-4 mr-2" /> Send via WhatsApp</>
                                        ) : contactMethod === "call" ? (
                                            <><Phone className="w-4 h-4 mr-2" /> Call Support Now</>
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
