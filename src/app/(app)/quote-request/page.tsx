"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, School, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function QuoteRequestPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [step, setStep] = useState<"form" | "success">("form")

    // Form State
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        jobTitle: "",
        workEmail: "",
        phoneNumber: "",
        institutionCategory: "",
        studentCount: "",
        institutionName: "",
        country: "",
        stateProvince: "",
        city: "",
        successMeasurement: "",
        questions: "",
        hearAboutUs: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsLoading(false)
        setStep("success")
    }

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-violet-50/50 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-violet-200/20 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="relative max-w-3xl mx-auto px-6 py-24 md:py-32">
                <AnimatePresence mode="wait">
                    {step === "form" ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="text-center mb-12">
                                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                                    Bring NibbleLearn to your school
                                </h1>
                                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                    We'd love to learn about your school and goals. Fill out the form below, and we'll be in touch to talk through next steps.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-8 md:p-12">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">
                                    Please fill in your details
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Personal Info */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">First Name <span className="text-red-500">*</span></label>
                                            <input name="firstName" required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none" onChange={handleChange} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Last Name <span className="text-red-500">*</span></label>
                                            <input name="lastName" required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Job Title <span className="text-red-500">*</span></label>
                                        <input name="jobTitle" required placeholder="Ex. Principal, Superintendent, CTO" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none" onChange={handleChange} />
                                    </div>

                                    {/* Contact */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Work Email <span className="text-red-500">*</span></label>
                                            <input name="workEmail" type="email" required placeholder="name@school.edu" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none" onChange={handleChange} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                                            <input name="phoneNumber" type="tel" required placeholder="(555) 555-5555" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none" onChange={handleChange} />
                                        </div>
                                    </div>

                                    {/* Institution */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Institution Category <span className="text-red-500">*</span></label>
                                            <select name="institutionCategory" required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none bg-white" onChange={handleChange}>
                                                <option value="">Select one...</option>
                                                <option value="school">K-12 School</option>
                                                <option value="district">School District</option>
                                                <option value="higher-ed">Higher Education</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Number of Students <span className="text-red-500">*</span></label>
                                            <select name="studentCount" required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none bg-white" onChange={handleChange}>
                                                <option value="">Select range...</option>
                                                <option value="1-100">1 - 100</option>
                                                <option value="101-500">101 - 500</option>
                                                <option value="501-1000">501 - 1,000</option>
                                                <option value="1001-2500">1,001 - 2,500</option>
                                                <option value="2501-5000">2,501 - 5,000</option>
                                                <option value="5000+">5,000+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Institution Name <span className="text-red-500">*</span></label>
                                        <input name="institutionName" required placeholder="Ex. Lincoln High School" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none" onChange={handleChange} />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Country <span className="text-red-500">*</span></label>
                                            <select name="country" required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none bg-white" onChange={handleChange}>
                                                <option value="">Select country...</option>
                                                <option value="US">United States</option>
                                                <option value="UG">Uganda</option>
                                                <option value="CA">Canada</option>
                                                <option value="UK">United Kingdom</option>
                                                <option value="AU">Australia</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">City <span className="text-red-500">*</span></label>
                                            <input name="city" required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none" onChange={handleChange} />
                                        </div>
                                    </div>

                                    {/* Qualitative */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">How would you measure success of implementation?</label>
                                        <textarea name="successMeasurement" rows={4} className="w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none resize-y" placeholder="e.g. Saving teachers time, improving student engagement..." onChange={handleChange} />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Questions or Concerns?</label>
                                        <textarea name="questions" rows={4} className="w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none resize-y" onChange={handleChange} />
                                    </div>

                                    {/* Attribution */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">How did you hear about us?</label>
                                        <select name="hearAboutUs" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none bg-white" onChange={handleChange}>
                                            <option value="">Select one...</option>
                                            <option value="colleague">Colleague / Friend</option>
                                            <option value="search">Search Engine</option>
                                            <option value="social">Social Media</option>
                                            <option value="conference">Conference / Event</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-xl shadow-violet-500/20 transition-all transform hover:-translate-y-0.5"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                                                Submitting Request...
                                            </>
                                        ) : (
                                            <>
                                                Request Demo
                                                <ArrowRight className="w-5 h-5 ml-2" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-2xl shadow-xl border border-slate-200 p-12 text-center max-w-xl mx-auto"
                        >
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                                <Check className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Thank you for your interest in NibbleLearn. Our team will review your details and reach out shortly to schedule your personalized demo.
                            </p>
                            <Button
                                onClick={() => window.location.href = "/"}
                                className="h-12 px-8 rounded-xl font-bold bg-slate-900 hover:bg-slate-800 text-white"
                            >
                                Return Home
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
