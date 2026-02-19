"use client"

import React from "react"
import { SettingsCard } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Mail, FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TeacherHelpPage() {
    return (
        <div className="space-y-8 max-w-5xl">
            <div>
                <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Help Center</h1>
                <p className="text-slate-500 dark:text-slate-400">Resources and support for educators.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                <SettingsCard variant="slate" className="p-8 text-left space-y-6 flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-6">
                            <FileText className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Documentation</h3>
                        <p className="text-slate-500 dark:text-slate-400">Read in-depth guides, FAQs, and learn how to get the most out of your Teacher Dashboard.</p>
                    </div>
                    <Link href="/app/settings/help/docs" className="block w-full">
                        <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 font-semibold h-12">
                            Browse Docs <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </SettingsCard>

                <SettingsCard variant="slate" className="p-8 text-left space-y-6 flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                            <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Contact Support</h3>
                        <p className="text-slate-500 dark:text-slate-400">Need personalized help? Reach out to our customer service team via Email or WhatsApp.</p>
                    </div>
                    <Link href="/app/settings/help/contact" className="block w-full">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/20 h-12">
                            Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </SettingsCard>
            </div>
        </div>
    )
}
