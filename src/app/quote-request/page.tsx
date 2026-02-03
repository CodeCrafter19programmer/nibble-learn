"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, Loader2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function QuoteRequestPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [step, setStep] = useState(1) // 1, 2, 3, or 'success'

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

    const nextStep = () => setStep(prev => prev + 1)
    const prevStep = () => setStep(prev => prev - 1)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsLoading(false)
        setStep(4) // Success
    }

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden flex items-center justify-center p-4">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-violet-50/50 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-violet-200/20 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="relative w-full max-w-2xl">
                {/* Progress Bar */}
                {step < 4 && (
                    <div className="mb-8">
                        <div className="flex justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                            <span>Contact</span>
                            <span>Institution</span>
                            <span>Goals</span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-violet-600"
                                initial={{ width: "33%" }}
                                animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-10"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">About You</h2>
                            <p className="text-slate-500 mb-6">Let's start with your contact details.</p>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-semibold text-slate-700">First Name <span className="text-red-500">*</span></label>
                                        <input name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-semibold text-slate-700">Last Name <span className="text-red-500">*</span></label>
                                        <input name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-slate-700">Job Title <span className="text-red-500">*</span></label>
                                    <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} required className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none" placeholder="Ex. Principal" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-slate-700">Work Email <span className="text-red-500">*</span></label>
                                    <input name="workEmail" type="email" value={formData.workEmail} onChange={handleChange} required className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                                    <input name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleChange} required className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none" />
                                </div>

                                <div className="pt-4 flex justify-end">
                                    <Button onClick={nextStep} className="bg-violet-600 hover:bg-violet-700 text-white rounded-xl h-12 px-8">
                                        Next Step <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-10"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">School Details</h2>
                            <p className="text-slate-500 mb-6">Tell us a bit about your institution.</p>

                            <div className="space-y-6">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-slate-700">Institution Name <span className="text-red-500">*</span></label>
                                    <input name="institutionName" value={formData.institutionName} onChange={handleChange} required className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-semibold text-slate-700">Category <span className="text-red-500">*</span></label>
                                        <select name="institutionCategory" value={formData.institutionCategory} onChange={handleChange} required className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none bg-white">
                                            <option value="">Select...</option>
                                            <option value="school">K-12 School</option>
                                            <option value="district">School District</option>
                                            <option value="higher-ed">Higher Education</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-semibold text-slate-700">Students <span className="text-red-500">*</span></label>
                                        <select name="studentCount" value={formData.studentCount} onChange={handleChange} required className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none bg-white">
                                            <option value="">Range...</option>
                                            <option value="1-100">1-100</option>
                                            <option value="101-500">101-500</option>
                                            <option value="500+">500+</option>
                                            <option value="5000+">5000+</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-semibold text-slate-700">Country <span className="text-red-500">*</span></label>
                                        <select name="country" value={formData.country} onChange={handleChange} required className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none bg-white">
                                            <option value="">Select...</option>
                                            <option value="US">United States</option>
                                            <option value="UG">Uganda</option>
                                            <option value="CA">Canada</option>
                                            <option value="UK">United Kingdom</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-semibold text-slate-700">City <span className="text-red-500">*</span></label>
                                        <input name="city" value={formData.city} onChange={handleChange} required className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none" />
                                    </div>
                                </div>

                                <div className="pt-4 flex justify-between">
                                    <Button variant="ghost" onClick={prevStep} className="text-slate-600 hover:text-slate-900">
                                        Go Back
                                    </Button>
                                    <Button onClick={nextStep} className="bg-violet-600 hover:bg-violet-700 text-white rounded-xl h-12 px-8">
                                        Next Step <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-10"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Almost Done</h2>
                            <p className="text-slate-500 mb-6">Final details to help us serve you better.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-slate-700">How do you measure success?</label>
                                    <textarea name="successMeasurement" value={formData.successMeasurement} onChange={handleChange} rows={3} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none resize-none" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-slate-700">Questions or Concerns?</label>
                                    <textarea name="questions" value={formData.questions} onChange={handleChange} rows={3} className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none resize-none" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-slate-700">How did you hear about us?</label>
                                    <select name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange} className="w-full h-11 px-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 outline-none bg-white">
                                        <option value="">Select one...</option>
                                        <option value="colleague">Colleague</option>
                                        <option value="search">Search</option>
                                        <option value="social">Social Media</option>
                                    </select>
                                </div>

                                <div className="pt-4 flex justify-between">
                                    <Button type="button" variant="ghost" onClick={prevStep} className="text-slate-600 hover:text-slate-900">
                                        Go Back
                                    </Button>
                                    <Button type="submit" disabled={isLoading} className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-xl h-12 px-8 shadow-lg shadow-violet-500/20">
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Complete Request
                                                <Check className="w-5 h-5 ml-2" />
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-2xl shadow-xl border border-slate-200 p-12 text-center"
                        >
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                                <Check className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-md mx-auto">
                                Thank you! We'll be in touch shortly to schedule your personalized demo.
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
