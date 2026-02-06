"use client"

import React from "react"
import { SettingsLayout } from "@/components/settings/SettingsLayout"
import { SettingsSidebar } from "@/components/settings/SettingsSidebar"
import { Building2, CreditCard, BarChart } from "lucide-react"

const schoolItems = [
    { label: "Organization", href: "/school/settings/org", icon: Building2 },
    { label: "Billing & Licenses", href: "/school/settings/billing", icon: CreditCard },
    { label: "Reports", href: "/school/settings/reports", icon: BarChart },
]

export default function SchoolSettingsLayout({ children }: { children: React.ReactNode }) {
    return (
        <SettingsLayout
            sidebar={<SettingsSidebar items={schoolItems} variant="slate" />}
            variant="slate"
        >
            {children}
        </SettingsLayout>
    )
}
