"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "Is there really a free plan?",
        answer: "Yes! NibbleLearn offers a generous free plan with access to all 80+ teacher tools and 40+ student tools. No credit card required to get started."
    },
    {
        question: "What's included in the 7-day free trial?",
        answer: "The free trial gives you full access to all Plus features including unlimited generations, full output history, and 1-click exports. No credit card required."
    },
    {
        question: "Can I switch plans later?",
        answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, debit cards, and district purchase orders for Enterprise plans."
    },
    {
        question: "How does Enterprise pricing work?",
        answer: "Enterprise pricing is customized based on your district's student count, typically ranging from $3-$4 per student annually. Book a demo to get a custom quote."
    },
    {
        question: "Do you offer discounts for schools or non-profits?",
        answer: "Yes! We offer special pricing for schools and districts through our Enterprise plan. Contact our sales team to learn more."
    },
    {
        question: "Is my data safe and private?",
        answer: "Yes! NibbleLearn is SOC 2 certified, FERPA and COPPA compliant. We never use your data to train AI models."
    },
    {
        question: "What happens if I cancel?",
        answer: "You can export all your data before canceling. After cancellation, you'll revert to the free plan and retain access to basic features."
    }
]

export function PricingFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600">
                        Everything you need to know about our pricing plans.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={cn(
                                    "w-full text-left p-6 rounded-2xl border-2 transition-all duration-300",
                                    openIndex === index
                                        ? "bg-violet-50 border-violet-200 shadow-md"
                                        : "bg-white border-slate-200 hover:border-violet-100 hover:bg-slate-50"
                                )}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className={cn(
                                        "font-semibold text-lg transition-colors",
                                        openIndex === index ? "text-violet-700" : "text-slate-900"
                                    )}>
                                        {faq.question}
                                    </h3>
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
                                        openIndex === index ? "bg-violet-600 text-white" : "bg-slate-100 text-slate-500"
                                    )}>
                                        {openIndex === index
                                            ? <Minus className="w-4 h-4" />
                                            : <Plus className="w-4 h-4" />
                                        }
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-4 text-slate-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
