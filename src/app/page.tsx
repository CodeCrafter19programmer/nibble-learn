import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { AmplifySection } from "@/components/sections/AmplifySection"
import { ToolsShowcase } from "@/components/sections/ToolsShowcase"
import { SolutionsComparison } from "@/components/sections/SolutionsComparison"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { TrustSection } from "@/components/sections/TrustSection"
import { CommunitySection } from "@/components/sections/CommunitySection"
import { CTASection } from "@/components/sections/CTASection"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AmplifySection />
      <ToolsShowcase />
      <SolutionsComparison />
      <TestimonialsSection />
      <TrustSection />
      <CommunitySection />
      <CTASection />
      <Footer />
    </main>
  )
}
