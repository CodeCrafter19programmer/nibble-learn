"use client"

import React from "react"
import { SettingsLayout } from "@/components/settings/SettingsLayout"
import { SettingsSidebar } from "@/components/settings/SettingsSidebar"
import { User, CreditCard, Bell, Link as LinkIcon, HelpCircle, Shield } from "lucide-react"

const teacherItems = [
    { label: "Account & Profile", href: "/app/settings/account", icon: User },
    { label: "Security", href: "/app/settings/security", icon: Shield },
    { label: "Billing & Plans", href: "/app/settings/billing", icon: CreditCard },
    { label: "Notifications", href: "/app/settings/notifications", icon: Bell },
    { label: "Help Center", href: "/app/settings/help", icon: HelpCircle },
]

export default function TeacherSettingsLayout({ children }: { children: React.ReactNode }) {
    return (
        <SettingsLayout
            sidebar={<SettingsSidebar items={teacherItems} variant="slate" />}
            variant="slate"
        >
            {children}
        </SettingsLayout>
    )
}
