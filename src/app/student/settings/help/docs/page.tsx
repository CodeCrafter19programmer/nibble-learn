"use client"

import React from "react"
import { SettingsCard, SettingsCardContent } from "@/components/settings/SettingsCard"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Layers, Zap, Info } from "lucide-react"
import Link from "next/link"
import { useStudentTheme } from "@/components/student/StudentThemeContext"
import { cn } from "@/lib/utils"

export default function StudentDocumentationPage() {
    const { theme } = useStudentTheme()
    const variant = theme === 'light' ? 'default' : 'glass'
    const isLight = theme === 'light'

    return (
        <div className="space-y-8 max-w-4xl pb-12">
            <div>
                <Link href="/student/settings/help" className={cn("inline-flex items-center text-sm font-medium mb-6 transition-colors", isLight ? "text-slate-500 hover:text-slate-900" : "text-white/60 hover:text-white")}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Help Center
                </Link>
                <div className="flex items-center gap-3 mb-2">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", isLight ? "bg-blue-100" : "bg-blue-500/20")}>
                        <BookOpen className={cn("w-5 h-5", isLight ? "text-blue-600" : "text-blue-400")} />
                    </div>
                    <h1 className={cn("text-3xl font-bold", isLight ? "text-slate-900" : "text-white")}>Student Guides</h1>
                </div>
                <p className={cn("font-medium", isLight ? "text-slate-500" : "text-blue-200/80")}>Everything you need to know about using your AI learning tools.</p>
            </div>

            <SettingsCard variant={variant} className={cn(isLight && "bg-white border-2 border-slate-300 shadow-md")}>
                <SettingsCardContent className={cn("p-8 prose max-w-none", isLight ? "prose-slate" : "prose-invert text-slate-300")}>

                    <div className={cn("not-prose flex items-start gap-4 p-5 border rounded-xl mb-12", isLight ? "bg-blue-50 border-blue-100" : "bg-blue-500/10 border-blue-500/20")}>
                        <Info className={cn("w-6 h-6 shrink-0 mt-0.5", isLight ? "text-blue-600" : "text-blue-400")} />
                        <div>
                            <h4 className={cn("font-bold mb-1", isLight ? "text-blue-900" : "text-blue-200")}>Welcome to the Learning Hub</h4>
                            <p className={cn("text-sm font-medium", isLight ? "text-blue-800" : "text-blue-300/80")}>
                                This is your quick-start guide to mastering NibbleLearn. Use these tools to study smarter, not harder.
                            </p>
                        </div>
                    </div>

                    <h2 className={cn("flex items-center gap-2 text-2xl font-bold mb-6", isLight ? "text-slate-900" : "text-white")}>
                        <Layers className="w-6 h-6 text-blue-500" /> Dashboard Overview
                    </h2>
                    <p className={isLight ? "text-slate-600" : "text-white/70"}>
                        Your Student Dashboard is designed to give you instant access to interactive learning, study generation, and your saved materials right at your fingertips.
                    </p>
                    <ul className={cn("space-y-2 mt-4", isLight ? "text-slate-600" : "text-white/70")}>
                        <li><strong className={isLight ? "text-slate-900" : "text-white"}>Sidebar Navigation:</strong> Quickly jump between your favorite Tools, Jarvis Chat, your History log, and account Settings.</li>
                        <li><strong className={isLight ? "text-slate-900" : "text-white"}>Credit Usage indicator:</strong> Keep an eye on your remaining monthly AI generations at the bottom of the sidebar.</li>
                    </ul>

                    <hr className={cn("my-10", isLight ? "border-slate-200" : "border-white/10")} />

                    <h2 className={cn("flex items-center gap-2 text-2xl font-bold mb-6", isLight ? "text-slate-900" : "text-white")}>
                        <Zap className="w-6 h-6 text-amber-500" /> Core Features
                    </h2>

                    <h3 className={cn("text-xl font-bold mt-8 mb-4", isLight ? "text-slate-800" : "text-blue-100")}>1. My Tools</h3>
                    <p className={isLight ? "text-slate-600" : "text-white/70"}>
                        Explore customized AI modules designed specifically for students. Whether you need help summarizing a long text, generating practice flashcards, or brainstorming essay topics, simply click a tool, input your subject, and let the AI generate study materials instantly.
                    </p>

                    <h3 className={cn("text-xl font-bold mt-8 mb-4", isLight ? "text-slate-800" : "text-blue-100")}>2. Jarvis Chat Tutor</h3>
                    <p className={isLight ? "text-slate-600" : "text-white/70"}>
                        Stuck on a math problem or need a concept explained differently? Jarvis acts as your personal, 24/7 AI tutor. Engage in continuous chat threads to refine answers, ask follow-up questions, and learn at your own pace without judgment.
                    </p>

                    <h3 className={cn("text-xl font-bold mt-8 mb-4", isLight ? "text-slate-800" : "text-blue-100")}>3. Study History</h3>
                    <p className={isLight ? "text-slate-600" : "text-white/70"}>
                        Never lose a great study guide again. All your past AI generations and Jarvis conversations are safely stored in your History tab so you can review them before exams.
                    </p>

                    <hr className={cn("my-10", isLight ? "border-slate-200" : "border-white/10")} />

                    <h2 className={cn("text-2xl font-bold mb-6", isLight ? "text-slate-900" : "text-white")}>Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h4 className={cn("font-bold text-lg", isLight ? "text-slate-900" : "text-white")}>How do I unlock unlimited credits?</h4>
                            <p className={cn("mt-1", isLight ? "text-slate-600" : "text-white/70")}>Navigate to <strong className={isLight ? "text-slate-800" : "text-blue-200"}>Settings &gt; Billing & Plan</strong> and upgrade to the Pro Student plan to remove all generation limits.</p>
                        </div>
                        <div>
                            <h4 className={cn("font-bold text-lg", isLight ? "text-slate-900" : "text-white")}>Can my teachers see my chats?</h4>
                            <p className={cn("mt-1", isLight ? "text-slate-600" : "text-white/70")}>If you are using NibbleLearn through a school-linked account via "Student Rooms", your teacher can monitor interactions to ensure a safe learning environment. Personal accounts remain completely private.</p>
                        </div>
                    </div>
                </SettingsCardContent>
            </SettingsCard>
        </div>
    )
}
