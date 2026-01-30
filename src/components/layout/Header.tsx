"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
    ChevronDown,
    Menu,
    X,
    School,
    BookOpen,
    GraduationCap,
    ShieldCheck,
    Zap,
    Map,
    Layout,
    Scale,
    LifeBuoy,
    Lightbulb,
    Award,
    Trophy,
    PenTool,
    FileText,
    Rocket
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavItem {
    title: string
    icon: React.ElementType
    href: string
    description?: string
}

interface NavSection {
    label: string
    items: NavItem[]
}

const navItems: NavSection[] = [
    {
        label: "AI Solutions",
        items: [
            {
                title: "For Schools",
                icon: School,
                description: "Empower your district with AI.",
                href: "/for-schools"
            },
            {
                title: "For Teachers",
                icon: BookOpen,
                description: "Save time and spark creativity.",
                href: "/for-teachers"
            },
            {
                title: "For Students",
                icon: GraduationCap,
                description: "Explore, create, and grow with AI.",
                href: "/for-students"
            }
        ]
    },
    {
        label: "Why NibbleLearn",
        items: [
            { title: "Privacy & Security", icon: ShieldCheck, href: "/privacy" },
            { title: "Student Success", icon: BookOpen, href: "/student-success" }, // Reusing BookOpen for lack of exact match
            { title: "AI Literacy", icon: Zap, href: "/ai-literacy" },
            { title: "Integrations", icon: Layout, href: "/integrations" },
            { title: "AI Policy", icon: Map, href: "/ai-policy" },
            { title: "Compare", icon: Scale, href: "/compare" },
        ]
    },
    {
        label: "Outcomes",
        items: [
            { title: "Safe, Compliant Schools", icon: ShieldCheck, href: "/privacy" },
            { title: "Stronger Learning", icon: Zap, href: "/student-success" },
            { title: "Strategic AI Roadmap", icon: Map, href: "/ai-policy" },
            { title: "Future-Ready Classrooms", icon: Rocket, href: "/ai-literacy" },
            { title: "Accelerated Impact", icon: Layout, href: "/integrations" },
        ]
    },
    {
        label: "Resources",
        items: [
            { title: "Support Center", icon: LifeBuoy, href: "/support" },
            { title: "Professional Development", icon: Lightbulb, href: "/pd" },
            { title: "AI Certifications", icon: Award, href: "/certifications" },
            { title: "Pioneers", icon: Trophy, href: "/pioneers" },
            { title: "AI Tools", icon: PenTool, href: "/tools" },
            { title: "Blog", icon: FileText, href: "/blog" },
        ]
    }
]

export function Header() {
    const [hoveredNav, setHoveredNav] = useState<string | null>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-white py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50 relative">
                    <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        N
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-900">
                        NibbleLearn
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navItems.map((nav) => (
                        <div
                            key={nav.label}
                            className="relative group"
                            onMouseEnter={() => setHoveredNav(nav.label)}
                            onMouseLeave={() => setHoveredNav(null)}
                        >
                            <button className="flex items-center gap-1 font-medium text-sm text-slate-600 hover:text-violet-600 py-2">
                                {nav.label}
                                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                            </button>

                            <AnimatePresence>
                                {hoveredNav === nav.label && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-xl shadow-xl border border-slate-100 p-6 overflow-hidden mt-2"
                                    >
                                        <div className="grid grid-cols-2 gap-4">
                                            {nav.items.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-violet-50 transition-colors group/item"
                                                >
                                                    <div className="p-2 bg-violet-100 text-violet-600 rounded-md group-hover/item:bg-violet-200 transition-colors">
                                                        <item.icon className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-slate-900 text-sm group-hover/item:text-violet-700">
                                                            {item.title}
                                                        </h4>
                                                        {item.description && (
                                                            <p className="text-xs text-slate-500 mt-1">
                                                                {item.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                        {/* Optional Highlight/Featured */}
                                        <div className="mt-4 pt-4 border-t border-slate-100">
                                            <Link href="/demo" className="text-sm font-medium text-violet-600 flex items-center hover:underline">
                                                See all features for {nav.label} →
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <Link href="/pricing" className="font-medium text-sm text-slate-600 hover:text-violet-600">
                        Pricing
                    </Link>
                </nav>

                {/* Desktop CTAs */}
                <div className="hidden lg:flex items-center gap-3">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button variant="default" size="sm" asChild>
                        <Link href="/signup">Sign up free</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-slate-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 overflow-y-auto pb-20"
                    >
                        <div className="p-4 space-y-4">
                            {navItems.map((nav) => (
                                <div key={nav.label} className="border-b border-slate-100 pb-4">
                                    <h3 className="font-semibold text-slate-900 mb-2">{nav.label}</h3>
                                    <div className="space-y-2 pl-2">
                                        {nav.items.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className="flex items-center gap-3 py-2 text-sm text-slate-600"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                <item.icon className="w-4 h-4 text-violet-500" />
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="pt-4 space-y-3">
                                <Button className="w-full" size="lg" asChild>
                                    <Link href="/signup">Sign up free</Link>
                                </Button>
                                <Button variant="outline" className="w-full" size="lg" asChild>
                                    <Link href="/demo">Book a demo</Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
