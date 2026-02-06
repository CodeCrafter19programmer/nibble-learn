"use client"

import React, { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Sparkles, Send, Copy, RotateCcw, ThumbsUp, ThumbsDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useStudentTheme } from "@/components/student/StudentThemeContext"
import { toolsData, ToolConfig } from "../tool-data" // Assume relative path is correct

export default function ToolPage() {
    const params = useParams()
    const router = useRouter()
    const { theme } = useStudentTheme()
    const isLight = theme === 'light'

    // State
    const [tool, setTool] = useState<ToolConfig | null>(null)
    const [formData, setFormData] = useState<Record<string, any>>({})
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState<string | null>(null)

    useEffect(() => {
        if (params.toolId && typeof params.toolId === 'string') {
            const toolConfig = toolsData[params.toolId]
            if (toolConfig) {
                setTool(toolConfig)
                // Initialize form defaults
                const initialData: Record<string, any> = {}
                toolConfig.inputs.forEach(input => {
                    if (input.defaultValue) {
                        initialData[input.id] = input.defaultValue
                    }
                })
                setFormData(initialData)
            } else {
                // Handle 404 or redirect
                // router.push('/student/tools')
            }
        }
    }, [params.toolId, router])

    const handleInputChange = (id: string, value: any) => {
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setResult(null)

        // Mock API Call - different behavior based on tool type if needed
        setTimeout(() => {
            const mockResponse = generateMockResponse(tool?.id || "0", formData)
            setResult(mockResponse)
            setIsLoading(false)
        }, 1500)
    }

    if (!tool) return <div className="p-10 text-center opacity-50">Loading tool...</div>

    return (
        <div className="max-w-4xl mx-auto pb-20">
            {/* Header Navigation */}
            <div className="mb-6">
                <button
                    onClick={() => router.back()}
                    className={cn(
                        "flex items-center gap-2 text-sm font-medium transition-colors px-3 py-2 rounded-lg",
                        isLight ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900" : "text-slate-400 hover:bg-white/10 hover:text-white"
                    )}
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Tools
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Input Section - Glass Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                        "p-6 md:p-8 rounded-[24px] backdrop-blur-xl border",
                        isLight
                            ? "bg-white/70 border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                            : "bg-white/[0.05] border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
                    )}
                >
                    {/* Tool Header */}
                    <div className="flex items-start gap-4 mb-8">
                        <div className={cn(
                            "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md shadow-inner",
                            isLight
                                ? "bg-blue-500/10 text-blue-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
                                : "bg-white/10 text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                        )}>
                            <tool.icon className="w-7 h-7" />
                        </div>
                        <div>
                            <h1 className={cn("text-2xl font-bold mb-1", isLight ? "text-[#0F172A]" : "text-white")}>
                                {tool.studentFriendlyName || tool.name}
                            </h1>
                            <p className={cn("text-sm leading-relaxed", isLight ? "text-slate-500" : "text-slate-400")}>
                                {tool.description}
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {tool.inputs.map((input) => (
                            <div key={input.id} className="space-y-2">
                                <label className={cn("text-sm font-semibold ml-1", isLight ? "text-slate-700" : "text-slate-300")}>
                                    {input.label}
                                </label>

                                {input.type === 'text' && (
                                    <input
                                        type="text"
                                        required={input.required}
                                        placeholder={input.placeholder}
                                        value={formData[input.id] || ''}
                                        onChange={(e) => handleInputChange(input.id, e.target.value)}
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl outline-none transition-all",
                                            isLight
                                                ? "bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-800 placeholder:text-slate-400"
                                                : "bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 text-white placeholder:text-slate-500"
                                        )}
                                    />
                                )}

                                {input.type === 'textarea' && (
                                    <textarea
                                        required={input.required}
                                        placeholder={input.placeholder}
                                        rows={5}
                                        value={formData[input.id] || ''}
                                        onChange={(e) => handleInputChange(input.id, e.target.value)}
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl outline-none transition-all resize-none",
                                            isLight
                                                ? "bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-800 placeholder:text-slate-400"
                                                : "bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 text-white placeholder:text-slate-500"
                                        )}
                                    />
                                )}

                                {input.type === 'dropdown' && input.options && (
                                    <div className="relative">
                                        <select
                                            value={formData[input.id] || input.defaultValue || ''}
                                            onChange={(e) => handleInputChange(input.id, e.target.value)}
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl outline-none transition-all appearance-none cursor-pointer",
                                                isLight
                                                    ? "bg-white/50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-slate-800"
                                                    : "bg-white/5 border border-white/10 focus:border-blue-500/50 focus:bg-white/10 text-white"
                                            )}
                                        >
                                            {input.options.map(opt => (
                                                <option key={opt} value={opt} className={isLight ? "text-slate-900" : "bg-slate-900 text-white"}>{opt}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                )}

                                {/* Checkboxes - simple implementation for now */}
                                {input.type === 'checkbox' && input.options && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {input.options.map(opt => (
                                            <label key={opt} className={cn(
                                                "flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all",
                                                isLight
                                                    ? "bg-white/50 border-slate-200 hover:border-blue-300"
                                                    : "bg-white/5 border-white/10 hover:bg-white/10"
                                            )}>
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className={cn("text-sm", isLight ? "text-slate-700" : "text-slate-300")}>{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={cn(
                                "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98]",
                                isLoading ? "opacity-70 cursor-not-allowed" : "hover:shadow-blue-500/25 hover:-translate-y-0.5",
                                isLight
                                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                                    : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                            )}
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Magic is happening...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-5 h-5 fill-white/20" />
                                    Generate Magic
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>

                {/* Output Section */}
                <div className="relative">
                    <AnimatePresence>
                        {result && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className={cn(
                                    "sticky top-6 p-6 md:p-8 rounded-[24px] backdrop-blur-xl border min-h-[400px] flex flex-col",
                                    isLight
                                        ? "bg-white/80 border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-blue-100"
                                        : "bg-[#0F172A]/80 border-white/10 shadow-2xl"
                                )}
                            >
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-dashed border-slate-200 dark:border-white/10">
                                    <h3 className={cn("font-bold text-lg", isLight ? "text-slate-900" : "text-white")}>
                                        Results
                                    </h3>
                                    <div className="flex bg-slate-100 dark:bg-white/5 rounded-lg p-1">
                                        <button className="p-2 hover:bg-white dark:hover:bg-white/10 rounded-md transition-all text-slate-500 hover:text-blue-500">
                                            <Copy className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 hover:bg-white dark:hover:bg-white/10 rounded-md transition-all text-slate-500 hover:text-green-500">
                                            <ThumbsUp className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 hover:bg-white dark:hover:bg-white/10 rounded-md transition-all text-slate-500 hover:text-red-500">
                                            <ThumbsDown className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className={cn(
                                    "prose prose-sm md:prose-base max-w-none flex-1 overflow-y-auto custom-scrollbar p-2 rounded-xl",
                                    isLight ? "prose-slate" : "prose-invert"
                                )}>
                                    {result.split('\n').map((line, i) => (
                                        <p key={i} className="mb-2">{line}</p>
                                    ))}
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex justify-end">
                                    <button
                                        onClick={() => setIsLoading(true)}
                                        className={cn("text-sm font-medium flex items-center gap-2 px-4 py-2 rounded-lg transition-colors", isLight ? "text-slate-500 hover:bg-slate-100" : "text-slate-400 hover:bg-white/5")}
                                    >
                                        <RotateCcw className="w-4 h-4" />
                                        Try Again
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {!result && !isLoading && (
                        <div className={cn(
                            "h-full rounded-[24px] border-2 border-dashed flex flex-col items-center justify-center p-12 text-center opacity-60",
                            isLight ? "border-slate-300 bg-slate-50/50" : "border-white/10 bg-white/5"
                        )}>
                            <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center mb-4">
                                <Sparkles className="w-8 h-8 text-slate-400" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Ready to Create?</h3>
                            <p className="max-w-xs mx-auto text-sm">Fill out the form on the left and watch the magic happen here!</p>
                        </div>
                    )}

                    {isLoading && (
                        <div className={cn(
                            "h-full rounded-[24px] border border-transparent flex flex-col items-center justify-center p-12 text-center",
                            isLight ? "bg-white/40" : "bg-white/5"
                        )}>
                            <div className="relative">
                                <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
                                </div>
                            </div>
                            <h3 className="mt-8 text-xl font-bold animate-pulse">Generating...</h3>
                            <p className="mt-2 text-sm opacity-70">Raina is thinking...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

function generateMockResponse(toolId: string, data: any): string {
    // Simple mock responses for demo
    switch (toolId) {
        case "1": // Essay Outliner
            return `
# Essay Outline: ${data.topic || 'Your Topic'}

## I. Introduction
   A. Hook: Start with a surprising statistic or question about ${data.topic}.
   B. Background Information: Provide context on the subject.
   C. Thesis Statement: Clearly state your main argument.

## II. Body Paragraph 1: First Main Point
   A. Topic Sentence: Introduce the first supporting idea.
   B. Evidence: Use facts or examples to support this.
   C. Analysis: Explain why this evidence matters.
   D. Transition: Connect to the next point.

## III. Body Paragraph 2: Second Main Point
   A. Topic Sentence: Introduce your second major argument.
   B. Evidence: Provide specific details.
   C. Analysis: Discuss the impact or significance.

## IV. Body Paragraph 3: Third Main Point
   A. Topic Sentence: Present your final strong point.
   B. Evidence: Use strong examples here.
   C. Analysis: Tie it back to the thesis.

## V. Conclusion
   A. Restate Thesis: Rephrase your main argument.
   B. Summary of Points: Briefly recap your main ideas.
   C. Final Thought: Leave the reader with a lasting impression.
            `
        case "2": // Paragraph Generator
            return `Here is a ${data.length || 'medium'} paragraph about ${data.topic}:

${data.topic} is a fascinating subject that impacts many aspects of our lives. Specifically, when we look at ${data.details || 'the details provided'}, we can see clear patterns emerging. For example, experts have often noted that this area requires careful attention. Furthermore, understanding the nuances of ${data.topic} allows us to make better decisions. In conclusion, paying attention to these factors is essential for success.`

        case "3": // Research Assistant
            return `Results for: ${data.topic}

**Summary:**
${data.topic} refers to a significant subject in this field. It typically involves understanding the core principles and how they interact with modern challenges.

**Key Facts:**
• Fact 1: This is a major component of the subject.
• Fact 2: Studies show this has changed over time.
• Fact 3: It is critical for ${data.gradeLevel || 'students'} to understand this.

**Suggested Sources:**
1. National Geographic - "Understanding ${data.topic}"
2. Britannia Encyclopedia - "History of ${data.topic}"
3. Scholar Journal - "Analysis of ${data.topic} in 2024"
`
        default:
            return "Here is your generated content! \n\nThis is a simulation of what the AI would produce based on your inputs. \n\n- Point 1\n- Point 2\n- Point 3\n\nRemember to double check all AI outputs!"
    }
}
