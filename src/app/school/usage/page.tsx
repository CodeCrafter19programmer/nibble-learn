"use client"

import React from "react"
import { BarChart3, Calendar, Download, FileText, Users } from "lucide-react"

const topTools = [
    { name: "Lesson Plan Generator", count: 4521, percent: 85 },
    { name: "Report Card Comments", count: 3210, percent: 68 },
    { name: "Rubric Generator", count: 2845, percent: 60 },
    { name: "Presentation Maker", count: 2100, percent: 45 },
    { name: "Text Leveler", count: 1540, percent: 32 },
]

export default function UsageAnalyticsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-1">Usage Analytics</h1>
                    <p className="text-slate-400 text-sm">Deep dive into platform adoption and tool effectiveness.</p>
                </div>
                <div className="flex gap-3">
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-300 text-sm">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <span>Last 30 Days</span>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-lg shadow-indigo-500/20 transition-colors text-sm font-medium">
                        <Download className="w-4 h-4" /> Export Report
                    </button>
                </div>
            </div>

            {/* Main Chart */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-6">Total Generations Over Time</h3>
                <div className="relative h-72 w-full flex items-end gap-1 sm:gap-4 px-2">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                        <div className="border-t border-slate-400 w-full" />
                        <div className="border-t border-slate-400 w-full" />
                        <div className="border-t border-slate-400 w-full" />
                        <div className="border-t border-slate-400 w-full" />
                    </div>

                    {/* Bars */}
                    {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 95, 80, 60, 75, 50, 40, 55, 65, 85, 90, 100, 95, 85, 75, 65, 60, 55, 70, 80].map((h, i) => (
                        <div key={i} className="flex-1 bg-indigo-900/40 rounded-t-sm relative group hover:bg-indigo-800/50 transition-colors cursor-pointer">
                            <div
                                className="absolute bottom-0 left-0 right-0 bg-indigo-500 rounded-t-sm transition-all group-hover:bg-indigo-400"
                                style={{ height: `${h}%` }}
                            ></div>
                            {/* Tooltip */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                {h * 12} generations
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-slate-500">
                    <span>Dec 1</span>
                    <span>Dec 8</span>
                    <span>Dec 15</span>
                    <span>Dec 22</span>
                    <span>Dec 31</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Tools */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-indigo-400" />
                        Top Performing Tools
                    </h3>
                    <div className="space-y-5">
                        {topTools.map((tool, i) => (
                            <div key={i} className="space-y-1 group">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-200 font-medium">{tool.name}</span>
                                    <span className="text-slate-400">{tool.count.toLocaleString()}</span>
                                </div>
                                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-indigo-500 rounded-full group-hover:bg-indigo-400 transition-colors"
                                        style={{ width: `${tool.percent}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* User Breakdown */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-400" />
                        User Distribution
                    </h3>

                    <div className="flex items-center justify-center py-8">
                        <div className="relative w-48 h-48 rounded-full border-[16px] border-slate-800 flex items-center justify-center">
                            {/* Mock Donut Segments using conic-gradient */}
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: `conic-gradient(#6366f1 0% 75%, #a855f7 75% 90%, #f59e0b 90% 100%)`,
                                    maskImage: 'radial-gradient(transparent 58%, black 60%)',
                                    WebkitMaskImage: 'radial-gradient(transparent 58%, black 60%)'
                                }}
                            />
                            <div className="text-center z-10">
                                <div className="text-3xl font-bold text-white">1.2k</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider">Total Users</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6 mt-4">
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                            <div className="w-3 h-3 rounded-full bg-indigo-500" /> Teachers (75%)
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                            <div className="w-3 h-3 rounded-full bg-purple-500" /> Students (15%)
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                            <div className="w-3 h-3 rounded-full bg-amber-500" /> Admins (10%)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
