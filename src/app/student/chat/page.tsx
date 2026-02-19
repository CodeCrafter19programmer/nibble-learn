"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, User, Bot, Sparkles, RefreshCw, Paperclip, MoreVertical, Trash2, Menu, Plus, MessageSquare, X, MessageSquareText } from "lucide-react"
import { cn } from "@/lib/utils"
import { useStudentTheme } from "@/components/student/StudentThemeContext"
import { Button } from "@/components/ui/button"

type Message = {
    id: string
    role: "user" | "assistant"
    content: string
    timestamp: Date
}

type ChatSession = {
    id: string
    title: string
    messages: Message[]
    updatedAt: Date
}

// Mock Data for Student
const MOCK_SESSIONS: ChatSession[] = [
    {
        id: "1",
        title: "Homework Help: Fractions",
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        messages: [
            {
                id: "1-1",
                role: "user",
                content: "I'm stuck on adding fractions with different denominators.",
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24)
            },
            {
                id: "1-2",
                role: "assistant",
                content: "No problem! The first step is to find a common denominator. For example, if you have 1/2 + 1/3, can you think of a number that both 2 and 3 can divide into?",
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 + 5000)
            }
        ]
    },
    {
        id: "2",
        title: "Story Idea: Space Pirates",
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
        messages: [
            {
                id: "2-1",
                role: "user",
                content: "I need names for my space pirate characters.",
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48)
            },
            {
                id: "2-2",
                role: "assistant",
                content: "Ooh, fun! How about 'Captain Nova', 'Zog the Navigator', or 'Starlight Sam'? Do you want them to sound scary or friendly?",
                timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48 + 5000)
            }
        ]
    }
]

