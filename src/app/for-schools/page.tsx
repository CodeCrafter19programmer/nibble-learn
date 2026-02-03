import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SchoolsHero } from "@/components/sections/schools/SchoolsHero"
import { SchoolsFeatures } from "@/components/sections/schools/SchoolsFeatures"
import { TrustSection } from "@/components/sections/TrustSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { CTASection } from "@/components/sections/CTASection"

export default function ForSchoolsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header theme="blue" />
            <SchoolsHero />
            <SchoolsFeatures />
            <div className="bg-slate-50">
                <TrustSection />
            </div>
            <TestimonialsSection />
            <CTASection />
            <Footer theme="blue" />
        </main>
    )
}
