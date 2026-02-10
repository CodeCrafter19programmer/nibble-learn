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

export default function ToolPage() {
    const params = useParams()
    const toolId = params.toolId as string
    const [config, setConfig] = useState<ToolConfig | null>(null)
    const [isGenerating, setIsGenerating] = useState(false)
    const [output, setOutput] = useState("")
    const [formData, setFormData] = useState<Record<string, string>>({})
    const [mobileView, setMobileView] = useState<'input' | 'output'>('input')

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
        const fakeResponse = `Here is a ${config.name} based on your inputs:\n\n**Response:**\n\nThis is a simulated AI output for ${config.name}. in a real application, this would stream data from an LLM API.\n\n*   Point 1: Based on ${formData[config.inputs[0].id] || 'your input'}\n*   Point 2: Customized for your needs.\n\nThank you for using NibbleLearn!`

        let currentText = ""
        const words = fakeResponse.split(" ")

        for (const word of words) {
            currentText += word + " "
            setOutput(currentText)
            await new Promise(resolve => setTimeout(resolve, 50)) // 50ms per word
        }

        setIsGenerating(false)
    }

    if (!config) return <div className="p-10 text-white">Loading tool...</div>

    return (
        <div className="h-[calc(100vh-6rem)] flex flex-col md:flex-row gap-6 overflow-hidden">

            {/* LEFT PANE: Input Form */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={cn(
                    "w-full md:w-1/2 lg:w-5/12 flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all",
                    mobileView === 'output' ? "hidden md:flex" : "flex"
                )}
            >
                {/* Header */}
                <div className="p-6 border-b border-slate-800 bg-slate-900/50">
                    <Link href="/app/tools" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Tools
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-lg", config.color)}>
                            <config.icon className="w-5 h-5" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">{config.name}</h1>
                            <p className="text-sm text-slate-400">{config.description}</p>
                        </div>
                    </div>
                </div>

                {/* Scrollable Form Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                    {config.inputs.map((input) => (
                        <div key={input.id} className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">
                                {input.label}
                            </label>

                            {input.type === "select" ? (
                                <div className="relative">
                                    <select
                                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all appearance-none"
                                        onChange={(e) => handleInputChange(input.id, e.target.value)}
                                        value={formData[input.id] || ""}
                                    >
                                        <option value="" disabled selected>Select an option...</option>
                                        {input.options?.map(opt => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            ) : input.type === "textarea" ? (
                                <textarea
                                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all min-h-[120px] resize-y"
                                    placeholder={input.placeholder}
                                    onChange={(e) => handleInputChange(input.id, e.target.value)}
                                    value={formData[input.id] || ""}
                                />
                            ) : (
                                <input
                                    type="text"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
                                    placeholder={input.placeholder}
                                    onChange={(e) => handleInputChange(input.id, e.target.value)}
                                    value={formData[input.id] || ""}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Footer Action */}
                <div className="p-6 border-t border-slate-800 bg-slate-900/50">
                    <Button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-500/25 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
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
                    "flex-1 flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-2xl relative transition-all",
                    mobileView === 'input' ? "hidden md:flex" : "flex"
                )}
            >
                {/* Mobile: Back to Input Button */}
                <div className="md:hidden p-2 bg-slate-50 border-b border-slate-200 flex justify-start">
                    <Button variant="ghost" size="sm" onClick={() => setMobileView('input')} className="text-slate-500">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Edit Inputs
                    </Button>
                </div>
                {/* Output Header */}
                <div className="h-14 border-b border-slate-100 flex items-center justify-between px-6 bg-white">
                    <h2 className="font-semibold text-slate-700 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-violet-500" />
                        AI Output
                    </h2>
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600" title="Copy">
                            <Copy className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600" title="Share">
                            <Share2 className="w-4 h-4" />
                        </Button>
                        <div className="w-px h-4 bg-slate-200 mx-2" />
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-green-600" title="Good">
                            <ThumbsUp className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-500" title="Bad">
                            <ThumbsDown className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-white">
                    {output ? (
                        <div className="prose prose-slate max-w-none prose-lg">
                            {/* Simple formatting for demo */}
                            {output.split('\n').map((line, i) => (
                                <p key={i} className="mb-4">{line}</p>
                            ))}
                            {isGenerating && (
                                <span className="inline-block w-2 H-4 bg-violet-500 animate-pulse ml-1 opacity-70">|</span>
                            )}
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400">
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4">
                                <Wand2 className="w-8 h-8 text-slate-300" />
                            </div>
                            <p className="text-lg font-medium">Ready to create!</p>
                            <p className="text-sm">Fill in the form to generate content.</p>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    )
}
