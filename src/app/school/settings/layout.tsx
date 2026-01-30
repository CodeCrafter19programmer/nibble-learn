"use client"

import React from "react"
import { SettingsLayout } from "@/components/settings/SettingsLayout"
import { SettingsSidebar } from "@/components/settings/SettingsSidebar"
import { Building2, Users, Shield, CreditCard, BarChart } from "lucide-react"

const schoolItems = [
    { label: "Organization", href: "/school/settings/org", icon: Building2 },
    { label: "Roles & Permissions", href: "/school/settings/roles", icon: Users },
    { label: "Security & SSO", href: "/school/settings/security", icon: Shield },
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
