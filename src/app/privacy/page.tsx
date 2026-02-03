import React from 'react'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ShieldCheck, Lock, FileText, CheckCircle } from "lucide-react"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header theme="violet" />

            {/* Hero */}
            <section className="bg-violet-600 pt-32 pb-20 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Privacy & Security
                    </h1>
                    <p className="text-violet-100 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Your privacy matters. NibbleLearn is independently evaluated as the safest and most privacy focused AI platform.
                    </p>
                </div>
            </section>

            {/* Certifications & Compliance */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <ShieldCheck className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-slate-900 mb-2">FERPA & COPPA</h3>
                            <p className="text-slate-600 text-sm">Compliant with federal student data privacy laws.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <Lock className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-slate-900 mb-2">SOC 2 Type II</h3>
                            <p className="text-slate-600 text-sm">Audited security controls and data protection.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <CheckCircle className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-slate-900 mb-2">1EdTech Certified</h3>
                            <p className="text-slate-600 text-sm">Trusted Data Privacy App certification.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 px-4">
                <div className="max-w-3xl mx-auto space-y-16">

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">Independently evaluated as the best for safety and privacy</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We are committed to adhering to the requirements and responsibilities under key legislations such as FERPA, COPPA, SOC 2, GDPR, and relevant state student data privacy laws.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            NibbleLearn received a 93% privacy rating, placing us at the top of AI tools for schools in independent privacy evaluations. We share in the mission to create coordinated effort to protect child and student privacy, and build in safety and security from the start.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">Protect personally identifiable information (PII)</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We deeply appreciate the importance of protecting the personal information of our students and staff. We do this by maintaining the confidentiality, availability, and integrity of the personal information entrusted to us.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We prioritize privacy by ensuring our application doesn't require or encourage users to submit personally identifiable student information (PII). We also do not sell any personal information.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">Custom data privacy agreements (DPA)</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We are committed to protecting personal and sensitive data with transparency, security, and in compliance with all applicable laws. We offer Custom Data Privacy Agreements for districts to ensure data is handled responsibly.
                        </p>
                        <div className="pt-4">
                            <a href="/quote-request" className="text-violet-600 font-bold hover:underline inline-flex items-center">
                                Request a quote for your district <FileText className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <Footer theme="violet" />
        </div>
    )
}
