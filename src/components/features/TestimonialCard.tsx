"use client"

import React from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TestimonialProps {
    quote?: string
    author: string
    role?: string
    school?: string // or organization
    image?: string // Avatar URL
    isImageCard?: boolean // For cards that are just a photo
    imageUrl?: string // The main photo for image-only cards
    className?: string
}

export function TestimonialCard({
    quote,
    author,
    role,
    school,
    image,
    isImageCard,
    imageUrl,
    className
}: TestimonialProps) {
    if (isImageCard) {
        return (
            <motion.div
                whileHover={{ scale: 1.02 }}
                className={cn(
                    "relative overflow-hidden rounded-2xl h-full min-h-[300px] shadow-lg md:min-h-[340px]",
                    className
                )}
            >
                {/* Placeholder for real image */}
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                    {imageUrl ? (
                        // In a real app we'd use next/image here
                        <div className="w-full h-full bg-cover bg-center opacity-80 hover:opacity-100 transition-opacity" style={{ backgroundImage: `url(${imageUrl})` }} />
                    ) : (
                        <div className="text-white/20 font-bold text-lg">Educator Photo</div>
                    )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-medium text-sm">{author}</p>
                </div>
            </motion.div>
        )
    }

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "flex flex-col justify-between bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-violet-100 transition-all duration-300 h-full",
                className
            )}
        >
            <div>
                <Quote className="w-8 h-8 text-violet-200 mb-4 fill-current" />
                <p className="text-slate-700 text-lg leading-relaxed font-medium mb-6">
                    "{quote}"
                </p>
            </div>

            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-50">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center font-bold text-slate-500">
                    {image ? (
                        // Placeholder avatar image logic
                        <div className="w-full h-full rounded-full bg-cover" style={{ backgroundImage: `url(${image})` }} />
                    ) : author.charAt(0)}
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-sm">{author}</p>
                    <div className="text-xs text-slate-500 flex flex-col">
                        <span>{role}</span>
                        {school && <span className="opacity-75">{school}</span>}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
