"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, Loader2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { cn } from "@/lib/utils"

export default function QuoteRequestPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [step, setStep] = useState(1)
    const totalSteps = 4

    // Form State
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        workEmail: "",
        phoneNumber: "",
        jobTitle: "",
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

    const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps))
    const prevStep = () => setStep(prev => Math.max(1, prev - 1))

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsLoading(false)
        setStep(5) // Success
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header theme="blue" />

            {/* Hero Section */}
            <section className="bg-blue-600 pt-32 pb-20 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        Bring NibbleLearn to your <br />
                        school or district
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        We'd love to learn about your school and goals. Fill out the form below, and we'll be in touch to talk through next steps.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <main className="flex-grow -mt-8 px-4 pb-20 relative z-10">
                <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 md:p-12 shadow-xl border border-slate-100">

                    {step < 5 && (
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-slate-900">Please fill in your details.</h2>
                        </div>
                    )}

                    {step < 5 && (
                        <div className="flex justify-between items-center mb-8 text-sm font-medium">
                            {step > 1 ? (
                                <button onClick={prevStep} className="flex items-center text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100">
                                    <ArrowLeft className="w-4 h-4 mr-1" />
                                    Back
                                </button>
                            ) : (
                                <div /> // Spacer
                            )}
                            <div className="flex gap-1">
                                {Array.from({ length: totalSteps }).map((_, i) => (
                                    <div key={i} className={cn("h-1.5 w-8 rounded-lg transition-colors", i + 1 <= step ? "bg-blue-600" : "bg-slate-200")} />
                                ))}
                            </div>
                            <span className="text-slate-500 font-mono">{step} / {totalSteps}</span>
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <form onSubmit={(e) => { e.preventDefault(); nextStep() }} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">First Name <span className="text-red-500">*</span></label>
                                            <input name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Last Name <span className="text-red-500">*</span></label>
                                            <input name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                                            <input name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleChange} required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Work Email <span className="text-red-500">*</span></label>
                                            <input name="workEmail" type="email" value={formData.workEmail} onChange={handleChange} required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" />
                                        </div>
                                    </div>

                                    <div className="flex justify-center pt-8">
                                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-12 px-12 text-lg shadow-lg hover:shadow-xl transition-all w-full md:w-auto">
                                            Next Step <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <form onSubmit={(e) => { e.preventDefault(); nextStep() }} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Job Title <span className="text-red-500">*</span></label>
                                        <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Institution Category <span className="text-red-500">*</span></label>
                                            <div className="space-y-2">
                                                {['School', 'District', 'Higher Education', 'Other'].map((opt) => (
                                                    <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-all">
                                                        <input
                                                            type="radio"
                                                            name="institutionCategory"
                                                            value={opt.toLowerCase()}
                                                            checked={formData.institutionCategory === opt.toLowerCase()}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                                                        />
                                                        <span className="text-slate-700 font-medium">{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Size of Institution (Student Count) <span className="text-red-500">*</span></label>
                                            <select name="studentCount" value={formData.studentCount} onChange={handleChange} required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white">
                                                <option value="">Select range...</option>
                                                <option value="1-100">1-100</option>
                                                <option value="101-500">101-500</option>
                                                <option value="500+">500+</option>
                                                <option value="5000+">5000+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Institution Name <span className="text-red-500">*</span></label>
                                        <input name="institutionName" value={formData.institutionName} onChange={handleChange} required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" placeholder="Ex. Lincoln High School" />
                                    </div>

                                    <div className="flex justify-center pt-8">
                                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-12 px-12 text-lg shadow-lg hover:shadow-xl transition-all w-full md:w-auto">
                                            Next Step <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <form onSubmit={(e) => { e.preventDefault(); nextStep() }} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Country <span className="text-red-500">*</span></label>
                                        <select name="country" value={formData.country} onChange={handleChange} required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white">
                                            <option value="">Select country...</option>
                                            <option value="US">United States</option>
                                            <option value="UG">Uganda</option>
                                            <option value="CA">Canada</option>
                                            <option value="UK">United Kingdom</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">City <span className="text-red-500">*</span></label>
                                        <input name="city" value={formData.city} onChange={handleChange} required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all" />
                                    </div>

                                    <div className="flex justify-center pt-8">
                                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-12 px-12 text-lg shadow-lg hover:shadow-xl transition-all w-full md:w-auto">
                                            Next Step <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">How would you measure success of implementation?</label>
                                        <textarea name="successMeasurement" value={formData.successMeasurement} onChange={handleChange} rows={4} className="w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none resize-none transition-all" placeholder="How can we support your measurements to drive results for your school community? (Optional)" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Questions or Concerns?</label>
                                        <textarea name="questions" value={formData.questions} onChange={handleChange} rows={4} className="w-full p-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none resize-none transition-all" placeholder="(Optional)" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">How did you hear about us?</label>
                                        <select name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange} className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none bg-white">
                                            <option value="">Select one...</option>
                                            <option value="colleague">Colleague</option>
                                            <option value="search">Search</option>
                                            <option value="social">Social Media</option>
                                        </select>
                                    </div>

                                    <div className="flex justify-center pt-8">
                                        <Button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-12 px-12 text-lg shadow-lg hover:shadow-xl transition-all w-full md:w-auto">
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                "Submit Request"
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {step === 5 && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-10"
                            >
                                <div className="w-24 h-24 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 text-blue-600">
                                    <Check className="w-12 h-12" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h2>
                                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto">
                                    Thank you! We'll be in touch shortly to schedule your personalized demo.
                                </p>
                                <Button
                                    onClick={() => window.location.href = "/"}
                                    className="h-12 px-8 rounded-lg font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                                >
                                    Return Home
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            <Footer theme="blue" />
        </div>
    )
}
