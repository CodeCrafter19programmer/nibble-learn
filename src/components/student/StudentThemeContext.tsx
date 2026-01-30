"use client"

import React from "react"
import { useTheme } from "@/components/providers/ThemeContext"

// Re-export hook for backward compatibility
export const useStudentTheme = useTheme

// No-op provider since we use global provider now
export function StudentThemeProvider({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