export default function StudentChatPage() {
    const { theme } = useStudentTheme()
    const isLight = theme === 'light'

    // State
    const [sessions, setSessions] = useState<ChatSession[]>(MOCK_SESSIONS)
    const [currentSessionId, setCurrentSessionId] = useState<string | null>(null)
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const [showMobileHistory, setShowMobileHistory] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Scroll
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    const currentSession = sessions.find(s => s.id === currentSessionId)
    const messages = currentSession ? currentSession.messages : []

    useEffect(() => {
        scrollToBottom()
    }, [messages, isTyping])

    const handleNewChat = () => {
        setCurrentSessionId(null)
        setShowMobileHistory(false)
    }

    const handleSelectSession = (id: string) => {
        setCurrentSessionId(id)
        setShowMobileHistory(false)
    }

    const handleSend = async () => {
        if (!input.trim()) return

        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
            timestamp: new Date()
        }

        let sessionId = currentSessionId
        let newSessions = [...sessions]

        if (!sessionId) {
            // Create new
            const newSession: ChatSession = {
                id: Date.now().toString(),
                title: input.slice(0, 30) + (input.length > 30 ? "..." : ""),
                messages: [userMsg],
                updatedAt: new Date()
            }
            newSessions = [newSession, ...newSessions]
            sessionId = newSession.id
        } else {
            // Update existing
            const index = newSessions.findIndex(s => s.id === sessionId)
            if (index >= 0) {
                newSessions[index] = {
                    ...newSessions[index],
                    messages: [...newSessions[index].messages, userMsg],
                    updatedAt: new Date()
                }
            }
        }

        setSessions(newSessions)
        setCurrentSessionId(sessionId)
        setInput("")
        setIsTyping(true)

        // Simulate AI
        setTimeout(() => {
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: "That's a great question! Let's break it down together. What do you think is the first step?",
                timestamp: new Date()
            }

            setSessions(prev => {
                const updated = [...prev]
                const idx = updated.findIndex(s => s.id === sessionId)
                if (idx >= 0) {
                    updated[idx] = {
                        ...updated[idx],
                        messages: [...updated[idx].messages, aiMsg],
                        updatedAt: new Date()
                    }
                }
                return updated
            })
            setIsTyping(false)
        }, 1500)
    }

    const handleDeleteSession = (e: React.MouseEvent, id: string) => {
        e.stopPropagation()
        setSessions(prev => prev.filter(s => s.id !== id))
        if (currentSessionId === id) {
            setCurrentSessionId(null)
        }
    }

    // Theme Colors
    // Student theme usually leans blue/cyan.
    const accentColor = "blue-500"
    const accentBg = "bg-blue-500"
    const accentText = "text-blue-500"
    const lightAccentBg = "bg-blue-50"
    const lightAccentText = "text-blue-600"

    // Components
    const HistoryList = () => (
        <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
            <button
                onClick={handleNewChat}
                className={cn(
                    "w-full text-left px-3 py-3 rounded-xl text-sm transition-all font-medium flex items-center gap-3 mb-4",
                    !currentSessionId
                        ? (isLight ? "bg-blue-100 text-blue-700 shadow-sm" : "bg-blue-500/20 text-blue-300 border border-blue-500/30")
                        : (isLight ? "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-blue-200" : "bg-slate-800/50 border border-slate-700 text-slate-300 hover:bg-slate-800")
                )}
            >
                <div className={cn("p-1.5 rounded-lg", isLight ? "bg-blue-200/50" : "bg-blue-500/20")}>
                    <Plus className="w-4 h-4" />
                </div>
                New Chat
            </button>

            <div className={cn("px-2 pb-2 text-xs font-semibold uppercase tracking-wider", isLight ? "text-slate-400" : "text-slate-500")}>
                Recent
            </div>

            {sessions.map((session) => (
                <button
                    key={session.id}
                    onClick={() => handleSelectSession(session.id)}
                    className={cn(
                        "w-full text-left px-3 py-3 rounded-xl text-sm transition-all group relative flex items-center gap-3",
                        currentSessionId === session.id
                            ? (isLight ? "bg-slate-100 text-slate-900 font-medium" : "bg-slate-800 text-white font-medium")
                            : (isLight ? "text-slate-500 hover:bg-slate-50 hover:text-slate-900" : "text-slate-400 hover:bg-slate-800 hover:text-white")
                    )}
                >
                    <MessageSquare className={cn("w-4 h-4 shrink-0", currentSessionId === session.id ? "text-blue-500" : "opacity-50")} />
                    <span className="truncate flex-1">{session.title}</span>

                    <div
                        onClick={(e) => handleDeleteSession(e, session.id)}
                        className={cn(
                            "opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-md hover:bg-red-100 hover:text-red-500",
                            currentSessionId === session.id && "opacity-100"
                        )}
                        title="Delete chat"
                    >
                        <Trash2 className="w-3.5 h-3.5" />
                    </div>
                </button>
            ))}

            {sessions.length === 0 && (
                <div className="text-center py-8 px-4 opacity-50 text-xs">
                    No history yet
                </div>
            )}
        </div>
    )

    return (
        <div className="h-[calc(100vh-6rem)] flex flex-col md:flex-row gap-6 overflow-hidden pb-4 relative max-w-6xl mx-auto w-full">
            {/* Added max-w-6xl mx-auto to constrain width nicely like history page */}

            {/* Desktop Sidebar */}
            <div className={cn(
                "w-72 flex-col hidden md:flex rounded-2xl border overflow-hidden transition-colors duration-300",
                isLight ? "bg-white border-slate-200" : "bg-slate-900 border-slate-800"
            )}>
                <div className={cn("p-4 border-b font-bold flex items-center gap-2", isLight ? "border-slate-100 text-slate-700" : "border-slate-800 text-slate-200")}>
                    <RefreshCw className="w-4 h-4 opacity-50" />
                    My Chats
                </div>
                <HistoryList />
            </div>

            {/* Main Chat Area */}
            <div className={cn(
                "flex-1 flex flex-col rounded-2xl border overflow-hidden shadow-sm relative transition-all duration-300",
                isLight ? "bg-white border-slate-200" : "bg-slate-900 border-slate-800"
            )}>

                {/* Mobile Sidebar Overlay */}
                <AnimatePresence>
                    {showMobileHistory && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setShowMobileHistory(false)}
                                className="absolute inset-0 bg-black/20 z-10 md:hidden backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className={cn(
                                    "absolute top-0 bottom-0 left-0 w-3/4 max-w-xs z-20 border-r shadow-2xl flex flex-col md:hidden",
                                    isLight ? "bg-white border-slate-200" : "bg-slate-900 border-slate-800"
                                )}
                            >
                                <div className="p-4 border-b flex items-center justify-between">
                                    <span className="font-bold">My Chats</span>
                                    <Button variant="ghost" size="icon" onClick={() => setShowMobileHistory(false)}>
                                        <X className="w-5 h-5" />
                                    </Button>
                                </div>
                                <HistoryList />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Header */}
                <div className={cn("p-4 border-b flex justify-between items-center z-0", isLight ? "bg-white border-slate-100" : "bg-slate-900 border-slate-800")}>
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden -ml-2 mr-1"
                            onClick={() => setShowMobileHistory(true)}
                        >
                            <div className="relative py-1 px-1">
                                <MessageSquareText className="w-6 h-6" />
                                <Sparkles className="w-3 h-3 absolute -top-1 -right-1 fill-amber-400 text-amber-500" />
                            </div>
                        </Button>

                        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md shadow-blue-500/20", "bg-blue-500")}>
                            <Bot className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className={cn("font-bold text-lg leading-tight", isLight ? "text-slate-900" : "text-white")}>Jarvis</h2>
                            <p className={cn("text-xs flex items-center gap-1", isLight ? "text-slate-500" : "text-slate-400")}>
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                AI Study Buddy
                            </p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        title="Clear Chat"
                        onClick={() => {
                            if (currentSessionId) handleNewChat()
                            else setInput("")
                        }}
                    >
                        <RefreshCw className="w-5 h-5 text-slate-400 hover:text-blue-500 transition-colors" />
                    </Button>
                </div>

                {/* Messages List */}
                <div className={cn("flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar scroll-smooth", isLight ? "bg-slate-50/50" : "bg-black/20")}>

                    {!currentSessionId && messages.length === 0 && (
                        <div className="flex flex-col items-center justify-center h-full px-8 text-center opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
                            <div className={cn("w-16 h-16 rounded-3xl flex items-center justify-center mb-6 shadow-xl", isLight ? "bg-white text-blue-500" : "bg-slate-800 text-blue-400")}>
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <h3 className={cn("text-2xl font-bold mb-3", isLight ? "text-slate-900" : "text-white")}>
                                Hi there!
                            </h3>
                            <p className={cn("max-w-md mb-8 leading-relaxed", isLight ? "text-slate-500" : "text-slate-400")}>
                                I'm Jarvis, your AI Study Buddy. I can explain tough topics, check your homework, or brainstorm ideas. What should we do?
                            </p>

                            <div className="grid gap-3 w-full max-w-sm">
                                {[
                                    "Explain photosynthesis simply",
                                    "Help me brainstorm for an essay",
                                    "Quiz me on state capitals"
                                ].map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        onClick={() => setInput(suggestion)}
                                        className={cn(
                                            "w-full p-4 rounded-xl text-sm transition-all border text-left hover:-translate-y-0.5 hover:shadow-md",
                                            isLight
                                                ? "bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700"
                                                : "bg-slate-800 border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-300"
                                        )}
                                    >
                                        "{suggestion}"
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

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
                                msg.role === "assistant" ? "bg-blue-500" : "bg-slate-500"
                            )}>
                                {msg.role === "assistant" ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                            </div>

                            <div className={cn(
                                "p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed max-w-[85%]",
                                msg.role === "assistant"
                                    ? isLight ? "bg-white text-slate-700 border border-slate-200 rounded-tl-none" : "bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none"
                                    : isLight ? "bg-blue-600 text-white rounded-tr-none" : "bg-blue-600 text-white rounded-tr-none"
                            )}>
                                {msg.content}
                            </div>
                        </motion.div>
                    ))}

                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-4 max-w-3xl mx-auto"
                        >
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white shadow-sm mt-1">
                                <Bot className="w-5 h-5" />
                            </div>
                            <div className={cn(
                                "p-4 rounded-2xl shadow-sm border rounded-tl-none flex items-center gap-2",
                                isLight ? "bg-white border-slate-200" : "bg-slate-800 border-slate-700"
                            )}>
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" />
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce delay-100" />
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce delay-200" />
                            </div>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className={cn("p-4 border-t", isLight ? "bg-white border-slate-100" : "bg-slate-900 border-slate-800")}>
                    <div className="max-w-3xl mx-auto flex gap-3 items-end">
                        <Button variant="outline" size="icon" className={cn("rounded-full flex-shrink-0", isLight ? "border-slate-200 text-slate-500 hover:text-blue-600 hover:bg-blue-50" : "border-slate-700 text-slate-400 hover:text-blue-400")}>
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
                                placeholder="Message Jarvis..."
                                className={cn(
                                    "w-full rounded-2xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none max-h-32 min-h-[50px] custom-scrollbar transition-all",
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
                                            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
                                            : "bg-slate-200 text-slate-400 dark:bg-slate-800 dark:text-slate-600 opacity-50 cursor-not-allowed"
                                    )}
                                >
                                    <Send className="w-4 h-4 ml-0.5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
