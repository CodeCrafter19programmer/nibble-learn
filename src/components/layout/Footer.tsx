import Link from "next/link"
import { School, Twitter, Linkedin, Instagram, Facebook, Youtube } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">

                    {/* Column 1: Brand (Span 2 on desktop) */}
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
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
                                <a key={i} href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-violet-100 hover:text-violet-600 transition-colors">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: AI Solutions */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">AI Solutions</h4>
                        <ul className="space-y-3">
                            <li><Link href="/for-schools" className="text-slate-500 hover:text-violet-600 text-sm">For Schools</Link></li>
                            <li><Link href="/for-teachers" className="text-slate-500 hover:text-violet-600 text-sm">For Teachers</Link></li>
                            <li><Link href="/for-students" className="text-slate-500 hover:text-violet-600 text-sm">For Students</Link></li>
                            <li><Link href="/tools" className="text-slate-500 hover:text-violet-600 text-sm">AI Tools</Link></li>
                            <li><Link href="/pricing" className="text-slate-500 hover:text-violet-600 text-sm">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Outcomes */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Outcomes</h4>
                        <ul className="space-y-3">
                            <li><Link href="/for-schools" className="text-slate-500 hover:text-violet-600 text-sm">Privacy & Security</Link></li>
                            <li><Link href="/for-students" className="text-slate-500 hover:text-violet-600 text-sm">Student Outcomes</Link></li>
                            <li><Link href="/for-students" className="text-slate-500 hover:text-violet-600 text-sm">AI Literacy</Link></li>
                            <li><Link href="/for-teachers" className="text-slate-500 hover:text-violet-600 text-sm">Save Time</Link></li>
                            <li><Link href="/for-schools" className="text-slate-500 hover:text-violet-600 text-sm">AI Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Resources */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
                        <ul className="space-y-3">
                            <li><Link href="/tools" className="text-slate-500 hover:text-violet-600 text-sm">AI Tools</Link></li>
                            <li><Link href="/pricing" className="text-slate-500 hover:text-violet-600 text-sm">Pricing</Link></li>
                            <li><Link href="/for-teachers" className="text-slate-500 hover:text-violet-600 text-sm">Professional Dev</Link></li>
                            <li><Link href="/login" className="text-slate-500 hover:text-violet-600 text-sm">Login</Link></li>
                            <li><Link href="/school/dashboard" className="text-slate-500 hover:text-violet-600 text-sm">Admin Dashboard (Demo)</Link></li>
                            <li><Link href="/signup" className="text-slate-500 hover:text-violet-600 text-sm">Sign Up</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Company */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-slate-500 hover:text-violet-600 text-sm">About Us</Link></li>
                            <li><Link href="/for-schools" className="text-slate-500 hover:text-violet-600 text-sm">For Schools</Link></li>
                            <li><Link href="/for-teachers" className="text-slate-500 hover:text-violet-600 text-sm">For Teachers</Link></li>
                            <li><Link href="/pricing" className="text-slate-500 hover:text-violet-600 text-sm">Pricing</Link></li>
                            <li><Link href="/login" className="text-slate-500 hover:text-violet-600 text-sm">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm">
                        © 2026 NibbleLearn, Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-slate-400 hover:text-violet-600 text-sm">Privacy Policy</Link>
                        <Link href="#" className="text-slate-400 hover:text-violet-600 text-sm">Terms of Service</Link>
                        <Link href="#" className="text-slate-400 hover:text-violet-600 text-sm">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
