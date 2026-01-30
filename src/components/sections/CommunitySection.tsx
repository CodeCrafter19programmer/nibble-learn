"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Award, Mountain, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

const styles = {
    card: "group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left",
    imageArea: "h-48 w-full bg-slate-100 flex items-center justify-center relative overflow-hidden",
    content: "p-8 flex-1 flex flex-col items-start gap-4"
}

export function CommunitySection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-50 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Learn, connect, and make magic
                    </h2>
                    <p className="text-xl text-slate-600">
                        Join a thriving community of educators turning AI for schools into everyday classroom magic.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Certifications */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className={styles.card}
                    >
                        <div className={`${styles.imageArea} bg-violet-100`}>
                            <Award className="w-20 h-20 text-violet-500" />
                        </div>
                        <div className={styles.content}>
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                                Level up your skills with free certification courses
                            </h3>
                            <Button variant="link" className="px-0 text-violet-600 group-hover:translate-x-1 transition-transform">
                                Start Learning <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Card 2: PD */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className={styles.card}
                    >
                        <div className={`${styles.imageArea} bg-blue-100`}>
                            <Lightbulb className="w-20 h-20 text-blue-500" />
                        </div>
                        <div className={styles.content}>
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                                Turn professional learning into meaningful impact
                            </h3>
                            <Button variant="link" className="px-0 text-blue-600 group-hover:translate-x-1 transition-transform">
                                Explore Resources <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Card 3: Pioneers */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className={styles.card}
                    >
                        <div className={`${styles.imageArea} bg-amber-100`}>
                            <Mountain className="w-20 h-20 text-amber-500" />
                        </div>
                        <div className={styles.content}>
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                                Join a community of inspiring innovators
                            </h3>
                            <Button variant="link" className="px-0 text-amber-600 group-hover:translate-x-1 transition-transform">
                                Meet Pioneers <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
