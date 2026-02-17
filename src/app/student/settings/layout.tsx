"use client"

import React from "react"
import { SettingsLayout } from "@/components/settings/SettingsLayout"
import { SettingsSidebar } from "@/components/settings/SettingsSidebar"
import { User, Bell, Palette, Shield, HelpCircle, CreditCard } from "lucide-react"
import { useStudentTheme } from "@/components/student/StudentThemeContext"

const studentItems = [
    { label: "My Profile", href: "/student/settings/profile", icon: User },
    { label: "Security", href: "/student/settings/security", icon: Shield },
    { label: "Billing", href: "/student/settings/billing", icon: CreditCard },
    { label: "Notifications", href: "/student/settings/notifications", icon: Bell },
    { label: "Preferences", href: "/student/settings/preferences", icon: Palette },
    { label: "Privacy", href: "/student/settings/privacy", icon: Shield },
    { label: "Help", href: "/student/settings/help", icon: HelpCircle },
]

export default function StudentSettingsLayout({ children }: { children: React.ReactNode }) {
    // For student layout, we want to default to "glass" because of the background gradient in dark mode
    // But since "glass" is white/translucent, in light mode "default" (white bg) is better.
    // However, the Sidebar component's 'glass' variant was hardcoded to be responsive or one-way.
    // Let's use 'glass' and ensure SettingsSidebar handles it responsively or just stick to 'glass' if it looks good in light mode too.
    // Actually, looking at previous sidebar code, 'glass' variant was:
    // glass: "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl",

    // We should probably rely on the new responsive classes we added to SettingsSidebar ("glass" implies the specific look).
    // Let's stick with "glass" for student settings to match the student dashboard vibe, 
    // but we need to ensure it's legible in light mode too.

    return (
        <SettingsLayout
            sidebar={<SettingsSidebar items={studentItems} variant="glass" />}
            variant="glass"
        >
            {children}
        </SettingsLayout>
    )
}
