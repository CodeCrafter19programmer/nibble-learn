"use client"

import React, { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
    Sparkles,
    Copy,
    RefreshCw,
    ThumbsUp,
    ThumbsDown,
    Share2,
    ArrowLeft,
    Wand2
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getToolConfig } from "@/components/tool/tool-registry"
import { ToolConfig } from "@/components/tool/types"
import { useTheme } from "@/components/providers/ThemeContext"

export default function ToolPage() {
    const params = useParams()
    const toolId = params.toolId as string
    const [config, setConfig] = useState<ToolConfig | null>(null)
    const [isGenerating, setIsGenerating] = useState(false)
    const [output, setOutput] = useState("")
    const [formData, setFormData] = useState<Record<string, string>>({})
    const [mobileView, setMobileView] = useState<'input' | 'output'>('input')
    const { theme } = useTheme()
    const isLight = theme === 'light'

    // Auto-switch to output view on mobile when generating starts
    useEffect(() => {
        if (isGenerating && window.innerWidth < 768) {
            setMobileView('output')
        }
    }, [isGenerating])

    useEffect(() => {
        // Load config based on ID
        setConfig(getToolConfig(toolId))
    }, [toolId])

    const handleInputChange = (id: string, value: string) => {
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const handleGenerate = async () => {
        if (!config) return
        setIsGenerating(true)
        setOutput("")

        // Simulate AI Streaming
        const fakeResponse = `Here is a ${config.name} based on your inputs:\n\n**Response:**\n\nThis is a simulated AI output for ${config.name}. In a real application, this would stream data from an LLM API.\n\n*   Point 1: Based on ${formData[config.inputs[0].id] || 'your input'}\n*   Point 2: Customized for your needs.\n\nThank you for using NibbleLearn!`

        let currentText = ""
        const words = fakeResponse.split(" ")

        for (const word of words) {
            currentText += word + " "
            setOutput(currentText)
            await new Promise(resolve => setTimeout(resolve, 50)) // 50ms per word
        }

        setIsGenerating(false)
    }

    if (!config) return <div className={cn("p-10 text-center", isLight ? "text-slate-500" : "text-slate-400")}>Loading tool...</div>

    return (
        <div className="h-[calc(100vh-6rem)] flex flex-col md:flex-row gap-6 overflow-hidden pb-4">

            {/* LEFT PANE: Input Form */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={cn(
                    "w-full md:w-1/2 lg:w-5/12 flex flex-col h-full border rounded-2xl overflow-hidden transition-all",
                    isLight
                        ? "bg-white border-slate-200 shadow-sm"
                        : "bg-slate-900 border-slate-800",
                    mobileView === 'output' ? "hidden md:flex" : "flex"
                )}
            >
                {/* Header */}
                <div className={cn(
                    "p-6 border-b transition-colors",
                    isLight ? "bg-slate-50 border-slate-200" : "bg-slate-900 border-slate-800"
                )}>
                    <Link href="/app/tools" className={cn("inline-flex items-center gap-2 text-sm mb-4 transition-colors", isLight ? "text-slate-500 hover:text-slate-900" : "text-slate-400 hover:text-white")}>
                        <ArrowLeft className="w-4 h-4" /> Back to Tools
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-lg", config.color)}>
                            <config.icon className="w-5 h-5" />
                        </div>
                        <div>
                            <h1 className={cn("text-xl font-bold", isLight ? "text-slate-900" : "text-white")}>{config.name}</h1>
                            <p className={cn("text-sm", isLight ? "text-slate-500" : "text-slate-400")}>{config.description}</p>
                        </div>
                    </div>
                </div>

                {/* Scrollable Form Area */}
                <div className={cn("flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar", isLight ? "bg-white" : "bg-slate-900")}>
                    {config.inputs.map((input) => (
                        <div key={input.id} className="space-y-2">
                            <label className={cn("text-sm font-bold uppercase tracking-wide", isLight ? "text-slate-500" : "text-slate-400")}>
                                {input.label}
                            </label>

                            {input.type === "select" ? (
                                <div className="relative">
                                    <select
                                        className={cn(
                                            "w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all appearance-none outline-none font-medium",
                                            isLight
                                                ? "bg-slate-50 border-slate-200 text-slate-900 focus:bg-white"
                                                : "bg-slate-800 border-slate-700 text-slate-200 focus:bg-slate-900"
                                        )}
                                        onChange={(e) => handleInputChange(input.id, e.target.value)}
                                        value={formData[input.id] || ""}
                                    >
                                        <option value="" disabled selected>Select an option...</option>
                                        {input.options?.map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className={cn("w-4 h-4", isLight ? "text-slate-400" : "text-slate-500")} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            ) : input.type === "textarea" ? (
                                <textarea
                                    className={cn(
                                        "w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all min-h-[120px] resize-y outline-none font-medium",
                                        isLight
                                            ? "bg-slate-50 border-slate-200 text-slate-900 focus:bg-white placeholder:text-slate-400"
                                            : "bg-slate-800 border-slate-700 text-slate-200 focus:bg-slate-900 placeholder:text-slate-500"
                                    )}
                                    placeholder={input.placeholder}
                                    onChange={(e) => handleInputChange(input.id, e.target.value)}
                                    value={formData[input.id] || ""}
                                />
                            ) : (
                                <input
                                    type="text"
                                    className={cn(
                                        "w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all outline-none font-medium",
                                        isLight
                                            ? "bg-slate-50 border-slate-200 text-slate-900 focus:bg-white placeholder:text-slate-400"
                                            : "bg-slate-800 border-slate-700 text-slate-200 focus:bg-slate-900 placeholder:text-slate-500"
                                    )}
                                    placeholder={input.placeholder}
                                    onChange={(e) => handleInputChange(input.id, e.target.value)}
                                    value={formData[input.id] || ""}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer Action */}
                <div className={cn(
                    "p-6 border-t transition-colors",
                    isLight ? "bg-slate-50 border-slate-200" : "bg-slate-900 border-slate-800"
                )}>
                    <Button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className={cn(
                            "w-full h-12 text-lg font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg",
                            "bg-violet-600 hover:bg-violet-700 text-white shadow-violet-500/25"
                        )}
                    >
                        {isGenerating ? (
                            <>
                                <RefreshCw className="w-5 h-5 mr-2 animate-spin" /> Generating...
                            </>
                        ) : (
                            <>
                                <Wand2 className="w-5 h-5 mr-2" /> Generate Magic
                            </>
                        )}
                    </Button>
                </div>
            </motion.div>

            {/* RIGHT PANE: Output Display */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className={cn(
                    "flex-1 flex flex-col h-full rounded-2xl overflow-hidden shadow-2xl relative transition-all border",
                    isLight
                        ? "bg-white border-slate-200"
                        : "bg-slate-950 border-slate-800",
                    mobileView === 'input' ? "hidden md:flex" : "flex"
                )}
            >
                {/* Mobile: Back to Input Button */}
                <div className={cn("md:hidden p-2 border-b flex justify-start", isLight ? "bg-slate-50 border-slate-200" : "bg-slate-900 border-slate-800")}>
                    <Button variant="ghost" size="sm" onClick={() => setMobileView('input')} className={isLight ? "text-slate-500" : "text-slate-400"}>
                        <ArrowLeft className="w-4 h-4 mr-2" /> Edit Inputs
                    </Button>
                </div>
                {/* Output Header */}
                <div className={cn(
                    "h-14 border-b flex items-center justify-between px-6 transition-colors",
                    isLight ? "bg-white border-slate-100" : "bg-slate-950 border-slate-800"
                )}>
                    <h2 className={cn("font-semibold flex items-center gap-2", isLight ? "text-slate-700" : "text-slate-200")}>
                        <Sparkles className="w-4 h-4 text-violet-500" />
                        AI Output
                    </h2>
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className={cn("h-8 w-8 hover:bg-slate-100 dark:hover:bg-slate-800", isLight ? "text-slate-400 hover:text-slate-600" : "text-slate-500 hover:text-white")} title="Copy">
                            <Copy className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className={cn("h-8 w-8 hover:bg-slate-100 dark:hover:bg-slate-800", isLight ? "text-slate-400 hover:text-slate-600" : "text-slate-500 hover:text-white")} title="Share">
                            <Share2 className="w-4 h-4" />
                        </Button>
                        <div className={cn("w-px h-4 mx-2", isLight ? "bg-slate-200" : "bg-white/10")} />
                        <Button variant="ghost" size="icon" className={cn("h-8 w-8 hover:bg-slate-100 dark:hover:bg-slate-800", isLight ? "text-slate-400 hover:text-green-600" : "text-slate-500 hover:text-green-400")} title="Good">
                            <ThumbsUp className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className={cn("h-8 w-8 hover:bg-slate-100 dark:hover:bg-slate-800", isLight ? "text-slate-400 hover:text-red-500" : "text-slate-500 hover:text-red-400")} title="Bad">
                            <ThumbsDown className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Content Area */}
                <div className={cn("flex-1 overflow-y-auto p-8 custom-scrollbar", isLight ? "bg-white" : "bg-slate-950")}>
                    {output ? (
                        <div className={cn("prose max-w-none prose-lg", isLight ? "prose-slate" : "prose-invert text-slate-100")}>
                            {/* Simple formatting for demo */}
                            {output.split('\n').map((line, i) => (
                                <p key={i} className="mb-4">{line}</p>
                            ))}
                            {isGenerating && (
                                <span className="inline-block w-2 H-4 bg-violet-500 animate-pulse ml-1 opacity-70">|</span>
                            )}
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center px-4">
                            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors", isLight ? "bg-slate-50 border border-slate-100" : "bg-white/5 border border-white/5")}>
                                <Wand2 className={cn("w-8 h-8", isLight ? "text-slate-300" : "text-slate-600")} />
                            </div>
                            <p className={cn("text-lg font-bold mb-1", isLight ? "text-slate-900" : "text-white")}>Ready to create!</p>
                            <p className={cn("text-sm", isLight ? "text-slate-500" : "text-slate-400")}>Fill in the form on the left to generate content.</p>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    )
}
