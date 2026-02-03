import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { StudentsHero } from "@/components/sections/students/StudentsHero"
import { StudentSafety } from "@/components/sections/students/StudentSafety"
import { CTASection } from "@/components/sections/CTASection"
import { ToolsShowcase } from "@/components/sections/ToolsShowcase"

export default function ForStudentsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header theme="amber" />
            <StudentsHero />
            <StudentSafety />

            {/* Reusing tools showcase but in a real app might filter for student tools */}
            <div className="bg-amber-50/50">
                <ToolsShowcase />
            </div>

            <CTASection />
            <Footer theme="amber" />
        </main>
    )
}
