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
import { Logo } from "@/components/logo"
import { Button, buttonVariants } from "@/components/ui/button"
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
            { title: "Protect Privacy & Security", icon: ShieldCheck, href: "/privacy" },
            { title: "Support Student Success", icon: BookOpen, href: "/student-success" },
            { title: "Build AI Literacy", icon: Zap, href: "/ai-literacy" },
            { title: "Integrate Quickly", icon: Layout, href: "/integrations" },
            { title: "Develop AI Readiness", icon: Map, href: "/ai-policy" },
            { title: "Compare Platforms", icon: Scale, href: "/compare" },
        ]
    },
    {
        label: "Outcomes",
        items: [
            { title: "Safe, Compliant Schools", icon: ShieldCheck, href: "/privacy" },
            { title: "Stronger Student Learning", icon: Zap, href: "/student-success" },
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
            { title: "MagicSchool Pioneers", icon: Trophy, href: "/pioneers" },
            { title: "AI Tools for Educators", icon: PenTool, href: "/tools" },
            { title: "Blog", icon: FileText, href: "/blog" },
        ]
    }
]

type Theme = "violet" | "blue" | "amber"

interface HeaderProps {
    theme?: Theme
}

export function Header({ theme = "violet" }: HeaderProps) {
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

    const themeConfig = {
        violet: {
            logoBg: "bg-violet-600",
            textHover: "hover:text-violet-600",
            groupTextHover: "group-hover/item:text-violet-700",
            iconBg: "bg-violet-100",
            iconText: "text-violet-600",
            iconBgHover: "group-hover/item:bg-violet-200",
            navHoverBg: "hover:bg-violet-50",
            ctaOutline: "border-violet-200 text-violet-700 hover:bg-violet-50 hover:text-violet-800",
            linkText: "text-violet-600"
        },
        blue: {
            logoBg: "bg-blue-600",
            textHover: "hover:text-blue-600",
            groupTextHover: "group-hover/item:text-blue-700",
            iconBg: "bg-blue-100",
            iconText: "text-blue-600",
            iconBgHover: "group-hover/item:bg-blue-200",
            navHoverBg: "hover:bg-blue-50",
            ctaOutline: "border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800",
            linkText: "text-blue-600"
        },
        amber: {
            logoBg: "bg-amber-500",
            textHover: "hover:text-amber-600",
            groupTextHover: "group-hover/item:text-amber-700",
            iconBg: "bg-amber-100",
            iconText: "text-amber-600",
            iconBgHover: "group-hover/item:bg-amber-200",
            navHoverBg: "hover:bg-amber-50",
            ctaOutline: "border-amber-200 text-amber-700 hover:bg-amber-50 hover:text-amber-800",
            linkText: "text-amber-600"
        }
    }

    const currentTheme = themeConfig[theme]

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
                    <Logo className={cn("w-8 h-8 rounded-lg", currentTheme.logoBg)} />
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
                            <button className={cn("flex items-center gap-1 font-medium text-sm text-slate-600 py-2 transition-colors", currentTheme.textHover)}>
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
                                                    className={cn("flex items-start gap-4 p-3 rounded-lg transition-colors group/item", currentTheme.navHoverBg)}
                                                >
                                                    <div className={cn("p-2 rounded-md transition-colors", currentTheme.iconBg, currentTheme.iconText, currentTheme.iconBgHover)}>
                                                        <item.icon className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <h4 className={cn("font-semibold text-slate-900 text-sm", currentTheme.groupTextHover)}>
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
                                            <Link href="/demo" className={cn("text-sm font-medium flex items-center hover:underline", currentTheme.linkText)}>
                                                See all features for {nav.label} →
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <Link href="/pricing" className={cn("font-medium text-sm text-slate-600", currentTheme.textHover)}>
                        Pricing
                    </Link>
                </nav>

                {/* Desktop CTAs */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link
                        href="/quote-request"
                        className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden xl:flex rounded-lg", currentTheme.ctaOutline)}
                    >
                        Book a Demo
                    </Link>
                    <Link
                        href="/login"
                        className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "rounded-lg !text-slate-600 hover:bg-slate-100 bg-transparent", currentTheme.textHover)}
                    >
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className={cn(buttonVariants({ variant: "default", size: "sm" }), "rounded-lg", theme === 'blue' ? "bg-blue-600 hover:bg-blue-700" : theme === 'amber' ? "bg-amber-500 hover:bg-amber-600" : "")}
                    >
                        Sign up free
                    </Link>
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
                                                <item.icon className={cn("w-4 h-4", currentTheme.iconText)} />
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="pt-4 space-y-3">
                                <Button className={cn("w-full rounded-lg", theme === 'blue' ? "bg-blue-600 hover:bg-blue-700" : theme === 'amber' ? "bg-amber-500 hover:bg-amber-600" : "")} size="lg" asChild>
                                    <Link href="/signup">Sign up free</Link>
                                </Button>
                                <Button variant="outline" className="w-full rounded-lg" size="lg" asChild>
                                    <Link href="/quote-request">Book a demo</Link>
                                </Button>
                                <Button variant="ghost" className="w-full rounded-lg" size="lg" asChild>
                                    <Link href="/login">Login</Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
