"use client"

import React, { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
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
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
// Note: We need to import the registry from its location.
// Assuming the registry is safe to use in client components (as seen in the app tool page).
import { getToolConfig } from "@/components/tool/tool-registry"
import { ToolConfig } from "@/components/tool/types"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function PublicToolPage() {
    const params = useParams()
    const toolId = params.toolId as string
    const [config, setConfig] = useState<ToolConfig | null>(null)
    const [isGenerating, setIsGenerating] = useState(false)
    const [output, setOutput] = useState("")
    const [formData, setFormData] = useState<Record<string, string>>({})
    const [mobileView, setMobileView] = useState<'input' | 'output'>('input')

    // Default to light theme for public pages as per user preference
    const isLight = true

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

        // Simulate AI Streaming for demo
        const fakeResponse = `Here is a ${config.name} based on your inputs:\n\n**Response:**\n\nThis is a simulated AI output for ${config.name}. In a real application, this would stream data from an LLM API.\n\n*   Point 1: Based on ${formData[config.inputs[0].id] || 'your input'}\n*   Point 2: Customized for your needs.\n\nThank you for trying NibbleLearn!`

        let currentText = ""
        const words = fakeResponse.split(" ")

        for (const word of words) {
            currentText += word + " "
            setOutput(currentText)
            await new Promise(resolve => setTimeout(resolve, 50)) // 50ms per word
        }

        setIsGenerating(false)
    }

    if (!config) return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <div className="flex-1 flex items-center justify-center p-10 text-slate-500">
                Loading tool...
            </div>
            <Footer />
        </div>
    )

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
                <div className="h-[calc(100vh-12rem)] min-h-[600px] flex flex-col md:flex-row gap-6 overflow-hidden pb-4">

                    {/* LEFT PANE: Input Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={cn(
                            "w-full md:w-1/2 lg:w-5/12 flex flex-col h-full border rounded-2xl overflow-hidden transition-all bg-white border-slate-200 shadow-sm",
                            mobileView === 'output' ? "hidden md:flex" : "flex"
                        )}
                    >
                        {/* Header */}
                        <div className="p-6 border-b transition-colors bg-slate-50 border-slate-200">
                            <Link href="/tools" className="inline-flex items-center gap-2 text-sm mb-4 transition-colors text-slate-500 hover:text-slate-900">
                                <ArrowLeft className="w-4 h-4" /> Back to Tools
                            </Link>
                            <div className="flex items-center gap-3">
                                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-lg", config.color)}>
                                    <config.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-slate-900">{config.name}</h1>
                                    <p className="text-sm text-slate-500">{config.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Form Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-white">
                            {config.inputs.map((input) => (
                                <div key={input.id} className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wide text-slate-500">
                                        {input.label}
                                    </label>

                                    {input.type === "select" ? (
                                        <div className="relative">
                                            <select
                                                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all appearance-none outline-none font-medium bg-slate-50 border-slate-200 text-slate-900 focus:bg-white"
                                                onChange={(e) => handleInputChange(input.id, e.target.value)}
                                                value={formData[input.id] || ""}
                                            >
                                                <option value="" disabled selected>Select an option...</option>
                                                {input.options?.map(opt => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    ) : input.type === "textarea" ? (
                                        <textarea
                                            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all min-h-[120px] resize-y outline-none font-medium bg-slate-50 border-slate-200 text-slate-900 focus:bg-white placeholder:text-slate-400"
                                            placeholder={input.placeholder}
                                            onChange={(e) => handleInputChange(input.id, e.target.value)}
                                            value={formData[input.id] || ""}
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all outline-none font-medium bg-slate-50 border-slate-200 text-slate-900 focus:bg-white placeholder:text-slate-400"
                                            placeholder={input.placeholder}
                                            onChange={(e) => handleInputChange(input.id, e.target.value)}
                                            value={formData[input.id] || ""}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Footer Action */}
                        <div className="p-6 border-t transition-colors bg-slate-50 border-slate-200">
                            <Button
                                onClick={handleGenerate}
                                disabled={isGenerating}
                                className="w-full h-12 text-lg font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg bg-violet-600 hover:bg-violet-700 text-white shadow-violet-500/25"
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
                            "flex-1 flex flex-col h-full rounded-2xl overflow-hidden shadow-2xl relative transition-all border bg-white border-slate-200",
                            mobileView === 'input' ? "hidden md:flex" : "flex"
                        )}
                    >
                        {/* Mobile: Back to Input Button */}
                        <div className="md:hidden p-2 border-b flex justify-start bg-slate-50 border-slate-200">
                            <Button variant="ghost" size="sm" onClick={() => setMobileView('input')} className="text-slate-500">
                                <ArrowLeft className="w-4 h-4 mr-2" /> Edit Inputs
                            </Button>
                        </div>
                        {/* Output Header */}
                        <div className="h-14 border-b flex items-center justify-between px-6 transition-colors bg-white border-slate-100">
                            <h2 className="font-semibold flex items-center gap-2 text-slate-700">
                                <Sparkles className="w-4 h-4 text-violet-500" />
                                AI Output
                            </h2>
                            <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-100 text-slate-400 hover:text-slate-600" title="Copy">
                                    <Copy className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-100 text-slate-400 hover:text-slate-600" title="Share">
                                    <Share2 className="w-4 h-4" />
                                </Button>
                                <div className="w-px h-4 mx-2 bg-slate-200" />
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-100 text-slate-400 hover:text-green-600" title="Good">
                                    <ThumbsUp className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-100 text-slate-400 hover:text-red-500" title="Bad">
                                    <ThumbsDown className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-white">
                            {output ? (
                                <>
                                    <div className="prose max-w-none prose-lg prose-slate">
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                            {output}
                                        </ReactMarkdown>
                                    </div>
                                    {isGenerating && (
                                        <span className="inline-block w-2 h-4 bg-violet-500 animate-pulse ml-1 opacity-70">|</span>
                                    )}
                                </>

                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors bg-slate-50 border border-slate-100">
                                        <Wand2 className="w-8 h-8 text-slate-300" />
                                    </div>
                                    <p className="text-lg font-bold mb-1 text-slate-900">Ready to create!</p>
                                    <p className="text-sm text-slate-500">Fill in the form on the left to generate content.</p>
                                </div>
                            )}
                        </div>
                    </motion.div >
                </div >
            </main>
            <Footer />
        </div>
    )
}
