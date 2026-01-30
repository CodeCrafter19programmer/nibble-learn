"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const backgrounds = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", // Abstract Fluid (Student Creativity)
        alt: "Unleash Creativity",
        label: "For Students",
        desc: "Experience personalized AI tutoring that adapts to your learning style."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop", // Library/Education (Teacher)
        alt: "Empower Teaching",
        label: "For Teachers",
        desc: "Save hours on grading and lesson planning with intelligent assistants."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop", // Modern Office/School (School Admin)
        alt: "Scale Responsibly",
        label: "For Schools",
        desc: "Deploy safe, compliant AI infrastructure across your entire district."
    }
]

export function AuthBackground() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % backgrounds.length)
        }, 6000) // Change very 6 seconds
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900 z-0">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${backgrounds[index].image})` }}
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-slate-900/80 to-transparent mix-blend-multiply" />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>
            </AnimatePresence>

            {/* Floating Text Content - Bottom Left */}
            <div className="absolute bottom-12 left-12 z-10 max-w-lg hidden lg:block">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-white space-y-2"
                    >
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-white/10">
                            {backgrounds[index].label}
                        </span>
                        <h2 className="text-4xl font-bold leading-tight">
                            {backgrounds[index].alt}
                        </h2>
                        <p className="text-lg text-white/80 leading-relaxed font-light">
                            {backgrounds[index].desc}
                        </p>
                    </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="flex gap-2 mt-6">
                    {backgrounds.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-white" : "w-2 bg-white/30"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
