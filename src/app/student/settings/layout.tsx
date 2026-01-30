"use client"

import React from "react"
import { SettingsLayout } from "@/components/settings/SettingsLayout"
import { SettingsSidebar } from "@/components/settings/SettingsSidebar"
import { User, Bell, Palette, Shield, HelpCircle, CreditCard } from "lucide-react"
import { useStudentTheme } from "@/components/student/StudentThemeContext"

const studentItems = [
    { label: "My Profile", href: "/student/settings/profile", icon: User },
    { label: "Billing", href: "/student/settings/billing", icon: CreditCard },
    { label: "Notifications", href: "/student/settings/notifications", icon: Bell },
    { label: "Preferences", href: "/student/settings/preferences", icon: Palette },
    { label: "Privacy", href: "/student/settings/privacy", icon: Shield },
    { label: "Help", href: "/student/settings/help", icon: HelpCircle },
]

export default function StudentSettingsLayout({ children }: { children: React.ReactNode }) {
    const { theme } = useStudentTheme()
    const variant = theme === 'light' ? 'default' : 'glass'

    return (
        <SettingsLayout
            sidebar={<SettingsSidebar items={studentItems} variant={variant} />}
            variant={variant}
        >
            {children}
        </SettingsLayout>
    )
}
