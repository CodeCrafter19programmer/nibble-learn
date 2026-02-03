import React from 'react'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Layout, Key, UserCheck, Shield } from "lucide-react"

export default function IntegrationsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header theme="violet" />

            {/* Hero */}
            <section className="bg-violet-600 pt-32 pb-20 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        Connect once. Teach seamlessly.
                    </h1>
                    <p className="text-violet-100 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Seamlessly integrate NibbleLearn with your LMS and SSO systems—no extra logins, no disruption. Built for teachers, students, and IT teams.
                    </p>
                    <div className="pt-8">
                        <Button asChild size="lg" className="bg-white text-violet-600 hover:bg-violet-50 text-lg h-14 px-8 rounded-xl font-bold shadow-lg">
                            <Link href="/quote-request">Get integrated today</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Compatible Tools */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-3xl font-bold text-slate-900">Compatible with the tools that power your schools</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        We integrate with leading LMS and SSO providers so your team can launch NibbleLearn without extra logins, lost tabs, or technical barriers.
                    </p>

                    {/* Placeholder Logos Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Just using text placeholders for brands as I don't have SVGs */}
                        <div className="h-16 flex items-center justify-center border rounded-lg font-bold text-slate-500">Google SSO</div>
                        <div className="h-16 flex items-center justify-center border rounded-lg font-bold text-slate-500">ClassLink</div>
                        <div className="h-16 flex items-center justify-center border rounded-lg font-bold text-slate-500">Clever</div>
                        <div className="h-16 flex items-center justify-center border rounded-lg font-bold text-slate-500">Schoology</div>
                        <div className="h-16 flex items-center justify-center border rounded-lg font-bold text-slate-500">Canvas</div>
                        <div className="h-16 flex items-center justify-center border rounded-lg font-bold text-slate-500">Microsoft</div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 px-4 bg-white border-y border-slate-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Friction-free access means more magic</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-4 p-6 rounded-2xl bg-slate-50 hover:bg-violet-50 transition-colors duration-300">
                            <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-lg flex items-center justify-center">
                                <Layout className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">For Teachers</h3>
                            <p className="text-slate-600">
                                Launch NibbleLearn from the tools they already use. No new platforms to learn, no extra credentials to manage. Just faster, easier access to AI-powered teaching.
                            </p>
                        </div>

                        <div className="space-y-4 p-6 rounded-2xl bg-slate-50 hover:bg-violet-50 transition-colors duration-300">
                            <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-lg flex items-center justify-center">
                                <UserCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">For Students</h3>
                            <p className="text-slate-600">
                                Embedded Rooms and SSO mean less confusion, fewer missed steps, and a smoother learning experience—especially in shared device or 1:1 environments.
                            </p>
                        </div>

                        <div className="space-y-4 p-6 rounded-2xl bg-slate-50 hover:bg-violet-50 transition-colors duration-300">
                            <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-lg flex items-center justify-center">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">For Admins & IT</h3>
                            <p className="text-slate-600">
                                Secure authentication, easier rollouts, and centralized management of access and analytics. Support AI innovation without introducing complexity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer theme="violet" />
        </div>
    )
}
