"use client"

import React, { useState } from "react"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone, MessageCircle, Send, BadgeAlert, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ContactSupportPage() {
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!subject || !message) return

        setIsSubmitting(true)

        // Mock submission
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
                    <SettingsCard variant="slate">
                        <SettingsCardContent className="p-6 text-center space-y-3">
                            <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 mx-auto flex items-center justify-center text-violet-600 dark:text-violet-400">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Email Us</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">support@nibblelearn.com</p>
                            </div>
                            <Button variant="outline" className="w-full mt-4 h-9">Copy Email</Button>
                        </SettingsCardContent>
                    </SettingsCard>

                    <SettingsCard variant="slate">
                        <SettingsCardContent className="p-6 text-center space-y-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 mx-auto flex items-center justify-center text-green-600 dark:text-green-400">
                                <MessageCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">WhatsApp</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">+1 (555) 019-8234</p>
                            </div>
                            <Button variant="outline" className="w-full mt-4 h-9 text-green-700 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 border-green-200 dark:border-green-900 hover:bg-green-50 dark:hover:bg-green-900/50">Message on WhatsApp</Button>
                        </SettingsCardContent>
                    </SettingsCard>

                    <SettingsCard variant="slate">
                        <SettingsCardContent className="p-6 text-center space-y-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 mx-auto flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white">Call Center</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">+1 (800) 123-4567</p>
                            </div>
                            <p className="text-xs text-slate-400 font-medium">Available Mon-Fri, 9am - 5pm EST</p>
                        </SettingsCardContent>
                    </SettingsCard>
                </div>

                {/* Direct Issue Form */}
                <div className="md:col-span-2">
                    <SettingsCard variant="slate">
                        <SettingsCardContent className="p-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Submit a Ticket</h2>
                            <p className="text-slate-500 dark:text-slate-400 mb-8">
                                Describe your issue, bug report, or feature suggestion below and our team will get back to you directly within your dashboard.
                            </p>

                            {isSuccess && (
                                <div className="mb-6 bg-green-50 dark:bg-emerald-900/20 text-green-700 dark:text-emerald-400 p-4 rounded-xl flex items-center gap-3 border border-green-200 dark:border-emerald-800/50">
                                    <CheckCircle2 className="w-5 h-5" />
                                    <p className="font-medium">Message sent successfully! We'll be in touch soon.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                        Subject / Category
                                    </label>
                                    <select
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                        className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-40"
                                        required
                                    />
                                </div>

                                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 px-8 h-12 rounded-xl text-base font-medium transition-all"
                                    >
                                        {isSubmitting ? (
                                            <>Processing...</>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2" /> Send Message
                                            </>
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
