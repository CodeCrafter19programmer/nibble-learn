"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, User, Bot, Sparkles, RefreshCw, Paperclip, MoreVertical, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/providers/ThemeContext"
import { Button } from "@/components/ui/button"

type Message = {
    id: string
    role: "user" | "assistant"
    content: string
    timestamp: Date
}

const initialMessages: Message[] = [
    {
        id: "1",
        role: "assistant",
        content: "Hi Jane! I'm Raina, your AI instructional coach. How can I support your teaching today?",
        timestamp: new Date()
    }
]

export default function ChatPage() {
    const { theme } = useTheme()
    const isLight = theme === 'light'
    const [messages, setMessages] = useState<Message[]>(initialMessages)
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isTyping])

    const handleSend = async () => {
        if (!input.trim()) return

        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
            timestamp: new Date()
        }

        setMessages(prev => [...prev, userMsg])
        setInput("")
        setIsTyping(true)

        // Simulate AI response
        setTimeout(() => {
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: "That sounds like a great idea! I can help you develop that further. Would you like me to draft a lesson plan or suggest some activities?",
                timestamp: new Date()
            }
            setMessages(prev => [...prev, aiMsg])
            setIsTyping(false)
        }, 1500)
    }

    return (
        <div className="h-[calc(100vh-6rem)] flex flex-col md:flex-row gap-6 overflow-hidden pb-4">

            {/* Sidebar (Chat History) - Hidden on mobile for now */}
            <div className={cn(
                "w-64 flex-col hidden md:flex rounded-2xl border overflow-hidden",
                isLight ? "bg-white border-slate-200" : "bg-slate-900 border-slate-800"
            )}>
                <div className={cn("p-4 border-b font-bold", isLight ? "border-slate-100 text-slate-700" : "border-slate-800 text-slate-200")}>
                    Chat History
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    <button className={cn("w-full text-left px-3 py-2 rounded-lg text-sm transition-colors font-medium truncate", isLight ? "bg-violet-50 text-violet-700" : "bg-violet-500/20 text-violet-300")}>
                        New Chat
                    </button>
                    <button className={cn("w-full text-left px-3 py-2 rounded-lg text-sm transition-colors text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800")}>
                        Lesson Check-in 5th Grade
                    </button>
                    <button className={cn("w-full text-left px-3 py-2 rounded-lg text-sm transition-colors text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800")}>
                        Behavior Management Tips
                    </button>
                </div>
            </div>

            {/* Main Chat Area */}
            <div className={cn(
                "flex-1 flex flex-col rounded-2xl border overflow-hidden shadow-sm",
                isLight ? "bg-white border-slate-200" : "bg-slate-900 border-slate-800"
            )}>
                {/* Header */}
                <div className={cn("p-4 border-b flex justify-between items-center", isLight ? "bg-white border-slate-100" : "bg-slate-900 border-slate-800")}>
                    <div className="flex items-center gap-3">
                        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white", "bg-violet-600")}>
                            <Bot className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className={cn("font-bold text-lg leading-tight", isLight ? "text-slate-900" : "text-white")}>Raina</h2>
                            <p className={cn("text-xs flex items-center gap-1", isLight ? "text-slate-500" : "text-slate-400")}>
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                AI Instructional Coach
                            </p>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" title="Clear Chat">
                        <Trash2 className="w-5 h-5 text-slate-400 hover:text-red-500 transition-colors" />
                    </Button>
                </div>

                {/* Messages */}
                <div className={cn("flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar", isLight ? "bg-slate-50/50" : "bg-black/20")}>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={cn(
                                "flex gap-4 max-w-3xl mx-auto",
                                msg.role === "user" ? "flex-row-reverse" : "flex-row"
                            )}
                        >
                            <div className={cn(
                                "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white shadow-sm mt-1",
                                msg.role === "assistant" ? "bg-violet-600" : "bg-slate-500"
                            )}>
                                {msg.role === "assistant" ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                            </div>

                            <div className={cn(
                                "p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed max-w-[85%]",
                                msg.role === "assistant"
                                    ? isLight ? "bg-white text-slate-700 border border-slate-200 rounded-tl-none" : "bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none"
                                    : isLight ? "bg-violet-600 text-white rounded-tr-none" : "bg-violet-600 text-white rounded-tr-none"
                            )}>
                                {msg.content}
                            </div>
                        </motion.div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-4 max-w-3xl mx-auto"
                        >
                            <div className="w-8 h-8 rounded-full bg-violet-600 flex-shrink-0 flex items-center justify-center text-white shadow-sm mt-1">
                                <Bot className="w-5 h-5" />
                            </div>
                            <div className={cn(
                                "p-4 rounded-2xl shadow-sm border rounded-tl-none flex items-center gap-2",
                                isLight ? "bg-white border-slate-200" : "bg-slate-800 border-slate-700"
                            )}>
                                <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce" />
                                <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce delay-100" />
                                <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce delay-200" />
                            </div>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className={cn("p-4 border-t", isLight ? "bg-white border-slate-100" : "bg-slate-900 border-slate-800")}>
                    <div className="max-w-3xl mx-auto flex gap-3 items-end">
                        <Button variant="outline" size="icon" className={cn("rounded-full flex-shrink-0", isLight ? "border-slate-200 text-slate-500 hover:text-violet-600 hover:bg-violet-50" : "border-slate-700 text-slate-400 hover:text-violet-400")}>
                            <Paperclip className="w-5 h-5" />
                        </Button>
                        <div className="flex-1 relative">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault()
                                        handleSend()
                                    }
                                }}
                                placeholder="Message Raina..."
                                className={cn(
                                    "w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500/50 resize-none max-h-32 min-h-[50px] custom-scrollbar",
                                    isLight
                                        ? "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white"
                                        : "bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-500 focus:bg-black/50"
                                )}
                                rows={1}
                            />
                            <div className="absolute right-2 bottom-2">
                                <Button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    size="icon"
                                    className={cn(
                                        "h-8 w-8 rounded-full transition-all",
                                        input.trim()
                                            ? "bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/30"
                                            : "bg-slate-200 text-slate-400 dark:bg-slate-800 dark:text-slate-600 opacity-50 cursor-not-allowed"
                                    )}
                                >
                                    <Send className="w-4 h-4 ml-0.5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-3xl mx-auto text-center mt-2">
                        <p className={cn("text-[10px]", isLight ? "text-slate-400" : "text-slate-600")}>
                            Raina is an AI assistant and may produce inaccurate information.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
