"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FolderHeart, MoreVertical, Plus, FileText, X, Check, Palette } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/providers/ThemeContext"

// Mock Data
const initialCollections = [
    { id: 1, name: "Science Unit: Ecosystems", count: 12, color: "bg-emerald-500", date: "Updated 2 days ago" },
    { id: 2, name: "Math: Fractions", count: 8, color: "bg-blue-500", date: "Updated 1 week ago" },
    { id: 3, name: "Sub Plans", count: 5, color: "bg-amber-500", date: "Updated 3 weeks ago" },
    { id: 4, name: "Essay Rubrics", count: 4, color: "bg-purple-500", date: "Updated 1 month ago" },
    { id: 5, name: "Parent Communication", count: 15, color: "bg-indigo-500", date: "Updated 2 months ago" },
]

const colorOptions = [
    { name: "Emerald", value: "bg-emerald-500" },
    { name: "Blue", value: "bg-blue-500" },
    { name: "Amber", value: "bg-amber-500" },
    { name: "Purple", value: "bg-purple-500" },
    { name: "Indigo", value: "bg-indigo-500" },
    { name: "Rose", value: "bg-rose-500" },
    { name: "Cyan", value: "bg-cyan-500" },
    { name: "Violet", value: "bg-violet-500" },
]

export default function CollectionsPage() {
    const { theme } = useTheme()
    const isLight = theme === 'light'
    const [collections, setCollections] = useState(initialCollections)
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [newCollectionName, setNewCollectionName] = useState("")
    const [selectedColor, setSelectedColor] = useState(colorOptions[0].value)

    const handleCreateCollection = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newCollectionName.trim()) return

        const newCollection = {
            id: Date.now(),
            name: newCollectionName,
            count: 0,
            color: selectedColor,
            date: "Just now"
        }

        setCollections([newCollection, ...collections])
        setNewCollectionName("")
        setSelectedColor(colorOptions[0].value)
        setIsCreateModalOpen(false)
    }

    return (
        <div className="space-y-8 relative min-h-[80vh]">
            <div className={cn("flex justify-between items-end border-b pb-8", isLight ? "border-slate-200" : "border-slate-800")}>
                <div>
                    <h1 className={cn("text-3xl font-bold mb-2", isLight ? "text-slate-900" : "text-white")}>My Collections</h1>
                    <p className={cn("text-lg", isLight ? "text-slate-600 font-medium" : "text-slate-400")}>
                        Organize your generated resources into folders.
                    </p>
                </div>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-all shadow-lg shadow-violet-500/25 hover:-translate-y-0.5 active:translate-y-0"
                >
                    <Plus className="w-5 h-5" />
                    <span className="font-bold">New Collection</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence mode="popLayout">
                    {/* Create New Placeholder Card */}
                    <motion.button
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={cn(
                            "flex flex-col items-center justify-center p-6 rounded-3xl border-2 border-dashed transition-all group h-[280px]",
                            isLight
                                ? "border-slate-300 hover:border-violet-400 hover:bg-violet-50/50"
                                : "border-slate-700 hover:border-violet-500/50 hover:bg-violet-500/10"
                        )}
                        onClick={() => setIsCreateModalOpen(true)}
                    >
                        <div className={cn(
                            "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors",
                            isLight ? "bg-slate-100 text-slate-400 group-hover:bg-violet-100 group-hover:text-violet-600" : "bg-slate-800 text-slate-500 group-hover:bg-violet-500/20 group-hover:text-violet-200"
                        )}>
                            <Plus className="w-8 h-8" />
                        </div>
                        <span className={cn("font-bold text-lg", isLight ? "text-slate-600 group-hover:text-violet-700" : "text-slate-400 group-hover:text-violet-300")}>Create Collection</span>
                    </motion.button>

                    {collections.map((col) => (
                        <motion.div
                            layout
                            key={col.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ y: -5 }}
                            className={cn(
                                "group relative p-6 rounded-3xl border transition-all cursor-pointer h-[280px] flex flex-col",
                                isLight
                                    ? "bg-white border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-violet-200"
                                    : "bg-slate-900 border-slate-800 hover:bg-slate-800 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/50"
                            )}
                        >
                            <Link href={`/app/collections/${col.id}`} className="absolute inset-0 z-10" />

                            <div className="flex justify-between items-start mb-6 z-20">
                                <div className={cn(
                                    "w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-3 group-hover:scale-110",
                                    col.color
                                )}>
                                    <FolderHeart className="w-8 h-8" />
                                </div>
                                <button className={cn(
                                    "p-2 rounded-lg transition-colors relative z-20",
                                    isLight ? "hover:bg-slate-100 text-slate-400" : "hover:bg-slate-700 text-slate-500"
                                )}>
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex-1">
                                <h3 className={cn("text-xl font-bold mb-2 line-clamp-2 leading-tight group-hover:text-violet-500 transition-colors", isLight ? "text-slate-900" : "text-white")}>
                                    {col.name}
                                </h3>
                                <p className={cn("text-xs font-medium uppercase tracking-wider", isLight ? "text-slate-400" : "text-slate-500")}>
                                    {col.date}
                                </p>
                            </div>

                            <div className={cn("flex items-center gap-2 text-sm font-bold pt-6 border-t mt-auto", isLight ? "border-slate-100 text-slate-600" : "border-slate-800 text-slate-400")}>
                                <div className={cn("p-1.5 rounded-md", isLight ? "bg-slate-100 text-slate-500" : "bg-slate-800 text-slate-400")}>
                                    <FileText className="w-4 h-4" />
                                </div>
                                {col.count} Resources
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Create Collection Modal */}
            <AnimatePresence>
                {isCreateModalOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                            onClick={() => setIsCreateModalOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className={cn(
                                "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md rounded-3xl p-8 z-50 shadow-2xl",
                                isLight ? "bg-white" : "bg-slate-900 border border-slate-800"
                            )}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className={cn("text-2xl font-bold", isLight ? "text-slate-900" : "text-white")}>New Collection</h2>
                                <button
                                    onClick={() => setIsCreateModalOpen(false)}
                                    className={cn("p-2 rounded-full transition-colors", isLight ? "hover:bg-slate-100 text-slate-400" : "hover:bg-slate-800 text-slate-500")}
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <form onSubmit={handleCreateCollection} className="space-y-6">
                                <div className="space-y-3">
                                    <label className={cn("text-sm font-bold uppercase tracking-wide", isLight ? "text-slate-500" : "text-slate-400")}>
                                        Collection Name
                                    </label>
                                    <input
                                        autoFocus
                                        type="text"
                                        placeholder="e.g. Science Unit 4, Fall Semester..."
                                        value={newCollectionName}
                                        onChange={(e) => setNewCollectionName(e.target.value)}
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-violet-500/50 transition-all font-medium text-lg",
                                            isLight
                                                ? "bg-slate-50 border-slate-200 text-slate-900 focus:bg-white"
                                                : "bg-slate-950 border-slate-800 text-white focus:bg-slate-900"
                                        )}
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className={cn("text-sm font-bold uppercase tracking-wide", isLight ? "text-slate-500" : "text-slate-400")}>
                                        Color Code
                                    </label>
                                    <div className="grid grid-cols-4 gap-3">
                                        {colorOptions.map((color) => (
                                            <button
                                                key={color.name}
                                                type="button"
                                                onClick={() => setSelectedColor(color.value)}
                                                className={cn(
                                                    "h-12 rounded-xl flex items-center justify-center transition-all relative overflow-hidden",
                                                    color.value,
                                                    selectedColor === color.value ? "ring-2 ring-offset-2 ring-slate-400 scale-105" : "opacity-70 hover:opacity-100 hover:scale-105"
                                                )}
                                            >
                                                {selectedColor === color.value && <Check className="w-5 h-5 text-white drop-shadow-md" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-2 flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsCreateModalOpen(false)}
                                        className={cn(
                                            "flex-1 py-3 rounded-xl font-bold transition-colors",
                                            isLight ? "bg-slate-100 text-slate-600 hover:bg-slate-200" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                                        )}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={!newCollectionName.trim()}
                                        className="flex-1 py-3 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-violet-500/20"
                                    >
                                        Create Folder
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
