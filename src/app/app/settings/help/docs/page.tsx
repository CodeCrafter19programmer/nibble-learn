"use client"

import React from "react"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Layers, Zap, Info } from "lucide-react"
import Link from "next/link"

export default function DocumentationPage() {
    return (
        <div className="space-y-8 max-w-4xl pb-12">
            <div>
                <Link href="/app/settings/help" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Help Center
                </Link>
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Documentation</h1>
                </div>
                <p className="text-slate-500 dark:text-slate-400">Everything you need to know about using the NibbleLearn Teacher Dashboard.</p>
            </div>

            <SettingsCard variant="slate">
                <SettingsCardContent className="p-8 prose prose-slate dark:prose-invert max-w-none">

                    <div className="not-prose flex items-start gap-4 p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl mb-12">
                        <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">Welcome to the Sample Documentation</h4>
                            <p className="text-sm text-blue-800 dark:text-blue-300">
                                This is a placeholder guide structured to explain the dashboard. We will fill out these detailed walkthroughs together as the platform evolves.
                            </p>
                        </div>
                    </div>

                    <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white mb-6">
                        <Layers className="w-6 h-6 text-violet-500" /> Dashboard Overview
                    </h2>
                    <p>
                        The Teacher Dashboard is your central hub for generating classroom resources, managing student interactions, and reviewing past AI outputs. The interface is split into two primary areas: the resilient sidebar navigation and the main content canvas.
                    </p>
                    <ul className="space-y-2 mt-4">
                        <li><strong>Sidebar:</strong> Contains all core links including Teacher Tools, Jarvis Chat, Student Rooms, and Output History.</li>
                        <li><strong>Top Navigation:</strong> Houses global search, notification updates, and active plan management.</li>
                    </ul>

                    <hr className="my-10 border-slate-200 dark:border-slate-800" />

                    <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white mb-6">
                        <Zap className="w-6 h-6 text-amber-500" /> Core Features
                    </h2>

                    <h3 className="text-xl font-semibold mt-8 mb-4">1. Teacher Tools</h3>
                    <p>
                        The core engine of NibbleLearn. You have access to powerful AI-backed tool registries. Choose a category (like Lesson Planning, Quizzes, or IEP Writers) and provide contextual inputs.
                        The system will intelligently spawn rich formats, downloadable as Google Docs or Microsoft Word instantly (Plus feature).
                    </p>

                    <h3 className="text-xl font-semibold mt-8 mb-4">2. Jarvis Chat</h3>
                    <p>
                        Jarvis acts as your personalized assistant. It persists across conversational threads, allowing you to ask broad educational questions or refine previous outputs conversationally instead of rerunning a form.
                    </p>

                    <h3 className="text-xl font-semibold mt-8 mb-4">3. Student Rooms</h3>
                    <p>
                        Create safe, monitored environments where students can safely leverage AI tools. You can view all active rooms, manage access codes, and analyze their outputs from the central dashboard.
                    </p>

                    <hr className="my-10 border-slate-200 dark:border-slate-800" />

                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-semibold text-lg text-slate-900 dark:text-white">How do I upgrade my plan?</h4>
                            <p className="text-slate-600 dark:text-slate-400 mt-1">Navigate to <strong>Settings &gt; Billing & Plans</strong> and select the Monthly or Annual "Upgrade to Plus" option.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-slate-900 dark:text-white">Is my data secure?</h4>
                            <p className="text-slate-600 dark:text-slate-400 mt-1">Yes, NibbleLearn employs strict data residency rules and active moderation systems to ensure all outputs strictly adhere to educational compliance frameworks.</p>
                        </div>
                    </div>
                </SettingsCardContent>
            </SettingsCard>
        </div>
    )
}
