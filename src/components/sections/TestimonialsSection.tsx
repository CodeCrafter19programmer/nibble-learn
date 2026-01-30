"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { TestimonialCard, TestimonialProps } from "@/components/features/TestimonialCard"
import { Button } from "@/components/ui/button"

const testimonials: TestimonialProps[] = [
    {
        quote: "I can't imagine teaching without it now. It saves me hours of planning time every week.",
        author: "Heather Brown",
        role: "Middle School Teacher",
        school: "Oak Creek School District"
    },
    {
        quote: "The most impactful tool we've adopted in years. Teachers actually love using it.",
        author: "Susan U.",
        role: "Director of Ed Tech",
        school: "Rockford Public Schools"
    },
    {
        isImageCard: true,
        author: "Teachers Are Magic",
        // In real app, this would be a real image path
        imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80"
    },
    {
        quote: "It's not just about efficiency, it's about the quality of ideas it sparks.",
        author: "Jami Shields",
        role: "ELA Specialist",
        school: "River Valley Schools"
    },
    {
        quote: "Finally, AI that feels safe and relevant for K-12 education.",
        author: "Teneika B.",
        role: "Founding Principal",
        school: "NYC Dept of Education"
    },
    {
        isImageCard: true,
        author: "Classroom Magic",
        imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
    },
    {
        quote: "I presented this to my ELA team and their jaws dropped. Game changer.",
        author: "Caitlin Cloyd",
        role: "Department Head",
        school: "Westfield High"
    },
    {
        quote: "It sparks conversations we weren't having before about assessment and creativity.",
        author: "Kelly B.",
        role: "Instructional Tech Coordinator",
        school: "Lakewood Schools"
    },
    {
        isImageCard: true,
        author: "Peace & Tech",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
    }
]

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="flex justify-center gap-2 mb-4">
                        {[1, 2, 3, 4, 5].map(i => (
                            <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                        ))}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Why teachers love NibbleLearn
                    </h2>
                    <p className="text-xl text-slate-600">
                        Hear from the educators who inspire everything we build.
                    </p>
                </div>

                {/* Masonry-ish Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={t.isImageCard ? "h-[320px]" : ""}
                        >
                            <TestimonialCard {...t} />
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg" className="rounded-full px-8 border-2">
                        See the Wall of Love
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
