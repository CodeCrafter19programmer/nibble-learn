"use client"

import React, { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
    Sparkles,
    Copy,
    ThumbsUp,
    ThumbsDown,
    ArrowLeft,
    Wand2,
    RotateCcw
} from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getToolConfig } from "@/components/tool/tool-registry"
import { ToolConfig } from "@/components/tool/types"
import { useTheme } from "@/components/providers/ThemeContext"

type ViewStatus = 'input' | 'loading' | 'result'

export default function ToolPage() {
    const params = useParams()
    const router = useRouter()
    const toolId = params.toolId as string
    const [config, setConfig] = useState<ToolConfig | null>(null)
    const [formData, setFormData] = useState<Record<string, string>>({})
    const [output, setOutput] = useState("")
    const [viewStatus, setViewStatus] = useState<ViewStatus>('input')
    const [loadingMessage, setLoadingMessage] = useState("Preparing magic...")
    const { theme } = useTheme()
    const isLight = theme === 'light'

    const loadingMessages = [
        "Analyzing requirements...",
        "Consulting the knowledge base...",
        "Drafting content...",
        "Refining output...",
        "Adding finishing touches..."
    ]

    useEffect(() => {
        // Load config based on ID
        setConfig(getToolConfig(toolId))
    }, [toolId])

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (viewStatus === 'loading') {
            let i = 0
            interval = setInterval(() => {
                setLoadingMessage(loadingMessages[i % loadingMessages.length])
                i++
            }, 800)
        }
        return () => clearInterval(interval)
    }, [viewStatus])

    const handleInputChange = (id: string, value: string) => {
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const handleGenerate = async () => {
        if (!config) return
        setViewStatus('loading')
        setOutput("")

        // Simulate AI Processing & Streaming
        setTimeout(async () => {
            const fakeResponse = `Here is the generated content for **${config.name}** based on your inputs:\n\n---\n\n### Generated Output\n\nThis content is tailored to your specifications. In a production environment, this text would be streamed directly from a Large Language Model (LLM) such as GPT-4 or Claude.\n\n*   **Input Analysis**: You requested content regarding *"${formData[config.inputs[0].id] || 'your topic'}"*.\n*   **Customization**: The output is structured to meet educational standards.\n\n#### Key Takeaways\n\n1.  **Efficiency**: Tools like this save valuable teacher time.\n2.  **Quality**: AI assistance ensures consistent, high-quality materials.\n3.  **Flexibility**: Adaptable to various grade levels and subjects.\n\nThank you for using the Nibble Teacher Dashboard!`

            // Allow for a "streaming" effect in the result view if desired, 
            // but for now we'll set the full result to match the smooth UX transition
            setOutput(fakeResponse)
            setViewStatus('result')
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 2000)
    }

    if (!config) return <div className={cn("p-10 text-center", isLight ? "text-slate-500" : "text-slate-400")}>Loading tool...</div>

    return (
        <div className="max-w-3xl mx-auto pb-20 min-h-[80vh]">
            {/* Header Navigation */}
            <div className="mb-6">
                <button
                    onClick={() => {
                        if (viewStatus !== 'input') {
                            setViewStatus('input')
                        } else {
                            router.back()
                        }
                    }}
                    className={cn(
                        "flex items-center gap-2 text-sm font-medium transition-colors px-3 py-2 rounded-lg group",
                        isLight ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900" : "text-slate-400 hover:bg-white/10 hover:text-white"
                    )}
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    {viewStatus === 'input' ? 'Back to Tools' : 'Edit Inputs'}
                </button>
            </div>

            <AnimatePresence mode="wait">
                {viewStatus === 'input' && (
                    <motion.div
                        key="input"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                            "rounded-[24px] overflow-hidden border transition-all",
                            isLight
                                ? "bg-white border-slate-200 shadow-sm"
                                : "bg-slate-900 border-slate-800"
                        )}
                    >
                        {/* Tool Header */}
                        <div className={cn(
                            "p-6 md:p-8 border-b transition-colors flex items-start gap-5",
                            isLight ? "bg-slate-50/50 border-slate-100" : "bg-slate-900 border-slate-800"
                        )}>
                            <div className={cn(
                                "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg",
                                config.color // Use the tool's configured color class
                            )}>
                                <config.icon className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h1 className={cn("text-2xl font-bold mb-1", isLight ? "text-slate-900" : "text-white")}>
                                    {config.name}
                                </h1>
                                <p className={cn("text-sm leading-relaxed", isLight ? "text-slate-500" : "text-slate-400")}>
                                    {config.description}
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="p-6 md:p-8">
                            <div className="space-y-6">
                                {config.inputs.map((input) => (
                                    <div key={input.id} className="space-y-2">
                                        <label className={cn("text-sm font-bold uppercase tracking-wide ml-1", isLight ? "text-slate-500" : "text-slate-400")}>
                                            {input.label}
                                        </label>

                                        {input.type === "select" ? (
                                            <div className="relative">
                                                <select
                                                    className={cn(
                                                        "w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all appearance-none outline-none font-medium cursor-pointer",
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

                                <Button
                                    onClick={handleGenerate}
                                    className={cn(
                                        "w-full h-14 text-lg font-bold rounded-xl transition-all shadow-lg mt-4",
                                        "bg-violet-600 hover:bg-violet-700 text-white shadow-violet-500/25 hover:-translate-y-0.5"
                                    )}
                                >
                                    <Wand2 className="w-5 h-5 mr-2" />
                                    Generate Magic
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}

                {viewStatus === 'loading' && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center justify-center min-h-[400px] text-center"
                    >
                        <div className="relative mb-8">
                            {/* Animated Background Blob - Violet for Teachers */}
                            <div className="absolute inset-0 bg-violet-500/30 blur-3xl animate-pulse rounded-full" />

                            {/* Modern Spinner */}
                            <div className="relative w-24 h-24">
                                <svg className="animate-spin w-full h-full text-violet-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Sparkles className="w-8 h-8 text-violet-600 animate-pulse" />
                                </div>
                            </div>
                        </div>

                        <h3 className={cn("text-2xl font-bold mb-3 animate-pulse", isLight ? "text-slate-800" : "text-white")}>
                            {loadingMessage}
                        </h3>
                        <p className={cn("opacity-70 max-w-xs", isLight ? "text-slate-500" : "text-slate-400")}>
                            Crafting your professional materials...
                        </p>
                    </motion.div>
                )}

                {viewStatus === 'result' && output && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                        className={cn(
                            "rounded-[24px] overflow-hidden border flex flex-col transition-all min-h-[500px]",
                            isLight
                                ? "bg-white border-slate-200 shadow-xl ring-1 ring-violet-100"
                                : "bg-slate-900 border-slate-800 shadow-2xl"
                        )}
                    >
                        <div className={cn(
                            "flex items-center justify-between p-6 border-b",
                            isLight ? "bg-slate-50/80 border-slate-100" : "bg-slate-900 border-slate-800"
                        )}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-600">
                                    <Sparkles className="w-5 h-5 fill-current" />
                                </div>
                                <div>
                                    <h3 className={cn("font-bold text-lg", isLight ? "text-slate-900" : "text-white")}>
                                        Generated Result
                                    </h3>
                                    <p className={cn("text-xs", isLight ? "text-slate-500" : "text-slate-400")}>
                                        Ready to copy & use
                                    </p>
                                </div>
                            </div>

                            <div className="flex bg-slate-100 dark:bg-white/5 rounded-lg p-1">
                                <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-white dark:hover:bg-white/10" onClick={() => navigator.clipboard.writeText(output)}>
                                    <Copy className="w-4 h-4 text-slate-500 hover:text-violet-600" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-white dark:hover:bg-white/10">
                                    <ThumbsUp className="w-4 h-4 text-slate-500 hover:text-green-500" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-white dark:hover:bg-white/10">
                                    <ThumbsDown className="w-4 h-4 text-slate-500 hover:text-red-500" />
                                </Button>
                            </div>
                        </div>

                        <div className={cn(
                            "prose max-w-none prose-lg flex-1 overflow-y-auto custom-scrollbar p-8",
                            isLight ? "prose-slate" : "prose-invert"
                        )}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {output}
                            </ReactMarkdown>
                        </div>

                        <div className={cn(
                            "p-6 border-t flex gap-4 mt-auto",
                            isLight ? "bg-slate-50 border-slate-100" : "bg-slate-900 border-slate-800"
                        )}>
                            <Button
                                onClick={() => setViewStatus('input')}
                                variant="outline"
                                className={cn(
                                    "flex-1 h-12 text-base font-medium border-2 hover:bg-slate-100",
                                    isLight ? "border-slate-200 text-slate-700" : "border-slate-700 text-slate-300 hover:bg-slate-800"
                                )}
                            >
                                Edit Inputs
                            </Button>
                            <Button
                                onClick={() => {
                                    setViewStatus('input')
                                    setFormData({})
                                }}
                                className={cn(
                                    "flex-1 h-12 text-base font-bold text-white shadow-lg shadow-violet-500/20",
                                    "bg-violet-600 hover:bg-violet-700"
                                )}
                            >
                                <RotateCcw className="w-4 h-4 mr-2" />
                                Start New
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
