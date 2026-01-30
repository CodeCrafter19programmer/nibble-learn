"use client"

import React, { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ToolsShowcase } from "@/components/sections/ToolsShowcase"
import { Search } from "lucide-react"

export default function ToolsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Header />

            {/* Tools Header */}
            <div className="pt-32 pb-10 bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Explore our AI Tools
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Discover over 80+ tools designed to help you save time, differentiate instruction, and support every learner.
                    </p>

                    {/* Search Bar Visual */}
                    <div className="max-w-xl mx-auto relative cursor-text group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-400 group-hover:text-violet-500 transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for a tool (e.g. 'Lesson Plan')..."
                            className="w-full h-14 pl-12 pr-4 rounded-full border-2 border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none text-lg transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Tools Grid Section - Reusing the component but we might want to expand it later */}
            <div className="py-12">
                {/* We are reusing the showcase for now, but in a real app this would be the full directory */}
                <ToolsShowcase />
            </div>

            <Footer />
        </main>
    )
}
