import Link from "next/link"
import { School, Twitter, Linkedin, Instagram, Facebook, Youtube } from "lucide-react"
import { cn } from "@/lib/utils"

type Theme = "violet" | "blue" | "amber"

interface FooterProps {
    theme?: Theme
}

export function Footer({ theme = "violet" }: FooterProps) {
    const themeConfig = {
        violet: {
            logoBg: "bg-violet-600",
            hoverText: "hover:text-violet-600",
            socialHoverBg: "hover:bg-violet-100",
            socialHoverText: "hover:text-violet-600"
        },
        blue: {
            logoBg: "bg-blue-600",
            hoverText: "hover:text-blue-600",
            socialHoverBg: "hover:bg-blue-100",
            socialHoverText: "hover:text-blue-600"
        },
        amber: {
            logoBg: "bg-amber-500",
            hoverText: "hover:text-amber-600",
            socialHoverBg: "hover:bg-amber-100",
            socialHoverText: "hover:text-amber-600"
        }
    }

    const currentTheme = themeConfig[theme]

    return (
        <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">

                    {/* Column 1: Brand (Span 2 on desktop) */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xl", currentTheme.logoBg)}>
                                N
                            </div>
                            <span className="font-bold text-xl tracking-tight text-slate-900">
                                NibbleLearn
                            </span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
                            The AI operating system for schools. We help districts adopt AI safely, responsibly, and effectively.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Instagram, Facebook, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className={cn("w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 transition-colors", currentTheme.socialHoverBg, currentTheme.socialHoverText)}>
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: AI Solutions */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">AI Solutions</h4>
                        <ul className="space-y-3">
                            <li><Link href="/for-schools" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>For Schools</Link></li>
                            <li><Link href="/for-teachers" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>For Teachers</Link></li>
                            <li><Link href="/for-students" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>For Students</Link></li>
                            <li><Link href="/tools" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>AI Tools</Link></li>
                            <li><Link href="/pricing" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Outcomes */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Outcomes</h4>
                        <ul className="space-y-3">
                            <li><Link href="/for-schools" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>Privacy & Security</Link></li>
                            <li><Link href="/for-students" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>Student Outcomes</Link></li>
                            <li><Link href="/for-students" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>AI Literacy</Link></li>
                            <li><Link href="/for-teachers" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>Save Time</Link></li>
                            <li><Link href="/for-schools" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>AI Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Resources */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
                        <ul className="space-y-3">
                            <li><Link href="/tools" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>AI Tools</Link></li>
                            <li><Link href="/pricing" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>Pricing</Link></li>
                            <li><Link href="/for-teachers" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>Professional Dev</Link></li>
                            <li><Link href="/login" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>Login</Link></li>
                            <li><Link href="/school/dashboard" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>Admin Dashboard (Demo)</Link></li>
                            <li><Link href="/signup" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>Sign Up</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Company */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>About Us</Link></li>
                            <li><Link href="/for-schools" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>For Schools</Link></li>
                            <li><Link href="/for-teachers" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>For Teachers</Link></li>
                            <li><Link href="/pricing" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>Pricing</Link></li>
                            <li><Link href="/login" className={cn("text-slate-500 text-sm", currentTheme.hoverText)}>Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm">
                        © 2026 NibbleLearn, Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className={cn("text-slate-400 text-sm", currentTheme.hoverText)}>Privacy Policy</Link>
                        <Link href="#" className={cn("text-slate-400 text-sm", currentTheme.hoverText)}>Terms of Service</Link>
                        <Link href="#" className={cn("text-slate-400 text-sm", currentTheme.hoverText)}>Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
