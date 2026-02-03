import React from 'react'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Users, ShieldCheck, ChevronRight, Download, ExternalLink } from "lucide-react"

export default function AILiteracyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header theme="blue" />

            {/* Hero */}
            <section className="bg-blue-600 pt-32 pb-20 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                        AI Literacy for Students
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        Teach responsible AI usage to every student in your school or district. Empower learners to lead in the Age of AI in a safe, fun, and supervised setting.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg h-14 px-8 rounded-xl font-bold shadow-lg">
                            <Link href="/signup">Sign up free</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-blue-200 text-white hover:bg-blue-700 bg-transparent text-lg h-14 px-8 rounded-xl font-bold">
                            <Link href="/quote-request">Book a demo</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Content Section 1: Empower Students */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                            Empower students to lead<br />in the Age of AI
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            AI isn’t the future—it’s the present. Whether it’s in school, jobs, or everyday life, knowing how to use AI responsibly is a must-have skill.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            With platforms like ChatGPT and Google Gemini soaring in usage, we know AI is already a pillar in today’s workplace. As educators, it’s our responsibility to prepare our students. Instead of banning generative AI, we believe that teaching and practicing responsible usage is the only way forward.
                        </p>
                    </div>
                    <div className="bg-blue-100 rounded-3xl p-8 min-h-[400px] flex items-center justify-center">
                        {/* Placeholder for Image/Graphic */}
                        <div className="text-blue-600 text-center">
                            <BookOpen className="w-24 h-24 mx-auto mb-4 opacity-50" />
                            <span className="text-xl font-bold">Student AI Experience</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section 2: AI for Students */}
            <section className="py-20 px-4 bg-white border-y border-slate-100">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="order-2 md:order-1 bg-amber-100 rounded-3xl p-8 min-h-[400px] flex items-center justify-center">
                        {/* Placeholder for Image/Graphic */}
                        <div className="text-amber-600 text-center">
                            <Users className="w-24 h-24 mx-auto mb-4 opacity-50" />
                            <span className="text-xl font-bold">Safe Environment</span>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                            AI for students
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            NibbleLearn for Students delivers engaging and personalized learning experiences. As students explore AI-powered tools to generate songs, compete in rap battles, and chat with historical figures, they develop AI literacy.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            They can even ask our <strong>AI Literacy Bot</strong> specific questions about artificial intelligence. This is all done in a supervised setting where teachers can monitor students’ usage real-time and ensure AI safety.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section 3: Equity */}
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Equity in education</h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Everyone deserves the right tools to succeed. NibbleLearn levels the playing field by giving every student—regardless of background, learning style, or ability—the AI-powered support they need to stay on track and thrive.
                    </p>
                </div>
            </section>

            {/* Resources List */}
            <section className="py-20 px-4 bg-slate-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">AI Literacy Resources</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Educators */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">For Educators</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="flex items-center text-slate-600 hover:text-blue-600 group">
                                        <ChevronRight className="w-4 h-4 mr-2 text-slate-400 group-hover:text-blue-600" />
                                        AI Prompting 101
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-slate-600 hover:text-blue-600 group">
                                        <ChevronRight className="w-4 h-4 mr-2 text-slate-400 group-hover:text-blue-600" />
                                        Certification Courses
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-slate-600 hover:text-blue-600 group">
                                        <ChevronRight className="w-4 h-4 mr-2 text-slate-400 group-hover:text-blue-600" />
                                        AI Resistant Assignments
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Students */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">For Students</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="flex items-center text-slate-600 hover:text-blue-600 group">
                                        <ChevronRight className="w-4 h-4 mr-2 text-slate-400 group-hover:text-blue-600" />
                                        Student AI Introduction Deck
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-slate-600 hover:text-blue-600 group">
                                        <ChevronRight className="w-4 h-4 mr-2 text-slate-400 group-hover:text-blue-600" />
                                        AI Certification Course
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-slate-600 hover:text-blue-600 group">
                                        <ChevronRight className="w-4 h-4 mr-2 text-slate-400 group-hover:text-blue-600" />
                                        Chat with AI Literacy Bot
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Parents */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-6">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">For Parents</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="flex items-center text-slate-600 hover:text-blue-600 group">
                                        <ChevronRight className="w-4 h-4 mr-2 text-slate-400 group-hover:text-blue-600" />
                                        Parent Letter Template
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-slate-600 hover:text-blue-600 group">
                                        <ChevronRight className="w-4 h-4 mr-2 text-slate-400 group-hover:text-blue-600" />
                                        Student Contract
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-slate-600 hover:text-blue-600 group">
                                        <ChevronRight className="w-4 h-4 mr-2 text-slate-400 group-hover:text-blue-600" />
                                        Download Toolkit
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-blue-600 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Bring responsible AI to your classroom
                    </h2>
                    <p className="text-xl text-blue-100 leading-relaxed">
                        Create your free NibbleLearn account today to explore AI for Students. Build AI literacy, personalize learning, and empower all learners.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg h-14 px-8 rounded-xl font-bold shadow-lg">
                            <Link href="/signup">Sign up free</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-blue-200 text-white hover:bg-blue-700 bg-transparent text-lg h-14 px-8 rounded-xl font-bold">
                            <Link href="/quote-request">Book a demo</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer theme="blue" />
        </div>
    )
}
