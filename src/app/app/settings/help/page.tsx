"use client"

import React from "react"
import { SettingsCard } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, FileText } from "lucide-react"

export default function TeacherHelpPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Help Center</h1>
                <p className="text-slate-500 dark:text-slate-400">Resources and support for educators.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SettingsCard variant="slate" className="p-6 text-center space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-violet-500 dark:text-violet-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-1">Documentation</h3>
                        <p className="text-sm text-slate-500">Read guides and FAQs.</p>
                    </div>
                    <Button variant="outline" className="w-full border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">Browse Docs</Button>
                </SettingsCard>

                <SettingsCard variant="slate" className="p-6 text-center space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-green-500 dark:text-green-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-1">Community</h3>
                        <p className="text-sm text-slate-500">Join the educator forum.</p>
                    </div>
                    <Button variant="outline" className="w-full border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">Join Discord</Button>
                </SettingsCard>

                <SettingsCard variant="slate" className="p-6 text-center space-y-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-1">Contact Support</h3>
                        <p className="text-sm text-slate-500">Priority email support.</p>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20">Contact Us</Button>
                </SettingsCard>
            </div>
        </div>
    )
}
