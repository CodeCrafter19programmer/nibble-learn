import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { TeachersHero } from "@/components/sections/teachers/TeachersHero"
import { TeachersBenefits } from "@/components/sections/teachers/TeachersBenefits"
import { ToolsShowcase } from "@/components/sections/ToolsShowcase"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { CommunitySection } from "@/components/sections/CommunitySection"
import { CTASection } from "@/components/sections/CTASection"

export default function ForTeachersPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <TeachersHero />
            <TeachersBenefits />
            <ToolsShowcase />
            <TestimonialsSection />
            <CommunitySection />
            <CTASection />
            <Footer />
        </main>
    )
}
