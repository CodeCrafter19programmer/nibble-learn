import React from 'react'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Construction } from "lucide-react"

interface ComingSoonProps {
    title: string
    description?: string
    theme?: "violet" | "blue" | "amber"
}

export default function ComingSoon({ title, description, theme = "violet" }: ComingSoonProps) {
    const colorClass = theme === "blue" ? "text-blue-600 bg-blue-50" : theme === "amber" ? "text-amber-600 bg-amber-50" : "text-violet-600 bg-violet-50"
    const btnClass = theme === "blue" ? "bg-blue-600 hover:bg-blue-700" : theme === "amber" ? "bg-amber-600 hover:bg-amber-700" : "bg-violet-600 hover:bg-violet-700"

    return (
        <div className="min-h-screen flex flex-col">
            <Header theme={theme} />
            <main className="flex-grow flex items-center justify-center p-6 text-center">
                <div className="max-w-md space-y-6">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto ${colorClass}`}>
                        <Construction className="w-10 h-10" />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900">{title}</h1>
                    <p className="text-xl text-slate-600">
                        {description || "We're currently building this page to bring you helpful resources. Check back soon!"}
                    </p>
                    <div className="pt-4">
                        <Button asChild className={`${btnClass} text-white px-8 py-6 text-lg rounded-xl`}>
                            <Link href="/">Return Home</Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer theme={theme} />
        </div>
    )
}
