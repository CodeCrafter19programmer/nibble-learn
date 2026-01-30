import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PricingCards } from "@/components/pricing/PricingCards"
import { PricingFAQ } from "@/components/pricing/PricingFAQ"
import { TrustSection } from "@/components/sections/TrustSection"
import { CTASection } from "@/components/sections/CTASection"

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <PricingCards />
            <PricingFAQ />
            <TrustSection />
            <CTASection />
            <Footer />
        </main>
    )
}
